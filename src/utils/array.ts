export const arrayFirst = <T>(ary: Array<T>) =>
  ary.find((x) => x !== undefined);

export const reindex = <T>(ary: Array<T>) => ary.filter((val) => val);

export const renumber = reindex;
