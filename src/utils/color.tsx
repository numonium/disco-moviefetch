import randomcolor from "randomcolor";

export const RANDOM_COLOR_OPTIONS = {
  alpha: 0.26,
  format: "hsla",
  hue: "random",
  luminosity: "bright",
};

export const randomColor = ({
  ...args
} = {
  ...RANDOM_COLOR_OPTIONS
}) => {
  const {
    alpha = RANDOM_COLOR_OPTIONS.alpha,
    format = RANDOM_COLOR_OPTIONS.format,
    hue = RANDOM_COLOR_OPTIONS.hue,
    luminosity = RANDOM_COLOR_OPTIONS.luminosity,
  } = args;

  return randomcolor({
    ...args,
    alpha,
    format,
    hue,
    luminosity,
  });
}
