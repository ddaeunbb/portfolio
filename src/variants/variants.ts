export const opacityVisible = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const opacityFastVisible = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const fadePop = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export const spin = {
  hidden: { opacity: 0, rotateX: 180 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
    },
  },
};
