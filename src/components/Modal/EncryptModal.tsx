import React from 'react';
import styled from '@emotion/styled';
import { Button, Input } from '~/components/Form';
import { Row } from '~/components/Layout';
import { Modal } from './Modal';
import { UseFormRegister } from 'react-hook-form';
import { PassphraseForm } from '~/util/form';

const StyledInput = styled(Input)`
  padding: 11px;
  flex: 1 1 auto;
`;

const StyledButton = styled(Button)`
  flex: 1 1 auto;
`;

interface EncryptModalProps {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  register: UseFormRegister<PassphraseForm>;
}

export const EncryptModal = (props: EncryptModalProps) => {
  if (!props.open) {
    return null;
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      props.handleSubmit();
    }
  };

  return (
    <Modal isOpen={props.open} onRequestClose={props.handleClose}>
      <Row>
        <StyledInput
          type="password"
          placeholder="passphrase"
          {...props.register('passphrase', { required: true, maxLength: 256 })}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </Row>
      <Row>
        <StyledButton
          type="submit"
          onClick={props.handleSubmit}
          disabled={props.loading}
        >
          {'encrypt >'}
        </StyledButton>
      </Row>
    </Modal>
  );
};
