"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  FileCode,
  LayoutDashboard,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import ProgressBar from "./ProgressBar";
import { Course } from "@/types/course";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Rocket,
  FileCode,
  LayoutDashboard,
  BookOpen,
};

const gradientMap: Record<number, string> = {
  0: "from-violet-500/20 to-purple-500/5",
  1: "from-cyan-500/20 to-blue-500/5",
  2: "from-emerald-500/20 to-teal-500/5",
  3: "from-orange-500/20 to-amber-500/5",
};

const glowMap: Record<number, string> = {
  0: "rgba(139, 92, 246, 0.2)",
  1: "rgba(6, 182, 212, 0.2)",
  2: "rgba(16, 185, 129, 0.2)",
  3: "rgba(249, 115, 22, 0.2)",
};

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] ?? BookOpen;
  const gradient = gradientMap[index % 4];
  const glow = glowMap[index % 4];

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 40px ${glow}`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-6 glass noise overflow-hidden cursor-pointer"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl pointer-events-none`}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-(--border) flex items-center justify-center shrink-0">
            <Icon size={18} className="text-(--text-primary)" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-(--text-primary) leading-snug">
              {course.title}
            </h3>
            <p className="text-xs text-(--text-secondary) mt-0.5">
              In Progress
            </p>
          </div>
        </div>
        <ProgressBar progress={course.progress} showLabel={true} />
      </div>
    </motion.article>
  );
}
