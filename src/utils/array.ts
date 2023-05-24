export const arrayChunk = <T>(ary: Array<T>, chunkSize = 5) => {
  const chunks = [];
  for (let i = 0; i < ary.length; i += chunkSize) {
    chunks.push(ary.slice(i, i + chunkSize));
    // do whatever
  }
  return chunks;
}

export const arrayFirst = <T>(ary: Array<T>) =>
  ary.find((x) => x !== undefined);

export const reindex = <T>(ary: Array<T>) => ary.filter((val) => val);

export const renumber = reindex;
