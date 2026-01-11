import { motion } from "framer-motion";
import HeroCards from "./HeroCards";
import { PLAY_STORE_URL } from "../constants";
import coverImage from "../assets/cover.png";

/* -------------------------------
   Animation Variants
-------------------------------- */

// Container for staggered text
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

// Each headline line animation
const lineVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 3,
      ease: [0.22, 1, 0.36, 1], // smooth premium easing
    },
  },
};

// CTA button (quick appearance)
const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen gradient-bg pt-20 pb-12 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      {/* 🔹 Cover Image */}
      <div
        className="
          opacity-30
          absolute top-0 left-0 w-full h-[60%]
          bg-cover bg-top bg-no-repeat pointer-events-none
          md:[-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
          md:[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
        "
        style={{ backgroundImage: `url(${coverImage})` }}
      />

      {/* 🔹 Top black fade for navbar readability */}
      <div
        className="
          absolute top-0 left-0 w-full
          h-96 md:h-40
          bg-gradient-to-b from-black/90 to-transparent
          pointer-events-none z-[5]
        "
      />

      {/* 🔹 Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center z-10">
        {/* LEFT: TEXT */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial="hidden"
          animate="visible"
        >
          {/* Animated Headline */}
          <motion.div
            variants={containerVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-white tracking-tight"
          >
            <motion.div variants={lineVariants}>See them.</motion.div>

            <motion.div variants={lineVariants}>Hear them.</motion.div>

            <motion.div variants={lineVariants}>Then decide.</motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="mt-4 md:mt-8 text-base md:text-xl lg:text-2xl text-white/90 font-medium max-w-sm md:max-w-lg leading-relaxed"
          >
            A video-based dating app for real connections.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 3 }}
            className="mt-3 text-sm md:text-base text-white/80 font-semibold tracking-wide"
          >
            Pre-register to get early access
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PLAY_STORE_URL}
            className="inline-block mt-8 md:mt-10 px-8 py-3.5 md:px-12 md:py-5 bg-black text-white rounded-full font-bold text-base md:text-xl shadow-xl hover:bg-gray-900 transition-colors"
          >
            Pre-Register
          </motion.a>
        </motion.div>

        {/* RIGHT: HERO CARDS */}
        <div className="flex justify-center md:justify-end items-center relative min-h-[400px] mt-6 md:mt-0">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
