import { LanguageIcon } from "@/common/LanguageIcon";
import { Tooltip } from "flowbite-react";
import { getTechnologyInfo } from "@/lib/techonlogies";
import { Cpu } from "lucide-react";

export default function TechSkills() {
  const frontendTechs = ["ts", "js", "html", "css", "react", "nextjs", "tailwind"];
  const backendTechs = ["nodejs", "express", "go", "python", "sql"];
  const othersTechs = ["c", "c++"];

  return (
    <article className="bg-gray-900/50 border border-white/10 rounded-xl p-6
                        shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-2"
    >
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"> <Cpu /> Tech skills</h2>

      <ul className="space-y-2 text-sm tracking-wide ml-2 ">
        <h2 className="text-xl font-bold">Frontend</h2>
        <div className="flex  gap-2">
          { frontendTechs.map(tech => (
            <TechSkillItem tech={tech} key={`front-tech-${tech}`} />
          ))}
        </div>
        
        <h2 className="text-xl font-bold">Backend</h2>
        <div className="flex gap-2">
          { backendTechs.map(tech => (
            <TechSkillItem tech={tech} key={`back-tech-${tech}`} />
          ))}
        </div>
        
        <h2 className="text-xl font-bold">Others</h2>
        <div className="flex gap-2">
          { othersTechs.map(tech => (
            <TechSkillItem tech={tech} key={`other-tech-${tech}`} />
          ))}
        </div>
      </ul>
    </article>
  );
}

interface Props {
  tech: string;
}

function TechSkillItem({ tech }: Props) {
  const { title, description } = getTechnologyInfo(tech);

  return (
    <li className="list-none">
      <Tooltip
        content={
          <div className="p-2  rounded-lg">
            <h3 className="font-semibold text-base">{title}</h3>
            <hr className="my-2 opacity-20" />
            <p className="text-sm leading-relaxed opacity-90 max-w-40">
              {description}
            </p>
          </div>
        }
        className="z-50 "
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center
            transition-all duration-300 hover:scale-110 hover:bg-white/15 cursor-pointer"
        >
          <LanguageIcon size={48} language={tech} />
        </div>
      </Tooltip>
    </li>
  );
}


