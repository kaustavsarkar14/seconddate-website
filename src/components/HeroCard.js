import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroCard = ({ user, index, onNext }) => {
  const videoRef = useRef(null);

  const isFront = index === 0;
  const isSecond = index === 1;
  const isVisible = index <= 1;

  const uniqueTilt = (user.id * 17) % 10 - 5;

  // VIDEO PLAY / PAUSE
  useEffect(() => {
    if (!videoRef.current) return;

    if (isVisible) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isVisible]);

  return (
    <motion.div
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.35}
      onDragEnd={(_, info) => {
        const swipePower = Math.abs(info.offset.x * info.velocity.x);
        if (swipePower > 600) {
          onNext();
        }
      }}
      onTap={() => {
        if (isFront) onNext();
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 80, scale: 0.85 }}
      animate={{
        x: 0, // 🔒 hard center lock
        opacity: isFront ? 1 : isSecond ? 0.7 : 0,
        y: isFront ? 0 : isSecond ? 14 : 28,
        scale: isFront ? 1 : isSecond ? 0.96 : 0.92,
        zIndex: 10 - index,
        rotate: isFront
          ? uniqueTilt
          : isSecond
          ? -uniqueTilt / 2
          : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        y: { type: "spring", stiffness: 150, damping: 18 },
        scale: { duration: 0.3 },
        rotate: { type: "spring", stiffness: 200, damping: 20 },
        opacity: { duration: 0.25 },
      }}
      style={{
        pointerEvents: isFront ? "auto" : "none",
        transformOrigin: "center center",
      }}
      className="absolute top-0
        w-[240px] h-[340px]
        md:w-[320px] md:h-[480px]
        lg:w-[380px] lg:h-[540px]
        bg-white rounded-3xl overflow-hidden shadow-2xl
        border border-white/20 cursor-pointer"
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

      {/* CONTENT */}
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
        <div className="flex flex-wrap gap-1.5 md:gap-2 lg:gap-3">
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
