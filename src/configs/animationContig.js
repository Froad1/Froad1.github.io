export default {
  main: {
    initial: { opacity: 0, y: '-100vh' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100vh' },
    transition: { ease: "easeInOut", duration: 1.5 }
  },
  modal: {
    initial: { opacity: 0, y: '-100vh' , x: '-50%'},
    animate: { opacity: 1, y: '-50%' , x: '-50%'},
    exit: { opacity: 0, y: '-100vh' },
    transition: { ease: "easeInOut", duration: 0.4 }
  },
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1},
    exit: { opacity: 0 },
    transition: { ease: "easeInOut", duration: 1.5 }
  },
  container: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5
      }
    }
  },
  item: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  }
}