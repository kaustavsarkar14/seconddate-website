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
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="SecondDate"
            className="w-10 h-10 md:w-11 md:h-11 object-contain"
          />
          <span className="text-lg md:text-2xl font-extrabold tracking-tight text-white">
            SecondDate
          </span>
        </Link>

        {/* DOWNLOAD ICON */}
        <a
          href={PLAY_STORE_URL}
          aria-label="Download App"
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
        >
          <Download size={20} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
