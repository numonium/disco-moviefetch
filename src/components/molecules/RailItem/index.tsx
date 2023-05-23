import { ForwardedRef, forwardRef } from 'react';
import { Tags } from '~utils';
import * as Styles from './styles';
import { RailItemProps } from './types';

export * from './types';

export const RailItem: React.FC<RailItemProps> = forwardRef(
  ({ children, tag = Tags.li }, ref: ForwardedRef<HTMLLIElement>) => (
    <Styles.StyledRailItem as={tag} ref={ref}>
      {children}
    </Styles.StyledRailItem>
  )
);

export default RailItem;
