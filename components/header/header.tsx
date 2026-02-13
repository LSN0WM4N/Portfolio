"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typing } from "./typing";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollFlag, setScrollFlag] = useState<boolean>(true);
  const [mouseFlag, setMouseFlag] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) 
        setScrollFlag(true); 
      else 
        setScrollFlag(false);
      setScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { y } = e;
      if (!y)
        return;
      setMouseFlag(y <= 90);
    } 

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => { 
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const links = ["Home",  "Experience", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: ( mouseFlag || scrollFlag ) ? 0 : -100 }}
      transition={{ 
        duration: 0.2,
        ease: "easeInOut"
      }}
      className={`
        w-full fixed top-0 left-0 z-50 
        border-b border-primary/20
        transition-all duration-300
        ${scrollY > 10 
          ? 'bg-base/95 backdrop-blur-md shadow-lg shadow-primary/5' 
          : 'bg-base/90 backdrop-blur-md'
        }
      `}
    >
      <div 
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
      >

        <Typing 
          className="text-primary font-bold text-xl tracking-wide"
          text='Sn0wm4n'
        />

        <div className="hidden md:flex gap-6">
          {links.map(tag => (
            <Link key={tag} href={`#${ tag.toLowerCase() }`}>
              <Button tag={tag} />
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-textMain text-2xl hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.150 }}
            className="md:hidden bg-base border-t border-primary/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(tag => (
                <Button key={tag} tag={tag} onClick={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Button({ 
  tag, 
  onClick
}: {
  tag: string,
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="
        relative group w-fit 
        text-white/90 hover:text-cyan-500 hover:scale-105 
        hover:[text-shadow:0_0_0.5px_currentColor,0_0_0.5px_currentColor] 
        transition-all 
        tracking-wide"
    >
      {tag}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}