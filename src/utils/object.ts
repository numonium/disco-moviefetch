import { isString, random } from "~utils";

export const cloneWithDefault = (obj: Object, defaultVal: any) => {
  const ret: Record<any, any> = {};

  for(const [key] of Object.entries(obj)) {
    ret[key] = defaultVal;
  }

  return ret;
}

export const enumKeys = <O extends object, K extends keyof O = keyof O>(obj: O): K[] => (
  Object.keys(obj).filter(k => Number.isNaN(+k)) as K[]
);

export const enumValues = <O extends object, K extends O = O>(obj: O): K[] => (
  Object.values(obj).filter(k => Number.isNaN(+k)) as K[]
);

export const length = (obj: Object) => (
  Object.keys(obj).length
);

export const firstKey = <T extends object>(obj: T) => {
  const keys = Object.keys(obj);

  return keys.shift() as keyof T;
};

export const first = <T extends object>(obj: T) => {
  const keys: Array<any> = Object.keys(obj);

  return (keys.length && obj[keys.shift()]);
};

export const jsonClone = (obj: Object) => (
  JSON.parse(JSON.stringify(obj))
);

export const randomKey = (obj: Object) => {
  const keys = Object.keys(obj);

  if(!(keys && keys.length)) {
    return false;
  }

  return random(0, keys.length - 1);
}

export const randomItem = (obj: Record<any, any>) => {
  const key = randomKey(obj);

  if(key !== false) {
    return obj[key];
  }

  return key;
}

export const rectClone = (rect: DOMRect, overrides?: Partial<DOMRect>) => {
  const _rect = (!!overrides ? {
    ...jsonClone(rect),
    ...overrides
  }: rect);

  return (
    rectValid(_rect)
      ? DOMRect.fromRect(_rect)
      : undefined
  );
}

export const rectValid = (rect?: DOMRect) => {
  return (
    rect !== undefined &&
    "x" in rect &&
    rect["x"] !== undefined
  );
}

export const restucture = (obj: Object) => {
  const {
    ...rest
  } = obj;

  return rest;
}

export const isObject = (o: Object) => (
  o === Object(o) && !Array.isArray(o) && typeof o !== 'function'
);

export const toCamelCase = (s) => (
  s.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  })
);

export const keysToCamel = (o) => {
  if (isObject(o)) {
    const n = {};

    Object.keys(o)
      .forEach((k) => {
        n[toCamelCase(k)] = keysToCamel(o[k]);
      });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return keysToCamel(i);
    });
  }

  return o;
};

export const replaceTokens = <T, >(obj, replaceMap: Record<keyof typeof obj, T>) => {
  const ret = {};

  for(const [key, val] of Object.entries(obj)) {
    if(isString(val)) {
      for(const [replaceKey, replaceVal] of Object.entries(replaceMap)) {
        ret[key] = (val as string).replace(replaceKey, replaceVal.toString());
      }
    }
  }

  return ret;
}

export const reverseEnum = <T, >(obj: T, value) => {
  const keys = Object.keys(obj).filter(x => obj[x] == value);

  return keys.length > 0 ? keys[0] : null;
}
