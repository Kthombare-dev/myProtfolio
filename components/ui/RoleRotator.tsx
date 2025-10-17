"use client";
import React, { useEffect, useState } from "react";

type RoleRotatorProps = {
  roles: string[];
  typingSpeedMs?: number; // per character
  pauseMs?: number; // pause at end of full word
  deletingSpeedMs?: number; // per character while deleting
  className?: string;
};

// Lightweight typing/deleting animation for rotating roles
export const RoleRotator: React.FC<RoleRotatorProps> = ({
  roles,
  typingSpeedMs = 60,
  deletingSpeedMs = 40,
  pauseMs = 1200,
  className,
}) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(roles[0] ?? "");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (roles.length === 0) return;
    const full = roles[index % roles.length];

    if (phase === "typing") {
      if (display.length < full.length) {
        const timeout = setTimeout(() => {
          setDisplay(full.slice(0, display.length + 1));
        }, typingSpeedMs);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (display.length > 0) {
        const timeout = setTimeout(() => {
          setDisplay(display.slice(0, -1));
        }, deletingSpeedMs);
        return () => clearTimeout(timeout);
      }
      setIndex((i) => (i + 1) % roles.length);
      setPhase("typing");
      return;
    }

    // pausing
    const timeout = setTimeout(() => setPhase("deleting"), pauseMs);
    return () => clearTimeout(timeout);
  }, [display, phase, index, roles, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span className="inline-block w-[1ch] -mb-1 animate-pulse">|</span>
    </span>
  );
};

export default RoleRotator;


