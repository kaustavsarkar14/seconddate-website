import { motion } from "framer-motion";
import HeroCards from "./HeroCards";
import { PLAY_STORE_URL } from "../constants";
import coverImage from "../assets/cover.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen gradient-bg pt-20 pb-12 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      {/* 🔹 Cover Image */}
      <div
        className="opacity-30
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
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-white tracking-tight">
            See them.
            <br />
            Hear them.
            <br />
            Then decide.
          </h1>

          <p className="mt-4 md:mt-8 text-base md:text-xl lg:text-2xl text-white/90 font-medium max-w-sm md:max-w-lg leading-relaxed">
            A video-based dating app for real connections.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PLAY_STORE_URL}
            className="inline-block mt-8 md:mt-10 px-8 py-3.5 md:px-12 md:py-5 bg-black text-white rounded-full font-bold text-base md:text-xl shadow-xl hover:bg-gray-900 transition-colors"
          >
            Pre-Register
          </motion.a>
        </motion.div>

        <div className="flex justify-center md:justify-end items-center relative min-h-[400px] mt-6 md:mt-0">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
