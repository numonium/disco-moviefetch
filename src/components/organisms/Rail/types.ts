import { ReactNode, type HTMLAttributes } from 'react';
import { ClassNameProps, DynamicTagNameProps } from '~utils';

export interface RailProps
  extends HTMLAttributes<HTMLElement>,
    ClassNameProps,
    DynamicTagNameProps {
  children: ReactNode;
}

export default RailProps;
