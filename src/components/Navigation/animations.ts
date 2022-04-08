import { Variants } from 'framer-motion';

const list: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const item: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const animations = {
  list,
  item,
};
