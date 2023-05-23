// export const bounds = (num, start, end) => {
//   if(start === end) {
//     return start;
//   }

//   let _start = start, _end = end;

//   if(end < start) {
//     _start = end;
//     _end = start;
//   }

//   if(num < _start) {
//     return _start;
//   }

//   if(num > _end) {
//     return _end;
//   }

//   return num;
// }

// export const isNull = (x?: number) => (
//   (x === null) ||
//   (typeof x === 'undefined') ||
//   isNaN(x)
// );

export const modWrap = (x: number, max: number) => ((x % max) + max) % max;

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

// export const range = (start: number, end: number) => {
//   if(end == null) {
//       end = start;
//       start = 0;
//   }

//   // return Math.random() * (end - start) + start;
//   return random(start, end);
// };

/**
 * @function strPercent
 * @description calculates a "string"-based percentage of a total
 * @param str percentage (string with "%" sign)
 * @param total
 * @returns (float) percentage of `total`
 *\/
export const strPercent = (str: string, total: number) => (
  (parseFloat(str) / 100) * total
);
*/
