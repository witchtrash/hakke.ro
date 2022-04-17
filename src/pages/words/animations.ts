import { Variants } from 'framer-motion';

const list: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    display: 'block',
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    y: 10,
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
};

export const animations = {
  list,
  item,
};
