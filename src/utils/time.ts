export const getYear = (d = new Date()) => {
  const year = d.getFullYear().toString().split("");
  year[1] = "k";

  return year.join("");
}

export const durationStamp = (secs: number) => (
  new Date(secs * 1000).toISOString().substring(11, 8)
);
