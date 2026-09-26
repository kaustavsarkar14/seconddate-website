import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


// Apple logo (Simple Icons, CC0)
export const AppleLogo = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const SPARKS = [
  { x: -118, y: -70, d: 0.25, s: 14, g: "✦" },
  { x: 112, y: -84, d: 0.35, s: 12, g: "♥" },
  { x: -96, y: 22, d: 0.45, s: 10, g: "♥" },
  { x: 124, y: 6, d: 0.3, s: 16, g: "✦" },
  { x: -40, y: -112, d: 0.4, s: 10, g: "✦" },
  { x: 54, y: -118, d: 0.5, s: 11, g: "♥" },
];

/* -------------------------------
   Popup (portalled to <body> so no transformed ancestor can trap position: fixed)
-------------------------------- */
const ComingSoonModal = ({ open, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-5" data-lenis-prevent>
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="appstore-soon-title"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative w-full max-w-[360px] rounded-[28px] overflow-hidden bg-[#141014] border border-white/10 text-center"
          >
            {/* Brand gradient header */}
            <div className="relative h-40 hero-bg flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.35),transparent_60%)]" />

              {SPARKS.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute text-white/80"
                  style={{ fontSize: p.s }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                  animate={{ x: p.x, y: p.y, opacity: [0, 1, 0.7], scale: 1 }}
                  transition={{ duration: 0.9, delay: p.d, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p.g}
                </motion.span>
              ))}

              {/* Apple badge */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
                className="relative w-20 h-20 rounded-[22px] bg-white flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, -8, 8, -4, 0] }}
                  transition={{ duration: 1.2, delay: 0.7, repeat: Infinity, repeatDelay: 2.2 }}
                >
                  <AppleLogo className="w-10 h-10 text-[#111]" />
                </motion.div>
              </motion.div>

              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 sm:px-6 pt-6 pb-5 sm:pb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff356e]/15 text-[#ff7a9a] text-[11px] font-bold tracking-[0.14em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff356e] animate-pulse" />
                Coming soon
              </span>
              <h3 id="appstore-soon-title" className="mt-3 text-[length:clamp(1.3rem,6.2vw,1.5rem)] leading-tight font-black tracking-tight text-white">
                SecondDate for iPhone
              </h3>
              {/* <p className="mt-2 text-sm leading-relaxed text-white/65">
                We're putting the finishing touches on the App Store version. Your blind date on iPhone is almost here 💞
              </p> */}

              {/* Short single-line label; the "Android" context lives in the caption so nothing wraps on narrow phones */}
              {/* <div className="mt-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                <span className="h-px flex-1 bg-white/10" />
                Available now on Android
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={PLAY_STORE_URL}
                className="mt-3 flex items-center justify-center gap-2.5 w-full h-12 px-4 rounded-full bg-white text-[#111] font-bold text-[15px] whitespace-nowrap"
              >
                <img src="https://cdn-icons-png.flaticon.com/256/300/300218.png" alt="" className="h-5 w-5 shrink-0 object-contain" />
                Get it on Google Play
              </motion.a> */}
              <button
                onClick={onClose}
                className="mt-2.5 w-full py-2.5 rounded-full text-white/70 hover:text-white font-semibold text-sm transition-colors"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

/* -------------------------------
   App Store button (opens the popup)
-------------------------------- */
const AppStoreComingSoon = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className={`relative inline-flex items-center justify-center gap-3 bg-[#111] text-white rounded-full font-bold transform-gpu will-change-transform ${className}`}
      >
        <AppleLogo className="h-6 md:h-7 w-6 md:w-7 short:h-5 short:w-5 -mt-0.5" />
        Coming Soon
      </motion.button>
      <ComingSoonModal open={open} onClose={close} />
    </>
  );
};

export default AppStoreComingSoon;
