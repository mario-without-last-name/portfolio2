export const fadeInUp = {
  initial:{
    opacity:0,
    y:60
  },
  animate:{
    opacity: 1,
    y: 0,
    transition:{
      // delay: 0.5,
      // duration: 0.5,
    }
  }
}

// Uncommenting the above will make the Education and Experience section in Resume page have a delay. But will cause no staggerChildren in the About and Projects page.
// you may need to make something like fadeInUp2 or something

export const stagger = {
  initial:{},
  animate:{
    transition:{
      delayChildren: 0.5,
      staggerChildren: 0.075,
    }
  }
}

export const routeAnimation = {
  initial:{
    opacity: 0,
  },
  animate:{
    opacity: 1,
    transition:{
      delay: 0.5,
      duration: 0.5,
    }
  },
  exit:{
    opacity: 0,
    transition: {
      delay: 0.5,
      ease: 'easeInOut'
    }
  }
}