"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
}

export default function ProgressBar({
  progress,
  showLabel = true,
}: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {showLabel && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-(--text-secondary)">Progress</span>
          <span className="text-xs font-semibold text-(--text-primary)">
            {progress}%
          </span>
        </div>
      )}

      <div className="relative w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-500"
        />

        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.5,
          }}
          className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              delay: 1.7,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  );
}
