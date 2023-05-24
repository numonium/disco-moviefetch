import throttle from 'lodash.throttle';
import { MouseEventHandler, createRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  MovieWithMediaType,
  TVWithMediaType,
  TrendingMediaType
} from 'tmdb-ts';

import { Logo } from '~components/atoms/Logo';
import Card, { CardType } from '~components/molecules/Card';
import Content from '~components/molecules/Content';
import { QueryBox } from '~components/molecules/QueryBox';
import RailItem from '~components/molecules/RailItem';
import Rail from '~components/organisms/Rail';

import { FontStyle } from 'src/styles/fonts/raleway';

import {
  CoordsType,
  DEFAULT_DEBOUNCE_DELAY,
  Keys,
  OptionalChildrenProps,
  TabbableNavDirections,
  arrayChunk,
  modWrap,
  tabbableElements
} from '~utils';
import { TMDBMediaType, TMDBTimeWindow, useTMDB } from '~utils/hooks';

import './index.css';
import * as Styles from './styles';

export const NUM_ROWS = 2;
export const ROW_LENGTH = 5;

/**
 * @NOTE -- while this is in `.env`, it creates a false-positive
 *  (i.e., test condition logs out as `false` but executes anyway)
 *  which defeats the purpose of having this flag
 *\/
  export const GRID_SCROLL =  process.env.REACT_APP_GRID_SCROLL ?? false;
 */
export const GRID_SCROLL = false;

/**
 * @NOTE -- wrap-around scrolling
 *  - this flag controls whether vertival position will wrap
 *    once focus reaches bottom of the page
 *\/
  export const WRAP_SCROLL = process.env.REACT_APP_WRAP_SCROLL ?? false;
 */
export const WRAP_SCROLL = false;

export type RowRefType<T = HTMLDivElement> = React.MutableRefObject<T>;

