import { BrainCog } from "lucide-react";
import TechSkills from "./techSkills";
import SoftSkills from "./softSkills";

export default function Skills() {

  return (
    <main className="flex flex-col w-full items-center px-4  py-16">
      <h1 className="text-4xl font-bold mb-12 tracking-tight">Skills</h1>

      <section
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <TechSkills />

        <SoftSkills /> 
        
        <article
          className="bg-gray-900/50 border border-white/10 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><BrainCog/> Knowledge skills</h2>

          <ul className="space-y-2 text-sm tracking-wide">
            <li>Algorithm</li>
            <li>Data structures</li>
            <li>Computational time / Complexity</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

