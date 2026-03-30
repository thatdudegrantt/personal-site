// src/components/ProjectCard.jsx
// Interactive project card:
//   - Entire card is clickable → opens github link in new tab (if provided)
//   - Description truncated to 3 lines; "Show more" toggle expands
//   - Equal card heights via CSS grid on the parent

import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, tech, date, description, github }) {
  const [expanded, setExpanded] = useState(false);

  // Number of bullet points visible when collapsed
  const COLLAPSED_ITEMS = 2;
  const hasMore = description.length > COLLAPSED_ITEMS;
  const visibleItems = expanded ? description : description.slice(0, COLLAPSED_ITEMS);

  const handleCardClick = (e) => {
    // Don't navigate if they clicked the expand button
    if (e.target.closest("[data-expand]")) return;
    if (github) {
      window.open(github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`
        bg-base-100 rounded-xl shadow-lg overflow-hidden border border-base-300
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        flex flex-col h-full
        ${github ? "cursor-pointer group" : "cursor-default"}
      `}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header row */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <h2 className="text-lg font-bold text-base-content leading-tight flex-1">
            {title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            {github && (
              <FiGithub
                className="w-4 h-4 text-base-content opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-200"
                aria-label="View on GitHub"
              />
            )}
            <span className="text-xs text-base-content opacity-60 whitespace-nowrap">
              {date}
            </span>
          </div>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.map((t, i) => (
            <span key={i} className="badge badge-primary badge-sm">
              {t}
            </span>
          ))}
        </div>

        {/* Description list — grows to fill card */}
        <ul className="space-y-1.5 text-base-content text-sm flex-1">
          {visibleItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 shrink-0 text-primary">•</span>
              <span>{item.trim()}</span>
            </li>
          ))}
        </ul>

        {/* Show more / less toggle */}
        {hasMore && (
          <button
            data-expand="true"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded((v) => !v);
            }}
            className="mt-3 text-xs text-primary hover:underline self-start focus:outline-none"
          >
            {expanded ? "Show less ↑" : `Show ${description.length - COLLAPSED_ITEMS} more ↓`}
          </button>
        )}

        {/* GitHub hint at the bottom when there's a link */}
        {github && (
          <div className="mt-3 pt-3 border-t border-base-300 flex items-center gap-1 text-xs text-base-content opacity-40 group-hover:opacity-70 transition-opacity">
            <FiExternalLink className="w-3 h-3" />
            <span>View repository</span>
          </div>
        )}
      </div>
    </div>
  );
}
