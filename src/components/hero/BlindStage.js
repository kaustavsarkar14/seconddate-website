import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlindAvatar from "./BlindAvatar";

/* -------------------------------
   The blind date, played on loop:
   blindfolds on → they talk → both say yes → blindfolds off → it's a match
-------------------------------- */

const SCRIPT = [
  { who: "her", text: "hi… i literally can't see you 🙈" },
  { who: "him", text: "same lol. no filters then 😅" },
  { who: "her", text: "ok vibe check: chai or coffee?" },
  { who: "him", text: "chai. always ☕ + long walks" },
  { who: "her", text: "wait… you're kinda fun 👀" },
];

const TYPING_MS = 1000;
const HOLD_MS = 1500;
const MAX_VISIBLE = 3;

// Build a flat timeline of stage states once
const TIMELINE = (() => {
  const frames = [{ messages: 0, typing: null, phase: "idle", ms: 900 }];
  SCRIPT.forEach((line, i) => {
    frames.push({ messages: i, typing: line.who, phase: "talk", ms: TYPING_MS });
    frames.push({ messages: i + 1, typing: null, phase: "talk", ms: HOLD_MS });
  });
  frames.push({ messages: SCRIPT.length, typing: null, phase: "decide", ms: 1600 });
  // ~1s entrance + 5s on screen before the loop replays
  frames.push({ messages: SCRIPT.length, typing: null, phase: "match", ms: 6000 });
  frames.push({ messages: 0, typing: null, phase: "reset", ms: 900 });
  return frames;
})();

const MATCH_TEXT = "It's a Match!";
const CONFETTI_COLORS = ["#ffffff", "#ffd166", "#1d1d1f", "#ffe0e8"];
const CONFETTI_SHAPES = ["rect", "rect", "dot", "heart", "spark"];

const makeConfetti = () =>
  Array.from({ length: 26 }, (_, i) => {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.6;
    const power = 60 + Math.random() * 110;
    return {
      shape: CONFETTI_SHAPES[i % CONFETTI_SHAPES.length],
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      peakX: Math.cos(angle) * power,
      peakY: Math.sin(angle) * power,
      fall: 90 + Math.random() * 120,
      spin: (Math.random() - 0.5) * 720,
      size: 6 + Math.random() * 6,
      delay: 0.25 + Math.random() * 0.15,
    };
  });

const Confetti = ({ p }) => {
  if (p.shape === "heart" || p.shape === "spark") {
    return (
      <span style={{ color: p.color, fontSize: p.size * 2 }} className="leading-none">
        {p.shape === "heart" ? "♥" : "✦"}
      </span>
    );
  }
  return (
    <span
      className={p.shape === "dot" ? "block rounded-full" : "block rounded-[2px]"}
      style={{
        background: p.color,
        width: p.size,
        height: p.shape === "dot" ? p.size : p.size * 1.6,
      }}
    />
  );
};

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <linearGradient id="hero-heart-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#ffe3ea" />
      </linearGradient>
    </defs>
    <path
      d="M12 21s-7.4-4.5-9.9-9.2C.4 8.6 2.1 4.6 5.7 4.2c2.3-.3 4 .9 6.3 3.3 2.3-2.4 4-3.6 6.3-3.3 3.6.4 5.3 4.4 3.6 7.6C19.4 16.5 12 21 12 21z"
      fill="url(#hero-heart-fill)"
    />
    <path d="M7 7.6c-1 .3-1.8 1.2-1.9 2.4" stroke="#ff356e" strokeOpacity="0.35" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

