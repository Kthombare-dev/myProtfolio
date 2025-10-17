"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type IconCloudProps = {
  images?: string[];
  radius?: number; // base radius in px
  speedSeconds?: number; // base speed
  className?: string;
};

// A lightweight, dependency-free "icon cloud" inspired by Magic UI's Icon Cloud API
// It renders three concentric, counter-rotating rings to simulate a 3D-ish cloud.
export const IconCloud: React.FC<IconCloudProps> = ({
  images = [],
  radius = 120,
  speedSeconds = 24,
  className,
}) => {
  const split = (arr: string[], parts: number) => {
    const out: string[][] = Array.from({ length: parts }, () => []);
    arr.forEach((v, i) => out[i % parts].push(v));
    return out;
  };

  const [ringA, ringB, ringC] = split(images, 3);

  const Ring = ({ imgs, r, dir = 1, speed = speedSeconds }: { imgs: string[]; r: number; dir?: 1 | -1; speed?: number }) => {
    const step = (2 * Math.PI) / Math.max(imgs.length, 1);
    return (
      <motion.div
        className="absolute inset-0"
        style={{ width: r * 2, height: r * 2, left: `calc(50% - ${r}px)`, top: `calc(50% - ${r}px)` }}
        animate={{ rotate: dir === 1 ? 360 : -360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {imgs.map((src, i) => {
          const angle = i * step;
          const x = r + Math.cos(angle) * r - 16;
          const y = r + Math.sin(angle) * r - 16;
          return (
            <div key={`${src}-${i}`} className="absolute" style={{ left: x, top: y }}>
              <div className="h-8 w-8 rounded-md border border-[#D4AF37]/30 bg-white/5 backdrop-blur flex items-center justify-center">
                <Image src={src} alt="icon" width={18} height={18} />
              </div>
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className} style={{ width: radius * 2.6, height: radius * 2.6 }}>
      <div className="relative w-full h-full">
        <Ring imgs={ringA} r={radius * 0.9} dir={1} speed={speedSeconds} />
        <Ring imgs={ringB} r={radius * 1.15} dir={-1} speed={speedSeconds * 1.2} />
        <Ring imgs={ringC} r={radius * 1.35} dir={1} speed={speedSeconds * 1.4} />
      </div>
    </div>
  );
};

export default IconCloud;


