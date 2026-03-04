"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-80 sm:h-96 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 group">
                            <Image
                                src="/profile.jpg"
                                alt="Dhananjay Joshi"
                                fill
                                className="object-cover object-top filter brightness-95 group-hover:brightness-100 transition-all duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">My Philosophy</h3>
                                <p className="text-gray-200 text-sm italic">"Solving operational challenges using data-driven insights to build systems that generate measurable business impact."</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            I am currently pursuing an MBA in Data Science & AI from IIT Mandi with a strong background in technology, analytics, and product implementation.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            With professional experience in enterprise environments and consulting-driven projects, I specialize in solving operational challenges using data-driven insights. My expertise spans product implementation, customer success analytics, automation workflows, and process optimization. I enjoy building systems that generate measurable business impact.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-white dark:bg-darkGrey rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <div className="text-accent font-bold text-2xl mb-1">3+ Years</div>
                                <div className="text-gray-500 text-sm">Professional Experience</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-darkGrey rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <div className="text-accent font-bold text-2xl mb-1">MBA</div>
                                <div className="text-gray-500 text-sm">Data Science & AI @ IIT Mandi</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
