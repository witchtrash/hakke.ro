import React from 'react';

interface MousePosition {
  x: number;
  y: number;
}
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const onMouseMove = (event: MouseEvent) =>
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });

  React.useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => window.removeEventListener('mousemove', onMouseMove);
  });

  return mousePosition;
};
