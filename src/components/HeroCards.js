import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // 1. Import motion
import HeroCard from "./HeroCard";

const initialUsers = [
  // ... (keep your existing user data here)
  {
    id: 1,
    name: "Aanya",
    age: 24,
    gender: "Female",
    religion: "Hindu",
    swipes: 128,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    interests: ["🎧 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    id: 2,
    name: "Rohan",
    age: 26,
    gender: "Male",
    religion: "Hindu",
    swipes: 94,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    interests: ["🏋️ Gym", "🎮 Gaming", "🍔 Food"],
  },
  {
    id: 3,
    name: "Meera",
    age: 23,
    gender: "Female",
    religion: "Christian",
    swipes: 142,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    interests: ["📸 Photography", "🌿 Nature"],
  },
];

const HeroCards = () => {
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    // Wait a bit after initial load before starting the cycle
    const startTimeout = setTimeout(() => {
      // Start the infinite cycling
      const interval = setInterval(() => {
        setUsers((prevUsers) => {
          const newArray = [...prevUsers];
          const firstItem = newArray.shift(); // Remove first
          newArray.push(firstItem); // Add to end
          return newArray;
        });
      }, 4000); // Change card every 4 seconds

      return () => clearInterval(interval);
    }, 2000); // Delay first cycle by 2 seconds

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    // 2. Change div to motion.div and apply floating animation
    <motion.div
      className="relative w-[240px] h-[380px] md:w-[280px] md:h-[480px]"
      animate={{
        y: [0, -15, 0], // Move up 15px, then back down to 0
      }}
      transition={{
        duration: 6, // Takes 6 seconds for one full cycle (slow and subtle)
        repeat: Infinity, // Loops forever
        repeatType: "mirror", // Reverses the animation smoothly (up -> down -> up)
        ease: "easeInOut", // Soft eases so it doesn't jerk at the top/bottom
      }}
    >
      {/* We reverse the array for rendering so the first item in state 
          appears visually on top (highest Z-index) */}
      {users.map((user, index) => {
        return <HeroCard key={user.id} user={user} index={index} />;
      })}
    </motion.div>
  );
};

export default HeroCards;