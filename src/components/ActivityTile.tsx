"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp } from "lucide-react";

const intensityMap: Record<number, string> = {
  0: "bg-white/5",
  1: "bg-violet-500/20",
  2: "bg-violet-500/40",
  3: "bg-violet-500/70",
  4: "bg-violet-500",
};

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dayLabels = ["Mon", "Wed", "Fri"];

const stats = [
  { label: "Current Streak", value: "7 days" },
  { label: "This Month", value: "42 sessions" },
  { label: "Total Hours", value: "134h" },
];

const contributionData = [
  [0, 2, 3, 1, 4, 0, 2],
  [1, 3, 0, 4, 2, 1, 3],
  [4, 1, 2, 0, 3, 4, 1],
  [2, 0, 4, 3, 1, 2, 0],
  [3, 4, 1, 2, 0, 3, 4],
  [0, 1, 3, 4, 2, 0, 1],
  [2, 3, 0, 1, 4, 2, 3],
  [4, 0, 2, 3, 1, 4, 0],
  [1, 2, 4, 0, 3, 1, 2],
  [3, 1, 0, 2, 4, 3, 1],
  [0, 4, 2, 1, 0, 2, 3],
  [2, 1, 3, 4, 0, 1, 2],
  [4, 3, 1, 0, 2, 4, 3],
  [1, 0, 4, 2, 3, 0, 4],
  [3, 2, 0, 4, 1, 3, 2],
  [0, 3, 2, 1, 4, 0, 3],
  [2, 4, 1, 3, 0, 2, 4],
  [4, 0, 3, 2, 1, 4, 0],
  [1, 2, 0, 4, 3, 1, 2],
  [3, 1, 4, 0, 2, 3, 1],
];

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-5 glass noise overflow-hidden h-full"
    >
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-5 h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-[var(--border)] flex items-center justify-center">
              <Activity size={14} className="text-violet-400" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Learning Activity
              </h2>
              <p className="text-xs text-[var(--text-secondary)]">
                Last 20 weeks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
            <TrendingUp size={12} />
            <span className="text-xs font-medium">+12% this week</span>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="flex flex-col gap-2 w-full">
          {/* Month labels */}
          <div className="flex w-full pl-8">
            {contributionData
              .filter((_, i) => i % 4 === 0)
              .map((_, i) => (
                <div
                  key={i}
                  className="text-[10px] text-[var(--text-secondary)] flex-1"
                >
                  {monthLabels[i % 12]}
                </div>
              ))}
          </div>

          <div className="flex w-full gap-1">
            <div className="flex flex-col justify-between py-0.5 pr-2 w-8 flex-shrink-0">
              {dayLabels.map((day) => (
                <span
                  key={day}
                  className="text-[10px] text-[var(--text-secondary)] h-3 flex items-center"
                >
                  {day}
                </span>
              ))}
            </div>
           <div className="flex flex-1 justify-between">
              {contributionData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.map((level, dayIndex) => (
                    <motion.div
                      key={dayIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: weekIndex * 0.02 + dayIndex * 0.01,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{ scale: 1.5 }}
                      className={`w-3 h-3 rounded-sm ${intensityMap[level]} cursor-pointer`}
                      title={`Level ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1.5 pl-8 mt-1">
            <span className="text-[10px] text-[var(--text-secondary)]">
              Less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${intensityMap[level]}`}
              />
            ))}
            <span className="text-[10px] text-[var(--text-secondary)]">
              More
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[var(--border)] mt-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex flex-col gap-0.5"
            >
              <p className="text-xs text-[var(--text-secondary)]">
                {stat.label}
              </p>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
