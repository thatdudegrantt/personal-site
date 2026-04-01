// src/components/ResumeHeader.jsx
// Tiny island — only the copy-to-clipboard buttons need client JS.
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const buttonVar = { hover: { scale: 1.03 }, tap: { scale: 0.98 } };

export default function ResumeHeader() {
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState({ email: false, github: false, linkedin: false });

  useEffect(() => {
    setEmail(["gpolazzo3", "gatech.edu"].join("@"));
  }, []);

  const handleCopy = (type, text) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
  };

  return (
    <div className="bg-base-100 rounded-lg shadow-lg p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-base-content text-center mb-4">
        Grant Polazzo
      </h1>
      <div className="flex flex-wrap justify-center gap-3 items-center">
        {/* Email */}
        <div className="tooltip" data-tip={copied.email ? "Copied!" : "Click to copy"}>
          <button
            onClick={() => handleCopy("email", email)}
            className="btn btn-outline btn-sm flex items-center gap-2 border-base-content hover:border-base-content transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <FaEnvelope className="text-base-content" />
            <span className="text-base-content">{email || "Loading..."}</span>
          </button>
        </div>
        {/* GitHub */}
        <div className="tooltip" data-tip={copied.github ? "Copied!" : "Click to copy"}>
          <button
            onClick={() => handleCopy("github", "github.com/thatdudegrantt")}
            className="btn btn-outline btn-sm flex items-center gap-2 border-base-content hover:border-base-content transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <FaGithub className="text-base-content" />
            <span className="text-base-content">GitHub</span>
          </button>
        </div>
        {/* LinkedIn */}
        <div className="tooltip" data-tip={copied.linkedin ? "Copied!" : "Click to copy"}>
          <button
            onClick={() => handleCopy("linkedin", "linkedin.com/in/grant-polazzo")}
            className="btn btn-outline btn-sm flex items-center gap-2 border-base-content hover:border-base-content transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <FaLinkedin className="text-base-content" />
            <span className="text-base-content">LinkedIn</span>
          </button>
        </div>
      </div>
    </div>
  );
}
