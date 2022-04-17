import React from 'react';
import { MotionBox } from 'components/MotionBox';

export const MotionWrapper = (
  props: React.ComponentPropsWithoutRef<typeof MotionBox>
) => <MotionBox opacity="0" whileInView={{ opacity: 1 }} {...props} />;
