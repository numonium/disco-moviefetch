import React, { Ref, useRef, useState } from "react";
import { cloneWithDefault, length } from "~utils/object";

export * from "./animate";
export * from "./mouse";

export const useShallowDeps = <T, >({
  depsMap,
  onLoad
}: {
  depsMap: Record<string, React.MutableRefObject<T>>;
  onLoad?: () => {}
}) => {
  const expected = length(depsMap);
  const loaded = useRef(0);
  const [ready, setReady] = useState(!expected);

  const depsLoaded = {};
  const depsCallback = {};

  const updateRef = <T, >(
    _ref: React.MutableRefObject<T>,
    key: keyof typeof depsMap
  ) => (ele: T) => {
    if(ele) {
      _ref.current = ele;

      if(!depsLoaded[key]) {
        depsLoaded[key] = true;
        loaded.current++;

        console.warn('** use-shallow-deps // update-ref', {
          ele,
          ref: _ref.current,
          loaded: loaded.current,
          expected
        });

        if(loaded.current === expected && !ready) {
          console.warn('** use-shallow-deps // update-ref -> ready!', {
            ready
          });
          setReady(true);
          onLoad?.();
        }
      }
    }
  };

  for(const [key, val] of Object.entries(depsMap)) {
    depsLoaded[key] = false;
    depsCallback[key] = updateRef(val, key);
  };

  return {
    expected,
    loaded,
    ready,
    depsLoaded,
    depsCallback
  };
}
