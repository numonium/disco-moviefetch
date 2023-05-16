import {v4 as uuid} from "uuid";

export const isString = (str: any) => (
  typeof str === "string" ||
  str instanceof String
);

export const makeUUID = uuid;

export const ucwords = (str: string) => (' '+str).replace(/ [\w]/g, a => a.toLocaleUpperCase()).trim();

/**
 * @NOTE -- adapted from @parshap/truncate-utf8-bytes
 */
export const isHighSurrogate = (codePoint: number) => (
  codePoint >= 0xd800 && codePoint <= 0xdbff
);

export const isLowSurrogate = (codePoint: number) => (
  codePoint >= 0xdc00 && codePoint <= 0xdfff
);

// Truncate string by size in bytes
export const truncate = (
  string: string,
  byteLength: number,
  getLength = Buffer.byteLength.bind(Buffer)
) => {
  if (typeof string !== "string") {
    throw new Error("Input must be string");
  }

  const charLength = string.length;
  let curByteLength = 0, codePoint, segment;

  for (let i = 0; i < charLength; i += 1) {
    codePoint = string.charCodeAt(i);
    segment = string[i];

    if (
      isHighSurrogate(codePoint) &&
      isLowSurrogate(string.charCodeAt(i + 1))
    ) {
      i += 1;
      segment += string[i];
    }

    curByteLength += getLength(segment);

    if (curByteLength === byteLength) {
      return string.slice(0, i + 1);
    }
    else if (curByteLength > byteLength) {
      return string.slice(0, i - segment.length + 1);
    }
  }

  return string;
};
