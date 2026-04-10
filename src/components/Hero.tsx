"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import Magnetic from "./Magnetic";
import dynamic from "next/dynamic";

const HeroModel = dynamic(() => import("./HeroModel"), { ssr: false });

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    const orb1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]));
    const orb1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]));
    const orb2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]));
    const orb2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]));

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-background overflow-hidden"
        >
            <HeroModel />

            <div className="max-w-4xl mx-auto text-center relative z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm{" "}
                        <span className="text-accent cursor-default">
                            {"Dhananjay Joshi".split(" ").map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
                                    {word.split("").map((char, charIndex) => {
                                        const index = wordIndex * 10 + charIndex;
                                        return (
                                            <motion.span
                                                key={charIndex}
                                                initial={{
                                                    opacity: 0,
                                                    x: Math.random() * 400 - 200,
                                                    y: Math.random() * 400 - 200,
                                                    rotate: Math.random() * 90 - 45,
                                                    scale: 0.5,
                                                    filter: "blur(10px)"
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                    y: 0,
                                                    rotate: 0,
                                                    scale: 1,
                                                    filter: "blur(0px)"
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: index * 0.05,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    damping: 10
                                                }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        );
                                    })}
                                </span>
                            ))}
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                >
                    <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        MBA (Data Science & AI) | Product & Implementation Leader | Data-Driven Problem Solver
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <Magnetic>
                        <a
                            href="https://drive.google.com/file/d/1txSUhd1YUXIuck3rU9bLN6dUFxEarXrQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-4 rounded-full bg-accent text-white font-bold hover:bg-blue-600 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center group"
                        >
                            <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                            Resume
                        </a>
                    </Magnetic>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.0 }}
                    className="flex justify-center space-x-8 text-gray-500"
                >
                    <Magnetic>
                        <a
                            href="https://www.linkedin.com/in/dhananjay-joshii/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform hover:scale-125 hover:text-accent transition-all duration-300 block"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-10 h-10" />
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="mailto:dhananjayjoshi2770@gmail.com"
                            className="transform hover:scale-125 hover:text-accent transition-all duration-300 block"
                            aria-label="Email"
                        >
                            <Mail className="w-10 h-10" />
                        </a>
                    </Magnetic>
                </motion.div>
            </div>
        </section>
    );
}
