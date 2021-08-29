import React from 'react';
import { LogoLoader, LogoEffects } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';
import { ResizeObserver } from '@juggle/resize-observer';
import { Window } from '@hakkero/components/98/Window';
import styled from '@emotion/styled';

const StyledWindow = styled(Window)`
  .window {
    width: 800px;
  }
  .window-body {
    height: 100%;
  }
`;

const Container = styled(Gradient)`
  height: 600px;
`;

const Index = () => {
  const [glitchActive, setGlitchActive] = React.useState(false);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);
  const containerRef = React.createRef<HTMLDivElement>();

  return (
    <StyledWindow
      title="hakke.ro - Microsoft Internet Explorer"
      onMouseUp={handleLogoRelease}
    >
      <Container ref={containerRef}>
        <Canvas resize={{ polyfill: ResizeObserver }}>
          <LogoLoader
            containerRef={containerRef}
            onClick={handleLogoClick}
            onRelease={handleLogoRelease}
          />
          <LogoEffects containerRef={containerRef} glitching={glitchActive} />
        </Canvas>
      </Container>
    </StyledWindow>
  );
};

export default Index;
