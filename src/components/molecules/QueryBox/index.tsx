import { MouseEventHandler, forwardRef, useState } from "react";
import { TMDBMediaType } from "~utils/hooks";
import * as Styles from "./styles";
import { QueryBoxProps } from "./types";

export * from "./types";

export const QueryBox = forwardRef<HTMLDivElement, QueryBoxProps>(({
  className,
  children,
  handleSelect
},
ref) => {
  const [selectedMediaType, setSelectedMediaType] = useState(TMDBMediaType.movie);

  const selectMediaType: MouseEventHandler<HTMLButtonElement> = (e) => {
    const value = (e.target as HTMLButtonElement).value as TMDBMediaType;

    setSelectedMediaType(value);

    handleSelect(e);
  }

  return (
    <Styles.QueryBox className={className} data-row ref={ref}>
      <div data-row>
      <Styles.QueryButton
          value={TMDBMediaType.movie}
          onClick={selectMediaType}
          $selected={selectedMediaType === TMDBMediaType.movie}
        >
          Trending Movies
         </Styles.QueryButton>
        <Styles.QueryButton
          value={TMDBMediaType.tv}
          onClick={selectMediaType}
          $selected={selectedMediaType === TMDBMediaType.tv}
        >
          Trending TV Shows
        </Styles.QueryButton>
      </div>
      {children}
    </Styles.QueryBox>
  )
});

export default QueryBox;
