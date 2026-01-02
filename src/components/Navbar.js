import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "14px 16px", // ⬅️ reduced a lot
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <img
            src={logo}
            alt="SecondDate"
            style={{
              width: 44, // ⬅️ bigger logo
              height: 44,
            }}
          />

          <span
            style={{
              fontSize: "1.3rem", // ⬅️ bigger text
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff", // important for gradient bg
            }}
          >
            SecondDate
          </span>
        </div>

        {/* CTA */}
        <a
          href="#download"
          style={{
            fontWeight: 600,
            fontSize: "0.85rem",
            textDecoration: "none",
            color: "#000",
            background: "#fff",
            padding: "8px 16px", // ⬅️ slimmer button
            borderRadius: 999,
            whiteSpace: "nowrap",
          }}
        >
          Download
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
