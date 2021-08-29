import React from 'react';

type WindowProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  body?: React.ReactNode;
  statusBar?: React.ReactNode;
  noPadding?: boolean;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
};
export const Window = ({
  title,
  statusBar,
  onMinimize,
  onMaximize,
  onClose,
  noPadding,
  children,
  ...rest
}: WindowProps) => {
  return (
    <div {...rest}>
      <div className="window">
        <div className="title-bar">
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
    </div>
  );
};
