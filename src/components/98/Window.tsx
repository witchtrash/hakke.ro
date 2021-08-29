import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Coordinates } from '@hakkero/util/types';
import { Resizable } from 're-resizable';
import { useWindowSize } from '@hakkero/hooks';
import { useMediaQuery } from 'react-responsive';

export type WindowProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  id: string;
  translateCoordinates: Coordinates;
  body?: React.ReactNode;
  statusBar?: React.ReactNode;
  noPadding?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
};
export const Window = ({
  title,
  id,
  translateCoordinates,
  statusBar,
  onMinimize,
  onMaximize,
  onClose,
  noPadding,
  children,
  ...rest
}: WindowProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });
  const windowSize = useWindowSize();
  const isSmall = useMediaQuery({ query: '(max-width: 600px)' });
  const isLarge = useMediaQuery({ query: '(min-width: 1920px)' });

  const getMaxWidth = React.useCallback(() => {
    return windowSize.width - translateCoordinates.x;
  }, [windowSize.width, translateCoordinates.x]);

  const getMaxHeight = React.useCallback(() => {
    return windowSize.height - translateCoordinates.y;
  }, [windowSize.height, translateCoordinates.y]);

  const [width, setWidth] = React.useState(800);
  const [height, setHeight] = React.useState(600);

  React.useEffect(() => {
    if (isSmall) {
      setWidth(windowSize.width);
      setHeight(windowSize.height);
    }
    if (isLarge) {
      setWidth(1600);
      setHeight(900);
    }
  }, [isSmall, isLarge, windowSize]);

  const style = {
    transform: `translate3d(${translateCoordinates.x}px, ${translateCoordinates.y}px, 0)`,
  };

  return (
    <div {...rest} ref={setNodeRef} {...attributes} style={style}>
      <Resizable
        size={{
          width,
          height,
        }}
        onResizeStop={(e, direction, ref, d) => {
          setHeight(height + d.height);
          setWidth(width + d.width);
        }}
        minHeight={300}
        minWidth={300}
        maxHeight={getMaxHeight()}
        maxWidth={getMaxWidth()}
      >
        <div className="window">
          <div className="title-bar" {...listeners}>
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
              <button onClick={onMinimize} aria-label="Minimize"></button>
              <button onClick={onMaximize} aria-label="Maximize"></button>
              <button onClick={onClose} aria-label="Close"></button>
            </div>
          </div>
          {children ? (
            <div className={!noPadding ? `window-body` : null}>{children}</div>
          ) : null}
          {statusBar ? <div className="status-bar">{statusBar}</div> : null}
        </div>
      </Resizable>
    </div>
  );
};
