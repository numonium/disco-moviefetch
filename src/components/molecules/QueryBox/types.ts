import { MouseEventHandler } from 'react';
import { ClassNameProps, OptionalChildrenProps } from '~utils';

export interface QueryBoxProps extends ClassNameProps, OptionalChildrenProps {
  handleSelect: MouseEventHandler<HTMLButtonElement>;
}
