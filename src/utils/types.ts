import React, { MouseEventHandler } from "react";
import { Tags } from "./meta";

// from https://medium.com/shyftplan-techblog/typescript-advanced-types-199ff1f3e3e8
export type Diff<T extends string | number | symbol, U extends string> = (
  { [P in T]: P }
  & { [P in U]: never }
  & { [x: string]: never }
  & { [x: number]: never }
)[T];

// Taken from https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type/50375286#50375286
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// These are all possible Element types that can be produced from our set of Tags
export type Element<
  T extends keyof HTMLElementTagNameMap
> = UnionToIntersection<HTMLElementTagNameMap[T]>;

export type Ref<T extends keyof HTMLElementTagNameMap> = React.MutableRefObject<
  Element<T>
>;

export type RefMap<T> = {
  [U in keyof T]: React.MutableRefObject<T[U]>;
};

// export type RefRecord<T, U = (string | number | symbol)> = Record<U, React.MutableRefObject<T>>;
export type RefRecord<T extends (string | number | symbol), U> = Record<T, React.MutableRefObject<U>>;

export type SetRefWrapper<T, U = void> = (newRefValue: T) => U;

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetStateReturnType<T> = ReturnType<SetStateType<T>>;
export type SetStateWrapper<T> = (newStateValue: T) => SetStateReturnType<T>;

export type MouseCoordsType = {
  x: number;
  y: number;
}

export type ImageType = Element<Tags.img>;
export type PartialImageType = Partial<ImageType>;

export enum Directions {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

export enum CardinalDirections {
  north = "north",
  south = "south",
  east = "east",
  west = "west",
  northEast = "north-east",
  northWest = "north-west",
  southEast = "south-east",
  southWest = "south-west",
}

export type ClassNameProps = {
  className?: string;
}

export type OptionalChildrenProps = {
  children?: React.ReactNode;
}

export type OptionalSelectedProps = {
  selected?: boolean;
}

export type OptionalTransientSelectedProps = {
  $selected?: OptionalSelectedProps["selected"];
}

export type _PartialRecord<T, U> = {
  [K in keyof T]?: U;
}

export type PartialRecord<T, U> = _PartialRecord<T, Partial<U>>;

export type HTMLAttributeProps<T extends keyof HTMLElementTagNameMap = Tags.a> = React.HTMLAttributes<Element<T>>;

export const baseFunction = <T, >() => (_: T) => {};
