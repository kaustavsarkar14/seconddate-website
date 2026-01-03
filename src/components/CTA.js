import { motion } from "framer-motion";
import { PLAY_STORE_URL } from "../constants";

const CTA = () => {
  return (
    <section
      className="gradient-bg"
      style={{
        padding: "5rem 1.5rem",
        textAlign: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ fontSize: "2.2rem", fontWeight: 700 }}
      >
        Your second date starts here.
      </motion.h2>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href={PLAY_STORE_URL}
        style={{
          display: "inline-block",
          marginTop: 30,
          padding: "16px 40px",
          borderRadius: 999,
          background: "#000",
          color: "white",
          fontWeight: 600,
        }}
      >
        Download the App
      </motion.a>
    </section>
  );
};

export default CTA;
