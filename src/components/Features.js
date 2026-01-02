import { motion } from "framer-motion";

const features = [
  "Real people, real intentions",
  "No endless swiping fatigue",
  "Designed for Gen-Z dating",
  "Simple, safe & respectful",
];

const Features = () => {
  return (
    <section style={{ padding: "4rem 1.5rem" }}>
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: "2rem",
              borderRadius: 20,
              fontWeight: 500,
            }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
