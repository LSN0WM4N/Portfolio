"use client"

import { motion } from "framer-motion";
import { Users, Zap, Lightbulb, Target } from "lucide-react";

const skills = [
  {
    icon: <Users className="w-5 h-5" />,
    name: "Team Work",
    description: "Collaborative approach to problem-solving",
    color: "hover:bg-blue-500"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    name: "Fast Learning",
    description: "Quick adaptation to new technologies",
    color: "hover:bg-yellow-500"
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    name: "Optimistic",
    description: "Positive mindset in challenging situations",
    color: "hover:bg-green-500"
  },
  {
    icon: <Target className="w-5 h-5" />,
    name: "Constant",
    description: "Persistent and dedicated to goals",
    color: "hover:bg-purple-500"
  }
];

export default function SoftSkills() {

  return (
    <article className="group relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 
                        transition-all duration-300 h-full overflow-hidden">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
            <Users className="w-6 h-6 text-cyan-500" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Soft Skills
          </h2>
        </div>

        <ul className="space-y-4">
          {skills.map((skill, idx) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group/item relative"
            >
              <div className="flex items-start gap-4 transition-all duration-300 cursor-default">
                
                <div className={`p-2 rounded-lg ${skill.color} bg-opacity-10 border border-white/10 
                                group-hover/item:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-gray-200 font-semibold mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
}