"use client"

import { useEffect } from "react";

import Banner from "@/components/banner";

import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <section className="flex flex-col h-auto">
        <Banner /> 
      </section>

      <section className="flex flex-col gap-2 max-w-[1100px] mx-auto">
        <Experience /> 
        <Projects /> 
        <Skills /> 
      </section>
    </main>
  );
}
