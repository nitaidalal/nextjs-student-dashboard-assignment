"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <motion.nav
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden lg:sticky lg:top-0 lg:flex flex-col h-screen overflow-hidden glass border-r border-(--border) z-50"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-5 border-b border-(--border)">
          <div className="flex items-center gap-3 min-w-0">
            {!collapsed && (
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-500 to-cyan-500 flex items-center justify-center shrink-0">
                <GraduationCap size={16} className="text-white" />
              </div>
            )}

            <AnimatePresence>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-semibold text-(--text-primary) whitespace-nowrap"
                >
                  LearnSpace
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-(--text-secondary) transition-colors duration-200 hover:bg-white/5 hover:text-(--text-primary) cursor-pointer"
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-3 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 w-full text-left"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 bg-linear-to-r from-violet-500/20 to-cyan-500/10 rounded-xl border-l-2 border-violet-500"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={18}
                  className={`relative z-10 shrink-0 transition-colors duration-200 ${
                    isActive ? "text-violet-400" : "text-(--text-secondary)"
                  }`}
                />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`relative z-10 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                        isActive
                          ? "text-(--text-primary)"
                          : "text-(--text-secondary)"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>
      </motion.nav>

      {/*For Mobile  */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-(--border)">
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className="relative flex flex-col items-center gap-1 p-2"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-mobile"
                    className="absolute inset-0 bg-violet-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon
                  size={20}
                  className={`relative z-10 ${
                    isActive ? "text-violet-400" : "text-(--text-secondary)"
                  }`}
                />
                <span
                  className={`relative z-10 text-[10px] font-medium ${
                    isActive ? "text-violet-400" : "text-(--text-secondary)"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
