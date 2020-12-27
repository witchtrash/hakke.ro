import React from 'react';
import { Global, css } from '@emotion/react';
import 'normalize.css';
import styled from '@emotion/styled';

interface LayoutProps {
  children: React.ReactNode;
}

const style = css`
  body {
    background-color: #000;
    min-height: 100vh;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18, 20px [col]);
  grid-template-rows: repeat(auto-fit, 20px);
  height: fit-content;
  align-self: center;
`;
