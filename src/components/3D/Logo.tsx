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
import { Coordinates, Dimensions } from '@hakkero/util/types';

type LogoProps = {
  onClick: () => void;
  onRelease: () => void;
  dimensions: Dimensions;
};
export const Logo = ({ onClick, onRelease, dimensions }: LogoProps) => {
  const texture = useTexture('assets/hakkero-dither.png');
  const [scale, setScale] = React.useState(1);

  const imageWidth = 772;
  const imageHeight = 344;
  const aspectRatio = imageWidth / imageHeight;

  const calculateScale = (width: number): number => {
    /**
     * This looks weird but it's just the function of a line passing through points
     * (800, 3) and (300, 1)
     *
     * Why those points? 800 and 300 are (approximately) the smallest widths
     * that the image can fit in, with scales 3 and 1 respectively
     * x value are approximated so the function of the line looks a bit nicer to read
     *
     * Also the value is scaled up by a factor of 1.5 so it fits a bit better
     */
    const y = ((1 / 250) * width - 1 / 5) * 1.5;

    // Return a value between 0.5 and 4
    return Math.min(Math.max(y, 0.5), 4);
  };

  React.useEffect(() => {
    setScale(calculateScale(dimensions.width));
  }, [dimensions]);

  return (
    <mesh onPointerDown={onClick} onPointerUp={onRelease}>
      <planeBufferGeometry
        attach="geometry"
        args={[scale * aspectRatio, scale]}
      />
      <meshBasicMaterial attach="material" map={texture} side={DoubleSide} />
    </mesh>
  );
};

type LogoEffectProps = {
  glitching: boolean;
  dimensions: Dimensions;
  mousePosition: Coordinates;
};
export const LogoEffects = (props: LogoEffectProps) => {
  const mapCursorPosition = () => {
    return {
      x: (props.mousePosition.x - props.dimensions.width / 2) / 10000,
      y: (props.dimensions.height / 2 - props.mousePosition.y) / 10000,
    };
  };

  const chromaticAberrationOffset = new Vector2(0.02, 0.01);
  const ref = React.useRef(null);

  useFrame(() => {
    if (ref.current) {
      const { x, y } = mapCursorPosition();
      chromaticAberrationOffset.x =
        x + Math.sin(props.mousePosition.x) / 1000 + Math.random() / 200;
      chromaticAberrationOffset.y =
        y + Math.cos(props.mousePosition.y) / 1000 + Math.random() / 200;
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

export const LogoLoader = ({
  dimensions,
  glitching,
  mousePosition,
  ...rest
}: LogoProps & LogoEffectProps) => (
  <React.Fragment>
    <Suspense fallback={null}>
      <Logo dimensions={dimensions} {...rest} />
    </Suspense>
    <LogoEffects
      glitching={glitching}
      dimensions={dimensions}
      mousePosition={mousePosition}
    />
  </React.Fragment>
);
