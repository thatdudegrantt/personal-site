"use client";

export default function Resume() {
    return (
        <div className="p-8 bg-base-200 min-h-screen">
            <div className="max-w-4xl mx-auto bg-base-100 rounded-lg shadow-lg p-8">
                {/* Header */}
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-base-content">Grant Polazzo</h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-2 text-base-content">
                        <span>polazzo.grant@gmail.com</span>
                        <span>github.com/thatdudegrantt</span>
                        <span>linkedin.com/in/grant-polazzo</span>
                    </div>
                </header>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-[var(--resume-heading)] border-[var(--resume-heading)]">
                        EDUCATION
                    </h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-base-content">GEORGIA INSTITUTE OF TECHNOLOGY</h3>
                        <div className="flex justify-between text-base-content">
                            <span className="font-medium">Atlanta, GA</span>
                            <span>Dec 2026</span>
                        </div>
                        <p className="italic text-base-content">Bachelor of Science in Computer Science (Threads:
                            Media/Systems & Architecture), Minor in Economics</p>
                        <div className="mt-2 text-base-content">
                            <h4 className="font-medium">Awards:</h4>
                            <ul className="list-disc pl-5">
                                <li>Georgia Tech's Dean's List (Spring 2024)</li>
                                <li>GSU President's List Fall 2022 & Dean's List Spring 2023</li>
                            </ul>
                            <h4 className="font-medium mt-2">Clubs:</h4>
                            <p>GT Developers, Video Games @ GT, GT Barbell Club, GT Calisthenics, GT Climbing Club, GT
                                Esports</p>
                        </div>
                    </div>
                </section>

                {/* Technical Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-[var(--resume-heading)] border-[var(--resume-heading)]">TECHNICAL
                        SKILLS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base-content">
                    <div>
                            <h3 className="font-semibold">Languages:</h3>
                            <p>Java, Python, C, C#, JavaScript, HTML/CSS</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Frameworks:</h3>
                            <p>Django, React, Node.js/Next.js, Git, MongoDB, Jupyter Notebooks, AWS</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Concepts:</h3>
                            <p>Agile, OOP, Data Structures & Algorithms, LLMs & Neural Networks, Computer
                                Vision, Dynamic Programming, UI/UX design, Fullstack development</p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-[var(--resume-heading)] border-[var(--resume-heading)]">PROJECTS</h2>

                    <div className="mb-6 text-base-content">
                        <h3 className="text-xl font-semibold">PLANKTON COMPUTER VISION PROJECT</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Python, Jupyter Notebooks</span>
                            <span>Jan 2025 - Present</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Lead role designing a computer vision neural network to identify species of plankton</li>
                            <li>Improved CNN accuracy by 65% by redesigning from InceptionV3 to EfficientNet model</li>
                            <li>Implemented image preprocessing pipeline focusing on depth retention and edge sharpening</li>
                        </ul>
                    </div>

                    <div className="mb-6 text-base-content">
                        <h3 className="text-xl font-semibold">GAME BOY ADVANCE EMULATOR & FROGGER CLONE</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span>C</span>
                            <span>Mar 2025 - Apr 2025</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Implemented GBA hardware-level features including DMA and memory-mapped I/O</li>
                            <li>Developed Frogger game with custom collision detection and state machine architecture</li>
                        </ul>
                    </div>

                    {/* Audiospace Journey */}
                    <div className="mb-6 text-base-content">
                        <h3 className="text-xl font-semibold">AUDIOSCAPE JOURNEY (CUSTOM SPOTIFY WRAPPED)</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Python, CSS/HTML, JavaScript, Django</span>
                            <span>Oct 2024 - Dec 2024</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Developed a dynamic website leveraging Spotify API to generate & display custom music listening data</li>
                            <li>Designed engaging animations, game logic, and integrated AI using Google's Gemini LLM</li>
                            <li>Employed Agile methodologies to meet client needs for a project that our professor & TAs labeled best in the class</li>
                        </ul>
                    </div>

                    {/* Atlanta Food Finder */}
                    <div className="mb-6 text-base-content">
                        <h3 className="text-xl font-semibold">ATLANTA FOOD FINDER</h3>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Python, CSS, HTML, JavaScript, Django</span>
                            <span>Aug 2024 - Oct 2024</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Built a map-based application utilizing Google Maps API for restaurant searches by name, type, and proximity</li>
                            <li>Implemented seamless backend logic, accounts, restaurant favoriting & review system</li>
                            <li>Created user-friendly UI design with intuitive navigation</li>
                        </ul>
                    </div>
                </section>

                {/* Work Experience */}
                <section>
                    <h2 className="text-2xl font-bold border-b-2 pb-1 mb-4 text-[var(--resume-heading)] border-[var(--resume-heading)]">WORK
                        EXPERIENCE</h2>
                    <section className="text-base-content">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">BARCELONA WINE BAR - WAITSTAFF</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Jun 2024 - Dec 2024</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Collaborated in a high-pressure team environment, managing 75+ daily customer
                                    interactions
                                </li>
                            </ul>
                        </div>

                        {/* City of Atlanta */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">CITY OF ATLANTA, OFFICE OF THE MAYOR - EXECUTIVE
                                INTERN</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Jan 2022 - Aug 2022</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Worked under the Mayor's Executive Assistant & COA Business Manager</li>
                                <li>Organized, researched, planned events, and researched city archives</li>
                                <li>Documented finances and helped onboard and advise new interns</li>
                            </ul>
                        </div>

                        {/* Ossoff Campaign */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold">JON OSSOFF FOR US SENATE - CAMPAIGN VOLUNTEER</h3>
                            <div className="flex justify-between text-sm mb-2">
                                <span>Atlanta, GA</span>
                                <span>Sep 2020 - Dec 2020</span>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Canvassed door to door and assisted with mailings</li>
                                <li>Participated in both in-person and virtual fundraisers</li>
                            </ul>
                        </div>
                    </section>

                </section>

                {/* PDF Download */}
                <div className="mt-8 text-center">
                    <a
                        href="/Grant_Polazzo_Resume_2025.pdf"
                        download
                        className="btn btn-primary"
                    >
                        Download PDF Version
                    </a>
                </div>
            </div>
        </div>
    );
}
