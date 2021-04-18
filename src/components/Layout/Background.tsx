import styled from '@emotion/styled';
import { Container } from './Container';

export const Background = styled(Container)`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
