import React from 'react';
import styled from '@emotion/styled';
import { ClipboardButton, Input } from '~/components/Form';
import { Row } from '~/components/Layout';
import { Modal } from './Modal';

const StyledInput = styled(Input)`
  padding: 11px;
  flex: 1 1 auto;
`;

interface ClipboardModalProps {
  open: boolean;
  pasteUrl?: string;
  handleClose: () => void;
}

export const ClipboardModal = (props: ClipboardModalProps) => {
  if (!props.open) {
    return null;
  }

  return (
    <Modal isOpen={props.open} onRequestClose={props.handleClose}>
      <Row>
        <StyledInput value={props.pasteUrl} readOnly={true} />
        <ClipboardButton value={props.pasteUrl} />
      </Row>
    </Modal>
  );
};
