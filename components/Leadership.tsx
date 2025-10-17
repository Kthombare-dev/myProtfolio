import React, { useRef, useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import CometCard from "./ui/CometCard";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Types
type Theme = "Leadership" | "Web" | "Cloud" | "AI";

type SpecialDetails = {
  gdgLead?: { title: string; bullets: string[]; certUrl?: string };
  cloudArcade?: { title: string; bullets: string[]; certUrl?: string };
  emilioLead?: { title: string; bullets: string[]; certUrl?: string };
};

type CommunityItem = {
  id: number;
  title: string;
  organization?: string;
  duration: string;
  theme: Theme;
  attendees: string;
  topic: string;
  outcome: string;
  poster: string;
  highlights: string[];
  isSpecial: boolean;
  details?: SpecialDetails;
};

// Community leadership data
const communityData: CommunityItem[] = [
  {
    id: 1,
    title: "Google Developer Groups",
    // organization: "Google Developer Groups",
    duration: "Aug 2024 – June 2025",
    theme: "Leadership",
    attendees: "2000+ students",
    topic: "Community Leadership & Tech Education",
    outcome: "15+ events, 4500+ lab badges, 2 leadership roles",
    poster: "/public/gdg_logo.webp",
    highlights: ["GDG Lead", "Cloud Arcade Facilitator", "Industry partnerships"],
    isSpecial: true,
    details: {
      gdgLead: {
        title: "Lead | Google Developer Groups (GDG-CDGI)",
        bullets: [
          "Organized 10+ tech events and workshops, mentoring 1500+ students in web, cloud, and AI development.",
          "Collaborated with industry experts and college faculties to drive impactful technical sessions and hackathons."
        ],
        certUrl: "https://drive.google.com/file/d/1nqeKFXlWTVobZkxuqoslRRaR1LKOXUf9/view?usp=drive_link"
      },
      // cloudArcade: {
      //   title: "Facilitator | Google Cloud Arcade [Certificate] | April 2025 – June 2025",
      //   bullets: [
      //     "Led campus-wide cloud learning initiative; supported 500+ students in completing 4500+ lab-based skill badges.",
      //     "Promoted practical adoption of GCP through mentoring, Q&A sessions, and hands-on lab guidance."
      //   ]
      // }
    }
  },
  {
    id: 2,
    title: "Google Cloud",
    // organization: "Google Cloud",
    duration: "April 2025 – June 2025",
    theme: "Cloud",
    attendees: "500+ students",
    topic: "Cloud Learning & GCP Adoption",
    outcome: "4500+ lab badges, 85% completion rate",
    poster: "/public/gcp_logo.webp",
    highlights: ["GCP fundamentals", "Cloud architecture", "DevOps practices"],
    isSpecial: true,
    details: {
      cloudArcade: {
        title: "Facilitator | Google Cloud Arcade",
        bullets: [
          "Led campus-wide cloud learning initiative; supported 500+ students in completing 4500+ lab-based skill badges.",
          "Promoted practical adoption of GCP through mentoring, Q&A sessions, and hands-on lab guidance."
        ],
        certUrl: "https://drive.google.com/file/d/1H_HBsk39xqh9CTBlM2FSFEAr69BWfcJ2/view?usp=sharing"
      }
    }
  },
  {
    id: 3,
    title: "Emilio Beaufort",
    // organization: "Full Stack Developer & Team Lead",
    duration: "June 2025 – October 2025",
    theme: "Leadership",
    attendees: "9 developers",
    topic: "Team Leadership & Development",
    outcome: "Led 9-dev team, faster delivery, cleaner code",
    poster: "/emilio-logo.png",
    highlights: ["Team leadership", "Code reviews", "Mentorship", "Sprint management"],
    isSpecial: true,
    details: {
      emilioLead: {
        title: "Full Stack Developer & Team Lead",
        bullets: [
          "Led a 9-dev team, driving sprints, code reviews, and mentorship for faster, cleaner delivery.",
          "Built high-impact modules with Next.js, Supabase, Firebase, AWS, cutting load times by 40%.",
          "Boosted SEO visibility by 60% and cut post-deployment issues by 30% through performance tuning.",
          "Set up CI/CD pipelines & cloud workflows, reducing release cycles by 50%."
        ],
        certUrl: "https://drive.google.com/file/d/your-emilio-certificate"
      }
    }
  }
];

const Leadership = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const touchFlipRef = useRef(false);

  function toggleFlip(id: number) {
    setFlippedCard((prev) => {
      const next = prev === id ? null : id;
      if (next !== null) {
        // reset any scroll position on the back face when opening
        const backEl = document.getElementById(`card-back-${id}`);
        if (backEl) backEl.scrollTop = 0;
      }
      return next;
    });
  }

  // Reset all cards to default state
  function resetAllCards() {
    setFlippedCard(null);
  }

  return (
    <section id="leadership" className="w-full pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="text-center mb-12">
        <TextGenerateEffect
          words="Architecting Teams & Systems"
          baseClass="text-white"
          highlightStart={1}
          highlightClass="text-[#D4AF37]"
          className="inline leading-tight text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
        />
        <p className="mt-2 text-center text-neutral-300 text-sm sm:text-base md:text-lg">
          Leading teams, projects, and communities—driving impact beyond code.
        </p>
      </div>

      {/* Flip Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4" onClick={resetAllCards}>
        <AnimatePresence mode="wait">
          {communityData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CometCard className="h-64 cursor-pointer group">
                <div 
                  className="relative w-full h-full"
                  onMouseEnter={() => setFlippedCard(item.id)}
                  onMouseLeave={() => setFlippedCard(null)}
                  onClick={(e) => { e.stopPropagation(); if (touchFlipRef.current) { touchFlipRef.current = false; return; } toggleFlip(item.id); }}
                  onTouchStart={(e) => { touchFlipRef.current = true; toggleFlip(item.id); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(item.id); }}
                  style={{ touchAction: 'manipulation' }}
                >
                  {/* Front */}
                  <div className={`absolute inset-0 transition-transform duration-700 backface-hidden ${
                    flippedCard === item.id ? 'rotate-y-180' : ''
                  }`} style={{ transformStyle: 'preserve-3d' }}>
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-[#D4AF37]/30">
                      {item.poster && item.poster.includes('gdg_logo') ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]/40">
                          <Image 
                            src="/gdg_logo.webp" 
                            alt="GDG Logo" 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : item.poster && item.poster.includes('gcp_logo') ? (
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#D4AF37]/40">
                          <Image 
                            src="/gcp_logo.webp" 
                            alt="GCP Logo" 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-[#D4AF37]/30 rounded-full flex items-center justify-center mb-4">
                          <span className="text-2xl">
                            {item.theme === 'Leadership' ? '🌐' : item.theme === 'Web' ? '🌐' : item.theme === 'Cloud' ? '☁️' : '🤖'}
                          </span>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      {item.organization && (
                        <p className="text-sm text-neutral-300 mb-2">{item.organization}</p>
                      )}
                      <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs rounded-full">
                        {item.theme}
                      </span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className={`absolute inset-0 transition-transform duration-700 backface-hidden ${
                    flippedCard === item.id ? '' : 'rotate-y-180'
                  }`} style={{ transformStyle: 'preserve-3d' }}>
                    <div id={`card-back-${item.id}`} className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 flex flex-col justify-between overflow-y-auto border border-[#D4AF37]/30">
                      {item.isSpecial ? (
                        <div className="space-y-4">
                          {/* Header */}
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-1 break-words">{item.title}</h3>
                            {item.organization && (
                              <p className="text-sm text-neutral-300 break-words">{item.organization}</p>
                            )}
                            {/* Role on first line, Date left + Certificate right on next line */}
                            <div className="mt-3 flex flex-col gap-2">
                              {(item.details?.gdgLead || item.details?.cloudArcade || item.details?.emilioLead) && (
                                <span className="text-xs px-2 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] w-fit whitespace-nowrap">
                                  {item.details?.gdgLead?.title || item.details?.cloudArcade?.title || item.details?.emilioLead?.title}
                                </span>
                              )}
                              <div className="grid grid-cols-2 items-center gap-2">
                                <span className="text-xs px-2 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] w-fit justify-self-start">
                                  {item.duration}
                                </span>
                                {(item.details?.gdgLead?.certUrl || item.details?.cloudArcade?.certUrl || item.details?.emilioLead?.certUrl) && (
                                  <a
                                    href={item.details?.gdgLead?.certUrl || item.details?.cloudArcade?.certUrl || item.details?.emilioLead?.certUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="justify-self-end inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] hover:text-black hover:bg-[#D4AF37] transition-colors"
                                  >
                                    <span>Certificate</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* KPI Chips */}
                          <div className="grid grid-cols-2 gap-2">
                            {item.details?.gdgLead ? (
                              <>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Events & Workshops</div>
                                  <div className="text-base font-semibold text-white">10+ organized</div>
                                </div>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Students Mentored</div>
                                  <div className="text-base font-semibold text-white">1500+ reached</div>
                                </div>
                              </>
                            ) : item.details?.cloudArcade ? (
                              <>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Lab Badges</div>
                                  <div className="text-base font-semibold text-white">4500+ completed</div>
                                </div>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Completion Rate</div>
                                  <div className="text-base font-semibold text-white">85% success</div>
                                </div>
                              </>
                            ) : item.details?.emilioLead ? (
                              <>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Team Size</div>
                                  <div className="text-base font-semibold text-white">9 developers</div>
                                </div>
                                <div className="rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 p-3">
                                  <div className="text-[10px] text-neutral-400 break-words">Performance</div>
                                  <div className="text-base font-semibold text-white">40% faster</div>
                                </div>
                              </>
                            ) : null}
                          </div>

                          {/* Highlight Tiles */}
                          {(item.details?.gdgLead || item.details?.cloudArcade || item.details?.emilioLead) && (
                            <div className="grid grid-cols-1 gap-2">
                              {(item.details?.gdgLead?.bullets || item.details?.cloudArcade?.bullets || item.details?.emilioLead?.bullets)?.slice(0, 2).map((bullet: string, idx: number) => (
                                <div key={idx} className="rounded-md bg-gradient-to-r from-neutral-900 to-neutral-800 border border-[#D4AF37]/25 p-3">
                                  <div className="text-xs text-neutral-300 break-words">{bullet}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-sm text-neutral-300 mb-3">{item.organization}</p>
                            <p className="text-xs text-[#D4AF37] mb-3">{item.duration}</p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-neutral-400">👥</span>
                              <span className="text-xs text-white">{item.attendees}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-neutral-400">📚</span>
                              <span className="text-xs text-white">{item.topic}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-neutral-400">🎯</span>
                              <span className="text-xs text-white">{item.outcome}</span>
                            </div>
                          </div>
                          <div className="mt-3 space-y-1">
                            {item.highlights.slice(0, 2).map((highlight: string, idx: number) => (
                              <div key={idx} className="text-xs text-[#D4AF37]/80">
                                • {highlight}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CometCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Leadership;


