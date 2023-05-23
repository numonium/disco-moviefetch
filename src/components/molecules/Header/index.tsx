import React from 'react';
import { Tags } from '~utils';
import * as Styles from './styles';

export type HeaderProps = {
  children: React.ReactNode;
  tag?: Tags;
};

export const Header = ({ children, tag = Tags.div }: HeaderProps) => (
  <Styles.Header as={tag}>{children}</Styles.Header>
);

export default Header;
