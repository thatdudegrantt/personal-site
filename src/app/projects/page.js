"use client";
export default function Projects() {
    const projects = [
        {
            title: "Plankton Computer Vision Project",
            tech: "Python, Jupyter Notebooks",
            date: "Jan 2025 - Present",
            description: [
                "Scrum-like role designing semester-long roadmap for 8-person team",
                "Redesigned neural network (Inception V4) for plankton species identification",
                "Implemented preprocessing pipeline, improved accuracy by 45%"
            ]
        },
        {
            title: "2D GameBoy Advanced System & Custom Frogger Game",
            tech: "C",
            date: "Mar 2025",
            description: [
                "Implemented GBA hardware-level features including DMA and memory-mapped I/O",
                "Developed my own Frogger clone with custom collision detection, assets, and state-machine game logic",
                "Optimized for GBA hardware constraints"
            ]
        },
        {
            title: "Personal Website (this site)",
            tech: "Next.js, Tailwind CSS",
            date: "2025",
            description: [
                "Portfolio website showcasing my projects and skills",
                "Features a responsive design with theme customization & interactive elements with smooth animations",
                "Hosted with Vercel and updated regularly"
            ]
        },
        {
            title: "Audioscape Journey (Spotify Wrapped)",
            tech: "Python, Django, JavaScript",
            date: "Oct 2024 - Dec 2024",
            description: [
                "Dynamic website leveraging Spotify API for music data visualization",
                "Integrated Google's Gemini LLM for AI features",
                "Class-leading project using Agile methodologies"
            ]
        },
        {
            title: "Atlanta Food Finder",
            tech: "Python, Django, JavaScript",
            date: "Aug 2024 - Oct 2024",
            description: [
                "Map-based restaurant search application",
                "Implemented backend logic and review system",
                "User-friendly UI design with intuitive navigation"
            ]
        },
        {
            title: "2D Platform Video Game",
            tech: "C#, Unity",
            date: "Jun 2024 - Aug 2024",
            description: [
                "Designed gameplay mechanics and physics",
                "Created custom assets and animations",
                "Focus on maintainable, scalable code"
            ]
        },
        {
            title: "Secure Password Generator",
            tech: "Python",
            date: "Spring 2023",
            description: [
                "Random password generation with security features",
                "Customizable length and character sets",
                "Command-line interface (it was my first cs project, so more simple)"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-base-200 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-base-content mb-2">My Projects</h1>
                <p className="text-lg text-base-content mb-8"> Projects sorted by date (newest first). Click to view
                    details.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-300"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h2 className="text-xl font-bold text-base-content">{project.title}</h2>
                                    <span className="text-sm bg-primary text-primary-content px-2 py-1 rounded">
                    {project.tech}
                  </span>
                                </div>
                                <p className="text-sm text-base-content mb-4">{project.date}</p>
                                <ul className="space-y-2">
                                    {project.description.map((item, i) => (
                                        <li key={i} className="text-base-content flex items-start">
                                            <span className="mr-2">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
