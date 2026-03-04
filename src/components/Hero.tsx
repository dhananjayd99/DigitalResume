"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/10 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                        Hi, I'm <span className="text-accent inline-block">Dhananjay Joshi</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                        MBA (Data Science & AI) | Product & Implementation Leader | Data-Driven Problem Solver
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >

                    <a
                        href="https://drive.google.com/file/d/1txSUhd1YUXIuck3rU9bLN6dUFxEarXrQ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-darkGrey text-foreground border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                        <Download className="mr-2 w-4 h-4" />
                        Resume
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center space-x-6 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
                >
                    <a
                        href="https://www.linkedin.com/in/dhananjay-joshii/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform hover:scale-110 hover:text-accent transition-all duration-200"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-8 h-8" />
                    </a>
                    <a
                        href="mailto:dhananjayjoshi2770@gmail.com"
                        className="transform hover:scale-110 hover:text-accent transition-all duration-200"
                        aria-label="Email"
                    >
                        <Mail className="w-8 h-8" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
