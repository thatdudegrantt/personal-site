"use client";
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen bg-base-100">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Hero Section with Image */}
                <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                    <div className="md:w-1/3">
                        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/images/careerFair.png"
                                alt="Grant Polazzo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3">
                        <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
                        <p className="text-lg mb-4">
                            My name is Grant Polazzo & I'm a rising senior at Georgia Tech majoring in
                            Computer Science with threads in Systems Architecture and Media.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-200 rounded-lg shadow-md p-8 mb-12 border border-base-300">
                    <div className="space-y-6 text-base-content">
                        <p className="text-lg">
                            I am extremely passionate about solving problems, collaboration, software engineering and
                            constantly expanding my knowledge in the field.
                        </p>


                        <p className="text-lg">
                            My coursework has included advanced topics like Data Structures, Algorithms,
                            Object-Oriented Programming, and Agile Project Methodologies.
                        </p>

                        <p className="text-lg">
                            Beyond academics, I love working on personal coding projects that challenge me to
                            learn new technologies and approaches. The process of taking an idea from concept
                            to implementation is incredibly rewarding to me, and I'm always eager to take on
                            new challenges that push my boundaries.
                        </p>

                        <p className="text-lg">
                            When I'm not coding, you can find me working out, cooking new recipes, learning to
                            play guitar, or spending quality time with friends and family. I also enjoy
                            volunteering and participating in community outreach programs whenever possible.
                        </p>

                        <p className="text-lg">
                            I'm excited about opportunities where I can contribute my technical skills while
                            continuing to grow as an engineer. I thrive in collaborative environments where
                            teams work together to create something meaningful and I'm so excited to continue my path.
                            Thank you for visiting my website!
                        </p>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/gatechSports.png"
                            alt="At a Yellow Jacket Game with Buzz!"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/walkingPets.png"
                            alt="sample text placehold"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/homemadePho.png"
                            alt="My hobbies"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/onCampus.png"
                            alt="from one cs class to another"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                        <Image
                            src="/images/vacation.png"
                            alt="I love traveling"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-lg">
                        Explore my <a href="/projects" className="link link-primary">projects</a>,
                        {' '}<a href="/resume" className="link link-primary">resume</a>, or {' '}
                        <a href="/contact" className="link link-primary">contact me</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}