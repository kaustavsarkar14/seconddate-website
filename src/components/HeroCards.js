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
    video: require("../assets/videos/girl_1.mp4"),
    interests: ["🎧 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    id: 2,
    name: "Arijit",
    age: 25,
    gender: "Female",
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
    id: 3,
    name: "Selina",
    age: 20,
    gender: "Female",
    religion: "Hindu",
    swipes: 110,
    video: require("../assets/videos/girl_3.mp4"),
    interests: ["📖 Reading", "🎨 Art", "☕ Café hopping"],
  },
  {
    id: 4,
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

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setUsers((prevUsers) => {
          const newArray = [...prevUsers];
          const firstItem = newArray.shift();
          newArray.push(firstItem);
          return newArray;
        });
      }, 4000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <motion.div
      // Mobile: 240x380 | Desktop (md): 320x520 | Large Desktop (lg): 380x600
      className="relative w-[240px] h-[380px] md:w-[320px] md:h-[520px] lg:w-[380px] lg:h-[600px]"
      animate={{
        y: [0, -20, 0], // Increased float range slightly for larger size
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      {users.map((user, index) => {
        return <HeroCard key={user.id} user={user} index={index} />;
      })}
    </motion.div>
  );
};

export default HeroCards;
