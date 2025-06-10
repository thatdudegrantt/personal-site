"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
    const handleEmailClick = () => {
        const email = 'polazzo.grant' + '@' + 'gmail.com';
        navigator.clipboard.writeText(email);
        alert('Email copied to clipboard!');
    };

    return (
        <div className="min-h-screen bg-base-200 p-6 md:p-10">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-base-content mb-3">Let's Connect</h1>
                    <p className="text-lg text-base-content/80 max-w-lg mx-auto">
                        Reach out for collaborations, opportunities, or just to chat about tech!
                    </p>
                </div>

                {/* Contact Cards Grid - Now 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* LinkedIn Card */}
                    <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-base-300">
                        <div className="flex flex-col items-center text-center h-full">
                            <div className="bg-blue-100/20 p-4 rounded-full mb-4">
                                <FaLinkedin className="text-blue-500 text-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-base-content mb-3">Professional Network</h2>
                            <p className="text-base-content/80 mb-6 flex-grow">
                                Connect for career opportunities or professional advice
                            </p>
                            <a
                                href="https://www.linkedin.com/in/grant-polazzo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-full mt-auto"
                            >
                                Visit LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-base-300">
                        <div className="flex flex-col items-center text-center h-full">
                            <div className="bg-purple-100/20 p-4 rounded-full mb-4">
                                <FaGithub className="text-purple-500 text-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-base-content mb-3">Code Collaboration</h2>
                            <p className="text-base-content/80 mb-6 flex-grow">
                                Explore my projects or collaborate on open-source work
                            </p>
                            <a
                                href="https://github.com/thatdudegrantt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary w-full mt-auto"
                            >
                                View GitHub
                            </a>
                        </div>
                    </div>

                    {/* LeetCode Card */}
                    <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-base-300">
                        <div className="flex flex-col items-center text-center h-full">
                            <div className="bg-orange-100/20 p-4 rounded-full mb-4">
                                <SiLeetcode className="text-orange-500 text-3xl" />
                            </div>
                            <h2 className="text-xl font-semibold text-base-content mb-3">Coding Challenges</h2>
                            <p className="text-base-content/80 mb-6 flex-grow">
                                View my problem-solving skills and algorithm practice
                            </p>
                            <a
                                href="https://leetcode.com/thatdudegrant/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-orange-500 hover:bg-orange-600 text-white w-full mt-auto"
                            >
                                View LeetCode
                            </a>
                        </div>
                    </div>
                </div>

                {/* Email Section */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6 border border-base-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-green-100/20 p-4 rounded-full mb-4">
                            <FaEnvelope className="text-green-500 text-3xl" />
                        </div>
                        <h2 className="text-xl font-semibold text-base-content mb-2">Email Me</h2>
                        <p className="text-base-content/80 mb-6">
                            For direct inquiries, you can reach me at:
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="tooltip tooltip-bottom"
                            data-tip="Click to copy"
                        >
                            <button
                                onClick={handleEmailClick}
                                className="btn btn-neutral flex items-center gap-2 px-6"
                            >
                                <FaEnvelope />
                                <span className="font-mono text-sm">
                  polazzo.grant<span className="hidden sm:inline">@gmail.com</span>
                </span>
                            </button>
                        </motion.div>

                        <p className="text-sm text-base-content/60 mt-4">
                            (Click to copy - prevents email scraping)
                        </p>
                    </div>
                </div>

                {/* Response Time Note */}
                <div className="text-center text-base-content/70 text-sm">
                    <p>I typically respond to professional inquiries within 24-48 hours.</p>
                </div>
            </div>
        </div>
    );
}