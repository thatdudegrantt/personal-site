// src/components/ProjectsGrid.jsx
// Projects grid with category filtering. All data lives here.
// To add a github link, set github: "https://github.com/..."
// Tags drive the filter buttons — add new ones freely.

import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

const FILTERS = ["All", "ML / AI", "Fullstack", "Systems", "Game Dev"];

const projects = [
  {
    title: "GT VIP Team Lead — Computer Vision",
    tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "CUDA", "scikit-learn", "PACE-ICE HPC"],
    date: "Jan 2025 – Present",
    tags: ["ML / AI", "Systems"],
    description: [
      "Led a team of 8 developers as senior developer and project manager; revitalized a stalled 3-year-old project by resolving dependency conflicts across 40+ packages, modernizing from a non-functional state to a fully operational GPU training pipeline.",
      "Designed a dual-input deep learning architecture fusing image features with a 16-dimensional physical feature vector, applying transfer learning across 9 CNN architectures on a 15,000-image, 43-species plankton dataset.",
      "Achieved up to 92.7% validation accuracy classifying 43 plankton species — trained on Georgia Tech's PACE-ICE HPC cluster using A100 and H100 GPUs via parallelized Slurm batch jobs.",
      "Engineered full model training infrastructure: automated multi-model batch submission scripts, per-epoch CSV logging, model checkpointing, and a results visualization pipeline.",
    ],
    // github: "",
  },
  {
    title: "GT Roller Derby Practice Planner",
    tech: ["TypeScript", "Next.js", "Firebase", "Firestore"],
    date: "Apr 2026 – Present",
    tags: ["Fullstack"],
    description: [
      "Developing a full-stack application to automate practice planning for a 150+ member sports club, aiming to reduce weekly planning time for coaches and standardize training materials.",
      "Collaborating directly with club leadership to define user stories and design an intuitive UI featuring a drag-and-drop builder for creating structured, exportable practice plans.",
      "Engineering the system using Next.js and Firebase to manage user authentication, real-time data storage, and secure serverless backend functionality.",
    ],
    // github: "",
  },
  {
    title: "GT RoboJackets Inventory & Team Management",
    tech: ["TypeScript", "Next.js", "PocketBase", "MantineUI"],
    date: "Aug 2025 – Sep 2025",
    tags: ["Fullstack"],
    description: [
      "Engineered a full-stack inventory and member management system to digitize operations for GT's competitive robotics club, replacing error-prone manual spreadsheets.",
      "Implemented real-time data synchronization across admin dashboards and user views for immediate visibility into inventory changes, team rosters, and part request statuses.",
      "Launched a user registration portal adopted by 100% of active club members; designed admin verification tools to manage permissions and part request approvals.",
      "Architected the frontend with TypeScript generics and MantineUI to create reusable, type-safe tables and modals with pagination and bulk actions.",
    ],
    // github: "",
  },
  {
    title: "GBA Hardware Emulator & Frogger Clone",
    tech: ["C", "Docker", "Low-level Programming"],
    date: "Mar 2025 – Apr 2025",
    tags: ["Systems", "Game Dev"],
    description: [
      "Engineered key GBA hardware components in C, including DMA transfer and memory-mapped I/O, to accurately emulate the system's architecture.",
      "Developed a game logic engine with a custom state machine and collision detection system, optimizing rendering and logic for the GBA's limited CPU cycles and RAM.",
      "Created for CS 2110 as a challenging assignment on C, DMA, memory-mapped I/O, utilizing a docker container for the emulator."
    ],
    // github: "",
  },
  {
    title: "Audioscape Journey (Custom Spotify Wrapped)",
    tech: ["Python", "Django", "JavaScript", "Spotify API", "Gemini LLM"],
    date: "Oct 2024 – Dec 2024",
    tags: ["Fullstack"],
    description: [
      "Class-leading project using Agile methodologies for CS 2340.",
      "Dynamic website leveraging the Spotify API to generate & display custom music listening data.",
      "Integrated Google's Gemini LLM, Spotify/Apple Music APIs, and Reddit's API for game logic.",
    ],
    github: "https://github.com/mondobe/Wrapped2340",
  },
  {
    title: "Atlanta Food Finder",
    tech: ["Python", "Django", "JavaScript", "Google Maps API"],
    date: "Aug 2024 – Oct 2024",
    tags: ["Fullstack"],
    description: [
      "Built map-based application for restaurant searches by name, favorites, food type, and proximity.",
      "Implemented backend logic including unique secure accounts, saved favorites, and user reviews.",
      "Worked with a team of 4 engineers in an Agile workflow setting to produce a robust app utilizing Google Maps API"
    ],
    github: "https://github.com/kdcao1/Atlanta-Resturant-Finder",
  },
  {
    title: "Personal Website",
    tech: ["Astro", "React", "Tailwind CSS", "DaisyUI", "Framer Motion", "Cloudflare Pages"],
    date: "Aug 2025 – Present",
    tags: ["Fullstack"],
    description: [
      "Designed and built a portfolio website showcasing projects, skills, and experience — with smooth scroll animations and a responsive dark/light theme toggle.",
      "Migrated from Next.js + Vercel to Astro + Cloudflare Pages for a cleaner, faster static build with no vendor lock-in.",
      "Architected as Astro islands: static HTML shell with React components hydrated only where interactivity is needed, minimizing JS bundle size.",
    ],
    github: "https://github.com/thatdudegrantt/personal-site",
  },
  {
    title: "2D Platform Video Game",
    tech: ["C#", "Unity"],
    date: "Jun 2024 – Aug 2024",
    tags: ["Game Dev"],
    description: [
      "Designed gameplay mechanics and physics systems from scratch.",
      "Created custom assets and animations.",
      "Focus on maintainable, scalable code architecture.",
    ],
    // github: "",
  },
  {
    title: "Secure Password Generator",
    tech: ["Python"],
    date: "Spring 2023",
    tags: ["Systems"],
    description: [
      "Random password generation with security-focused features.",
      "Customizable length and character sets via command-line interface.",
    ],
    // github: "",
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-1">
          My Projects
        </h1>
        <p className="text-sm text-base-content opacity-60 mb-6">
          Cards with a{" "}
          <svg
            className="inline w-3.5 h-3.5 mx-0.5 mb-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>{" "}
          icon are clickable — they open the GitHub repo in a new tab.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`btn btn-sm rounded-full transition-all ${
                activeFilter === f
                  ? "btn-primary"
                  : "btn-ghost border border-base-300"
              }`}
            >
              {f}
              {f !== "All" && (
                <span className="ml-1 opacity-50 text-xs">
                  ({projects.filter((p) => p.tags.includes(f)).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {filtered.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              tech={project.tech}
              date={project.date}
              description={project.description}
              github={project.github}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-base-content opacity-50 mt-16">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}
