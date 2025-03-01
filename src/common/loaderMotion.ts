const container = {
  show: {
    transition: {
      staggerChildren: 0.35
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1.6
    }
  },
  exit: {
    opacity: 0,
    scale: 10,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 5
    }
  }
}

export { container, item, itemMain }
