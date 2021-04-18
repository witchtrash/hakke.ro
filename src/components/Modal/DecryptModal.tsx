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

interface DecryptModalProps {
  open: boolean;
  loading: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  register: UseFormRegister<PassphraseForm>;
}

export const DecryptModal = (props: DecryptModalProps) => {
  if (!props.open) {
    return null;
  }

  return (
    <Modal isOpen={props.open} onRequestClose={props.handleClose}>
      <form>
        <React.Fragment>
          <Row>
            <StyledInput
              type="password"
              placeholder="passphrase"
              {...props.register('passphrase', {
                required: true,
                maxLength: 256,
              })}
              autoFocus
            />
          </Row>
          <Row>
            <StyledButton
              type="submit"
              onClick={props.handleSubmit}
              disabled={props.loading}
            >
              {'decrypt >'}
            </StyledButton>
          </Row>
        </React.Fragment>
      </form>
    </Modal>
  );
};
