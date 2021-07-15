import styled from '@emotion/styled';

type GradientProps = React.ComponentPropsWithoutRef<'div'> & {
  fullHeight?: boolean;
};
export const Gradient = styled.div<GradientProps>`
  background: radial-gradient(#222, #000);
  min-height: ${props => (props.fullHeight ? '100vh' : 0)};
  height: ${props => (props.fullHeight ? '100%' : 'initial')};
`;
