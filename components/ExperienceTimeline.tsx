import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TimelineItem = {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  bullets: string[];
  stack?: string[];
  certLink?: string;
  logoSrc?: string; // optional logo path from /public
  category?: "experience" | "leadership";
};

const items: TimelineItem[] = [
  {
    company: "Emilio Beaufort | Full Stack Developer & Team Lead",
    title: "Intern",
    start: "Jun 2025",
    end: "Oct 2025",
    bullets: [
      "Built high-impact modules with Next.js, Supabase, Firebase, AWS, cutting load times by 40%.",
      "Led a 9-dev team, driving sprints, code reviews, and mentorship for faster, cleaner delivery.",
      "Boosted SEO visibility by 60% and cut post-deployment issues by 30% through performance tuning.",
      "Set up CI/CD pipelines & cloud workflows, reducing release cycles by 50%.",
    ],
    stack: ["Next.js", "Supabase", "Firebase", "AWS", "CI/CD"],
    certLink: "https://drive.google.com/file/d/1rI3_XDwM8XyUrGdSEyt5j6clWcM0fh-W/view?usp=drive_link",
    category: "experience",
  },
  {
    company: "IBM SkillBuild | Data Analyst",
    title: "Intern",
    start: "Jun 2024",
    end: "Aug 2024",
    bullets: [
      "Developed a Water Quality Analysis platform with React.js, Flask, and Bootstrap, featuring interactive visualizations.",
      "Delivered insights via dynamic dashboards & reports to support water management decisions.",
      "Applied Python + ML to generate synthetic data, improving dataset coverage by 60%.",
    ],
    stack: ["React.js", "Flask", "Bootstrap", "Python", "ML"],
    certLink: "https://drive.google.com/file/d/18Asy8xUZq32EiZgfCqK1IdbDmMgIn5Zz/view?usp=sharing", // replace with real URL
    category: "experience",
  },
  
];

const dotColor = "#D4AF37"; // gold

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="w-full pt-2 md:pt-4 pb-0">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-6 top-0 bottom-0 border-l border-[#D4AF37]/30" />

          <ul className="space-y-8 md:space-y-10">
            {items.map((item, idx) => (
              <li key={idx} className="relative pl-10 sm:pl-16">
                {/* dot */}
                <span
                  className="absolute left-0 sm:left-2 top-2 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full"
                  style={{ backgroundColor: dotColor, boxShadow: `0 0 14px ${dotColor}66` }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={`rounded-xl p-3 sm:p-5 transition-colors ${
                    item.category === "leadership"
                      ? "border border-[#D4AF37]/60 bg-[#D4AF37]/5"
                      : "border border-[#D4AF37]/25 bg-transparent hover:bg-white/5"
                  }`}
                >
                  <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-2 gap-y-2">
                    {item.category === "leadership" ? (
                      <div className="col-span-2 -mt-1">
                        <span className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/40 px-2 py-0.5 text-[10px] text-[#FFD700]">👑 Leadership</span>
                      </div>
                    ) : null}
                    <div className="min-w-0 flex flex-wrap items-baseline gap-2">
                      <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl">{item.title}</h3>
                      <span className="text-[#D4AF37]">·</span>
                      <span className="text-neutral-300 inline-flex items-center gap-2">
                        {item.logoSrc ? (
                          <span className="relative hidden sm:inline-block h-5 w-5 rounded bg-white/5 overflow-hidden border border-white/10 align-middle">
                            <Image src={item.logoSrc} alt={item.company} fill className="object-contain p-0.5" loading="lazy" />
                          </span>
                        ) : null}
                        {item.company}
                      </span>
                    </div>
                    <div className="justify-self-end">
                      {item.certLink ? (
                        <a
                          href={item.certLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/40 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] text-[#FFD700]/90 hover:text-white hover:bg-[#D4AF37]/20 transition-colors mr-2"
                          aria-label="View internship certificate"
                        >
                          <span>Certificate</span>
                          <span aria-hidden>↗</span>
                        </a>
                      ) : null}
                    </div>
                    {/* date removed here; shown below in details grid */}
                  </div>
                  <div className="mt-3 grid md:grid-cols-5 gap-4 items-start">
                    <div className="md:col-span-2 flex md:block justify-between md:justify-start">
                      <div className="text-neutral-400 text-xs sm:text-sm md:text-base">{item.start} — {item.end}</div>
                      {item.stack?.length ? (
                        <div className="mt-0 md:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                          {item.stack.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#D4AF37]/30 text-[#FFD700]/80"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <ul className="md:col-span-3 list-disc pl-5 text-neutral-300 space-y-1.5 text-sm md:text-base">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;


