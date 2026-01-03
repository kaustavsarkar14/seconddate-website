import { motion } from "framer-motion";
import HeroCards from "./HeroCards";
import { PLAY_STORE_URL } from "../constants";

// ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // Time between each line appearing
      delayChildren: 0.2,    // Initial delay before starting
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    filter: "blur(10px)" // Adds the "sleek" cinematic feel
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.4, 0.25, 1] // Custom ease for smoothness
    },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen gradient-bg pt-20 pb-12 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* TEXT CONTENT WRAPPER */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* HEADLINE: Split into blocks for sequential animation */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-white tracking-tight">
            <motion.span variants={itemVariants} className="block">
              See them.
            </motion.span>
            <motion.span variants={itemVariants} className="block">
              Hear them.
            </motion.span>
            <motion.span variants={itemVariants} className="block">
              Then decide.
            </motion.span>
          </h1>

          {/* PARAGRAPH */}
          <motion.p 
            variants={itemVariants}
            className="mt-4 md:mt-8 text-base md:text-xl lg:text-2xl text-white/90 font-medium max-w-sm md:max-w-lg leading-relaxed"
          >
            A video-based dating app for real connections.
          </motion.p>

          {/* BUTTON */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={PLAY_STORE_URL}
              className="inline-block px-8 py-3.5 md:px-12 md:py-5 bg-black text-white rounded-full font-bold text-base md:text-xl shadow-xl hover:bg-gray-900 transition-colors"
            >
              Pre-Register
            </motion.a>
          </motion.div>
        </motion.div>

        {/* CARDS SECTION (Right Side) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center md:justify-end items-center relative z-10 min-h-[400px] md:min-h-auto mt-6 md:mt-0"
        >
          <HeroCards />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;