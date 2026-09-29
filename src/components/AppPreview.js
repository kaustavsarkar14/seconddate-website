import { motion } from "framer-motion";
import feed from "../assets/phonescreen.webp";
import ScrollScale from "./ScrollScale";

const AppPreview = () => {
  return (
    <section
      style={{
        padding: "4rem 1.5rem 5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      {/* Title (zooms with scroll) */}
      <ScrollScale>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5rem)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Build real
          <br />
          connections
        </motion.h2>
      </ScrollScale>

      {/* App Preview Image */}
      <motion.img
        src={feed}
        alt="App UI Preview"
        loading="lazy"
        decoding="async"
        width={280}
        height={573}
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.1, // keep image faster than before
          delay: 0.15,   // subtle stagger after text
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -6,
        }}
        style={{
          width: 280,
          height: "auto",
          borderRadius: 24,
          boxShadow: "0 40px 90px rgba(0,0,0,0.35)",
        }}
      />
    </section>
  );
};

export default AppPreview;
