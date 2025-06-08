"use client";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="max-w-2xl mx-auto bg-base-100 rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-base-content mb-6">Get In Touch</h1>

                <div className="space-y-6">
                    {/* Professional Contact */}
                    <div className="bg-neutral/10 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-base-content mb-4">Professional Inquiries</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.linkedin.com/in/grant-polazzo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-neutral flex items-center gap-2 flex-1"
                            >
                                <FaLinkedin className="text-lg" />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Technical Contact */}
                    <div className="bg-primary/10 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-base-content mb-4">Technical Collaboration</h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://github.com/thatdudegrantt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary flex items-center gap-2 flex-1"
                            >
                                <FaGithub className="text-lg" />
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Email (Protected) */}
                    <div className="bg-secondary/10 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-base-content mb-4">Direct Email</h2>
                        <div className="flex flex-col items-center">
                            <div className="tooltip tooltip-bottom" data-tip="Click to copy">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText('polazzo.grant@gmail.com');
                                        alert('Email copied to clipboard!');
                                    }}
                                    className="btn btn-secondary flex items-center gap-2"
                                >
                                    <FaEnvelope className="text-lg" />
                                    <span className="font-mono">polazzo.grant@gmail.com</span>
                                </button>
                            </div>
                            <p className="text-sm text-base-content mt-2">
                                (Click to copy - helps prevent spam scraping)
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-base-content">
                    <p>I typically respond within 24-48 hours to professional inquiries.</p>
                    <p className="mt-2 text-sm">Looking forward to connecting!</p>
                </div>
            </div>
        </div>
    );
}