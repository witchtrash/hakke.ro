import styled from '@emotion/styled';
import { theme } from '~/util/theme';
import { Container } from './Container';

export const Background = styled(Container)`
  background-color: ${theme.colors.backgroundLight};
  min-height: 100vh;
`;
