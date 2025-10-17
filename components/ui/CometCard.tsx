"use client";

import React, { useRef } from "react";

type CometCardProps = {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
};

// Lightweight tilt card inspired by Aceternity Comet Card
const CometCard: React.FC<CometCardProps> = ({
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const rx = -(py * rotateDepth);
    const ry = px * rotateDepth;
    const tx = px * translateDepth;
    const ty = py * translateDepth;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={
        "rounded-2xl border border-[#D4AF37]/25 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-transform duration-150 will-change-transform " +
        (className ?? "")
      }
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

export default CometCard;


