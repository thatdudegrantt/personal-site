// src/components/Navbar.jsx
// Ported from Next.js Navbar.js — removes next-themes dependency,
// uses localStorage + data-theme attribute directly instead.
// Loaded as client:load island in Layout.astro for AnimatePresence to work.

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  // Prevent hydration flash — render nothing until mounted
  if (!mounted) return null;

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 px-2 md:px-4">
      {/* Left: home icon + nav links */}
      <div className="flex-1 flex items-center gap-2">
        <a
          href="/"
          className="btn btn-ghost normal-case text-xl text-base-content"
          aria-label="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </a>

        {/* Desktop nav */}
        <ul className="menu menu-horizontal px-1 text-base-content gap-1 hidden sm:flex">
          <li><a href="/resume">Resume</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Right: theme toggle + mobile hamburger */}
      <div className="flex items-center gap-2">
        {/* Animated theme toggle — identical to original */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200 hover:bg-base-300 transition-colors"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 30 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <svg
                  className="text-amber-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  className="text-indigo-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Mobile hamburger */}
        <div className="dropdown dropdown-end sm:hidden">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-sm"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li><a href="/resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
              <li><a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
