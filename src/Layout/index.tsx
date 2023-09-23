import React from 'react';
import logo from '../logo.png';
import { StyledMain } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledMain>
      <img src={logo} alt='' width={146} height={38}></img>
      {children}
    </StyledMain>
  );
};

export { Layout };
