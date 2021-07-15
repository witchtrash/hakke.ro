import React from 'react';

interface WindowSize {
  width: number;
  height: number;
}
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const onWindowResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener('resize', onWindowResize);
    onWindowResize();

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  return windowSize;
};
