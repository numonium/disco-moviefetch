import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import debounce from "lodash.debounce";

import {
  DEFAULT_DEBOUNCE_DELAY
} from "./const";

export type Size = {
  width?: number;
  height?: number;
}

export const isBrowser = () => typeof window !== "undefined";
export const isServer = () => typeof window === "undefined";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize as Size;
};

export const getWindowSize = (w = window) => ({
  width: w.innerWidth,
  height: w.innerHeight
});

export const useWindowResize = (
  callback: () => any,
  delay = DEFAULT_DEBOUNCE_DELAY
) => {
  const sizeRef = useRef<Size>(getWindowSize());

  const handleResize = () => {
    const size = getWindowSize();

    console.warn('** hooks // window-resize', {
      current: sizeRef.current,
      size
    });

    sizeRef.current = size;
    callback();
  };

  const handler = (
    delay === 0
      ? handleResize
      : debounce(handleResize, delay)
  );

  useLayoutEffect(() => {
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  }, []);

  return sizeRef.current;
}
