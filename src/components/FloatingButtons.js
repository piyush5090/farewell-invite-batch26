"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after scroll or small delay
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Default visible on mobile or small delay
    const timer = setTimeout(() => setIsVisible(true), 2000);
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Call Button */}
            <motion.a
              href="tel:+917773095684"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex items-center justify-center w-14 h-14 rounded-full glass-panel-gold bg-amber-500/10 hover:bg-amber-500/20 text-yellow-400 border border-yellow-500/30 shadow-lg hover:shadow-yellow-500/20 transition-colors duration-300"
              title="Call Organizer"
              aria-label="Call Organizer"
            >
              <Phone className="w-6 h-6 animate-pulse" />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://chat.whatsapp.com/HbR4vn97EAcKdCfbUUkG5f"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/20 border border-emerald-400/30 transition-colors duration-300"
              title="Join WhatsApp Group"
              aria-label="Join WhatsApp Group"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
