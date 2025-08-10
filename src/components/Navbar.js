"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence} from "framer-motion";


export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if(!mounted) return null;

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="navbar bg-base-100 shadow-lg">

            <div className="flex-1 flex items-center gap-2">
                <a href="/" className="btn btn-ghost normal-case text-xl text-base-content" aria-label={"Home"}>
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
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </a>
                <ul className="menu menu-horizontal px-1 text-base-content gap-1">
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>

            <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-base-200 hover:bg-base-300 transition-colors"
                aria-label="Toggle theme"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={theme}
                        initial={{opacity: 0, rotate: -30}}
                        animate={{opacity: 1, rotate: 0}}
                        exit={{opacity: 0, rotate: 30}}
                        transition={{duration: 0.2}}
                        className={"text-primary"}
                    >
                        {theme === 'light' ? (
                            // Sun icon (light mode)
                            <svg className="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5"/>
                                <line x1="12" y1="1" x2="12" y2="3"/>
                                <line x1="12" y1="21" x2="12" y2="23"/>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                                <line x1="1" y1="12" x2="3" y2="12"/>
                                <line x1="21" y1="12" x2="23" y2="12"/>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                            </svg>
                        ) : (
                            // Moon icon (dark mode)
                            <svg className="text-indigo-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                            </svg>
                        )}
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
}