import React from 'react';
import { LogoLoader, LogoEffects } from '@components/3D';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { Gradient } from '@components/Gradient';

const Index = () => {
  const [glitchActive, setGlitchActive] = React.useState(false);

  const handleLogoClick = () => setGlitchActive(true);
  const handleLogoRelease = () => setGlitchActive(false);

  return (
    <Gradient fullHeight id="canvas-container">
      <Canvas>
        <Center>
          <LogoLoader onClick={handleLogoClick} onRelease={handleLogoRelease} />
          <LogoEffects glitching={glitchActive} />
        </Center>
      </Canvas>
    </Gradient>
  );
};

export default Index;
