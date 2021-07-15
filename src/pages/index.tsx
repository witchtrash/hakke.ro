import React from 'react';
import { LogoLoader, LogoEffects } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';
import { ResizeObserver } from '@juggle/resize-observer';

const Index = () => {
  const [glitchActive, setGlitchActive] = React.useState(false);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);

  return (
    <Gradient fullHeight id="canvas-container">
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <Center>
          <LogoLoader onClick={handleLogoClick} onRelease={handleLogoRelease} />
          <LogoEffects glitching={glitchActive} />
        </Center>
      </Canvas>
    </Gradient>
  );
};

export default Index;