export const App = () => {
  const { tmdb } = useTMDB();

  const createGroup = () => {
    return createRef() as RowRefType;
  }

  const refMap: Array<RowRefType> = [
    createGroup(), // query box
    createGroup(), // row 1
    createGroup() // row 2
  ];

  // store length of each row
  const itemsMap = useRef<number[]>([]);

  // store x (horiz) position of each row, default to 0
  const rowPosMap = useRef(Array(refMap.length).fill(0));
  const [mediaType, setMediaType] = useState<TMDBMediaType>(TMDBMediaType.movie)

  const mediaTypeLabel = useMemo(() => (
    mediaType === TMDBMediaType.movie ? 'Movie' : 'TV Show'
  ),[mediaType])

  const [results, setResults] = useState<CardType[]>([]);
  const [resultChunks, setResultChunks] = useState<CardType[][]>([]);

  const [ready, setReady] = useState(false);
  const initialLoad = useRef(false);

  // list of items ... [[item, ..., item], [...]]
  const itemsRef = useRef<Array<NodeListOf<Element>>>([]);
  const coordsRef = useRef<CoordsType>({ x: 0, y: 0 });

  const nextDirection = ({
    keyCode,
    shiftKey
  }: {
    keyCode: number;
    shiftKey?: boolean;
  }) => {
    if ((!shiftKey && keyCode === Keys.tab) || keyCode === Keys.right) {
      return TabbableNavDirections.right;
    }

    if ((shiftKey && keyCode === Keys.tab) || keyCode === Keys.left) {
      return TabbableNavDirections.left;
    }

    if (keyCode === Keys.up) {
      return TabbableNavDirections.up;
    }

    if (keyCode === Keys.down) {
      return TabbableNavDirections.down;
    }
  };

  const globalKeyDown = useCallback((e: KeyboardEvent) => {
    const { x, y } = coordsRef.current;

    const dir = nextDirection({
      keyCode: e.keyCode,
      shiftKey: e.shiftKey
    });

    const numRows = itemsRef.current?.length || 0;

    const newCoords = {
      x,
      y
    };

    if (dir === TabbableNavDirections.down) {
      if(WRAP_SCROLL || (newCoords.y < numRows - 1)) {
        newCoords.y = newCoords.y + 1;
      }
    } else if (dir === TabbableNavDirections.up) {
      if(WRAP_SCROLL || (newCoords.y > 0)) {
        newCoords.y = newCoords.y - 1;
      }
    } else if (
      dir === TabbableNavDirections.left ||
      (e.keyCode === Keys.tab && e.shiftKey)
    ) {
      newCoords.x = newCoords.x - 1;
    } else if (dir === TabbableNavDirections.right || e.keyCode === Keys.tab) {
      newCoords.x = newCoords.x + 1;
    }

    newCoords.y = modWrap(newCoords.y, numRows);

    /**
     * @NOTE -- since rows may have different length,
     *  we need
     *\/
    newCoords.x = (
      newCoords.x >= itemsRef.current[newCoords.y].length
        ? itemsRef.current[newCoords.y].length - 1
        : modWrap(newCoords.x, itemsRef.current[newCoords.y].length)
    );*/

    /**
     * @NOTE -- save horiz position per row
     *  - if row changes, save prev horiz position
     *  - if same row, save current horiz position
     */
    rowPosMap.current[y] = (newCoords.y !== y ? x : newCoords.x)

    /**
     * @NOTE -- grid scrolling
     *  - if enabled, rails will focus as a 2D grid
     *    - i.e., current horiz position is preserved during
     *            vertical moves ([2,1] -> [2,2])
     *  - if disabled, horiz position will be saved per row
     *  - vertical moves will use save horiz position
     *    (e.g., [2,1] -> [3,2])
     *  - `disabled` corresponds to scrolling patterns of most streaming apps
     *  - `enabled` is a more logical grid scroll
     */
    if(GRID_SCROLL || (newCoords.y === y)) {
      newCoords.x = (
        WRAP_SCROLL && (newCoords.x >= itemsRef.current[newCoords.y].length)
          ? itemsRef.current[newCoords.y].length - 1
          : modWrap(newCoords.x, itemsRef.current[newCoords.y].length)
      );
      } else {
        newCoords.x = rowPosMap.current[newCoords.y];
      }

    coordsRef.current = { ...newCoords };

    const nextItem = itemsRef.current[newCoords.y][
      newCoords.x
    ] as HTMLAnchorElement;

    /**
     * @NOTE -- browser will auto-focus on `tab`
     *  - still manually maintain index to prevent skips
     */
    if (e.keyCode !== Keys.tab) {
      nextItem.focus();
    }

    return true;
  }, []);

  const handleKeyDown = throttle(
    globalKeyDown.bind(this),
    DEFAULT_DEBOUNCE_DELAY
  );

  const getTrending = useCallback(
    ({
      mediaType,
      timeWindow
    }: {
      mediaType: TrendingMediaType;
      timeWindow: TMDBTimeWindow;
    }) => {
      return tmdb.trending.trending(mediaType, timeWindow);
    },
    [tmdb.trending]
  );

  const handleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value as TMDBMediaType;

    if(value !== mediaType) {
      setMediaType(target.value as TMDBMediaType);
      setReady(false);
    }
  }

  useEffect(() => {
    const query = async (mediaType: TrendingMediaType) => {
      try {
        const data = await getTrending({
          mediaType: mediaType,
          timeWindow: TMDBTimeWindow.day
        });

        const res = data?.results;

        if (!res || !res.length) {
          throw new Error('** api/tmdb // no results');
        }

        const _results = mediaType === TMDBMediaType.movie
          ? (res as MovieWithMediaType[])
          : (res as TVWithMediaType[])

        const _chunks = arrayChunk<MovieWithMediaType | TVWithMediaType>(_results, ROW_LENGTH).slice(0, NUM_ROWS);

        setResults(_results);
        setResultChunks(_chunks);
        setReady(true);

        console.warn('** !!', {
          _chunks,
          resultChunks,
          _results,
          results,
          refMap
        })

        return data;
      } catch (err) {
        console.error('** fetch', { mediaType, err });
        throw new Error('** BAD FETCH :(');
      }
    };

    if(!ready) {
      query(mediaType).then((data) => {
        setReady(true);
      });
    }

    return () => {
      console.warn('** destroy', {...refMap})
    }
  }, [mediaType, results, ready]);

  /**
   * @NOTE -- data mapping
   *  - create grid of tabbable elements
   */
  useEffect(() => {
    if (ready) {
      if (refMap.length) {
        for(let i = 0; i < refMap.length; i++) {
          const val = refMap[i];

          /* get tabbable elements from row */
          itemsRef.current[i] = val.current.querySelectorAll(tabbableElements);

          // store length of row to allow for safe 2d nav
          itemsMap.current[i] = itemsRef.current[i].length;
        }

        console.warn('** refs/item', {
          itemsMap,
          itemsRef
        });

        window.addEventListener('keydown', handleKeyDown);

        setTimeout(() => {
          if(!initialLoad.current) {
            const next = itemsRef.current[0][0] as HTMLAnchorElement;

            console.warn('** refs/next', ready, next);
            next?.focus();
            initialLoad.current = true;
          }
        }, 0);
      }

      return () => {
        // always clean up our mess! :)
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, globalKeyDown]);

  const renderItems = useCallback(
    ({
      data,
      children,
      max = 5
    }: OptionalChildrenProps & {
      data: CardType[];
      max?: number;
    }) => {
      const _data = max ? data.slice(0, max) : data;

      // the refs in `refsMap` should sequentally equate to the render order
      const ret = _data.map((item: CardType, i: number) => (
        <RailItem key={i}>
          <Card data={item} />
          {children}
        </RailItem>
      ));

      return ret;
    },
    []
  );

  return (
    <Content className="App">
      <FontStyle />
      <Styles.StyledHeader>
        <Logo />
      </Styles.StyledHeader>
      <main>
        <section>
          <QueryBox handleSelect={handleSelect} ref={refMap[0]} />
          <div className="results">
            {ready && results.length ? (
              <>
                <h2>Trending {mediaTypeLabel}s</h2>
                <Rail data-row ref={refMap[1]}>
                  {
                    renderItems({
                      data: resultChunks[0]
                    })
                  }
                </Rail>
                <Rail data-row ref={refMap[2]}>
                  {
                    renderItems({
                      data: resultChunks[1]
                    })
                  }
                </Rail>
              </>
            ) : ready ? (
              <strong>No {mediaTypeLabel} results!</strong>
            ) : (
              <h2>Loading Trending Movies&hellip;</h2>
            )}
          </div>
        </section>
      </main>
    </Content>
  );
};

export default App;
