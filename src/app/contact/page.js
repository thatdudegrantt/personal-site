"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
    const [email, setEmail] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Obfuscated email assembly
        const parts = ['polazzo.grant', 'gmail.com'];
        setEmail(parts.join('@'));
    }, []);

    const handleEmailClick = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    //animation consistency:
    const buttonVar = {
        hover: {scale: 1.03},
        tap: {scale: 0.98}
    };

    return (
        <div className="min-h-screen bg-base-200 p-4 md:p-8">
            <div className="max-w-3xl mx-auto space-y-6">
                {/* Compact Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-base-content mb-2">Let's Connect</h1>
                    <p className="text-base-content opacity-80">
                        Reach out for opportunities or collaborations
                    </p>
                </div>


                {/* Compact Contact Cards - Equal Height */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* LinkedIn Card */}
                    <div className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-base-300 flex flex-col h-full">
                        <div className="flex flex-col items-center text-center flex-grow">
                            <div className="bg-blue-100/20 p-3 rounded-full mb-3">
                                <FaLinkedin className="text-blue-500 text-2xl"/>
                            </div>
                            <h2 className="text-lg font-semibold mb-2 text-base-content">LinkedIn</h2>
                            <motion.div
                                whileHover={buttonVar.hover}
                                whileTap={buttonVar.tap}
                            >
                                <a
                                    href="https://www.linkedin.com/in/grant-polazzo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-sm w-full mt-auto"
                                >
                                    Connect
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div
                        className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-base-300 flex flex-col h-full">
                        <div className="flex flex-col items-center text-center flex-grow">
                            <div className="bg-purple-100/20 p-3 rounded-full mb-3">
                                <FaGithub className="text-purple-500 text-2xl"/>
                            </div>
                            <h2 className="text-lg font-semibold mb-2 text-base-content">GitHub</h2>
                            <motion.div
                                whileHover={buttonVar.hover}
                                whileTap={buttonVar.tap}
                            >
                                <a
                                    href="https://github.com/thatdudegrantt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary btn-sm w-full mt-auto"
                                >
                                    View Code
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* LeetCode Card */}
                    <div
                        className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-base-300 flex flex-col h-full">
                        <div className="flex flex-col items-center text-center flex-grow">
                            <div className="bg-orange-100/20 p-3 rounded-full mb-3">
                                <SiLeetcode className="text-orange-500 text-2xl"/>
                            </div>
                            <h2 className="text-lg font-semibold mb-2 text-base-content">LeetCode</h2>
                            <motion.div
                                whileHover={buttonVar.hover}
                                whileTap={buttonVar.tap}
                            >
                                <a
                                    href="https://leetcode.com/thatdudegrant/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-orange-500 hover:bg-orange-600 text-white btn-sm w-full mt-auto"
                                >
                                    View Profile
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Compact Email Section */}
                <div className="bg-base-100 rounded-lg shadow-md p-4 border border-base-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100/20 p-3 rounded-full mb-3">
                            <FaEnvelope className="text-green-500 text-2xl" />
                        </div>
                        <h2 className="text-lg font-semibold mb-2 text-base-content">Email</h2>

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
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="text-center text-sm text-base-content opacity-60">
                    <p>I typically respond within 24 hours.</p>
                </div>
            </div>
        </div>
    );
}