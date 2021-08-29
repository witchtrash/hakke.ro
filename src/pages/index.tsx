import React from 'react';
import { LogoLoader } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';
import { ResizeObserver } from '@juggle/resize-observer';
import { Window } from '@hakkero/components/98/Window';
import styled from '@emotion/styled';
import { DndContext } from '@dnd-kit/core';
import { useMousePosition } from '@hakkero/hooks';
import useResizeObserver from 'use-resize-observer';
import { Dimensions } from '@hakkero/util/types';

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
  const ref = React.useRef<HTMLDivElement>();

  const { width = 1, height = 1 } = useResizeObserver<HTMLDivElement>({ ref });
  const mousePosition = useMousePosition(ref);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);

  const dimensions = {
    height,
    width,
  } as Dimensions;

  return (
    <DndContext>
      <StyledWindow
        title="hakke.ro - Microsoft Internet Explorer"
        id="home-window"
        onMouseUp={handleLogoRelease}
      >
        <Container ref={ref}>
          <Canvas resize={{ polyfill: ResizeObserver }}>
            <Center>
              <LogoLoader
                dimensions={dimensions}
                mousePosition={mousePosition}
                onClick={handleLogoClick}
                onRelease={handleLogoRelease}
                glitching={glitchActive}
              />
            </Center>
          </Canvas>
        </Container>
      </StyledWindow>
    </DndContext>
  );
};

export default Index;
