import { motion } from "framer-motion";
import { BrainCog } from "lucide-react";

export default function KnowledgeSkills() {
  return (
<article className="group relative bg-gray-900/50 border border-white/10 rounded-2xl 
                    p-8 shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full 
                    overflow-hidden"
>
  <div className="relative z-10">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
        <BrainCog className="w-6 h-6 text-cyan-500" />
      </div>
      <h2 className="text-2xl font-bold text-white">
        Knowledge Skills
      </h2>
    </div>

    <ul className="space-y-4">
      {[
        { name: "Algorithms", desc: "Design and optimization" },
        { name: "Data Structures", desc: "Implementation and analysis" },
        { name: "Complexity Analysis", desc: "Time and space optimization" }
      ].map((skill, idx) => (
        <motion.li
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="flex items-start gap-3 group/item"
        >
          <div className="mt-1 w-2 h-2 rounded-full bg-cyan-500 group-hover/item:scale-125 transition-transform"></div>
          <div>
            <p className="text-gray-200 font-medium">{skill.name}</p>
            <p className="text-gray-500 text-sm">{skill.desc}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  </div>
</article>
  );
}