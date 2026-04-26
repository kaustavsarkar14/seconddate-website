import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Heart,
  X,
  ArrowRight,
  Clock,
  AlertCircle
} from "lucide-react";
import blinddateImg from "../assets/images/blinddate.jpg";

const BlindDatePromo = () => {
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

  const points = [
    { text: "Verified profiles only", icon: ShieldCheck },
    { text: "Safe public locations", icon: MapPin },
    { text: "Respect-first community", icon: Heart },
  ];

  return (
    <>
      <section
        style={{
          padding: "3rem 1.2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 950, // Slightly wider, but constrained for elegance
            borderRadius: 24,
            background: "#0f0f13", // Solid dark background to match your screenshot
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Left Side: Image (Acts as top on mobile) */}
          <div
            style={{
              flex: "1 1 350px",
              position: "relative",
              minHeight: 240, // Keeps it compact
              display: "flex",
            }}
          >
            <motion.img
              src={blinddateImg}
              alt="Blind Date"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                inset: 0,
              }}
            />
            {/* Dual-axis fade overlay to blend smoothly into the #0f0f13 background on both mobile & desktop */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, #0f0f13 98%), linear-gradient(to right, transparent 60%, #0f0f13 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Right Side: Content (Acts as bottom on mobile) */}
          <div
            style={{
              flex: "1 1 400px",
              padding: "1.5rem 1.5rem 2rem 1.5rem", // Tighter paddings for a compact mobile look
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.2rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Go on a{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Blind Date
                </span>
              </h2>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Sign up and get matched with someone compatible near you in Bengal.
              </p>
            </div>

            {/* Feature Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {points.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.1)",
                        flexShrink: 0, // Prevents icon from squashing
                      }}
                    >
                      <Icon size={16} color="#ec4899" />
                    </div>
                    <span style={{ color: "#fff", fontWeight: 500, fontSize: "0.95rem" }}>
                      {point.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Extra Trust Text Box */}
            <div style={{
              background: "rgba(124,58,237,0.08)",
              borderLeft: "3px solid #7c3aed",
              padding: "0.8rem 1rem",
              borderRadius: "0 10px 10px 0",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem"
            }}>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.4 }}>
                <AlertCircle size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Only verified profiles. No fake accounts. No time-pass.</span>
              </p>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.4 }}>
                <Clock size={16} color="#7c3aed" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Limited slots available each week.</span>
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              style={{
                marginTop: "0.5rem",
                padding: "1rem 1.5rem",
                borderRadius: 14,
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.5px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(236,72,153,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Perfectly centers icon and text
                gap: "10px",
                width: "100%", // Makes it full width for a modern mobile look
              }}
            >
              <Heart size={18} fill="#fff" />
              <span>Book Your Blind Date</span>
            </motion.button>
          </div>
        </motion.div>
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

export default BlindDatePromo;