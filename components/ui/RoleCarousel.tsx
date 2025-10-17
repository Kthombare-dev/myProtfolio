"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RoleCarouselProps = {
  roles: string[];
  intervalMs?: number;
  mode?: "fade" | "mask"; // B or C
  className?: string;
};

export const RoleCarousel: React.FC<RoleCarouselProps> = ({
  roles,
  intervalMs = 1600,
  mode = "fade",
  className,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), intervalMs);
    return () => clearInterval(t);
  }, [roles, intervalMs]);

  const current = roles[index % roles.length];

  if (mode === "mask") {
    return (
      <div className={`relative inline-flex overflow-hidden ${className || ""}`} style={{ lineHeight: 1.1 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current}
            initial={{ y: "100%", opacity: 0.0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0.0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD700] to-white"
          >
            {current}
          </motion.span>
        </AnimatePresence>
        <span aria-hidden className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#D4AF37]/60 via-[#FFD700] to-[#b38600]/60" />
      </div>
    );
  }

  // fade/slide gentle
  return (
    <div className={`relative inline-flex ${className || ""}`} style={{ lineHeight: 1.1 }}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD700] to-white drop-shadow-[0_0_8px_rgba(212,175,55,0.25)]"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RoleCarousel;


