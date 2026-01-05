"use client"

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typing } from "./typing";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) 
        setIsVisible(true); 
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setOpen(false); 
      } 
      else if (currentScrollY < lastScrollY)
        setIsVisible(true);

      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => { window.removeEventListener("scroll", handleScroll) };
  }, [lastScrollY]);

  const links = ["Home", "Projects", "Experience", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
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
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Typing 
          className="text-primary font-bold text-xl tracking-wide"
          text='Sn0wm4n'
        />

        <div className="hidden md:flex gap-6">
          {links.map(tag => (
            <Button key={tag} tag={tag} />
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
      className="relative group w-fit text-textMain hover:text-primary transition-colors tracking-wide"
    >
      {tag}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}