import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroCard = ({ user, index }) => {
  const videoRef = useRef(null);

  const isFront = index === 0;
  const isSecond = index === 1;
  
  // LOGIC: Only the first 2 cards are "visible".
  // The rest are hidden to prevent shadow stacking and performance drain.
  const isVisible = index <= 1;
  
  const uniqueTilt = (user.id * 17) % 10 - 5;

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        // Play video only if card is visible
        videoRef.current.play().catch((e) => {
          // Handle auto-play restrictions silently
        });
      } else {
        // Pause video immediately if card goes to back of stack
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Optional: Reset video
      }
    }
  }, [isVisible]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{
        // FIX: Opacity is 0 for anything behind the 2nd card
        opacity: isFront ? 1 : isSecond ? 0.7 : 0,
        y: isFront ? 0 : isSecond ? 15 : 30,
        scale: isFront ? 1 : isSecond ? 0.96 : 0.92,
        // Z-Index ensures the front card is always physically on top
        zIndex: 10 - index, 
        rotate: isFront
          ? uniqueTilt
          : isSecond
          ? -uniqueTilt / 2
          : 0, // Don't rotate hidden cards
      }}
      transition={{
        opacity: { duration: 0.4 },
        y: { type: "spring", stiffness: 150, damping: 18 },
        scale: { duration: 0.4 },
        rotate: { type: "spring", stiffness: 200, damping: 20 },
        layout: { duration: 0.4 },
      }}
      // Optimization: Disable clicks/interaction on cards that are not front
      style={{ pointerEvents: isFront ? "auto" : "none" }}
      className="absolute top-0 left-0
        w-[240px] h-[340px]
        md:w-[320px] md:h-[480px]
        lg:w-[380px] lg:h-[540px]
        bg-white rounded-3xl overflow-hidden shadow-2xl
        origin-bottom border border-white/20"
    >
      {/* VIDEO */}
      <div className="relative h-[55%] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={user.video}
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* META INFO */}
      <div className="p-4 md:p-6 lg:p-7 flex flex-col h-[45%] justify-between">
        <div>
          <div className="flex justify-between items-center mb-1 md:mb-2">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-extrabold text-gray-900">
              {user.name}, {user.age}
            </h3>
            <span className="text-[10px] md:text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wide">
              {user.swipes} Swipes
            </span>
          </div>

          <div className="flex gap-2 text-xs md:text-sm lg:text-base text-gray-500 font-medium mb-3 md:mb-4">
            <span>{user.gender}</span>
            <span>•</span>
            <span>{user.religion}</span>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3 content-start">
          {user.interests.map((interest, i) => (
            <div
              key={i}
              className="px-2.5 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2
              rounded-full bg-gray-50 border border-gray-100
              text-[10px] md:text-xs lg:text-sm font-semibold text-gray-600"
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