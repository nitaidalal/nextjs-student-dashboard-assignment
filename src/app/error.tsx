"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen bg-[var(--background)] items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="flex flex-col items-center gap-5 max-w-md text-center glass rounded-2xl p-8 noise"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <AlertTriangle size={24} className="text-red-400" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            Something went wrong
          </h2>
          <p className="text-sm text-[var(--text-secondary)]">
            Failed to load dashboard data. Please check your connection and try
            again.
          </p>
          {process.env.NODE_ENV === "development" && (
            <p className="text-xs text-red-400 mt-1 font-mono bg-red-500/10 px-3 py-2 rounded-lg">
              {error.message}
            </p>
          )}
        </div>

        {/* Retry Button */}
        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-sm font-medium"
        >
          <RefreshCw size={14} />
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}
