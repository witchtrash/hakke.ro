import React from 'react';
import { Global, css } from '@emotion/react';
import 'normalize.css';
import styled from '@emotion/styled';

interface LayoutProps {
  children: React.ReactNode;
}

const style = css`
  body {
    background-color: #fefefe;
    min-height: 100vh;
  }
`;

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  align-content: center;
  justify-content: center;
`;

export const Layout = (props: LayoutProps) => (
  <React.Fragment>
    <Global styles={style} />
    <Main>{props.children}</Main>
  </React.Fragment>
);
