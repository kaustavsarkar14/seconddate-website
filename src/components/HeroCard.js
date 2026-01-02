import { motion } from "framer-motion";

const HeroCard = ({ user, index }) => {
  const isFront = index === 0;
  const isSecond = index === 1;

  // 1. Generate a "random" but stable tilt based on the User ID.
  // This ensures each specific card has its own unique tilt personality.
  // "Aanya" might tilt -3deg, "Rohan" might tilt +2deg.
  const uniqueTilt = (user.id * 17) % 10 - 5; // Generates a number between -5 and 5
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{
        opacity: isFront ? 1 : isSecond ? 0.7 : 0.4,
        y: isFront ? 0 : isSecond ? 15 : 30,
        scale: isFront ? 1 : isSecond ? 0.96 : 0.92,
        zIndex: 3 - index,
        
        // 2. Apply the dynamic tilt
        // Front card gets the full unique tilt
        // Second card tilts slightly opposite to create a messy stack look
        // Third card is subtle
        rotate: isFront 
          ? uniqueTilt 
          : isSecond 
            ? -uniqueTilt / 2  
            : uniqueTilt / 4, 
      }}
      transition={{
        opacity: { duration: 0.4 },
        y: { type: "spring", stiffness: 150, damping: 18 }, // Snappy vertical move
        scale: { duration: 0.4 },
        rotate: { type: "spring", stiffness: 200, damping: 20 }, // 3. Springy rotation
        layout: { duration: 0.4 }
      }}
      // Mobile: 240px width, 340px height | Desktop: 280px width, 440px height
      className="absolute top-0 left-0 w-[240px] h-[340px] md:w-[280px] md:h-[440px] bg-white rounded-3xl overflow-hidden shadow-2xl origin-bottom border border-white/20"
    >
      {/* MEDIA */}
      <div
        className="h-[55%] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${user.image})` }}
      />

      {/* META INFO */}
      <div className="p-4 flex flex-col h-[45%] justify-between">
        <div>
          {/* Name & Swipes */}
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg md:text-xl font-extrabold text-gray-900">
              {user.name}, {user.age}
            </h3>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wide">
              {user.swipes} Swipes
            </span>
          </div>

          {/* Demographics */}
          <div className="flex gap-2 text-xs md:text-sm text-gray-500 font-medium mb-3">
            <span>{user.gender}</span>
            <span>•</span>
            <span>{user.religion}</span>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 content-start">
          {user.interests.map((interest, i) => (
            <div
              key={i}
              className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gray-50 border border-gray-100 text-[10px] md:text-xs font-semibold text-gray-600"
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