import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Ensure this path is correct

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 left-0 w-full z-20 px-4 py-4 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* BRAND */}
        <div className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="SecondDate"
            className="w-10 h-10 md:w-11 md:h-11 object-contain"
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white hidden md:inline-block">
            SecondDate
          </span>
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="bg-white text-black px-5 py-2 md:px-6 md:py-2.5 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95"
        >
          Download
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;