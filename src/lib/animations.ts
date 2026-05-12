import type { Variants, Transition } from "framer-motion";

// Shared easing curve — smooth deceleration (ease-out)
const ease = [0.22, 1, 0.36, 1] as const;

// Standard transition — snappy for scroll reveals
export const defaultTransition: Transition = {
  duration: 0.45,
  ease,
};

// Fade in + slide up — used for most scroll-triggered entrances
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Stagger container — wrap around a group of children
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger with wider gap (for cards)
export const staggerContainerWide: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Text reveal — word slides up from behind mask
export const textRevealWord: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

// Text reveal container
export const textRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Fade only (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

// For delayed sequential reveals (hero sections)
export const heroSequence = {
  tagline: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease, delay: 0.2 },
    },
  },
  bio: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease, delay: 0.35 },
    },
  },
  cta: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease, delay: 0.5 },
    },
  },
};

// Viewport settings for whileInView
export const viewportOnce = {
  once: true,
  margin: "0px" as const,
  amount: 0.05,
};
