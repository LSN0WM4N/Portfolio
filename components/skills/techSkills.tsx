"use client"

import { motion } from "framer-motion";
import { LanguageIcon } from "@/common/LanguageIcon";
import { Tooltip } from "flowbite-react";
import { getTechnologyInfo } from "@/lib/technologies";
import { Cpu } from "lucide-react";

export default function TechSkills() {
  const techCategories = [
    {
      title: "Frontend",
      techs: ["ts", "js", "html", "css", "react", "nextjs", "tailwind"],
      gradient: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/5"
    },
    {
      title: "Backend",
      techs: ["nodejs", "express", "go", "python", "sql"],
      gradient: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/5"
    },
    {
      title: "Others",
      techs: ["c", "c++"],
      gradient: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/5"
    }
  ];

  return (
    <article className="group relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 
                        transition-all duration-150 overflow-hidden h-full"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/30">
            <Cpu className="w-7 h-7 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              Technical Skills
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Technologies I work with
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-xl font-bold text-gray-200">
                  {category.title}
                </h3>
                <div className={`flex-1 h-px bg-linear-to-r ${category.gradient} opacity-20`}></div>
              </div>

              <div className="flex flex-wrap gap-3 pl-1">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={`${category.title}-${tech}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: (idx * 0.15) + (techIdx * 0.05),
                      duration: 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <TechSkillItem tech={tech} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}

function TechSkillItem({ tech }: { tech: string }) {
  const { title, description } = getTechnologyInfo(tech);

  return (
    <Tooltip
      content={
        <div className="p-4 rounded-xl max-w-xs bg-neutral-900/95 backdrop-blur-sm border border-neutral-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <LanguageIcon size={28} language={tech} />
            </div>
            <h3 className="font-bold text-cyan-400">{title}</h3>
          </div>
          <div className={`h-0.5 opacity-30 mb-3 rounded-full`}></div>
          <p className="text-sm leading-relaxed text-gray-300">
            {description}
          </p>
        </div>
      }
      className="z-50"
      style="dark"
    >
      <motion.div 
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="group/tech relative cursor-pointer"
      > 
        <div className="relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-150">
          <LanguageIcon size={40} language={tech} />          
        </div>
      </motion.div>
    </Tooltip>
  );
}