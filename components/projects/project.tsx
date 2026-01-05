"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Technologies from "./tecnologies";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  tecnologies: string[] | string;
  repoUri: string;
  demoUrl?: string;
  featured?: boolean;
}

export function Project({
  imageUrl,
  title,
  description,
  tecnologies,
  repoUri,
  demoUrl,
}: Props) {
  if (typeof tecnologies === "string") tecnologies = [tecnologies];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative w-full max-w-4xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 border border-white/10 transition-all 
                      duration-150 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10">
        

        <div className="relative z-10 p-6 flex flex-col md:flex-row gap-6">
          
          <div className="shrink-0">
            <div className="relative w-40 h-40 rounded-xl overflow-hidden bg-gray-900/50 
                            border border-white/10 transition-all duration-300"
            >
              <Image
                src={imageUrl}
                alt={`${title} preview`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="mt-4">
              <Technologies technologies={tecnologies} size={32} />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between min-h-40">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 md:line-clamp-4">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-4">              
              {!demoUrl && (
                <Link 
                  href={repoUri}
                  className="ml-auto text-cyan-500 hover:text-cyan-400 transition-colors 
                            text-sm font-medium flex items-center gap-1 group/more"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover/more:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}