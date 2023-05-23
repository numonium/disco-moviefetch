import { ReactNode, type HTMLAttributes } from 'react';
import { ClassNameProps, DynamicTagNameProps } from '~utils';

export interface RailItemProps
  extends HTMLAttributes<HTMLElement>,
    ClassNameProps,
    DynamicTagNameProps {
  children: ReactNode;
}

export default RailItemProps;