const BlindStage = ({ playing = true, reduceMotion = false }) => {
  const [frameIdx, setFrameIdx] = useState(reduceMotion ? TIMELINE.length - 2 : 0);
  const rowRef = useRef(null);
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (!playing || reduceMotion) return;
    const t = setTimeout(
      () => setFrameIdx((i) => (i + 1) % TIMELINE.length),
      TIMELINE[frameIdx].ms
    );
    return () => clearTimeout(t);
  }, [frameIdx, playing, reduceMotion]);

  // How far each orb glides inwards on a match so they meet around the heart
  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const measure = () => {
      const w = row.clientWidth;
      const orb = row.clientHeight;
      const heart = orb * 0.62;
      setShift(Math.max(0, w / 2 - heart / 2 - orb - 4));
    };
    measure();
    // Defer to the next frame: re-rendering inside the observer callback triggers
    // "ResizeObserver loop completed with undelivered notifications"
    let raf = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    });
    ro.observe(row);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const frame = TIMELINE[frameIdx];
  const liked = frame.phase === "decide" || frame.phase === "match";
  const revealed = frame.phase === "match";
  const visible = SCRIPT.slice(0, frame.messages)
    .map((m, i) => ({ ...m, key: i }))
    .slice(-MAX_VISIBLE);

  // Fresh confetti every match
  const confetti = useMemo(() => (revealed ? makeConfetti() : []), [revealed]);

  const float = (delay) =>
    reduceMotion
      ? {}
      : { y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay } };
  const glide = { type: "spring", stiffness: 140, damping: 18, mass: 0.9 };

  return (
    <div className="relative w-full max-w-[600px] mx-auto flex flex-col items-center gap-[clamp(8px,1.8svh,20px)] select-none [--orb:clamp(56px,11svh,132px)] md:[--orb:clamp(80px,12svh,132px)]">
      {/* ---------- Avatars row ---------- */}
      <div ref={rowRef} className="relative w-full h-[var(--orb)] flex items-center justify-between">
        {/* Connection line */}
        <motion.svg
          className="absolute left-[var(--orb)] right-[var(--orb)] top-1/2 -translate-y-1/2 h-10 pointer-events-none"
          viewBox="0 0 400 40"
          preserveAspectRatio="none"
          aria-hidden="true"
          animate={{ opacity: revealed ? 0 : 0.7 }}
        >
          <path
            d="M0 20 C 80 0, 140 40, 200 20 S 320 0, 400 20"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
            vectorEffect="non-scaling-stroke"
            className="hero-dash-flow"
          />
        </motion.svg>

        {/* Centre chip while they talk */}
        <AnimatePresence>
          {!revealed && (
            <motion.div
              key="chip"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.2 } }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="hero-bob w-[calc(var(--orb)*0.4)] h-[calc(var(--orb)*0.4)] min-w-7 min-h-7 rounded-full bg-white flex items-center justify-center text-[length:calc(var(--orb)*0.2)]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={frame.phase === "decide" ? "decide" : "talk"}
                    initial={{ scale: 0, rotate: -40 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="leading-none"
                  >
                    {frame.phase === "decide" ? "💭" : "🙈"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="relative z-10"
          animate={{
            x: revealed ? shift : 0,
            rotate: revealed ? 8 : 0,
            ...(reduceMotion ? {} : { y: [0, -6, 0] }),
          }}
          transition={{ x: glide, rotate: glide, ...float(0) }}
        >
          <BlindAvatar side="left" talking={frame.typing === "her"} revealed={revealed} liked={liked} />
        </motion.div>

        <motion.div
          className="relative z-10"
          animate={{
            x: revealed ? -shift : 0,
            rotate: revealed ? -8 : 0,
            ...(reduceMotion ? {} : { y: [0, -6, 0] }),
          }}
          transition={{ x: glide, rotate: glide, ...float(1.2) }}
        >
          <BlindAvatar side="right" talking={frame.typing === "him"} revealed={revealed} liked={liked} />
        </motion.div>

        {/* Match burst: flash, shockwaves, heart, confetti */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="burst"
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
              exit={{ opacity: 0, transition: { duration: 0.35 } }}
            >
              <motion.span
                className="absolute w-[var(--orb)] h-[var(--orb)] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0)_70%)]"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3.2, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              />
              {[0, 1].map((r) => (
                <motion.span
                  key={r}
                  className="absolute w-[calc(var(--orb)*0.7)] h-[calc(var(--orb)*0.7)] rounded-full border-2 border-white"
                  initial={{ scale: 0.5, opacity: 0.9 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 + r * 0.25 }}
                />
              ))}

              {confetti.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute"
                  initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 1 }}
                  animate={{
                    x: [0, p.peakX, p.peakX * 1.25],
                    y: [0, p.peakY, p.peakY + p.fall],
                    scale: [0, 1, 0.9],
                    rotate: [0, p.spin * 0.6, p.spin],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 1.9, delay: p.delay, times: [0, 0.35, 1], ease: ["easeOut", "easeIn"] }}
                >
                  <Confetti p={p} />
                </motion.span>
              ))}

              <motion.div
                initial={{ scale: 0, rotate: -25 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 11, delay: 0.3 }}
                className="relative w-[calc(var(--orb)*0.62)] h-[calc(var(--orb)*0.62)]"
              >
                <HeartIcon className="w-full h-full hero-heartbeat" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---------- Chat / match text ---------- */}
      <div className="relative w-full max-w-[460px] h-[clamp(76px,13svh,150px)]">
        <div className="absolute inset-0 flex flex-col justify-end gap-1.5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)]">
          <AnimatePresence initial={false} mode="popLayout">
            {!revealed &&
              visible.map((m) => (
                <motion.div
                  key={m.key}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ originX: m.who === "her" ? 0 : 1 }}
                  className={`max-w-[82%] px-3.5 py-1.5 md:px-4 md:py-2 rounded-2xl text-[12.5px] md:text-[15px] font-semibold leading-snug ${
                    m.who === "her"
                      ? "self-start rounded-bl-md bg-white text-[#1d1d1f]"
                      : "self-end rounded-br-md bg-[#1d1d1f] text-white"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}

            {frame.typing && (
              <motion.div
                key={`typing-${frame.messages}`}
                layout
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className={`flex gap-1 px-3 py-2.5 rounded-2xl ${
                  frame.typing === "her" ? "self-start bg-white" : "self-end bg-[#1d1d1f]"
                }`}
              >
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className={`w-1.5 h-1.5 rounded-full hero-typing-dot ${frame.typing === "her" ? "bg-[#ff356e]" : "bg-white"}`}
                    style={{ animationDelay: `${d * 0.15}s` }}
                  />
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* It's a Match! */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="match-text"
              className="absolute inset-0 flex flex-col items-center justify-center"
              exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative">
                <p className="font-black text-white tracking-tight leading-none text-[length:clamp(1.6rem,min(7.5vw,5svh),2.75rem)]" aria-label={MATCH_TEXT}>
                  {MATCH_TEXT.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      aria-hidden="true"
                      className="inline-block"
                      initial={{ y: 26, opacity: 0, scale: 0.4, rotate: -12 }}
                      animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 420, damping: 14, delay: 0.55 + i * 0.035 }}
                    >
                      {ch === " " ? " " : ch}
                    </motion.span>
                  ))}
                </p>
                {/* Hand-drawn underline */}
                <svg viewBox="0 0 200 14" className="absolute left-0 right-0 -bottom-3 w-full h-3 overflow-visible" aria-hidden="true">
                  <motion.path
                    d="M4 9 C 50 2, 110 2, 196 7"
                    stroke="#ffffff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 1.05 }}
                  />
                </svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlindStage;
