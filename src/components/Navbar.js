"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';


export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Sync with cookie on first load
        const savedTheme = document.cookie
            .split("; ")
            .find(row => row.startsWith("theme="))
            ?.split("=")[1];

        if (savedTheme && theme !== savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.cookie = `theme=${newTheme}; path=/`;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    if(!mounted) {
        return null; // avoids rendering until component is mounted
    }

    // changing to add left and right said of navbar to achieve stylized look I want.
    return (
        <div className="navbar bg-base-100 shadow-lg">

            <div className="flex-1 flex items-center gap-2">
                <a href="/" className="btn btn-ghost normal-case text-xl text-base-content">
                    Home
                </a>
                <ul className="menu menu-horizontal px-1 text-base-content gap-1">
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>

            <select className="select select-bordered text-base-content"
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}