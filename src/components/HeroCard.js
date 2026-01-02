import { motion } from "framer-motion";

const HeroCard = ({ user, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{
        y: -16,
        rotate: index === 0 ? -2 : index === 1 ? 2 : -1,
      }}
      style={{
        position: "absolute",
        width: 260,
        height: 420,
        background: "#fff",
        borderRadius: 22,
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
        transform: `rotate(${index === 0 ? -6 : index === 1 ? 4 : -2}deg)`,
      }}
    >
      {/* MEDIA (image placeholder) */}
      <div
        style={{
          height: "55%",
          backgroundImage: `url(${user.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* META */}
      <div style={{ padding: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#111",
            }}
          >
            {user.name}, {user.age}
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#888",
            }}
          >
            Swipes: {user.swipes}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 6,
            fontSize: 14,
            color: "#444",
            flexWrap: "wrap",
          }}
        >
          <span>{user.gender}</span>
          <span>•</span>
          <span>{user.religion}</span>
        </div>

        {/* INTERESTS */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 14,
          }}
        >
          {user.interests.map((interest, i) => (
            <div
              key={i}
              style={{
                padding: "6px 12px",
                borderRadius: 20,
                background: "#f5f5f5",
                border: "1px solid #e3e3e3",
                fontSize: 13,
                color: "#444",
              }}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCard;
