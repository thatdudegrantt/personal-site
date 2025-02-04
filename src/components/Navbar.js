"use client";

export default function Navbar() {
    const handleThemeChange = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl text-base-content">
                    My Website
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-base-content">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                </ul>
            </div>
            <select className="select select-bordered text-base-content" onChange={(e) => handleThemeChange(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="cupcake">Cupcake</option>
                <option value="synthwave">Synthwave</option>
                <option value="coffee">Coffee</option>
            </select>
        </div>
    );
}