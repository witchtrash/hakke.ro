import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalized from 'emotion-normalize';

export const Reset = () => (
  <Global
    styles={css`
      ${emotionNormalized};
      body,
      html,
      #__next {
        min-height: 100vh;
        height: 100%;
      }
      div {
        box-sizing: border-box;
      }
    `}
  />
);
