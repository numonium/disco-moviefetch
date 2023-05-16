import { truncate } from "./str";

export const extension = (path: string) => (
  path.substring(path.lastIndexOf('.')+1, path.length) || ""
);

export const safeExtension = (path: string, allowedExtensions = []) => {
  const _path = path.trim();
  let valid = (
    _path && _path.length
  )
  if(!allowedExtensions.length) {
    return _path;
  }
}

/**
 * @NOTE -- adapted from @parshap/node-sanitize-filename
 */
// const illegalRe = /[\/\?<>\\:\*\|"]/g;
// const controlRe = /[\x00-\x1f\x80-\x9f]/g;
// const reservedRe = /^\.+$/;
// const windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
// const windowsTrailingRe = /[\. ]+$/;

export const FileSpecialChars = {
  illegal: /[\/\?<>\\:\*\|"]/g,
  control: /[\x00-\x1f\x80-\x9f]/g,
  reserved: /^\.+$/,
  windowsReserved: /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,
  windowsTrailing: /[\. ]+$/,
}

export type FileSpecialChars = typeof FileSpecialChars;

export const sanitize = (input, replacement, byteLength = 255) => {
  if (typeof input !== 'string') {
    throw new Error('file[sanitize] path must be string');
  }

  let sanitized = input.trim();

  if(!sanitized.length) {
    throw new Error("file[sanitize] empty path");
  }

  Object.values(FileSpecialChars).map(pattern => {
    sanitized = sanitized.replace(pattern, replacement)
  });

  // const sanitized = input
  //   .replace(illegalRe, replacement)
  //   .replace(controlRe, replacement)
  //   .replace(reservedRe, replacement)
  //   .replace(windowsReservedRe, replacement)
  //   .replace(windowsTrailingRe, replacement);

  return truncate(sanitized, byteLength);
}
