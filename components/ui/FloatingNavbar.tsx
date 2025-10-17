"use client";
import React, { useEffect, useMemo, useState } from "react";
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
  const [activeId, setActiveId] = useState<string>("home");
  

  // Split into primary and more groups for desktop navbar
  const { primaryItems, moreItems } = useMemo(() => {
    // Explicit order; ensure Contact is included visibly
    const order = ["Home", "Skills", "Experience", "Leadership", "Projects", "Contact"];
    const byName = (name: string) => navItems.find((n) => n.name === name);
    const primary = order
      .map((name) => byName(name))
      .filter((n): n is { name: string; link: string; icon?: JSX.Element } => Boolean(n));
    const primaryNames = new Set(primary.map((p) => p.name));
    const more = navItems.filter((n) => !primaryNames.has(n.name));
    return { primaryItems: primary, moreItems: more };
  }, [navItems]);

  // Note: Journey bar removed; section observer not needed.
  // Observe sections to highlight active nav item
  useEffect(() => {
    if (typeof window === "undefined") return;
    const ids = navItems
      .map((n) => (n.link.startsWith("#") ? n.link.substring(1) : ""))
      .filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        // Trigger when the section is near middle of viewport
        root: null,
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => io.observe(el as Element));
    return () => io.disconnect();
  }, [navItems]);

  // Ensure Home is highlighted near top of page and on initial load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => {
      if (window.scrollY < 80) {
        setActiveId("home");
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

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
        <div className="hidden md:inline-block rounded-full p-[1.5px] bg-gradient-to-r from-[#D4AF37] via-[#b38600] to-[#FFD700] shadow-[0_0_20px_rgba(212,175,55,0.35)] max-w-[calc(100vw-1rem)] overflow-visible">
          <div
            className="h-14 flex items-center justify-between rounded-full bg-[rgba(0,0,0,0.85)] backdrop-blur px-3 w-auto"
          >
          <div />

          <div className="hidden md:flex items-center gap-4 lg:gap-6 whitespace-nowrap">
            {primaryItems.map((navItem, idx) => {
              const id = navItem.name === "Home" ? "home" : (navItem.link.startsWith("#") ? navItem.link.substring(1) : navItem.link);
              const isActive = id === activeId;
              return (
              <Link
                key={`dplink=${idx}`}
                href={navItem.link}
                className={cn(
                  "text-[13px] md:text-sm lg:text-base transition-colors px-2 py-1 rounded-md inline-flex items-center gap-2",
                  isActive ? "text-[#D4AF37] bg-white/5" : "text-neutral-200 hover:text-white"
                )}
              >
                <span className="hidden lg:inline">{renderIcon(navItem.name)}</span>
                <span>{navItem.name}</span>
              </Link>
            );})}

            {/* More dropdown removed as per requirement */}
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
