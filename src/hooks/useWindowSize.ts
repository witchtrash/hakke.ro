import React from 'react';
import { Dimensions } from '@hakkero/util/types';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<Dimensions>({
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
