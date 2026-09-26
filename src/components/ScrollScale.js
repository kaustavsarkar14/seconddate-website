import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/* -------------------------------
   Scroll-linked zoom: grows as it scrolls towards the middle of the screen,
   holds while centred, then eases back down as it leaves.
-------------------------------- */
const ScrollScale = ({ children, className = "", from = 0.78, peak = 1.06, to = 0.84, as = "div" }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Spring on top of Lenis for an extra-soft follow
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.5 });

  const scale = useTransform(progress, [0, 0.4, 0.6, 1], [from, peak, peak, to]);
  const opacity = useTransform(progress, [0, 0.28, 0.72, 1], [0.35, 1, 1, 0.45]);

  const Component = motion[as];
  return (
    <Component
      ref={ref}
      className={`will-change-transform ${className}`}
      style={reduceMotion ? undefined : { scale, opacity }}
    >
      {children}
    </Component>
  );
};

export default ScrollScale;
