import { ClassNameProps, OptionalChildrenProps } from '~utils';
import * as Styles from './styles';

export interface ContentProps extends ClassNameProps, OptionalChildrenProps {}

export const Content: React.FC<ContentProps> = ({ className, children }) => (
  <Styles.ContentWrapper className={className}>
    {children}
  </Styles.ContentWrapper>
);

export default Content;
