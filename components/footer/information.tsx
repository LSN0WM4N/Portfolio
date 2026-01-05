"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Code2 } from "lucide-react";

export default function Information() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6"
    >
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-cyan-500 transition-all duration-300">
            <Image
              src="/images/sn0wm4n-profile.jpg"
              alt="Francis Rodriguez - Sn0wm4n"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Francis Rodriguez
          </h3>
          <p className="text-cyan-500 font-medium">
            Sn0wm4n
          </p>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed max-w-md">
        Message me anytime. I&apos;m happy to receive feedback, discuss projects, 
        collaborate on ideas, and offer assistance whenever needed.
      </p>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-3 text-gray-400">
          <Mail className="w-4 h-4 text-cyan-500" />
          <a 
            href="mailto:rodriguezrondafrancis@gmail.com" 
            className="hover:text-cyan-500 transition-colors"
          >
            rodriguezrondafrancis@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-gray-400">
          <MapPin className="w-4 h-4 text-cyan-500" />
          <span>Barcelona, Spain</span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <Code2 className="w-4 h-4 text-cyan-500" />
          <span>Full Stack Developer & Competitive Programmer</span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <div className="relative">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
        </div>
        <span className="text-sm text-gray-400">
          Available for work
        </span>
      </div>
    </motion.div>
  );
}