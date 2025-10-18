import { Metadata } from 'next';

// This file can be used for page-specific metadata overrides
// The main metadata is now defined in layout.tsx

export const homePageMetadata: Metadata = {
  title: "Ketan Thombare | Full-Stack Developer & AI Enthusiast",
  description: "Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities, building scalable web applications, and turning innovative ideas into production-ready solutions.",
  openGraph: {
    title: "Ketan Thombare | Full-Stack Developer & AI Enthusiast",
    description: "Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities and building scalable web applications.",
    images: [
      {
        url: '/avatar.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ketan Thombare - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    title: "Ketan Thombare | Full-Stack Developer & AI Enthusiast",
    description: "Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities and building scalable web applications.",
    card: 'summary_large_image',
    images: ['/avatar.jpeg'],
  },
}; 