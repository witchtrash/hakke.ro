import React from 'react';
import { LogoLoader } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';
import { ResizeObserver } from '@juggle/resize-observer';
import { Desktop, InternetExplorer } from '@hakkero/components/98';
import styled from '@emotion/styled';
import { DndContext } from '@dnd-kit/core';
import { useMousePosition } from '@hakkero/hooks';
import useResizeObserver from 'use-resize-observer';
import { Coordinates, Dimensions } from '@hakkero/util/types';

const Container = styled(Gradient)`
  height: 100%;
`;

const Index = () => {
  const [glitchActive, setGlitchActive] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();

  const { width = 800, height = 600 } = useResizeObserver<HTMLDivElement>({
    ref,
  });
  const coordinates: Coordinates = {
    x: 100,
    y: 200,
  };
  const mousePosition = useMousePosition(ref);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);

  const dimensions = {
    height,
    width,
  } as Dimensions;

  return (
    <Desktop>
      <DndContext>
        <InternetExplorer
          title="hakke.ro"
          id="hakkero-browser"
          onMouseUp={handleLogoRelease}
          dimensions={{ width, height }}
          coordinates={coordinates}
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
        </InternetExplorer>
      </DndContext>
    </Desktop>
  );
};

export default Index;
