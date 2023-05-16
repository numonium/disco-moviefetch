export enum KeyChars {
  check = "✓",
  command = "⌘",
  // arrowRight = "▸",
  arrowRight = "▶",
  delete = "⌫"
};

export enum Keys {
  // fn  = null,
  alt  = 18,
  alt_r  = 17,
  alt_right  = 17,
  apple  = 224,
  backspace  = 8,
  bcksp  = 8,
  cmd  = 224,
  command  = 224,
  ctrl  = 17,
  ctrl_r  = 18,
  ctrl_right  = 18,
  del  = 46,
  down  = 40,
  enter  = 13,
  esc  = 27,
  f1 = 112,
  f10 = 121,
  f11 = 122,
  f12 = 123,
  f2 = 113,
  f3 = 114,
  f4 = 115,
  f5 = 116,
  f6 = 117,
  f7 = 118,
  f8 = 119,
  f9 = 120,
  left  = 37,
  mac  = 224,
  meta  = 224,
  right  = 39,
  shift  = 16,
  space  = 32,
  tab = 9,
  up  = 38,
  win  = 224,
}

// export const keyInList = ({
//   keyCode,
//   list = []
// }) => {
export const keyInList = (
  keyCode,
  list = []
) => {
  return list.includes(keyCode);
}
