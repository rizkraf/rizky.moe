'use client';

import { Variants } from 'motion/react';

// Staggered container animation for lists and grids
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Fade up animation for cards and sections
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 200,
    },
  },
};

// Slide in from left animation
export const slideInLeft: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 200,
    },
  },
};

// Slide in from right animation
export const slideInRight: Variants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 200,
    },
  },
};

// Pop animation for buttons and interactive elements
export const popAnimation: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 300,
    },
  },
};

// Neobrutalism-style page transition
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

// Rotate animation for accent elements
export const rotateAnimation: Variants = {
  hidden: {
    rotate: -5,
    opacity: 0,
  },
  show: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 200,
    },
  },
  hover: {
    rotate: [0, -2, 2, -2, 0],
    transition: {
      duration: 0.5,
    },
  },
};

// Bounce animation for attention-grabbing elements
export const bounceAnimation: Variants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: 'reverse',
      ease: 'easeInOut',
      repeatDelay: 3,
    },
  },
};

// Draw SVG path animation
export const drawPathAnimation: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 1.5,
        bounce: 0,
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};
