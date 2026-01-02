import { motion } from "framer-motion";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <section
      className="gradient-bg"
      style={{
        minHeight: "100vh",
        paddingTop: 96, // space for navbar
        paddingBottom: 64,
      }}
    >
      <div
        className="hero-container"
        style={{
          maxWidth: 420, // 🔥 key fix
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 28,
        }}
      >
        {/* TEXT FIRST (important for mobile reorder) */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: 520,
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Second dates
            <br />
            shouldn’t feel
            <br />
            awkward.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: "1.05rem",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            A dating app built for real conversations and genuine connections.
          </p>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href="#download"
            style={{
              display: "inline-block",
              marginTop: 28,
              padding: "16px 36px",
              borderRadius: 999,
              background: "#000",
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Download Now
          </motion.a>
        </motion.div>

        {/* CARDS SECOND */}
        <div className="hero-cards">
          <HeroCards />
        </div>
      </div>
    </section>
  );
};

export default Hero;
