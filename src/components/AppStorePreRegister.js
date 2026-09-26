import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { savePreRegistration } from "../firebase";

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const inputClass =
  "w-full h-12 px-4 rounded-2xl bg-white/[0.06] border border-white/10 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#ff356e] focus:bg-white/[0.08]";

/* -------------------------------
   Pre-register form / success view
-------------------------------- */
const PreRegisterForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | saving | done
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const cleanName = name.trim().replace(/\s+/g, " ");
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) return setError("Please enter your name.");
    if (cleanName.length > 80) return setError("That name is a bit long. Try a shorter one.");
    if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 254) return setError("Please enter a valid email address.");

    setError("");
    setStatus("saving");
    try {
      await savePreRegistration({ name: cleanName, email: cleanEmail });
      setName(cleanName);
      setEmail(cleanEmail);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError(
        err?.message === "timeout"
          ? "Couldn't reach our servers. Check your connection and try again."
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status !== "done" ? (
        <motion.form
          key="form"
          onSubmit={submit}
          noValidate
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="mt-5 flex flex-col gap-2.5 text-left"
        >
          <label htmlFor="prereg-name" className="sr-only">Your name</label>
          <input
            id="prereg-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === "saving"}
            className={inputClass}
          />
          <label htmlFor="prereg-email" className="sr-only">Email address</label>
          <input
            id="prereg-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="Email address"
            maxLength={254}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "saving"}
            className={inputClass}
          />

          <AnimatePresence>
            {error && (
              <motion.p
                role="alert"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="px-1 text-[13px] font-medium text-[#ff7a9a]"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            disabled={status === "saving"}
            className="mt-1.5 h-12 w-full rounded-full hero-bg text-white font-bold text-[15px] flex items-center justify-center gap-2 disabled:opacity-80"
          >
            {status === "saving" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Saving…
              </>
            ) : (
              "Pre-register"
            )}
          </motion.button>
          <p className="text-center text-[11px] text-white/40">
            We'll only email you about the iOS launch.
          </p>
        </motion.form>
      ) : (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-5 flex flex-col items-center"
          role="status"
        >
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 14, delay: 0.1 }}
            className="w-14 h-14 rounded-full hero-bg flex items-center justify-center"
          >
            <Check size={28} strokeWidth={3} className="text-white" />
          </motion.div>
          <p className="mt-4 text-lg font-extrabold text-white">You're on the list! 💞</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/65">
            Thanks {name.split(" ")[0]}! We'll email{" "}
            <span className="text-white font-semibold break-all">{email}</span> the moment
            SecondDate lands on the App Store.
          </p>
          <button
            onClick={onClose}
            className="mt-5 h-12 w-full rounded-full bg-white text-[#111] font-bold text-[15px]"
          >
            Done
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* -------------------------------
   Popup (portalled to <body> so no transformed ancestor can trap position: fixed)
-------------------------------- */
const PreRegisterModal = ({ open, onClose }) => {
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
        // Scrollable overlay so the card stays reachable when the phone keyboard is open
        <div className="fixed inset-0 z-[200] overflow-y-auto" data-lenis-prevent>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="relative min-h-full flex items-center justify-center p-4 sm:p-5 pointer-events-none">
            {/* Card */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="prereg-title"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="relative w-full max-w-[360px] rounded-[28px] overflow-hidden bg-[#141014] border border-white/10 text-center pointer-events-auto"
            >
              {/* Brand gradient header */}
              <div className="relative h-32 sm:h-40 hero-bg flex items-center justify-center overflow-hidden">
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
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] sm:rounded-[22px] bg-white flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: [0, -8, 8, -4, 0] }}
                    transition={{ duration: 1.2, delay: 0.7, repeat: Infinity, repeatDelay: 2.2 }}
                  >
                    <AppleLogo className="w-8 h-8 sm:w-10 sm:h-10 text-[#111]" />
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
                <h3 id="prereg-title" className="mt-3 text-[length:clamp(1.3rem,6.2vw,1.5rem)] leading-tight font-black tracking-tight text-white">
                  SecondDate for iPhone
                </h3>
                <p className="mt-1.5 text-sm text-white/60">
                  Pre-register and be the first to know when we launch.
                </p>

                <PreRegisterForm onClose={onClose} />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

/* -------------------------------
   App Store button (opens the pre-register popup)
-------------------------------- */
const AppStorePreRegister = ({ className = "" }) => {
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
        Pre-register
      </motion.button>
      <PreRegisterModal open={open} onClose={close} />
    </>
  );
};

export default AppStorePreRegister;
