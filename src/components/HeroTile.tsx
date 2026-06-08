"use client";

import { motion } from "framer-motion";
import { Flame, Trophy, Target, Clock } from "lucide-react";

interface HeroTileProps {
  name?: string;
  streak?: number;
}

const stats = [
  { icon: Trophy, label: "Points", value: "2,450" },
  { icon: Target, label: "Goals Met", value: "8/10" },
  { icon: Clock, label: "Hours", value: "34h" },
];

const greetBasedOnTime = () => {
  const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    else if (hour < 18) return "Good afternoon";
    else return "Good evening";
};

export default function HeroTile({
  name = "Nitai",
  streak = 7,
}: HeroTileProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative  rounded-2xl glass p-6 noise overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-start justify-between   gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-(--text-secondary) text-sm font-medium mb-1"
            >
              {greetBasedOnTime()} 👋
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-(--text-primary)"
            >
              Welcome back,{" "}
              <span className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent ">
                {name}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-(--text-secondary) text-sm mt-1"
            >
              You are on a roll! Keep up the great work.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20"
          >
            <Flame size={18} className="text-orange-400" />
            <div>
              <p className="text-xs text-(--text-secondary)">Day Streak</p>
              <p className="text-lg font-bold text-orange-400 leading-none">
                {streak}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 px-4 py-4 rounded-xl bg-white/5 border border-(--border)"
              >
                <Icon size={18} className="text-violet-400 flex-shrink-0" />
                <div>
                  <p className="text-xs text-(--text-secondary)">
                    {stat.label}
                  </p>
                  <p className="text-lg font-bold text-(--text-primary)">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
