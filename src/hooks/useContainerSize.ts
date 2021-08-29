import React from 'react';
import { Dimensions } from '@hakkero/util/types';

export const useContainerSize = (
  container: React.RefObject<HTMLDivElement>
) => {
  const [containerSize, setContainerSize] = React.useState<Dimensions>({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    const ref = container.current;

    const onWindowResize = () => {
      setContainerSize({
        width: container.current.clientWidth,
        height: container.current.clientHeight,
      });
    };

    ref.addEventListener('resize', onWindowResize);

    // Fire it once in case the window never get resized
    onWindowResize();

    return () => ref.removeEventListener('resize', onWindowResize);
  }, [container]);

  return containerSize;
};
