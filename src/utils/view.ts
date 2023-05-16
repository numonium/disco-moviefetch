import { ClassNameProps, OptionalChildrenProps } from "./types";

export enum PatternUnits {
  objectBoundingBox = "objectBoundingBox",
  userSpaceOnUse = "userSpaceOnUse"
};

export type PatternProps = ClassNameProps & {
  height?: string | number;
  id: string;
  imageClassName?: ClassNameProps["className"];
  patternTransform?: string;
  patternUnits?: PatternUnits;
  preserveAspectRatio?: string;
  src?: string;
  width?: string | number;
  wrap?: boolean; // wrap with `<defs>` element
};

export enum PixelRatios {
  desktop = 1,
  retina = 2,
  mobile = 3
};

export enum View {
  default,
  left,
  middle,
  right,
  top,
  center,
  bottom
};

export type Viewbox = {
  x?: number;
  y?: number;
  width?: number | string;
  height?: number | string;
}

export type ViewProps = Viewbox & ClassNameProps & OptionalChildrenProps & {
  maxWidth?: string | number;
  minWidth?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  preserveAspectRatio?: string;
  view?: View;
  viewX?: Viewbox["x"];
  viewY?: Viewbox["y"];
  viewWidth?: Viewbox["width"];
  viewHeight?: Viewbox["height"];
};

export enum ViewScale {
  // default = "62.5%",
  default = "93.75%",
  mobile = "62.5%",
  mobileScale = 1.5
};
