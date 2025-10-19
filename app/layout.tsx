import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ketan Thombare | Full-Stack Developer & AI Enthusiast",
  description: "Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities, building scalable web applications, and turning innovative ideas into production-ready solutions.",
  keywords: [
    "Ketan Thombare",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer", 
    "Node.js Developer",
    "AI Developer",
    "Web Developer",
    "Software Engineer",
    "Tech Lead",
    "GDG Lead",
    "Google Cloud",
    "Portfolio"
  ],
  authors: [{ name: "Ketan Thombare" }],
  creator: "Ketan Thombare",
  publisher: "Ketan Thombare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ketan-thombare.vercel.app',
    siteName: 'Ketan Thombare Portfolio',
    title: 'Ketan Thombare | Full-Stack Developer & AI Enthusiast',
    description: 'Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities and building scalable web applications.',
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
    card: 'summary_large_image',
    site: '@ketan_thombare',
    creator: '@ketan_thombare',
    title: 'Ketan Thombare | Full-Stack Developer & AI Enthusiast',
    description: 'Passionate full-stack developer specializing in Next.js, React, Node.js, and AI integration. Leading tech communities and building scalable web applications.',
    images: ['/avatar.jpeg'],
  },
  icons: {
    icon: [
      { url: '/avatar.jpeg', sizes: 'any' },
      { url: '/avatar.jpeg', sizes: '32x32', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/avatar.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#D4AF37',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Icon.webp" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
