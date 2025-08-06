"use client";
import { FaEnvelope, FaChevronDown, FaChevronUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Resume() {
    const [email, setEmail] = useState('');
    const [copied, setCopied] = useState({
        email: false,
        github: false,
        linkedin: false
    });

    useEffect(() => {
        const parts = ['polazzo.grant', 'gmail.com'];
        setEmail(parts.join('@'));
    }, []);

    const handleCopy = (type, text) => {
        navigator.clipboard.writeText(text);
        setCopied(prev => ({ ...prev, [type]: true }));
        setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
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

    // animations

    //cards
    const cardVar = {
        hover: { y: -3 },
        tap: { scale: 0.98 }
    };
    //buttons
    const buttonVar = {
        hover: { scale: 1.03 },
        tap: { scale: 0.98 }
    };

    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header - Now with consistent button styling */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-base-content text-center mb-4">Grant Polazzo</h1>
                    <div className="flex flex-wrap justify-center gap-3 items-center">
                        {/* Email */}
                        <motion.div
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            className="tooltip"
                            data-tip={copied.email ? "Copied!" : "Click to copy"}
                        >
                            <button
                                onClick={() => handleCopy('email', email)}
                                className="btn btn-outline btn-sm flex items-center gap-2"
                            >
                                <FaEnvelope/>
                                <span className="font-mono text-xs sm:text-sm">
                  {email || 'Loading...'}
                </span>
                            </button>
                        </motion.div>

                        {/* GitHub */}
                        <motion.div
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            className="tooltip"
                            data-tip={copied.github ? "Copied!" : "Click to copy"}
                        >
                            <button
                                onClick={() => handleCopy('github', 'github.com/thatdudegrantt')}
                                className="btn btn-outline btn-sm flex items-center gap-2"
                            >
                                <FaGithub/>
                                <span>GitHub</span>
                            </button>
                        </motion.div>

                        {/* LinkedIn */}
                        <motion.div
                            whileHover={buttonVar.hover}
                            whileTap={buttonVar.tap}
                            className="tooltip"
                            data-tip={copied.linkedin ? "Copied!" : "Click to copy"}
                        >
                            <button
                                onClick={() => handleCopy('linkedin', 'linkedin.com/in/grant-polazzo')}
                                className="btn btn-outline btn-sm flex items-center gap-2"
                            >
                                <FaLinkedin/>
                                <span>LinkedIn</span>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Education */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-base-content mb-4">EDUCATION</h2>
                    <div className="mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold text-base-content">GEORGIA INSTITUTE OF TECHNOLOGY</h3>
                            <span className="text-base-content">Dec 2026</span>
                        </div>
                        <div className="flex justify-between items-start">
                            <p className="text-base-content">Bachelor of Science in Computer Science</p>
                            <span className="text-base-content">Atlanta, GA</span>
                        </div>
                        <div className="mt-2">
                            <p className="text-base-content italic">Threads: Media/Systems & Architecture</p>
                            <p className="text-base-content italic">Minor in Economics</p>
                        </div>

                        {/* Expandable Awards */}
                        <div className="mt-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => toggleSection('awards')}
                            >
                                <h4 className="font-medium text-base-content">Awards</h4>
                                {expandedSections.awards ?
                                    <FaChevronUp size={14} className="text-base-content"/> :
                                    <FaChevronDown size={14} className="text-base-content"/>
                                }
                            </div>
                            {expandedSections.awards && (
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li className="text-base-content">Georgia Tech's Dean's List (Spring 2024)</li>
                                    <li className="text-base-content">GSU President's List Fall 2022 & Dean's List
                                        Spring 2023
                                    </li>
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
                                {expandedSections.clubs ?
                                    <FaChevronUp size={14} className="text-base-content"/> :
                                    <FaChevronDown size={14} className="text-base-content"/>
                                }
                            </div>
                            {expandedSections.clubs && (
                                <p className="text-base-content mt-2">GT Developers, Video Games @ GT, GT Esports, &
                                    multiple GT recreational sports clubs.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-base-content mb-4">TECHNICAL SKILLS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base-content">
                        <div>
                            <h3 className="font-semibold">Languages:</h3>
                            <p>Java, Python, C, C#, JavaScript, HTML/CSS</p>
                            <h3 className="font-semibold mt-3">Game Development:</h3>
                            <p>C++ (Learning), Unreal 5, Unity, Blender</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Frameworks:</h3>
                            <p>Django, React, Node.js/Next.js, MongoDB</p>
                            <h3 className="font-semibold mt-3">Tools:</h3>
                            <p>Git, Docker, AWS, CI/CD Pipelines</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Concepts:</h3>
                            <p>Agile, OOP, Data Structures & Algorithms, Computer Vision, UI/UX design</p>
                        </div>
                    </div>
                </div>

                {/* Projects - Card Style */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-base-content mb-6">PROJECTS</h2>
                    <div className="space-y-6">
                        {/* Plankton Computer Vision */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-base-content">PLANKTON COMPUTER VISION
                                    PROJECT</h3>
                                <span className="text-sm text-base-content opacity-70">Jan 2025 - Present</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Python</span>
                                <span className="badge badge-primary">Jupyter Notebooks</span>
                                <span className="badge badge-primary">Computer Vision</span>
                            </div>
                            <ul className="space-y-2 text-base-content">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Lead role designing a computer vision neural network to identify species of plankton
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Improved CNN accuracy by 65% by redesigning from InceptionV3 to EfficientNet model
                                </li>
                            </ul>
                        </motion.div>
                        {/* GBA Emulator */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-base-content">GAME BOY ADVANCE EMULATOR & FROGGER
                                    CLONE</h3>
                                <span className="text-sm text-base-content opacity-70">Mar 2025 - Apr 2025</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">C</span>
                                <span className="badge badge-primary">Game Development</span>
                                <span className="badge badge-primary">Low-level Programming</span>
                            </div>
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
                        </motion.div>

                        {/* Audioscape Journey */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-base-content">AUDIOSCAPE JOURNEY (CUSTOM SPOTIFY
                                    WRAPPED)</h3>
                                <span className="text-sm text-base-content opacity-70">Oct 2024 - Dec 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Agile</span>
                                <span className="badge badge-primary">Python</span>
                                <span className="badge badge-primary">Django</span>
                                <span className="badge badge-primary">JS/HTML/CSS</span>
                                <span className="badge badge-primary">LLM</span>
                                <span className="badge badge-primary">Multiple APIs</span>
                            </div>
                            <ul className="space-y-2 text-base-content">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Dynamic website leveraging Spotify API to generate & display custom music listening
                                    data
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Designed engaging animations, game logic, and integrated AI using Google's Gemini
                                    LLM
                                </li>
                            </ul>
                        </motion.div>

                        {/* Atlanta Food Finder */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-base-content">ATLANTA FOOD FINDER</h3>
                                <span className="text-sm text-base-content opacity-70">Aug 2024 - Oct 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Agile</span>
                                <span className="badge badge-primary">Python</span>
                                <span className="badge badge-primary">Django</span>
                                <span className="badge badge-primary">JS/HTML/CSS</span>
                                <span className="badge badge-primary">Google Maps API</span>
                            </div>
                            <ul className="space-y-2 text-base-content">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Built map-based application for restaurant searches by name, favorites, food type, and proximity to user.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    Implemented backend logic like unique secure accounts, user saved favorite & reviews of our system & individual restaurants.
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>

                {/* Work Experience */}
                <div className="bg-base-100 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-base-content mb-4">WORK EXPERIENCE</h2>
                    <div className="space-y-6">
                        {/* Barcelona Wine Bar */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-base-content">BARCELONA WINE BAR -
                                    WAITSTAFF</h3>
                                <span className="text-sm text-base-content opacity-70">Jun 2024 - Dec 2024</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Customer Service</span>
                                <span className="badge badge-primary">Teamwork</span>
                                <span className="badge badge-primary">Social Skills</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1 text-base-content">
                                <li>Collaborated in a high-pressure team environment, managing 75+ daily customer
                                    interactions
                                </li>
                                <li>Developed exceptional multitasking abilities during peak service hours</li>
                            </ul>
                        </motion.div>

                        {/* City of Atlanta */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-base-content">CITY OF ATLANTA, OFFICE OF THE
                                    MAYOR - EXECUTIVE INTERN</h3>
                                <span className="text-sm text-base-content opacity-70">Jan 2022 - Aug 2022</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Administration</span>
                                <span className="badge badge-primary">Event Planning</span>
                                <span className="badge badge-primary">Scripting</span>
                                <span className="badge badge-primary">Organization</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1 text-base-content">
                                <li>Worked under the Mayor's Executive Assistant & COA Business Manager</li>
                                <li>Organized and planned high-profile city events with 100+ attendees</li>
                                <li>Researched city archives and documented financial records with 100% accuracy</li>
                            </ul>
                        </motion.div>

                        {/* Ossoff Campaign */}
                        <motion.div
                            whileHover={cardVar.hover}
                            whileTap={cardVar.tap}
                            className="bg-base-200/50 rounded-lg p-5 border border-base-300"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-base-content">JON OSSOFF FOR US SENATE -
                                    CAMPAIGN VOLUNTEER</h3>
                                <span className="text-sm text-base-content opacity-70">Sep 2020 - Dec 2020</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="badge badge-primary">Outreach</span>
                                <span className="badge badge-primary">Fundraising</span>
                                <span className="badge badge-primary">Public Speaking</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1 text-base-content">
                                <li>Canvassed door-to-door, engaging with 200+ potential voters weekly</li>
                                <li>Assisted with mailings reaching 5,000+ households</li>
                                <li>Participated in fundraising events that raised $50,000+ for the campaign</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

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
