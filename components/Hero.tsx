import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import RoleRotator from "./ui/RoleRotator";
import TechRing from "./ui/TechRing";

const Hero = () => {
  return (
    <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20 sm:pt-24 md:pt-28 lg:pt-32 relative">
      {/* Spotlights */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#D4AF37"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#b38600"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#FFD700"
        />
      </div>

      {/* Background grid */}
      <div
        className="fixed inset-0 h-screen w-screen dark:bg-black-100 bg-black 
        dark:bg-grid-white/[0.05] bg-grid-black-100/[0.15] flex items-center justify-center -z-20"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

       {/* Main hero content */}
       <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center md:items-start justify-between gap-8 md:gap-8 xl:gap-20 max-w-7xl mx-auto mt-0 sm:mt-1 md:mt-2 px-4 sm:px-6 md:px-10 min-h-[60vh] sm:min-h-[65vh] md:min-h-[60vh] lg:min-h-[70vh]">
        
        {/* Left Section - Text */}
        <div className="flex flex-col items-start text-left w-full md:max-w-none lg:max-w-2xl">
          <div className="inline-flex items-center self-start rounded-full border border-[#D4AF37]/40 bg-[rgba(0,0,0,0.6)] px-3 sm:px-4 py-1 text-[10px] sm:text-[11px] md:text-xs lg:text-sm tracking-widest text-[#FFD700]/80 whitespace-nowrap mb-2 sm:mb-0">
            Building Scalable & Intelligent Web Experiences
          </div>

          <h1 className="mt-2 font-semibold leading-tight text-white text-[32px] sm:text-4xl md:text-6xl lg:text-7xl whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap">
            Hi, I’m Ketan Thombare
          </h1>

          <h2 className="mt-1 mb-5 font-semibold leading-tight text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-normal md:whitespace-nowrap lg:whitespace-nowrap">
            <RoleRotator
              roles={[
                "Full Stack Developer",
                "AI & Cloud Enthusiast",
                "Community Leader",
                "Team Lead & Mentor",
                "Creative Problem Solver",
              ]}
              typingSpeedMs={55}
              deletingSpeedMs={35}
              pauseMs={900}
              className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD700] to-white"
            />
          </h2>

          <p className="mt-4 md:tracking-wider text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-prose">
            <span className="text-[#FFD700] font-medium">
              Self-taught. Full-stack. Always building.
            </span>
            <br />
            <br />
            From leading Google Developer Groups On Campus to crafting intelligent web systems, 
            I build with curiosity, empathy, and intent — turning ideas into scalable, meaningful digital experiences.
          </p>

          <div className="mt-6 flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-4">
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="hover:border-[#FFD700]/40"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex h-12 items-center mt-2 md:mt-10 lg:mt-10 rounded-lg border border-[#D4AF37]/40 px-6 text-sm text-neutral-200 hover:text-white hover:bg-white/5 whitespace-nowrap"
            >
              Let's Connect
            </a>
          </div>

          <div className="mt-3 text-[12px] text-neutral-400">
            Currently working on <span className="text-[#FFD700]">Vaultify</span> — an AI-powered academic platform.
          </div>
          {/* spacer under status text */}
          <div className="mt-20" />
        </div>

        {/* Right Section - Avatar */}
        <div className="flex items-center justify-center md:justify-center lg:justify-end w-full md:w-auto md:ml-0 lg:ml-16 shrink-0 -mt-4 md:-mt-4 md:mb-4 md:self-center">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-[26rem] lg:w-[26rem] xl:h-[28rem] xl:w-[28rem] rounded-full overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_24px_rgba(212,175,55,0.25)]"
          >
            <Image
              src="/avatar.jpeg"
              alt="Ketan avatar"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Center-aligned scroll indicator for the whole hero */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#FFD700]/70 bottom-6">
          <div className="h-8 w-5 rounded-full border border-[#D4AF37]/40 flex items-start justify-center p-1">
            <motion.span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full bg-[#FFD700]/80"
              animate={{ y: [0, 10, 0], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.span
            className="text-[10px] tracking-widest"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            SCROLL
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
