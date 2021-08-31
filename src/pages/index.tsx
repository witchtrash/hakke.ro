import React from 'react';
import { LogoLoader } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';
import { ResizeObserver } from '@juggle/resize-observer';
import { Desktop, InternetExplorer } from '@hakkero/components/98';
import styled from '@emotion/styled';
import { useMousePosition, useClippy } from '@hakkero/hooks';
import useResizeObserver from 'use-resize-observer';
import { Coordinates, Dimensions } from '@hakkero/util/types';

const Container = styled(Gradient)`
  height: 100%;
`;

const Index = () => {
  const [glitchActive, setGlitchActive] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>();

  const { width, height } = useResizeObserver<HTMLDivElement>({
    ref,
  });
  const coordinates: Coordinates = {
    x: 100,
    y: 200,
  };
  const mousePosition = useMousePosition(ref);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);

  useClippy();

  const dimensions = {
    height,
    width,
  } as Dimensions;

  return (
    <Desktop>
      <InternetExplorer
        title="hakke.ro"
        id="hakkero-browser"
        onMouseUp={handleLogoRelease}
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
    </Desktop>
  );
};

export default Index;
