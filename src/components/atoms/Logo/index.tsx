import { Tags } from '~utils';
import * as Styles from './styles';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  className,
  children,
  tag = Tags.h1,
  ...rest
}) => (
  <Styles.StyledLogo {...rest} as={tag}>
    <img src="/img/logo.png" alt="MovieFETCH" height="100%" />
    {children}
  </Styles.StyledLogo>
);
