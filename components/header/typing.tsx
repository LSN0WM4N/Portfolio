"use client";

import { useState, useEffect } from "react";

interface Props {
  text: string;
  delay?: number;       
  typeDelay?: number;   
  className?: string;
}

export const Typing = ({
  text,
  delay = 5000,
  typeDelay = 130,
  className
}: Props) => {
  const [actual, setActual] = useState<string>("");
  const [isWriting, setIsWriting] = useState<boolean>(true);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      const size = actual.length;

      if (isWriting) {
        if (size < text.length) {
          timeout = setTimeout(
            () => setActual(text.slice(0, size + 1)),
            typeDelay
          );
        } else {
          timeout = setTimeout(() => setIsWriting(false), delay);
        }
      } else {
        if (size > 0) {
          timeout = setTimeout(
            () => setActual(text.slice(0, size - 1)),
            typeDelay
          );
        } else {
          timeout = setTimeout(() => setIsWriting(true), delay);
        }
      }
    };

    animate();

    return () => clearTimeout(timeout);
  }, [actual, isWriting, text, delay, typeDelay]);

	const isNotPaused = (actual.length !== 0 && actual.length !== text.length);

  return (
    <span className={`inline-block ${className}`}>
      {actual}
      <span className={`inline-block w-2 ${ (cursorVisible || isNotPaused ) ? "opacity-100" : "opacity-0" } text-primary`} >
        │
      </span>
    </span>
  );
};
