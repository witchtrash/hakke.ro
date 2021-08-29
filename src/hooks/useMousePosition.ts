import React from 'react';
import { Coordinates } from '@hakkero/util/types';

export const useMousePosition = <T extends HTMLElement>(
  container: React.MutableRefObject<T>
) => {
  const [mousePosition, setMousePosition] = React.useState<Coordinates>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const ref = container.current;

    const onMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    ref.addEventListener('mousemove', onMouseMove);

    return () => {
      ref.removeEventListener('mousemove', onMouseMove);
    };
  }, [container]);

  return mousePosition;
};
