// src/components/ContactContent.jsx
// Ported from contact/page.js — LeetCode card removed per request.
// Email is assembled client-side to avoid scraping.

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const buttonVar = {
  hover: { scale: 1.03 },
  tap: { scale: 0.98 },
};

export default function ContactContent() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Obfuscated assembly — same approach as original
    const parts = ["polazzo.grant", "gmail.com"];
    setEmail(parts.join("@"));
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-base-content mb-2">
            Let's Connect
          </h1>
          <p className="text-base-content opacity-80">
            Reach out for opportunities or collaborations
          </p>
        </div>

        {/* Contact cards — 2 columns now that LeetCode is removed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* LinkedIn */}
          <div className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-base-300 flex flex-col items-center text-center">
            <div className="bg-blue-100/20 p-3 rounded-full mb-3">
              <FaLinkedin className="text-blue-500 text-2xl" />
            </div>
            <h2 className="text-lg font-semibold mb-3 text-base-content">
              LinkedIn
            </h2>
            <motion.div whileHover={buttonVar.hover} whileTap={buttonVar.tap}>
              <a
                href="https://www.linkedin.com/in/grant-polazzo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Connect
              </a>
            </motion.div>
          </div>

          {/* GitHub */}
          <div className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-base-300 flex flex-col items-center text-center">
            <div className="bg-purple-100/20 p-3 rounded-full mb-3">
              <FaGithub className="text-purple-500 text-2xl" />
            </div>
            <h2 className="text-lg font-semibold mb-3 text-base-content">
              GitHub
            </h2>
            <motion.div whileHover={buttonVar.hover} whileTap={buttonVar.tap}>
              <a
                href="https://github.com/thatdudegrantt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                View Code
              </a>
            </motion.div>
          </div>
        </div>

        {/* Email section */}
        <div className="bg-base-100 rounded-lg shadow-md p-6 border border-base-300">
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-100/20 p-3 rounded-full mb-3">
              <FaEnvelope className="text-green-500 text-2xl" />
            </div>
            <h2 className="text-lg font-semibold mb-3 text-base-content">
              Email
            </h2>
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
                  {email || "Loading..."}
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-sm text-base-content opacity-60">
          <p>I typically respond within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}
