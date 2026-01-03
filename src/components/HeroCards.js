import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroCard from "./HeroCard";

const initialUsers = [
  {
    id: 1,
    name: "Aanya",
    age: 24,
    gender: "Female",
    religion: "Hindu",
    swipes: 128,
    image: require("../assets/card-images/girl_1.png"),
    interests: ["🎧 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    id: 2,
    name: "Meera",
    age: 23,
    gender: "Female",
    religion: "Christian",
    swipes: 142,
    image: require("../assets/card-images/girl_2.png"),
    interests: ["📸 Photography", "🌿 Nature"],
  },
  {
    id: 4,
    name: "Rohan",
    age: 26,
    gender: "Male",
    religion: "Hindu",
    swipes: 94,
    image: require("../assets/card-images/boy_1.png"),
    interests: ["🏋️ Gym", "🎮 Gaming", "🍔 Food"],
  },
  {
    id: 3,
    name: "Ishita",
    age: 25,
    gender: "Female",
    religion: "Hindu",
    swipes: 110,
    image: require("../assets/card-images/girl_3.png"),
    interests: ["📖 Reading", "🎨 Art", "☕ Café hopping"],
  },

  {
    id: 5,
    name: "Arjun",
    age: 27,
    gender: "Male",
    religion: "Hindu",
    swipes: 101,
    image: require("../assets/card-images/boy_2.png"),
    interests: ["🏍️ Bikes", "📷 Street photos", "🎧 Podcasts"],
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
