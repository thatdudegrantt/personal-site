"use client";
import { FaEnvelope, FaChevronDown, FaChevronUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Resume() {
    const [email, setEmail] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const parts = ['polazzo.grant', 'gmail.com'];
        setEmail(parts.join('@'));
    }, []);

    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // added expand sections
    const [expandedSections, setExpandedSections] = useState({
        awards: false,
        clubs: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    // button animation
    const buttonVar = {
        hover: { scale: 1.03 },
        tap: { scale: 0.98 }
    };

    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header with secured contact info */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 border border-base-300">
                    <h1 className="text-3xl md:text-4xl font-bold text-base-content text-center mb-4">Grant Polazzo</h1>
                    <div className="flex flex-wrap justify-center gap-4 items-center">
                        <motion.div
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            className="tooltip"
                            data-tip={copied ? "Copied!" : "Click to copy"}
                        >
                            <button
                                onClick={handleEmailClick}
                                className="btn btn-neutral btn-sm flex items-center gap-2"
                            >
                                <FaEnvelope />
                                <span className="font-mono text-xs sm:text-sm">
                  {email || 'Loading...'}
                </span>
                            </button>
                        </motion.div>

                        <motion.a
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            href="https://github.com/thatdudegrantt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm flex items-center gap-2"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </motion.a>

                        <motion.a
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            href="https://linkedin.com/in/grant-polazzo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost btn-sm flex items-center gap-2"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </motion.a>
                    </div>
                </div>

                {/* Education - Card Style */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 border-l-4 border-primary">
                    <h2 className="text-2xl font-bold text-base-content mb-4">EDUCATION</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-base-content">GEORGIA INSTITUTE OF TECHNOLOGY</h3>
                        <div className="flex justify-between text-base-content">
                            <span className="font-medium">Atlanta, GA</span>
                            <span>Dec 2026</span>
                        </div>
                        <p className="italic text-base-content mt-1">Bachelor of Science in Computer Science (Threads: Media/Systems & Architecture), Minor in Economics</p>

                        {/* Expandable Awards */}
                        <div className="mt-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection('awards')}
                            >
                                <h4 className="font-medium text-base-content">Awards</h4>
                                {expandedSections.awards ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                            </div>
                            {expandedSections.awards && (
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li className="text-base-content">Georgia Tech's Dean's List (Spring 2024)</li>
                                    <li className="text-base-content">GSU President's List Fall 2022 & Dean's List Spring 2023</li>
                                </ul>
                            )}
                        </div>

                        {/* Expandable Clubs */}
                        <div className="mt-3">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection('clubs')}
                            >
                                <h4 className="font-medium text-base-content">Clubs & Activities</h4>
                                {expandedSections.clubs ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                            </div>
                            {expandedSections.clubs && (
                                <p className="text-base-content mt-2">GT Developers, Video Games @ GT, GT esports, & multiple GT recreational sports clubs.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Technical Skills - Card Style */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6 border-l-4 border-secondary">
                    <h2 className="text-2xl font-bold text-base-content mb-4">TECHNICAL SKILLS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base-content">
                        <div>
                            <h3 className="font-semibold">Languages:</h3>
                            <p>Java, Python, C, C#, JavaScript, HTML/CSS</p>
                            <h3 className="font-semibold mt-3">Emerging Skills:</h3>
                            <p>C++ Rust, TypeScript, Go</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Frameworks:</h3>
                            <p>Django, React, Node.js/Next.js, Git, MongoDB, Jupyter Notebooks, AWS</p>
                            <h3 className="font-semibold mt-3">DevOps:</h3>
                            <p>Docker, CI/CD Pipelines</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Concepts:</h3>
                            <p>Agile, OOP, Data Structures & Algorithms, LLMs & Neural Networks, Computer Vision, Dynamic Programming, UI/UX design, Fullstack development</p>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-6 text-[var(--resume-heading)] border-[var(--resume-heading)]">
                        PROJECTS
                    </h2>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Plankton Computer Vision */}
                        <div
                            className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-base-content">PLANKTON COMPUTER VISION
                                        PROJECT</h3>
                                    <span className="text-sm bg-primary text-primary-content px-2 py-1 rounded">
                                        Python, Jupyter Notebooks
                                    </span>
                                </div>
                                <p className="text-sm text-base-content mb-4">Jan 2025 - Present</p>
                                <ul className="space-y-2 text-base-content">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Lead role designing a computer vision neural network to identify species of
                                        plankton
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Improved CNN accuracy by 65% by redesigning from InceptionV3 to EfficientNet
                                        model
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Implemented image preprocessing pipeline focusing on depth retention and edge
                                        sharpening
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* GBA Emulator */}
                        <div
                            className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-base-content">GAME BOY ADVANCE EMULATOR &
                                        FROGGER CLONE</h3>
                                    <span className="text-sm bg-primary text-primary-content px-2 py-1 rounded">
                                        C
                                    </span>
                                </div>
                                <p className="text-sm text-base-content mb-4">Mar 2025 - Apr 2025</p>
                                <ul className="space-y-2 text-base-content">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Implemented GBA hardware-level features including DMA and memory-mapped I/O
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Developed Frogger game with custom collision detection and state machine
                                        architecture
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Audioscape Journey */}
                        <div
                            className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-base-content">AUDIOSCAPE JOURNEY (CUSTOM
                                        SPOTIFY WRAPPED)</h3>
                                    <span className="text-sm bg-primary text-primary-content px-2 py-1 rounded">
                                        Python, CSS/HTML, JavaScript, Django
                                    </span>
                                </div>
                                <p className="text-sm text-base-content mb-4">Oct 2024 - Dec 2024</p>
                                <ul className="space-y-2 text-base-content">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Developed a dynamic website leveraging Spotify API to generate & display custom
                                        music listening data
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Designed engaging animations, game logic, and integrated AI using Google's
                                        Gemini LLM
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Employed Agile methodologies to meet client needs for a project that our
                                        professor & TAs labeled best in the class
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Atlanta Food Finder */}
                        <div
                            className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-base-content">ATLANTA FOOD FINDER</h3>
                                    <span className="text-sm bg-primary text-primary-content px-2 py-1 rounded">
                                        Python, CSS, HTML, JavaScript, Django
                                    </span>
                                </div>
                                <p className="text-sm text-base-content mb-4">Aug 2024 - Oct 2024</p>
                                <ul className="space-y-2 text-base-content">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Built a map-based application utilizing Google Maps API for restaurant searches
                                        by name, type, and proximity
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Implemented seamless backend logic, accounts, restaurant favoriting & review
                                        system
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        Created user-friendly UI design with intuitive navigation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section>
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-[var(--resume-heading)] border-[var(--resume-heading)]">WORK
                        EXPERIENCE</h2>
                    <section className="text-base-content">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">BARCELONA WINE BAR - WAITSTAFF</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Jun 2024 - Dec 2024</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Collaborated in a high-pressure team environment, managing 75+ daily customer
                                    interactions
                                </li>
                            </ul>
                        </div>

                        {/* City of Atlanta */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">CITY OF ATLANTA, OFFICE OF THE MAYOR - EXECUTIVE
                                INTERN</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Jan 2022 - Aug 2022</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Worked under the Mayor's Executive Assistant & COA Business Manager</li>
                                <li>Organized, researched, planned events, and researched city archives</li>
                                <li>Documented finances and helped onboard and advise new interns</li>
                            </ul>
                        </div>

                        {/* Ossoff Campaign */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">JON OSSOFF FOR US SENATE - CAMPAIGN VOLUNTEER</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Sep 2020 - Dec 2020</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Canvassed door to door and assisted with mailings</li>
                                <li>Participated in both in-person and virtual fundraisers</li>
                            </ul>
                        </div>
                    </section>

                </section>

                {/* PDF Download */}
                    <motion.div
                        whileHover={buttonVar.hover}
                        whileTap={buttonVar.tap}
                        className="text-center"
                    >
                        <a
                            href="/Grant_Polazzo_Resume_2025.pdf"
                            download
                            className="btn btn-primary"
                        >
                            Download PDF Version
                        </a>
                    </motion.div>
            </div>
        </div>
);
}
