import { useState } from "react";
import {
  Coffee,
  Pizza,
  Film,
  Popcorn,
  Wine,
  IceCreamCone,
  Music,
  Cake,
  Flower2,
  Ticket,
  CupSoda,
  Martini,
  Candy,
  Headphones,
  Camera,
  Gift,
  Heart,
  Sparkles,
} from "lucide-react";

// Date-night icons (default set)
export const DATE_ICONS = [
  Coffee, Pizza, Film, Popcorn, Wine, IceCreamCone, Music, Cake, Flower2,
  Ticket, CupSoda, Martini, Candy, Headphones, Camera, Gift, Heart, Sparkles,
];

const makeFloaters = (icons, count, [minSize, maxSize], [minOpacity, maxOpacity]) => {
  const pool = [...icons].sort(() => Math.random() - 0.5);
  return Array.from({ length: count }, (_, i) => ({
    Icon: pool[i % pool.length],
    // Spread across evenly-sized lanes, jittered, so they never clump
    left: `${((i + 0.15 + Math.random() * 0.7) / count) * 100}%`,
    size: Math.round(minSize + Math.random() * (maxSize - minSize)),
    duration: 18 + Math.random() * 16,
    delay: -Math.random() * 34,
    swayDuration: 4 + Math.random() * 4,
    opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
    sway: `${Math.round((Math.random() - 0.5) * 60)}px`,
    spin: `${Math.round((Math.random() - 0.5) * 50)}deg`,
  }));
};

/* -------------------------------
   Subtle icons drifting up through their (relative, overflow-hidden) parent.
   Each lane is as tall as the parent, so the rise always spans exactly that section.
-------------------------------- */
const FloatingIcons = ({
  icons = DATE_ICONS,
  count = 12,
  size = [18, 30],
  opacity = [0.16, 0.32],
  className = "text-white",
}) => {
  const [floaters] = useState(() => makeFloaters(icons, count, size, opacity));

  return (
    <div aria-hidden="true" className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {floaters.map(({ Icon, ...f }, i) => (
        <span
          key={i}
          className="float-lane"
          style={{
            left: f.left,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            "--o": f.opacity,
          }}
        >
          <span
            className="float-sway"
            style={{ animationDuration: `${f.swayDuration}s`, "--sway": f.sway, "--spin": f.spin }}
          >
            <Icon size={f.size} strokeWidth={1.6} />
          </span>
        </span>
      ))}
    </div>
  );
};

export default FloatingIcons;
