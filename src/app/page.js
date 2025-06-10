export default function Home() {
    return (
        <div className="min-h-screen bg-base-100 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>

                <div className="card bg-base-200 rounded-lg shadow-md p-8 border border-base-300">
                    <div className="space-y-6 text-base-content">
                        <p className="text-lg">
                            Hello! I'm a rising senior at Georgia Tech majoring in Computer Science with threads
                            in Systems Architecture and Media. I'm passionate about software engineering and
                            constantly expanding my knowledge in the field.
                        </p>

                        <p className="text-lg">
                            My coursework has included advanced topics like Data Structures, Algorithms,
                            Object-Oriented Programming, and Agile Project Methodologies. I particularly enjoy
                            the creative problem-solving aspects of software development and collaborating with
                            teams to build innovative solutions.
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
                            teams work together to create something meaningful.
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg text-base-content">
                            To explore my work further, please check out my <a href="/projects" className="link link-primary">projects</a>,
                            {' '}<a href="/resume" className="link link-primary">resume</a>, or {' '}
                            <a href="/contact" className="link link-primary">contact information</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}