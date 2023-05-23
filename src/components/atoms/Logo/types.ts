import { HTMLAttributes } from 'react';
import {
  ClassNameProps,
  DynamicTagNameProps,
  OptionalChildrenProps
} from '~utils';

export interface LogoProps
  extends HTMLAttributes<HTMLElement>,
    ClassNameProps,
    OptionalChildrenProps,
    DynamicTagNameProps {}
