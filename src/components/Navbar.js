import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { PLAY_STORE_URL } from "../constants";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 left-0 w-full z-20 px-4 py-4 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* BRAND → HOME */}
        <Link to="/" className="flex items-center gap-0 md:gap-4">
          <img
            src={logo}
            alt="SecondDate"
            // Increased size: w-14/h-14 on mobile, w-16/h-16 on desktop
            className="w-14 h-14 md:w-16 md:h-16 object-contain"
          />
          {/* Increased text: text-2xl on mobile, text-4xl on desktop */}
          <span className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            SecondDate
          </span>
        </Link>

        {/* DOWNLOAD ICON */}
        <a
          href={PLAY_STORE_URL}
          aria-label="Download App"
          // Increased button size: w-12/h-12 mobile, w-16/h-16 desktop
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg"
        >
          {/* Increased icon size to 24px */}
          <Download size={24} className="md:w-8 md:h-8" />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;