import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroCard from "./HeroCard";

const initialUsers = [
  {
    id: 1,
    name: "Debadrita",
    age: 22,
    gender: "Female",
    religion: "Hindu",
    swipes: 128,
    video: require("../assets/videos/girl_4.mp4"),
    interests: ["🎧 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    id: 2,
    name: "Arijit",
    age: 25,
    gender: "Male",
    religion: "Christian",
    swipes: 142,
    video: require("../assets/videos/boy_1.mp4"),
    interests: ["📸 Photography", "🌿 Nature"],
  },
  {
    id: 3,
    name: "Sushmita",
    age: 23,
    gender: "Female",
    religion: "Hindu",
    swipes: 110,
    video: require("../assets/videos/girl_2.mp4"),
    interests: ["📖 Reading", "🎨 Art", "☕ Café hopping"],
  },
  {
    id: 4,
    name: "Joyesh",
    age: 26,
    gender: "Male",
    religion: "Hindu",
    swipes: 94,
    video: require("../assets/videos/boy_2.mp4"),
    interests: ["🏋️ Gym", "🎮 Gaming", "🍔 Food"],
  },
  {
    id: 5,
    name: "Selina",
    age: 20,
    gender: "Female",
    religion: "Hindu",
    swipes: 110,
    video: require("../assets/videos/girl_3.mp4"),
    interests: ["📖 Reading", "🎨 Art", "☕ Café hopping"],
  },
  {
    id: 6,
    name: "Anirban",
    age: 20,
    gender: "Male",
    religion: "Hindu",
    swipes: 94,
    video: require("../assets/videos/boy_3.mp4"),
    interests: ["🏋️ Gym", "🎮 Gaming", "🍔 Food"],
  },
];

const HeroCards = () => {
  const [users, setUsers] = useState(initialUsers);

  const rotateCards = () => {
    setUsers((prev) => {
      const next = [...prev];
      const first = next.shift();
      next.push(first);
      return next;
    });
  };

  // Optional auto rotation
  useEffect(() => {
    const id = setInterval(rotateCards, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="relative flex items-center justify-center
        w-[240px] h-[380px]
        md:w-[320px] md:h-[520px]
        lg:w-[380px] lg:h-[600px]"
      animate={{ y: [0, -16, 0] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {users.map((user, index) => (
        <HeroCard
          key={user.id}
          user={user}
          index={index}
          onNext={rotateCards}
        />
      ))}
    </motion.div>
  );
};

export default HeroCards;
