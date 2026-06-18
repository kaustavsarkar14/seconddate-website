import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Download, Star, MessageSquare } from 'lucide-react';

// Custom Animated Counter that supports decimals
const AnimatedCounter = ({ from = 0, to, duration = 2, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(from);
  
  // Transform the motion value to a formatted string with decimals
  const display = useTransform(count, (latest) => 
    Number(latest).toFixed(decimals)
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const StatsShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const stats = [
    {
      id: "downloads",
      title: "Total Downloads",
      value: 100,
      suffix: "k+",
      decimals: 0,
      icon: Download,
      colors: "from-blue-500 to-cyan-400",
      glowColor: "rgba(6,182,212,0.4)",
      borderColor: "group-hover:border-cyan-500/50"
    },
    {
      id: "rating",
      title: "Average Rating",
      value: 4.6,
      suffix: "",
      decimals: 1,
      icon: Star,
      colors: "from-amber-400 to-orange-500",
      glowColor: "rgba(245,158,11,0.4)",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      id: "reviews",
      title: "Happy Users",
      value: 5.5,
      suffix: "k+",
      decimals: 1,
      icon: MessageSquare,
      colors: "from-emerald-400 to-teal-500",
      glowColor: "rgba(16,185,129,0.4)",
      borderColor: "group-hover:border-emerald-500/50"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto p-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;
        
        return (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl border border-white/5 bg-slate-900/50 backdrop-blur-xl transition-all duration-500 overflow-hidden ${stat.borderColor}`}
            style={{
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            {/* Ambient Background Glow */}
            <motion.div 
              className={`absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl bg-gradient-to-br ${stat.colors} opacity-10`}
            />

            <div className="relative z-10 flex flex-col items-center">
              {/* Icon Container */}
              <div className={`p-4 rounded-2xl mb-6 bg-gradient-to-br ${stat.colors} shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out`}
                   style={{ boxShadow: `0 0 20px ${stat.glowColor}` }}>
                <Icon size={28} className="text-white" strokeWidth={2.5} />
              </div>

              {/* Number Container */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${stat.colors} drop-shadow-sm`}>
                  <AnimatedCounter 
                    from={0} 
                    to={stat.value} 
                    duration={2.5} 
                    decimals={stat.decimals} 
                  />
                </span>
                <span className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${stat.colors}`}>
                  {stat.suffix}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-sm md:text-base font-semibold tracking-wider text-slate-400 uppercase mt-2 group-hover:text-slate-200 transition-colors">
                {stat.title}
              </h4>
            </div>

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default StatsShowcase;