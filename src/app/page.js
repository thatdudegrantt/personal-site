"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef} from "react";
import Image from 'next/image';

const content = [
    // remember to add a professional headshot grant
    {
        text: "filler",
        image: "/images/careerFair.png"
    },
    {
        text: "filler",
        image: "/images/gatechSports.png"
    },
    {
        text: "filler",
        image: "/images/walkingPets.png"
    },
    {
        text: "filler",
        image: "/images/homemadePho.png"
    },
    {
        text: "filler",
        image: "/images/onCampus.png"
    },
    {
        text: "filler",
        image: "/images/vacation.png"
    }
]

export default function Home() {
    const ref = useRef();
    const {scrollYProgress } = useScroll({ target: ref});
    const opacity = useTransform(scrollYProgress, [0,0.2],[1,0]);
    const y = useTransform(scrollYProgress, [0,1], [0,-100]);

    return (
        <div className="min-h-screen bg-base-100">
            <div ref={ref} className="flex h-[400vh]"> {/* Extra height for scroll */}
                <div className="sticky top-0 h-screen w-1/2 flex items-center px-12">
                    <motion.div style={{ y }} className="space-y-12">
                        {content.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="mb-24"
                            >
                                <p className="text-2xl">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="w-1/2">
                    {content.map((item, i) => (
                        <motion.div
                            key={i}
                            className="h-screen sticky top-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className="rounded-xl shadow-2xl"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}