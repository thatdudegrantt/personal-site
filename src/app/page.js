"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

const content = [
    // remember to add a professional headshot grant
    {
        text: "My name is Grant Polazzo & I'm a rising senior at Georgia Tech majoring in\n" +
            "Computer Science with threads in Systems Architecture and Media.\n",
        image: "/images/careerFair.png",
        portrait: true
    },
    {
        text: "I am extremely passionate about building projects, solving problems, team collaboration, designing SAS products for clients, and continuing evolution as a software engineer!",
        image: "/images/gatechSports.png",
        portrait: true
    },
    {
        text: "My coursework has included advanced topics like Data Structures, Algorithms,\n" +
            "   Object-Oriented Programming, and Agile Project Methodologies.\n",
        image: "/images/walkingPets.png",
        portrait: true
    },
    {
        text: "Beyond academics, I love working on personal coding projects that challenge me to\n" +
            "learn new technologies and approaches. The process of taking an idea from concept\n" +
            "to implementation is incredibly rewarding to me, and I'm always eager to take on\n" +
            "new challenges that push my boundaries. Talk about Computer vision AI project for prince william sound\n",
        image: "/images/onCampus.png",
        portrait: true
    },
    {
        text: "When I'm not coding, you can find me working out, cooking new recipes (like this veggie pho I made), learning to\n" +
            "   play guitar, or spending quality time with friends and family. I also enjoy\n" +
            "   volunteering, canvassing for political candidates, and participating in community outreach programs whenever possible!\n",
        image: "/images/homemadePho.png",
        portrait: true
    },
    {
        text: "I'm excited about opportunities where I can contribute my technical skills while\n" +
            "continuing to grow as an engineer. I thrive in collaborative environments where\n" +
            "teams work together to create something meaningful and I'm so excited to continue my path.\n" +
            "Thank you for visiting my website!\n",
        image: "/images/vacation.png",
        portrait: true
    }
]

export default function Home() {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="space-y-24 md:space-y-48">
                    {content.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 ? ' ' : 'md:flex-row-reverse'}`}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                        >
                            {/* Image Column */}
                            <motion.div
                                className={`relative ${item.portrait ? 'md:w-5/12' : 'md:w-7/12'} w-full h-[70vh] max-h-[800px]`}
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 400}}
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    fill
                                    className={`rounded-xl shadow-2xl ${item.portrait ? 'object-cover' : 'object-contain'}`}
                                    style={{objectPosition: item.portrait ? 'center top' : 'center'}}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={i === 0}
                                />
                            </motion.div>

                            {/* Text Column */}
                            <div className={`${item.portrait ? 'md:w-7/12' : 'md:w-5/12'} w-full p-4 md:p-8`}>
                                <motion.p
                                    className="text-xl md:text-2xl leading-relaxed"
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{delay: 0.3}}
                                >
                                    {item.text}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0, scaleX: 0}}
                    whileInView={{
                        opacity: 1, scaleX: 1, transition: {duration: 0.5}
                    }}
                    viewport={{margin: "-25%"}}
                    className="w-24 h-0.5 bg-primary mx-auto my-20"
                />

                <div >
                    <motion.div
                        className="w-full text-center mb-4"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3}}
                    >
                        <h3 className="text-2xl md:text-3xl font-light text-base-content mb-4">
                            Thank you for visiting my portfolio. Let's connect and discuss how we might work together.
                        </h3>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6 mt-6"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.4}}
                    >
                        <motion.a
                            href="/projects"
                            className="btn btn-primary px-8 py-4 text-lg text-primary-content"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                            }}
                            whileTap={{scale: 0.98}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            View Projects
                        </motion.a>

                        <motion.a
                            href="/resume"
                            className="btn btn-outline px-8 py-4 text-lg border-2 text-base-content hover:text-base-content"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "hsl(var(--b2))"
                            }}
                            whileTap={{scale: 0.98}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            See Resume
                        </motion.a>

                        <motion.a
                            href="/contact"
                            className="btn btn-accent px-8 py-4 text-lg text-accent-content"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                            }}
                            whileTap={{scale: 0.98}}
                            transition={{type: "spring", stiffness: 400}}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}