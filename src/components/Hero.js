import { useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { PLAY_STORE_URL } from "../constants";
import BlindStage from "./hero/BlindStage";
import FloatingIcons from "./FloatingIcons";
import AppStoreComingSoon from "./AppStoreComingSoon";

/* -------------------------------
   Animation Variants
-------------------------------- */

const EASE = [0.22, 1, 0.36, 1]; // smooth premium modern easing

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE, delay } },
});

const Hero = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2 });
  const reduceMotion = useReducedMotion();

  // Pointer-driven parallax + spotlight (normalised -0.5..0.5), desktop mouse only
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  const stageX = useTransform(sx, (v) => v * 20);
  const stageY = useTransform(sy, (v) => v * 12);
  const auroraX = useTransform(sx, (v) => v * -50);
  const auroraY = useTransform(sy, (v) => v * -30);
  const spotX = useTransform(sx, (v) => `${(v + 0.5) * 100}%`);
  const spotY = useTransform(sy, (v) => `${(v + 0.5) * 100}%`);
  const spotlight = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(520px circle at ${x} ${y}, rgba(255,255,255,0.14), transparent 60%)`
  );

  const handlePointerMove = (e) => {
    if (reduceMotion || e.pointerType !== "mouse") return;
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="hero-screen hero-bg relative w-full flex flex-col overflow-hidden isolate"
    >
      {/* 🔹 Soft light blobs (radial gradients, no filter blur → smooth on iOS) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ x: auroraX, y: auroraY }}
      >
        <div className="hero-aurora hero-aurora-1" />
        <div className="hero-aurora hero-aurora-2" />
        <div className="hero-aurora hero-aurora-3" />
      </motion.div>

      {/* 🔹 Cursor spotlight */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-10 hidden md:block"
        style={{ background: spotlight }}
      />

      {/* 🔹 Bottom edge settles on exactly #ff7335 so it meets the next section's top fade seamlessly */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#ff7335] to-transparent pointer-events-none -z-10" />

      {/* 🔹 Floating date icons */}
      <div className="absolute inset-0 -z-10">
        <FloatingIcons count={12} size={[18, 30]} opacity={[0.16, 0.3]} />
      </div>

      {/* 🔹 Film grain */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-10 hero-grain" />

      {/* 🔹 Content: scene + headline + CTA centred in the first screen; gaps grow with screen height so tall phones don't get one big empty block */}
      <div className="relative flex-1 min-h-0 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-[92px] md:pt-[120px] pb-[max(clamp(40px,8svh,88px),env(safe-area-inset-bottom))] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="w-full min-h-0 flex items-center justify-center"
        >
          <motion.div className="w-full" style={{ x: stageX, y: stageY }}>
            <BlindStage playing={inView} reduceMotion={reduceMotion} />
          </motion.div>
        </motion.div>

        <motion.div
          className="shrink-0 w-full flex flex-col items-center mt-[clamp(16px,6svh,72px)]"
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <h1 className="flex flex-col items-center text-white leading-none">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
                className="block font-bold tracking-[-0.02em] text-[length:clamp(1.6rem,min(7.4vw,5.6svh),3.75rem)] leading-[1.1]"
              >
                Experience
              </motion.span>
            </span>

            {/* Not wrapped in overflow-hidden: clipping a blurred element cuts its soft edge into a hard box */}
            <span className="block pb-[0.06em]">
              <motion.span
                initial={{ opacity: 0, y: "35%", scale: 0.94, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: "0%", scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.45 }}
                className="block"
              >
                <span className="hero-sheen-text block font-black tracking-[-0.045em] text-[length:clamp(2.7rem,min(13.6vw,12.5svh),7.5rem)] leading-[1.02] pr-[0.04em]">
                  BlindDate
                </span>
              </motion.span>
            </span>
          </h1>

          {/* CTAs: Play Store (live) + App Store (coming soon popup), stacked; side by side on short screens */}
          <motion.div variants={fadeUp(1.5)} className="mt-[clamp(18px,3.4svh,40px)] flex flex-col short:flex-row shortdesk:flex-row items-center gap-[clamp(8px,1.4svh,14px)] short:gap-2">
            <div className="relative">
              {/* Glow sits behind the button as its own layer (no box-shadow on the animated element → iOS safe) */}
              <div aria-hidden="true" className="absolute -inset-5 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.55),rgba(255,255,255,0.12),transparent)] hero-breathe pointer-events-none" />
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={PLAY_STORE_URL}
                className="relative inline-flex items-center justify-center gap-3 short:gap-2 w-[236px] md:w-[290px] short:w-[min(164px,44vw)] py-3 md:py-4 short:py-2.5 short:text-[15px] bg-white text-[#111] rounded-full font-bold text-base md:text-xl hover:bg-gray-50 transition-colors transform-gpu will-change-transform"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/256/300/300218.png"
                  alt="Google Play"
                  className="h-6 md:h-7 short:h-5"
                />
                Download Now
              </motion.a>
            </div>
            <AppStoreComingSoon className="w-[236px] md:w-[290px] short:w-[min(164px,44vw)] py-3 md:py-4 short:py-2.5 text-base md:text-xl short:text-[15px] short:gap-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
