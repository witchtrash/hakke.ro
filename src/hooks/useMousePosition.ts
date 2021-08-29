import React from 'react';
import { Coordinates } from '@hakkero/util/types';

export const useMousePosition = (
  container: React.RefObject<HTMLDivElement>
) => {
  const [mousePosition, setMousePosition] = React.useState<Coordinates>({
    x: 0,
    y: 0,
  });

  const onMouseMove = (event: MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  React.useEffect(() => {
    const ref = container.current;
    ref.addEventListener('mousemove', onMouseMove);

    return () => ref.removeEventListener('mousemove', onMouseMove);
  }, [container]);

  return mousePosition;
};
