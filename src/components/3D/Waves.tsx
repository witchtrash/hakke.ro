import React from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Background as BackgroundContainer } from '@components/Layout';
import { OrbitControls } from '@react-three/drei';

interface PointsProps {
  count: number;
  spaceBetween: number;
}

const Points = ({ count, spaceBetween }: PointsProps) => {
  const mesh = React.useRef(null);
  const [renderCount, setRenderCount] = React.useState(0);

  const { positions, matrix } = React.useMemo(() => {
    const matrix = new THREE.Matrix4();
    const positions = [];
    const dimension = Math.sqrt(count);

    for (let i = 0; i < count; i++) {
      const x = (i % 50) * spaceBetween - (dimension * spaceBetween) / 2;
      const y = 0;
      const z =
        Math.floor(i / 50) * spaceBetween - (dimension * spaceBetween) / 2;

      positions.push(new THREE.Vector3(x, y, z));
    }

    return { positions, matrix };
  }, [count, spaceBetween]);

  React.useLayoutEffect(() => {
    const matrix = new THREE.Matrix4();
    mesh.current.setMatrixAt(0, matrix);

    positions.forEach((position, i) => {
      matrix.setPosition(position);
      mesh.current.setMatrixAt(i, matrix);
    });
  }, [positions]);

  useFrame(() => {
    const dimension = Math.sqrt(count);

    let i = 0;
    for (let x = 0; x < dimension; x++) {
      for (let y = 0; y < dimension; y++) {
        matrix.setPosition(
          positions[i].x,
          1 -
            (Math.sin((x + renderCount) * 0.3) * 50 +
              Math.sin((y + renderCount) * 0.5) * 50) *
              2,
          positions[i].z
        );
        mesh.current.setMatrixAt(i, matrix);
        mesh.current.instanceMatrix.needsUpdate = true;
        i++;
        setRenderCount(renderCount + 0.04);
      }
    }
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereBufferGeometry args={[6, 6, 6]} />
      <meshBasicMaterial />
    </instancedMesh>
  );
};

const Camera = () => {
  return (
    <React.Fragment>
      <OrbitControls enablePan={false} enableZoom={false} />
    </React.Fragment>
  );
};

export const Waves = () => {
  return (
    <BackgroundContainer id="canvas-container" fullHeight>
      <Canvas
        camera={{
          far: 10000,
          position: [0, 800, 2500],
        }}
      >
        <React.Fragment>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Points count={50 * 50} spaceBetween={100} />
        </React.Fragment>
        <Camera />
      </Canvas>
    </BackgroundContainer>
  );
};
