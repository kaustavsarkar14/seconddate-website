import { motion, AnimatePresence } from "framer-motion";

/* -------------------------------
   Blindfolded avatar orb (sized by the --orb CSS variable)
   - side: "left" (her) | "right" (him); both wear a red cloth blindfold
   - talking: animates the mouth
   - revealed: blindfold flies off, happy eyes appear
-------------------------------- */

const TAIL_EASE = { duration: 2.4, repeat: Infinity, ease: "easeInOut" };

const BlindAvatar = ({ side = "left", talking = false, revealed = false, liked = false }) => {
  const isHer = side === "left";
  const id = isHer ? "her" : "him";
  // Knot sits on the outer side so the tails stream away from the other person
  const flip = isHer ? 1 : -1;
  const knotX = isHer ? 62 : 138;

  return (
    <div className="relative w-[var(--orb)] h-[var(--orb)] shrink-0">
      {/* Soft white glow (radial gradient instead of box-shadow: cheaper + iOS safe) */}
      <div className="absolute -inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0.12)_45%,transparent_70%)] pointer-events-none" />
      {/* Rotating sheen ring */}
      <div className="absolute -inset-[3px] rounded-full hero-conic-ring" />

      {/* Orb */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,#fff4ec_0%,#ffd3cf_45%,#ff9fb2_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.5)_0%,transparent_38%)]" />
      </div>

      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full overflow-visible" aria-hidden="true">
        <defs>
          <clipPath id={`orb-clip-${id}`}>
            <circle cx="100" cy="100" r="100" />
          </clipPath>
          <linearGradient id={`skin-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6cfb2" />
            <stop offset="100%" stopColor="#e7ae88" />
          </linearGradient>
          <linearGradient id={`hair-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a2621" />
            <stop offset="100%" stopColor="#140c0a" />
          </linearGradient>
          <linearGradient id={`top-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isHer ? "#ffffff" : "#26262b"} />
            <stop offset="100%" stopColor={isHer ? "#f3eef0" : "#0f0f12"} />
          </linearGradient>
          <linearGradient id={`ribbon-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec2f3f" />
            <stop offset="55%" stopColor="#d01f30" />
            <stop offset="100%" stopColor="#9e0f1d" />
          </linearGradient>
        </defs>

        {/* Bust (clipped to the orb) */}
        <g clipPath={`url(#orb-clip-${id})`}>
          {/* Long hair behind (her) */}
          {isHer && (
            <path
              d="M58 92 C54 44 146 44 142 92 C144 118 150 140 156 162 C130 176 70 176 44 162 C50 140 56 118 58 92 Z"
              fill={`url(#hair-${id})`}
            />
          )}
          {/* Neck */}
          <path d="M86 118 L114 118 L116 146 L84 146 Z" fill="#dc9f7b" />
          {/* Shoulders / top */}
          <path d="M26 212 C26 168 56 146 100 146 C144 146 174 168 174 212 Z" fill={`url(#top-${id})`} />
          {/* Head */}
          <ellipse cx="100" cy="88" rx="38" ry="42" fill={`url(#skin-${id})`} />
          {/* Hair on top */}
          {isHer ? (
            <path d="M60 92 C54 38 146 38 140 92 C138 82 132 76 122 73 C104 68 90 70 76 74 C68 78 63 84 60 92 Z" fill={`url(#hair-${id})`} />
          ) : (
            <path d="M62 86 C56 36 144 36 138 86 C136 78 130 73 120 71 C104 67 86 69 74 72 C68 76 64 80 62 86 Z" fill={`url(#hair-${id})`} />
          )}

          {/* Blush */}
          <ellipse cx="78" cy="104" rx="7" ry="4" fill="#ff5a7a" opacity="0.35" />
          <ellipse cx="122" cy="104" rx="7" ry="4" fill="#ff5a7a" opacity="0.35" />

          {/* Mouth */}
          <motion.path
            d="M91 110 Q100 118 109 110"
            stroke="#7a2b2b"
            strokeWidth="3"
            strokeLinecap="round"
            fill="#7a2b2b"
            fillOpacity={0}
            style={{ transformOrigin: "100px 112px", transformBox: "view-box" }}
            animate={
              talking
                ? { scaleY: [1, 1.9, 1, 1.6, 1], fillOpacity: [0, 0.9, 0, 0.9, 0] }
                : { scaleY: 1, fillOpacity: 0 }
            }
            transition={talking ? { duration: 0.7, repeat: Infinity } : { duration: 0.2 }}
          />

          {/* Happy eyes after the reveal */}
          <AnimatePresence>
            {revealed && (
              <motion.g
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                <path d="M80 90 Q86 83 92 90" stroke="#2a1a16" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <path d="M108 90 Q114 83 120 90" stroke="#2a1a16" strokeWidth="3.2" strokeLinecap="round" fill="none" />
              </motion.g>
            )}
          </AnimatePresence>
        </g>

        {/* Blindfold (not clipped, so the tails can stream out of the orb) */}
        <AnimatePresence>
          {!revealed && (
            <motion.g
              key="blindfold"
              initial={{ opacity: 0, y: -18, rotate: -8 * flip }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -60, x: -40 * flip, rotate: -30 * flip }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "100px 88px", transformBox: "view-box" }}
            >
              {/* Tails (start with a real `d`, otherwise the first frame renders d="undefined") */}
              <motion.path
                fill={`url(#ribbon-${id})`}
                d={tailPath(knotX, flip, 0)}
                initial={{ d: tailPath(knotX, flip, 0) }}
                animate={{ d: [tailPath(knotX, flip, 0), tailPath(knotX, flip, 1), tailPath(knotX, flip, 0)] }}
                transition={TAIL_EASE}
              />
              <motion.path
                fill={`url(#ribbon-${id})`}
                opacity={0.9}
                d={tailPath2(knotX, flip, 0)}
                initial={{ d: tailPath2(knotX, flip, 0) }}
                animate={{ d: [tailPath2(knotX, flip, 0), tailPath2(knotX, flip, 1), tailPath2(knotX, flip, 0)] }}
                transition={{ ...TAIL_EASE, duration: 2.9 }}
              />
              {/* Band across the eyes */}
              <path d="M58 78 Q100 70 142 78 L143 98 Q100 90 57 98 Z" fill={`url(#ribbon-${id})`} />
              {/* Fold shading + silky highlight */}
              <path d="M60 93 Q100 86 141 93" stroke="rgba(80,0,12,0.35)" strokeWidth="2" fill="none" />
              <path d="M62 81 Q100 74 138 81" stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Knot */}
              <ellipse cx={knotX} cy="88" rx="8" ry="10" fill="#b8182a" />
              <ellipse cx={knotX - 2 * flip} cy="85" rx="3" ry="4" fill="rgba(255,255,255,0.35)" />
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      {/* "Interested" heart badge */}
      <AnimatePresence>
        {liked && (
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 16 }}
            className={`absolute -bottom-1 ${isHer ? "-right-1" : "-left-1"} w-[34%] h-[34%] rounded-full bg-white border-2 border-[#ff356e] flex items-center justify-center text-[length:calc(var(--orb)*0.16)]`}
          >
            <span className="leading-none">💗</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Two ribbon tails streaming outward/down from the knot; `t` blends between two flutter poses
function tailPath(kx, flip, t) {
  const dx = (v) => kx - flip * v;
  const wave = t ? 10 : -6;
  return `M${dx(0)} 84 C${dx(22)} ${86 + wave} ${dx(34)} ${104 - wave} ${dx(52)} ${118 + wave} L${dx(46)} ${128 + wave} C${dx(30)} ${114 - wave} ${dx(18)} ${100 + wave} ${dx(0)} 94 Z`;
}

function tailPath2(kx, flip, t) {
  const dx = (v) => kx - flip * v;
  const wave = t ? -8 : 7;
  return `M${dx(0)} 88 C${dx(14)} ${104 + wave} ${dx(18)} ${122 - wave} ${dx(30)} ${142 + wave} L${dx(20)} ${146 + wave} C${dx(10)} ${128 - wave} ${dx(6)} ${110 + wave} ${dx(-2)} 96 Z`;
}

export default BlindAvatar;
