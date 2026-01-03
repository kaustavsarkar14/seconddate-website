import { motion } from "framer-motion";
import {
  Users,
  Ban,
  Sparkles,
  MessageSquareLock,
} from "lucide-react";

const features = [
  {
    title: "Real People, Real Intentions",
    desc: "No fake profiles. Everyone here is serious about meaningful connections.",
    icon: Users,
  },
  {
    title: "No Endless Swiping",
    desc: "Better matches, better conversations. Quality over quantity always.",
    icon: Sparkles,
  },
  {
    title: "Zero Spam",
    desc: "Moderated feed, No creepy messages. Just real humans.",
    icon: Ban,
  },
  {
    title: "Audio First, Then Text",
    desc: "Text chat unlocks only after an audio message — vibe matters.",
    icon: MessageSquareLock,
  },
];

const Features = () => {
  return (
    <section
      style={{
        padding: "5rem 1.5rem",
        background:
          "radial-gradient(circle at top, rgba(124,58,237,0.08), transparent 60%)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 28,
        }}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "relative",
                padding: "2.2rem",
                borderRadius: 24,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                overflow: "hidden",
              }}
            >
              {/* Glow layer */}
              <motion.div
                variants={{
                  hover: { opacity: 1 },
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: -1,
                  borderRadius: 24,
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(236,72,153,0.6))",
                  filter: "blur(28px)",
                  zIndex: 0,
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background:
                      "linear-gradient(135deg, #7c3aed, #ec4899)",
                  }}
                >
                  <Icon size={26} color="#fff" />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
