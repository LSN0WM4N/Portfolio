import Header from "@/components/header/header";
import Banner from "@/components/banner";

import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <section className="flex flex-col h-auto">
        <Header />
        <Banner /> 
      </section>

      <section className="flex flex-col gap-2 max-w-[1100px] mx-auto">
        <Experience /> 
        <Projects /> 
        <Skills /> 
        <Contact /> 
      </section>

      <section className="h-10">
        <Footer />
      </section>
    </main>
  );
}
