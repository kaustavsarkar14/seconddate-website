import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import appIcon from '../assets/app-icon.png';

const SmartAppBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          // CHANGED: Removed 'sticky top-0'. Replaced with 'relative'. 
          // Now it will push the navbar down, but scroll completely out of view when you scroll down!
          className="relative z-[100] w-full shrink-0 overflow-hidden bg-[#0b0b0f]" 
        >
          <div className="relative w-full bg-gradient-to-r from-[#3A0D18] via-[#4D1122] to-[#3D1A0D] shadow-[0_4px_20px_rgba(0,0,0,0.6)] border-b border-white/10 backdrop-blur-md">
            
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between px-3 py-4 md:px-6 max-w-7xl mx-auto w-full gap-3">
              
              <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                <button 
                  onClick={handleDismiss}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-white/20"
                  aria-label="Close app banner"
                >
                  <X size={20} />
                </button>

                <div className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden shadow-lg border border-white/10">
                  <img 
                    src={appIcon} 
                    alt="SecondDate App" 
                    className="w-full h-full object-cover bg-slate-800"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>

                <div className="flex flex-col justify-center min-w-0">
                  <h4 className="text-white text-base md:text-lg font-bold truncate leading-tight drop-shadow-sm">
                    SecondDate
                  </h4>
                  <p className="text-white/70 text-xs md:text-sm font-medium truncate mt-0.5">
                    Bengal's own dating app
                  </p>
                </div>
              </div>

              <motion.a
                href="https://play.google.com/store/apps/details?id=com.bongdate.bongDate"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="shrink-0 bg-white text-black px-6 py-2.5 rounded-full text-xs md:text-sm font-extrabold tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
              >
                OPEN
              </motion.a>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmartAppBanner;