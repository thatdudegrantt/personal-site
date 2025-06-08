"use client";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Contact() {
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

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* LinkedIn Card */}
                    <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-base-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100/20 p-4 rounded-full mb-4">
                                <FaLinkedin className="text-blue-500 text-3xl" />
                            </div>
                            <h2 className="text-2xl font-semibold text-base-content mb-3">Professional Network</h2>
                            <p className="text-base-content/80 mb-6">
                                Connect for career opportunities, internships, or professional advice.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/grant-polazzo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary px-8 w-full sm:w-auto"
                            >
                                Visit LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* GitHub Card */}
                    <div className="bg-base-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-base-300">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-100/20 p-4 rounded-full mb-4">
                                <FaGithub className="text-purple-500 text-3xl" />
                            </div>
                            <h2 className="text-2xl font-semibold text-base-content mb-3">Code Collaboration</h2>
                            <p className="text-base-content/80 mb-6">
                                Explore my projects or collaborate on open-source work.
                            </p>
                            <a
                                href="https://github.com/thatdudegrantt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary px-8 w-full sm:w-auto"
                            >
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="bg-base-100 rounded-xl shadow-lg p-6 mt-8 border border-base-300">
                    <div className="flex items-start">
                        <div className="bg-yellow-100/20 p-3 rounded-lg mr-4">
                            <FaCode className="text-yellow-500 text-xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-base-content mb-2">Other Channels</h3>
                            <p className="text-base-content/80">
                                For specific inquiries, feel free to message me on LinkedIn. I typically respond within 24-48 hours to professional messages.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}