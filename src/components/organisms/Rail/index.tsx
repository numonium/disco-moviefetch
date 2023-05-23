import { ForwardedRef } from 'react';
import { Tags } from '~utils';
import { RailProps } from './types';

import { forwardRef } from 'react';
import * as Styles from './styles';

export * from './types';

export const Rail = forwardRef(
  (
    { children, tag = Tags.div, ...rest }: RailProps,
    ref?: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Styles.Rail as={tag} ref={ref} {...rest}>
        <Styles.RailItems>{children}</Styles.RailItems>
      </Styles.Rail>
    );
  }
);

export default Rail;
