import React from 'react';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import { theme } from '~/util/theme';

ReactModal.setAppElement('#__next');

type WrappedModalProps = ReactModal.Props & {
  className?: string;
};
const WrappedModal = ({ className, ...rest }: WrappedModalProps) => {
  // I'm never using react-modal again
  const contentClass = `${className}__content`;
  const backdropClass = `${className}__backdrop`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClass}
      overlayClassName={backdropClass}
      {...rest}
    />
  );
};

export const Modal = styled(WrappedModal)`
  &__backdrop {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(40, 42, 54, 0.7);
    z-index: 500;
  }

  &__content {
    position: absolute;
    top: 200px;
    left: 50%;
    min-width: 400px;
    transform: translate(-50%, 0);

    padding: 24px;
    z-index: 1000;
    outline: none;

    border-radius: ${theme.borders.radius};
    background: ${theme.colors.backgroundLight};
    font-family: ${theme.fonts.mono};
    color: ${theme.colors.text};
    box-shadow: ${theme.shadows.box};
  }
`;
