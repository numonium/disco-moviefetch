import throttle from 'lodash.throttle';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  MovieWithMediaType,
  TVWithMediaType,
  TrendingMediaType
} from 'tmdb-ts';

import { Logo } from '~components/atoms/Logo';
import Card, { CardType } from '~components/molecules/Card';
import Content from '~components/molecules/Content';
import RailItem from '~components/molecules/RailItem';
import Rail from '~components/organisms/Rail';

import { FontStyle } from 'src/styles/fonts/raleway';

import {
  CoordsType,
  DEFAULT_DEBOUNCE_DELAY,
  Keys,
  OptionalChildrenProps,
  TabbableNavDirections,
  modWrap,
  tabbableElements
} from '~utils';
import { TMDBMediaType, TMDBTimeWindow, useTMDB } from '~utils/hooks';

import './index.css';
import * as Styles from './styles';

export const App = () => {
  const { tmdb } = useTMDB();

  const [movieResults, setMovieResults] = useState<CardType[]>([]);
  const [tvResults, setTVResults] = useState<CardType[]>([]);

  const [movieReady, setMovieReady] = useState(false);
  const [tvReady, setTVReady] = useState(false);

  // list of items ... [[item, ..., item], [...]]
  const itemsRef = useRef<Array<NodeListOf<Element>>>([]);

  // list of rows ... [row, row]
  const rowsRef = useRef<NodeListOf<Element>>();
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const coordsRef = useRef<CoordsType>({ x: 0, y: 0 });

  const setReady = (mediaType: TrendingMediaType, value: boolean) => {
    if (mediaType === TMDBMediaType.movie) {
      setMovieReady(value);
    }
    if (mediaType === TMDBMediaType.tv) {
      setTVReady(value);
    }
  };

  const setResults = (
    mediaType: TrendingMediaType,
    value: MovieWithMediaType[] | TVWithMediaType[]
  ) => {
    if (mediaType === TMDBMediaType.movie) {
      setMovieResults(value);
    }
    if (mediaType === TMDBMediaType.tv) {
      setTVResults(value);
    }
  };

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
    const numItems = itemsRef.current[y]?.length || 0;

    const newCoords = {
      x,
      y
    };

    if (dir === TabbableNavDirections.up) {
      newCoords.y = newCoords.y + 1;
    } else if (dir === TabbableNavDirections.down) {
      newCoords.y = newCoords.y - 1;
    } else if (
      dir === TabbableNavDirections.left ||
      (e.keyCode === Keys.tab && e.shiftKey)
    ) {
      newCoords.x = newCoords.x - 1;
    } else if (dir === TabbableNavDirections.right || e.keyCode === Keys.tab) {
      newCoords.x = newCoords.x + 1;
    }

    newCoords.x = modWrap(newCoords.x, numItems);
    newCoords.y = modWrap(newCoords.y, numRows);

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

        setResults(
          mediaType,
          mediaType === TMDBMediaType.movie
            ? (res as MovieWithMediaType[])
            : (res as TVWithMediaType[])
        );
        setReady(mediaType, true);

        return data;
      } catch (err) {
        console.error('** fetch', { mediaType, err });
        throw new Error('** BAD FETCH :(');
      }
    };

    if (!movieReady) {
      setReady(TMDBMediaType.movie, false);
      query(TMDBMediaType.movie).then((data) => {
        setReady(TMDBMediaType.movie, true);
      });
    }

    if (!tvReady) {
      setReady(TMDBMediaType.tv, false);
      query(TMDBMediaType.tv).then((data) => {
        setReady(TMDBMediaType.movie, true);
      });
    }
  }, [getTrending, movieReady, tvReady]);

  /**
   * @NOTE -- don't use dom
   *  - we shouldn't directly interface with the DOM here,
   *    rather, abstract elements to refs + react components
   *  - for brevity (time limit) and to avoid further complications,
   *    we're "hacking" the dom here to quickly determine
   *    the next focusable element
   */
  useEffect(() => {
    if (movieReady && tvReady) {
      if (resultsRef.current) {
        const rows = resultsRef.current.querySelectorAll('[data-row]');

        if (!(rows && rows.length)) {
          throw new Error('** no rows available');
        }

        rowsRef.current = rows;

        rows.forEach((ele, i) => {
          itemsRef.current[i] = rows[i].querySelectorAll(tabbableElements);
        });

        window.addEventListener('keydown', handleKeyDown);

        setTimeout(() => {
          const next = itemsRef.current[0][0] as HTMLAnchorElement;
          next?.focus();
        }, 0);
      }

      return () => {
        // always clean up our mess! :)
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleKeyDown, movieReady, tvReady, globalKeyDown]);

  const renderItems = useCallback(
    ({
      data,
      children
    }: OptionalChildrenProps & {
      data: CardType[];
    }) => {
      const ret = data.map((item: CardType, i: number) => (
        <RailItem key={i}>
          <Card data={item} />
          {children}
        </RailItem>
      ));

      return <Rail data-row>{ret}</Rail>;
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
          <div className="results" ref={resultsRef}>
            {movieReady && movieResults.length ? (
              <>
                <h2>Trending Movies</h2>
                {renderItems({
                  data: movieResults
                })}
              </>
            ) : movieReady ? (
              <strong>No movie results!</strong>
            ) : (
              <h2>Loading Trending Movies&hellip;</h2>
            )}
            {tvReady && tvResults.length ? (
              <>
                <h2>Trending TV Shows</h2>
                {renderItems({
                  data: tvResults
                })}
              </>
            ) : tvReady ? (
              <strong>No TV results!</strong>
            ) : (
              <h2>Loading Trending TV&hellip;</h2>
            )}
          </div>
        </section>
      </main>
    </Content>
  );
};

export default App;
