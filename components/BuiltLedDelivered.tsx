import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ExperienceTimeline from "./ExperienceTimeline";

const BuiltLedDelivered = () => {
  return (
    <section id="built-led-delivered" className="w-full pt-6 md:pt-10 pb-10 md:pb-14 -mt-4">
      <div className="text-center">
        <h2 className="leading-tight text-[22px] sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block whitespace-nowrap">
          Built. <span className="text-[#FFD700]">Led.</span> Delivered.
        </h2>
        <p className="mt-3 md:mt-4 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300">
          Professional experiences that shaped my approach to engineering, teamwork, and delivery.
        </p>
      </div>
      <div className="mt-6 md:mt-8">
        <ExperienceTimeline />
      </div>
    </section>
  );
};

export default BuiltLedDelivered;


