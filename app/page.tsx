"use client";

import ClientOnly from "@/components/ClientOnly";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import BuiltLedDelivered from "@/components/BuiltLedDelivered";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <ClientOnly>
          <FloatingNav navItems={navItems} />
          <Hero />
          <BuiltLedDelivered />
          <Skills />
          <RecentProjects />
          {/*<Clients />*/}
          <Experience />
          <Approach />
          <Footer />
        </ClientOnly>
      </div>
    </main>
  );
}
