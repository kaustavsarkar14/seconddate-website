import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
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

const CardSwiper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Redirect handler
  const handleSelection = (gender) => {
    if (gender === "female") {
      window.location.href = "https://pages.razorpay.com/BlindDateFemale";
    } else if (gender === "male") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.bongdate.bongDate&hl=en-US&ah=jIbw0EmQpsAX2ya_6H5-iBshoa0&pli=1";
    }
  };

  return (
    <>
      <section className="relative w-full min-h-screen gradient-bg pt-16 pb-12 md:pt-24 md:pb-24 flex items-center overflow-hidden">
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
            {/* <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 3 }}
              className="mt-3 text-sm md:text-base text-white/80 font-semibold tracking-wide"
            >
              Pre-register to get early access
            </motion.p> */}

            {/* CTA */}
            
          </motion.div>

          {/* RIGHT: HERO CARDS */}
          <div className="flex justify-center md:justify-end items-center relative min-h-[400px] mt-6 md:mt-0">
            <HeroCards />
          </div>
        </div>
      </section>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(12px)",
              }}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 400,
                background: "linear-gradient(180deg, rgba(30,30,40,0.95), rgba(15,15,20,0.95))",
                borderRadius: 24,
                padding: "2.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "none",
                  color: "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>

              <h3 style={{ color: "#fff", fontSize: "1.4rem", fontWeight: 700, margin: "1rem 0 2rem 0" }}>
                I am a...
              </h3>

              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {/* Male Button */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(124,58,237,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelection("male")}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.2rem",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <span>Male ♂</span>
                  <ArrowRight size={20} color="#7c3aed" />
                </motion.button>

                {/* Female Button */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 5, backgroundColor: "rgba(236,72,153,0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelection("female")}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.2rem",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(236,72,153,0.3)",
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <span>Female ♀</span>
                  <ArrowRight size={20} color="#ec4899" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardSwiper;