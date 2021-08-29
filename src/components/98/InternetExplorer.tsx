import React from 'react';
import { Window, WindowProps } from './Window';
import { Coordinates, Dimensions } from '@hakkero/util/types';
import styled from '@emotion/styled';

import html0 from 'public/assets/win98/html-0.png';
import computer1 from 'public/assets/win98/computer_explorer-1.png';

import Image from 'next/image';

type InternetExplorerProps = WindowProps & {
  dimensions: Dimensions;
  coordinates: Coordinates;
};

const StyledWindow = styled(Window)<InternetExplorerProps>`
  position: absolute;
  top: ${props => props.coordinates.y}px;
  left: ${props => props.coordinates.x}px;
  width: unset;

  .window {
    min-width: 600px;
    min-height: 400px;
    width: 800px;
    height: 600px;
    resize: both;
    overflow: auto;
  }
  .window-body {
    // 100% - padding - title bar padding - title bar height
    height: calc(100% - 4px - 6px - 14px - 20px);
    box-shadow: inset -1px -1px #dfdfdf, inset 1px 1px grey;
    margin: 2px 1px 2px 1px;
  }

  .filler {
    max-width: 16px;
  }
  .status-bar {
    height: 20px;
    .status-bar-field {
      display: flex;
      align-content: center;
      height: 19px;
    }
    .status-bar-field:last-child {
      max-width: 120px;
    }
    .status-bar-icon {
      padding-right: 4px !important;
    }
    .text {
      align-content: center;
      align-self: center;
    }
  }
`;

const StatusBarFields = () => (
  <React.Fragment>
    <div className="status-bar-field">
      <span className="status-bar-icon">
        <Image src={html0} width={16} height={16} layout="fixed" />
      </span>
      <span className="text">Done</span>
    </div>
    <div className="status-bar-field filler"></div>
    <div className="status-bar-field filler"></div>
    <div className="status-bar-field">
      <span className="status-bar-icon">
        <Image src={computer1} width={16} height={16} layout="fixed" />
      </span>
      <span className="text">My Computer</span>
    </div>
  </React.Fragment>
);

export const InternetExplorer = (props: InternetExplorerProps) => {
  return (
    <StyledWindow
      title={`${props.title} - Microsoft Internet Explorer`}
      id="home-window"
      dimensions={props.dimensions}
      coordinates={props.coordinates}
      statusBar={<StatusBarFields />}
    >
      {props.children}
    </StyledWindow>
  );
};
