const opacityVariants = {
  start: {
    opacity: 0,
  },
  do: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  end: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const modalVariants = {
  start: {
    y: "-100vh",
    x: "-50%",
  },
  do: {
    y: "-50%",
    x: "-50%",
    transition: { duration: 0.5 },
  },
  end: {
    y: "-100vh",
    x: "-50%",
    transition: { duration: 0.5 },
  },
};

export { opacityVariants, modalVariants };
