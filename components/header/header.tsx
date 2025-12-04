"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typing } from "./typing";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Projects", "Experience", "Skills", "Contact"];

  return (
    <nav className="w-full bg-base/90 backdrop-blur-md fixed top-0 left-0 z-50 border-b border-primary/20">
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
          className="md:hidden text-textMain text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
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
    </nav>
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
      className="relative w-fit text-textMain hover:text-primary transition-colors tracking-wide"
    >
      {tag}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
}
