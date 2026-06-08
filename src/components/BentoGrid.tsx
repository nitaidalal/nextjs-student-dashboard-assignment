"use client";

import { motion, Variants } from "framer-motion";
import { Course } from "@/types/course";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";

interface BentoGridProps {
  courses: Course[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function BentoGrid({ courses }: BentoGridProps) {
  const topCourse = [...courses].sort((a, b) => b.progress - a.progress)[0];
  const lessonsRemaining = Math.round((100 - topCourse.progress) / 10);
  const estimatedMins = lessonsRemaining * 15;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 lg:p-8 pb-24 lg:pb-8"
    >
      {/* Hero Tile */}
      <motion.div
        variants={itemVariants}
        className="col-span-1 md:col-span-2 lg:col-span-4"
      >
        <HeroTile name="Nitai" streak={7} />
      </motion.div>

      {/* Course Cards —> dynamic from Supabase */}
      {courses.map((course, index) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          className="col-span-1"
        >
          <CourseCard course={course} index={index} />
        </motion.div>
      ))}

      {/* Activity Tile */}
      <motion.div
        variants={itemVariants}
        className="col-span-1 md:col-span-2 lg:col-span-2"
      >
        <ActivityTile />
      </motion.div>

      {/* Milestone Tile — derived from highest progress course */}
      <motion.div variants={itemVariants} className="col-span-1  md:col-span-2">
        <motion.article
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative rounded-2xl p-5 border border-white/10 bg-white/[0.03] backdrop-blur-xl noise overflow-hidden h-full"
        >
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-[var(--border)] flex items-center justify-center">
                <span className="text-sm">🎯</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] font-medium">
                Next Milestone
              </p>
            </div>

            {/* Course title */}
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] leading-snug">
                {topCourse.title}
              </h3>
              <p className="text-xs text-violet-400 mt-0.5 font-medium">
                Highest progress course
              </p>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-[var(--text-secondary)]">
                  {topCourse.progress}% Complete
                </span>
                <span className="text-emerald-400 font-medium">
                  Almost there!
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${topCourse.progress}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl bg-white/5 border border-[var(--border)]">
                  <p className="text-[10px] text-[var(--text-secondary)]">
                    Lessons Left
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    {lessonsRemaining}
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl bg-white/5 border border-[var(--border)]">
                  <p className="text-[10px] text-[var(--text-secondary)]">
                    Est. Time
                  </p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">
                    {estimatedMins} mins
                  </p>
                </div>
                <div className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl bg-white/5 border border-[var(--border)]">
                  <p className="text-[10px] text-[var(--text-secondary)]">
                    Difficulty
                  </p>
                  <p className="text-sm font-bold text-violet-400">Advanced</p>
                </div>
                <div className="flex flex-col gap-0.5 px-3 py-2.5 rounded-xl bg-white/5 border border-[var(--border)]">
                  <p className="text-[10px] text-[var(--text-secondary)]">
                    Status
                  </p>
                  <p className="text-sm font-bold text-emerald-400">Active</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently in progress</span>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
}
