import React, { Suspense } from 'react';
import { DoubleSide, Vector2 } from 'three';
import { useTexture } from '@react-three/drei';
import {
  ChromaticAberration,
  EffectComposer,
  Glitch,
  Scanline,
} from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import { useFrame } from '@react-three/fiber';
import { useMousePosition, useWindowSize } from '@hakkero/hooks';

interface LogoProps {
  onClick: () => void;
  onRelease: () => void;
}
export const Logo = (props: LogoProps) => {
  const texture = useTexture('assets/hakkero-dither.png');
  const aspectRatio = 772 / 344;

  return (
    <mesh onPointerDown={props.onClick} onPointerUp={props.onRelease}>
      <planeBufferGeometry attach="geometry" args={[3 * aspectRatio, 3]} />
      <meshBasicMaterial attach="material" map={texture} side={DoubleSide} />
    </mesh>
  );
};

export const LogoLoader = (props: LogoProps) => (
  <Suspense fallback={null}>
    <Logo {...props} />
  </Suspense>
);

interface LogoEffectProps {
  glitching: boolean;
}
export const LogoEffects = (props: LogoEffectProps) => {
  const { x: mouseX, y: mouseY } = useMousePosition();
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const mapCursorPosition = () => {
    return {
      x: (windowWidth / 2 - mouseX) / 10000,
      y: (windowHeight / 2 - mouseY) / 10000,
    };
  };

  const chromaticAberrationOffset = new Vector2(0.02, 0.01);
  const ref = React.useRef(null);

  useFrame(() => {
    if (ref.current) {
      const { x, y } = mapCursorPosition();
      chromaticAberrationOffset.x =
        x + Math.sin(mouseX) / 1000 + Math.random() / 200;
      chromaticAberrationOffset.y =
        y + Math.cos(mouseY) / 1000 + Math.random() / 200;
      ref.current.offset = chromaticAberrationOffset;
    }
  });

  return (
    <EffectComposer>
      <Scanline density={2} />
      {props.glitching ? (
        <React.Fragment>
          <Glitch
            columns={0.1}
            dtSize={128}
            mode={GlitchMode.CONSTANT_WILD}
            chromaticAberrationOffset={chromaticAberrationOffset}
          />
        </React.Fragment>
      ) : (
        <ChromaticAberration ref={ref} offset={chromaticAberrationOffset} />
      )}
    </EffectComposer>
  );
};
