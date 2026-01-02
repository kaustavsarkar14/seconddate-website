import { motion } from "framer-motion";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen gradient-bg pt-20 pb-12 md:pt-32 md:pb-20 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] text-white tracking-tight">
            Second dates
            <br />
            shouldn’t feel
            <br />
            awkward.
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/90 font-medium max-w-sm md:max-w-md leading-relaxed">
            A dating app built for real conversations and genuine connections.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#download"
            className="inline-block mt-6 md:mt-8 px-8 py-3.5 bg-black text-white rounded-full font-semibold text-base md:text-lg shadow-xl hover:bg-gray-900 transition-colors"
          >
            Download Now
          </motion.a>
        </motion.div>

        {/* CARDS SECTION - Adjusted height/margins for mobile visibility */}
        <div className="flex justify-center md:justify-end items-center relative z-10 mt-6 md:mt-0 min-h-[400px] md:min-h-auto">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;