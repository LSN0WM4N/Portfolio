"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Sn0wm4nBanner from "@/public/images/sn0wm4n-banner.webp";


export default function Banner() {
  return (
    <section className="relative w-full min-h-screen bg-[000] text-white flex items-center justify-center overflow-hidden">
      
      <div className="absolute -left-100 top-0 h-full w-auto opacity-35 pointer-events-none select-none bg-red">
        <Image
          src={ Sn0wm4nBanner } 
          alt="Snowman graphic"
          className="h-full w-auto"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl px-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hello, I&apos;m <span className="text-cyan-500">Sn0wm4n</span>
        </h1>

        <p className="text-lg text-gray-300 mb-6">
          Francis Rodriguez
        </p>

        <p className="text-text-soft leading-relaxed mb-4">
          A web developer with a solid foundation in algorithms and
          competitive programming. I love finding the most efficient, clean, 
          and elegant way to solve any problem—from algorithmic challenges
          to building complete applications.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          I work well under pressure, stay calm in the face of challenges,
          and look for creative solutions without losing technical focus. 
          I strongly believe in teamwork: I help when needed and ask for help 
          when it&apos;s the best way to move forward.
        </p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 text-cyan-500 font-medium italic"
        >
          You stop growing when you stop learning.
        </motion.p>
      </motion.div>
    </section>
  );
}

