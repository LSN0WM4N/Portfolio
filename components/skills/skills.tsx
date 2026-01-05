"use client"

import { motion } from "framer-motion";
import TechSkills from "./techSkills";
import SoftSkills from "./softSkills";
import KnowledgeSkills from "./knowledgeSkills";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="flex flex-col w-full items-center px-4 py-24 bg-black">
      
      <h1 className="text-3xl font-semibold mb-8">Skills</h1>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div variants={itemVariants} className="lg:row-span-2">
          <TechSkills />
        </motion.div>

        <motion.div variants={itemVariants}>
          <SoftSkills /> 
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <KnowledgeSkills />
        </motion.div>
      </motion.section>
    </main>
  );
}