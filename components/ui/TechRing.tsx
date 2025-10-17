"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TechRingProps = {
  icons: { src: string; alt: string }[];
  radius?: number; // in px
  speedSeconds?: number;
  className?: string;
};

export const TechRing: React.FC<TechRingProps> = ({
  icons,
  radius = 88,
  speedSeconds = 18,
  className,
}) => {
  const angleStep = (2 * Math.PI) / icons.length;

  return (
    <div className={className}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: speedSeconds }}
        className="relative"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {icons.map((icon, i) => {
          const angle = i * angleStep;
          const x = radius + Math.cos(angle) * radius - 20; // 40px icon
          const y = radius + Math.sin(angle) * radius - 20;
          return (
            <div
              key={i}
              className="absolute" 
              style={{ left: x, top: y }}
            >
              <div className="h-10 w-10 rounded-md border border-[#D4AF37]/30 bg-white/5 backdrop-blur flex items-center justify-center">
                <Image src={icon.src} alt={icon.alt} width={22} height={22} />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechRing;


