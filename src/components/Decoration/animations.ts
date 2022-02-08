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
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    y: 10,
    opacity: 0,
  },
};

const oneOffItem: Variants = {
  visible: {
    ...item.visible,
    background: 'violet.600',
    width: 'unset',
    transition: {
      duration: 0.6,
      delay: 0.6,
    },
  },
  hidden: {
    ...item.hidden,
    width: '0%',
  },
};

const image: Variants = {
  visible: {
    top: '15%',
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
    },
  },
  hidden: {
    top: '20%',
    opacity: 0,
    rotate: 2,
  },
};

export const animations = {
  list,
  item,
  oneOffItem,
  image,
};
