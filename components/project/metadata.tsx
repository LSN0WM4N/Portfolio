"use client"

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { formatBytes, formatDate } from "@/lib/utils";

export default function Metadata({
	size,
	created_at,
	pushed_at,
	default_branch,
	license
}: {
	size: number;
	created_at: string;
	pushed_at: string;
	default_branch: string;
	license?: string;
}) {
	const [showMeta, setShowMeta] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth > 642 : true);
  const prevWidth = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (prevWidth.current === null) {
        prevWidth.current = width;
        return;
      }

      if (width < prevWidth.current) 
        if (width <= 642) setShowMeta(false);

      prevWidth.current = width;
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

	return (			
		<div className="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
			<div 
				className="flex items-center justify-between"
				onClick={() => setShowMeta(prev => !prev)}
			>
				<h3 className="font-bold text-lg">Repo data</h3>
				{ showMeta ? <ChevronUp /> : <ChevronDown /> } 
			</div>

			<AnimatePresence initial={false}>
        {showMeta && (
          <motion.div
            key="meta"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden space-y-3 mt-2"
          >
            <div>
              <p className="text-sm text-gray-500">Size:</p>
              <p className="font-medium">{formatBytes(size * 1024)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Created at:</p>
              <p className="font-medium">{formatDate(created_at)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Last push:</p>
              <p className="font-medium">{formatDate(pushed_at)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Default branch:</p>
              <p className="font-medium">{default_branch}</p>
            </div>

            {license && (
              <div>
                <p className="text-sm text-gray-500">License:</p>
                <p className="font-medium">{license}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
		</div>
	);
}