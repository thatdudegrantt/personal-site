"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';


export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if(!mounted) return null;

    return (
        <div className="navbar bg-base-100 shadow-lg">

            <div className="flex-1 flex items-center gap-2">
                <a href="/" className="btn btn-ghost normal-case text-xl text-base-content">
                    Home
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

            <select className="select select-bordered text-base-content"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}>
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}