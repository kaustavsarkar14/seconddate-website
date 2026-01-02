import { motion } from "framer-motion";

const AppPreview = () => {
  return (
    <section
      style={{
        padding: "6rem 1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        className="glass"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: 280,
          height: 560,
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#aaa",
        }}
      >
        App UI Preview
      </motion.div>
    </section>
  );
};

export default AppPreview;
