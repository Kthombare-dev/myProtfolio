import React, { useState } from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Vaultify",
    description: "Built a secure platform for academic paper access and AI-powered concept explanations, reducing manual search time by 50%. Developed a document system with 95% accurate metadata extraction across 100+ papers. Integrated Gemini API for real-time concept support, improving understanding by 85%. Designed a responsive, modern UI with 95% user satisfaction and 3x efficiency gains.",
    image: "/vaultify.webp",
    techStack: ["Next.js 14", "Firebase", "Gemini", "TypeScript", "Node.js", "Express.js"],
    liveUrl: "https://vaultify.vercel.app",
    githubUrl: "https://github.com/Kthombare-dev/Vaultify",
    featured: true,
    status: "Live"
  },
  {
    id: 2,
    title: "Eco Craft",
    description: "Developed an innovative marketplace platform where users can sell scrap materials or transform them into upcycled products using AI-generated suggestions. Implemented advanced AI-driven features that enable users to upload scrap images and receive 90% accurate transformation ideas. Integrated real-time location matching via Google Maps API and Gemini AI for seamless user connections. Built a smart pricing system that automatically updates scrap prices daily and offers 50+ creative reuse suggestions, promoting sustainability and responsible waste management.",
    image: "/ecocraft.webp", // You'll need to add this image
    techStack: ["React.js", "Tailwind CSS", "Firebase", "Gemini AI", "Google Maps API", "Node.js"],
    liveUrl: "https://eco-craft-alpha.vercel.app/",
    githubUrl: "https://github.com/Kthombare-dev/EcoCraft",
    featured: true,
    status: "Live"
  },
  {
    id: 3,
    title: "Water Quality Analysis System",
    description: "Developed an AI-powered web platform for analyzing, comparing, and visualizing water quality data to help users and policymakers make informed environmental decisions. Implemented advanced data visualization capabilities to process 10,000+ water quality data points across multiple regions with dynamic charts and interactive maps. Integrated AI models using GeminiAI to generate realistic water quality data for missing locations, achieving 95% prediction accuracy and 100% regional data coverage. Built comprehensive reporting system with detailed water quality reports, comparison charts, and actionable insights through an intuitive interface. Enhanced decision-making efficiency for environmental studies by 30% with real-time updates and mobile-responsive design.",
    image: "/water_quality.webp", // You'll need to add this image
    techStack: ["React.js", "Python", "Flask", "GeminiAI", "Chart.js", "FastAPI"],
    liveUrl: "https://water-analysis.vercel.app",
    githubUrl: "https://github.com/Kthombare-dev/Water-Quality-Analysis-System",
    featured: true,
    status: "Completed"
  }
];

const Systems = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpanded = (projectId: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const truncateDescription = (description: string, maxLength: number = 150) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section id="systems" className="w-full pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <TextGenerateEffect
            words="Systems I've Brought to Life"
            baseClass="text-white"
            highlightStart={1}
            highlightClass="text-[#D4AF37]"
            className="inline leading-tight text-[28px] sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <p className="mt-4 text-center text-neutral-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Turning ideas into production-ready systems that balance logic, design, and impact.
          </p>
        </div>

        {/* Projects Grid - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl overflow-hidden border border-neutral-700/50 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 h-[500px] sm:h-[550px] md:h-[600px] flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.status === 'Live' 
                        ? 'bg-green-500/30 text-green-100 border border-green-400/50'
                        : project.status === 'Completed'
                        ? 'bg-blue-500/30 text-blue-100 border border-blue-400/50'
                        : 'bg-yellow-500/30 text-yellow-100 border border-yellow-400/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="mb-4 flex-1">
                    <div className={expandedCards.has(project.id) ? "max-h-24 sm:max-h-28 md:max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent pr-2" : "line-clamp-3"}>
                      <p className="text-neutral-300 text-sm leading-relaxed">
                        {expandedCards.has(project.id) ? project.description : truncateDescription(project.description)}
                      </p>
                    </div>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleExpanded(project.id)}
                        className="mt-2 text-[#D4AF37] hover:text-[#B8941F] text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                      >
                        {expandedCards.has(project.id) ? (
                          <>
                            <span>Read Less</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-180 transition-transform duration-200">
                              <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        ) : (
                          <>
                            <span>Read More</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-200">
                              <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-neutral-800/60 text-neutral-200 text-xs rounded-lg border border-neutral-700/50 backdrop-blur-sm hover:bg-neutral-700/60 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.id !== 3 && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] hover:from-[#B8941F] hover:to-[#D4AF37] text-black font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-105"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M14 4H20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M10 14L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Live Site</span>
                      </a>
                    )}
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${project.id === 3 ? 'w-full' : 'flex-1'} bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm hover:scale-105 border border-neutral-600/50`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Systems;
