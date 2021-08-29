import React from 'react';
import { Window, WindowProps } from './Window';
import { Coordinates } from '@hakkero/util/types';
import { DndContext } from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import styled from '@emotion/styled';

import html0 from 'public/assets/win98/html-0.png';
import computer1 from 'public/assets/win98/computer_explorer-1.png';

type InternetExplorerProps = Omit<WindowProps, 'translateCoordinates'> & {
  coordinates: Coordinates;
};

const StyledWindow = styled(Window)`
  position: absolute;
  width: unset;
  overflow: hidden;

  .window {
    height: 100%;
  }
  .window-body {
    // 100% - padding - title bar padding - title bar height
    height: calc(100% - 4px - 6px - 14px - 20px);
    box-shadow: inset -1px -1px #dfdfdf, inset 1px 1px grey;
    margin: 2px 1px 2px 1px;
  }

  .title-bar-text {
    user-select: none;
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

interface TranslateState {
  translate: Coordinates;
  initialTranslate: Coordinates;
}

export const InternetExplorer = (props: InternetExplorerProps) => {
  const isSmall = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const defaultCoordinates: Coordinates = {
    x: props.coordinates.x,
    y: props.coordinates.y,
  };

  const [translate, setTranslate] = React.useState<TranslateState>({
    translate: defaultCoordinates,
    initialTranslate: defaultCoordinates,
  });

  React.useEffect(() => {
    if (isSmall) {
      setTranslate({
        translate: {
          x: 0,
          y: 0,
        },
        initialTranslate: {
          x: 0,
          y: 0,
        },
      });
    }
  }, [isSmall]);

  return (
    <DndContext
      modifiers={[restrictToWindowEdges]}
      onDragMove={({ delta }) => {
        setTranslate(({ initialTranslate }) => {
          return {
            initialTranslate,
            translate: {
              x: initialTranslate.x + delta.x,
              y: initialTranslate.y + delta.y,
            },
          };
        });
      }}
      onDragEnd={() => {
        setTranslate(({ translate }) => {
          return {
            translate,
            initialTranslate: translate,
          };
        });
      }}
    >
      <StyledWindow
        title={`${props.title} - Microsoft Internet Explorer`}
        id="home-window"
        translateCoordinates={translate.translate}
        statusBar={<StatusBarFields />}
      >
        {props.children}
      </StyledWindow>
    </DndContext>
  );
};
