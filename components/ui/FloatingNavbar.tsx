"use client";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  

  // Split into primary and more groups for desktop navbar
  const { primaryItems, moreItems } = useMemo(() => {
    const primarySet = new Set(["Home", "About", "Projects"]);
    const primary = navItems.filter((n) => primarySet.has(n.name));
    const more = navItems.filter((n) => !primarySet.has(n.name));
    return { primaryItems: primary, moreItems: more };
  }, [navItems]);

  // Note: Journey bar removed; section observer not needed.

  const renderIcon = (label: string) => {
    const key = label.toLowerCase();
    if (key === "home") return <span aria-hidden>🏠</span>;
    if (key === "about") return <span aria-hidden>👤</span>;
    if (key === "skills") return <span aria-hidden>🛠️</span>;
    if (key === "experience") return <span aria-hidden>💼</span>;
    if (key === "projects") return <span aria-hidden>📁</span>;
    if (key === "leadership") return <span aria-hidden>👑</span>;
    if (key === "certificates") return <span aria-hidden>🎓</span>;
    if (key === "contact") return <span aria-hidden>✉️</span>;
    return null;
  };

  return (
    <nav className={cn("fixed top-4 inset-x-0 z-[5000] flex justify-center", className)}>
      <div
        className="px-3 sm:px-4 lg:px-5 w-auto"
      >
        <div className="hidden md:inline-block rounded-full p-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#b38600] to-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.35)] max-w-[calc(100vw-1rem)] overflow-hidden">
          <div
            className="h-14 flex items-center justify-between rounded-full bg-[rgba(0,0,0,0.85)] backdrop-blur px-3 w-auto"
          >
          <div />

          <div className="hidden md:flex items-center gap-4 lg:gap-6 whitespace-nowrap">
            {primaryItems.map((navItem, idx) => (
              <Link
                key={`dplink=${idx}`}
                href={navItem.link}
                className="text-[13px] md:text-sm lg:text-base text-neutral-200 hover:text-white transition-colors px-2 py-1 rounded-md inline-flex items-center gap-2"
              >
                <span className="hidden lg:inline">{renderIcon(navItem.name)}</span>
                <span>{navItem.name}</span>
              </Link>
            ))}

            {moreItems.length > 0 && (
              <div className="relative" onMouseLeave={() => setIsMoreOpen(false)}>
                <button
                  className="inline-flex items-center gap-1 text-[13px] md:text-sm lg:text-base text-neutral-200 hover:text-white transition-colors px-2 py-1 rounded-md"
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onClick={() => setIsMoreOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={isMoreOpen}
                >
                  More <span aria-hidden className="ml-0.5">▾</span>
                </button>
                <AnimatePresence>
                  {isMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      className="absolute right-0 mt-2 min-w-[14rem] md:min-w-[18rem] rounded-xl border border-[#D4AF37]/20 bg-[rgba(0,0,0,0.92)] backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.45)] p-2 z-[5100]"
                      role="menu"
                    >
                      <div className="flex flex-col gap-1">
                        {moreItems.map((item, i) => (
                          <Link
                            key={`more-${i}`}
                            href={item.link}
                            className="group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] md:text-sm text-neutral-200 hover:text-white hover:bg-white/5 transition-all duration-200 ease-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:translate-x-0.5"
                            onClick={() => setIsMoreOpen(false)}
                            role="menuitem"
                          >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#D4AF37]/10">
                              {renderIcon(item.name)}
                            </span>
                            <span className="flex-1">{item.name}</span>
                            <span className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 text-[#D4AF37] transition-all duration-200" aria-hidden>
                              ↗
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2" />
        </div>
        </div>
      </div>

      {/* Mobile hamburger at top-right */}
      <button
        aria-label="Open menu"
        className="md:hidden fixed top-4 right-4 z-[5050] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[rgba(0,0,0,0.85)] text-neutral-200 hover:text-white shadow-[0_0_12px_rgba(212,175,55,0.25)]"
        onClick={() => setIsOpen(true)}
      >
        <span aria-hidden>☰</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-[5040] bg-black/50"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="md:hidden fixed top-0 right-0 z-[5060] h-full w-[80vw] max-w-[320px] bg-[rgba(0,0,0,0.92)] backdrop-blur-xl border-l border-[#D4AF37]/30 shadow-[0_0_24px_rgba(212,175,55,0.25)]"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-4 h-14 border-b border-white/10">
                <span className="text-sm text-neutral-300">Menu</span>
                <button
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 hover:text-white hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  ✖️
                </button>
              </div>
              <nav className="p-3 space-y-1">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`slink=${idx}`}
                    href={navItem.link}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>
                      {(() => {
                        const key = navItem.name.toLowerCase();
                        if (key === "home") return <span aria-hidden>🏠</span>;
                        if (key === "about") return <span aria-hidden>👤</span>;
                        if (key === "skills") return <span aria-hidden>🛠️</span>;
                        if (key === "experience") return <span aria-hidden>💼</span>;
                        if (key === "projects") return <span aria-hidden>📁</span>;
                        if (key === "leadership") return <span aria-hidden>👑</span>;
                        if (key === "certificates") return <span aria-hidden>🎓</span>;
                        if (key === "contact") return <span aria-hidden>✉️</span>;
                        return null;
                      })()}
                    </span>
                    <span className="text-sm">{navItem.name}</span>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </nav>
  );
};
