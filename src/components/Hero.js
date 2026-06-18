import { motion } from "framer-motion";
import { PLAY_STORE_URL } from "../constants";

/* -------------------------------
   Animation Variants
-------------------------------- */

// Container for staggered text
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // Creates the "little delay" between lines
      delayChildren: 0.2,
    },
  },
};

// Each headline line animation
const lineVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // smooth premium modern easing
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
      delay: 1.0, // Appears after the text animations
    },
  },
};

const Hero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen gradient-bg pt-16 pb-12 md:pt-24 md:pb-24 flex items-center justify-center overflow-hidden">
        {/* 🔹 Full Background GIF */}
        <div
          className="
            absolute inset-0 w-full h-full
            bg-cover bg-center bg-no-repeat pointer-events-none z-[1]
          "
          style={{ backgroundImage: `url(https://pub-50d3bf9f0e964cdabeae6ecad508e9df.r2.dev/assets/herogif.gif)` }}
        />

        {/* 🔹 Top black gradient fade */}
        <div
          className="
            absolute top-0 left-0 w-full
            h-40 md:h-56
            bg-gradient-to-b from-black via-black/80 to-transparent
            pointer-events-none z-[2]
          "
        />

        {/* 🔹 Bottom black gradient fade (Height and opacity increased for more pop) */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            h-96 md:h-[32rem]
            bg-gradient-to-t from-black via-black/100 to-transparent
            pointer-events-none z-[2]
          "
        />

        {/* 🔹 Content - Added mt-32 md:mt-48 to push everything lower */}
        <div className="relative max-w-4xl mx-auto px-6 w-full flex flex-col items-center justify-center mt-32 md:mt-48 z-10">
          {/* TEXT CONTENT */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
          >
            {/* Animated Headline */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col text-white tracking-tight items-center"
            >
              <motion.div 
                variants={lineVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]"
              >
                Experience
              </motion.div>

              <motion.div 
                variants={lineVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mt-2 [text-shadow:0_8px_20px_rgba(0,0,0,1)]"
              >
                BlindDate
              </motion.div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className="mt-4 md:mt-8 text-base md:text-xl lg:text-2xl text-white/90 font-medium max-w-sm md:max-w-xl leading-relaxed [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
            >
              {/* A video-based dating app for real connections. */}
            </motion.p>

            {/* CTA - Only Download Now Button (Styling kept exactly as requested) */}
            <motion.a
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PLAY_STORE_URL}
              className="inline-flex items-center gap-3 mt-8 md:mt-10 px-8 py-3.5 md:px-12 md:py-5 bg-white text-black rounded-full font-bold text-base md:text-xl shadow-2xl hover:bg-gray-200 transition-colors border border-white/10"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/300/300218.png"
                alt="Google Play"
                className="h-6 md:h-7 "
              />
              Download Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;