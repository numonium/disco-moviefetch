import { type HTMLAttributes } from 'react';
import { MovieWithMediaType, TVWithMediaType } from 'tmdb-ts';
import {
  ClassNameProps,
  DynamicTagNameProps,
  OptionalChildrenProps
} from '~utils';

export type CardType = MovieWithMediaType | TVWithMediaType;

export interface CardProps
  extends HTMLAttributes<HTMLElement>,
    ClassNameProps,
    DynamicTagNameProps,
    OptionalChildrenProps {
  data: CardType;
}

export default CardProps;
