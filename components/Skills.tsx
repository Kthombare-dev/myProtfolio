import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import CometCard from "./ui/CometCard";

const Skills = () => {
  return (
    <section id="skills" className="w-full pt-8 md:pt-14 pb-16 md:pb-20 -mt-6 md:-mt-4">
      <div className="heading text-center whitespace-nowrap flex items-baseline justify-center gap-2">
        <TextGenerateEffect
          words="My Full Stack Canvas"
          baseClass="text-white"
          highlightStart={1}
          highlightClass="text-[#D4AF37]"
          className="inline leading-tight text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        />
      </div>

      {/* 3x3 Table layout */}
      {(() => {
        const techs: { name: string; src?: string; initials?: string }[] = [
          { name: "React", src: "/react.svg" },
          { name: "Next.js", src: "/next.svg" },
          { name: "TypeScript", src: "/ts.svg" },
          { name: "MongoDB", src: "/mongo.svg" },
          { name: "MySQL", src: "/mySQL.svg" },
          { name: "Tailwind CSS", src: "/tail.svg" },
          { name: "Firebase", src: "/Firebase Logo.webp" },
          { name: "Git", src: "/git.svg" },
          { name: "Supabase", src: "/supabase.webp" },
          // MERN additions
          { name: "Node.js", src: "/Nodejs.webp" },
          { name: "Express", src: "/expressjs.webp" },
          { name: "Python", src: "/python.svg" },
        ];
        const rows: { name: string; src?: string; initials?: string }[][] = [];
        for (let i = 0; i < techs.length; i += 3) {
          rows.push(techs.slice(i, i + 3));
        }
        const container = {
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        } as const;
        const item = {
          hidden: { opacity: 0, y: 8, scale: 0.98 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
        } as const;
        return (
          <div className="mt-10 md:mt-12 overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 rounded-xl overflow-hidden">
              <motion.tbody variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                {rows.map((row, rIdx) => (
                  <tr key={`row-${rIdx}`}>
                    {row.map((tech, cIdx) => {
                      const globalIndex = rIdx * 3 + cIdx;
                      return (
                        <td
                          key={tech.name}
                          className="align-top p-2 sm:p-3 md:p-4 border border-[#D4AF37]/20 bg-transparent"
                        >
                          <motion.div variants={item} transition={{ delay: globalIndex * 0.03 }}>
                            <CometCard className="p-4 md:p-5 h-full bg-transparent backdrop-blur-0">
                              <div className="flex flex-col items-center justify-center gap-3">
                                {tech.src ? (
                                  <motion.div
                                    className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    whileHover={{ scale: 1.06, rotate: 0.5 }}
                                  >
                                    <Image src={tech.src} alt={tech.name} fill className="object-contain" />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[10px] sm:text-xs md:text-sm text-[#FFD700]"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                  >
                                    {tech.initials}
                                  </motion.div>
                                )}
                                <div className="text-sm md:text-base font-semibold text-white text-center">{tech.name}</div>
                              </div>
                            </CometCard>
                          </motion.div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </motion.tbody>
            </table>
          </div>
        );
      })()}
    </section>
  );
};

export default Skills;


