import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FocusCards } from "./ui/focus-cards";

const certificates = [
  {
    title: "Google Cloud Arcade Facilitator",
    src: "/gcp_logo.webp",
    description: "Led campus-wide cloud learning initiative, supporting 500+ students in completing 4500+ lab-based skill badges.",
    issuer: "Google Cloud",
    date: "April 2025 - June 2025",
    category: "Leadership"
  },
  {
    title: "GDG Lead Certificate",
    src: "/gdg_logo.webp", 
    description: "Organized 10+ tech events and workshops, mentoring 1500+ students in web, cloud, and AI development.",
    issuer: "Google Developer Groups",
    date: "Aug 2024 - Oct 2025",
    category: "Leadership"
  },
  {
    title: "IBM SkillBuild Data Analyst",
    src: "/ibm_logo.webp",
    description: "Developed Water Quality Analysis platform with React.js, Flask, and Bootstrap, featuring interactive visualizations.",
    issuer: "IBM",
    date: "June 2024 - August 2024", 
    category: "Professional"
  },
  {
    title: "Emilio Beaufort Team Lead",
    src: "/emilio_logo.webp",
    description: "Led a 9-dev team, driving sprints, code reviews, and mentorship for faster, cleaner delivery.",
    issuer: "Emilio Beaufort",
    date: "June 2025 - October 2025",
    category: "Professional"
  },
  {
    title: "Next.js 14 Certification",
    src: "/nextjs_logo.webp",
    description: "Advanced proficiency in Next.js 14, React Server Components, and modern web development practices.",
    issuer: "Vercel",
    date: "December 2024",
    category: "Technical"
  },
  {
    title: "Firebase Expert",
    src: "/firebase_logo.webp",
    description: "Comprehensive knowledge of Firebase services, real-time databases, authentication, and cloud functions.",
    issuer: "Google",
    date: "November 2024",
    category: "Technical"
  },
  {
    title: "Postman API Student Expert",
    src: "/Postman API Student Expert.png",
    description: "Demonstrated expertise in API development, testing, and documentation using Postman platform.",
    issuer: "Postman",
    date: "2024",
    category: "Technical"
  }
];

const CredibilityWall = () => {
  return (
    <section id="credibility" className="w-full pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <TextGenerateEffect
            words="The Credibility Wall"
            baseClass="text-white"
            highlightStart={1}
            highlightClass="text-[#D4AF37]"
            className="inline leading-tight text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="mt-4 text-center text-neutral-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Certificates, achievements, and recognitions that validate my expertise and commitment to excellence.
          </p>
        </div>

        {/* Focus Cards */}
        <div className="flex justify-center">
          <FocusCards cards={certificates} />
        </div>
      </div>
    </section>
  );
};

export default CredibilityWall;
