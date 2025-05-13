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

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl text-base-content">
                    Home
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base-content">
                    <li>
                        <a href="/about">About</a>
                    </li>
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
                <option value="cupcake">Cupcake</option>
                <option value="synthwave">Synthwave</option>
                <option value="coffee">Coffee</option>
            </select>
        </div>
    );
}