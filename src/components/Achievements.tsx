"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

const achievements = [
    {
        id: 1,
        icon: <Trophy className="w-8 h-8 text-yellow-500" />,
        title: "2nd Place",
        description: "AI Hackathon by AIFUL (Japan) with ₹50,000 prize.",
    },
    {
        id: 2,
        icon: <Medal className="w-8 h-8 text-blue-500" />,
        title: "Semifinalist",
        description: "Grant Thornton Caseino 2025 (Top 150 out of 4500 teams).",
    },
    {
        id: 3,
        icon: <Award className="w-8 h-8 text-accent" />,
        title: "Six Sigma White Belt",
        description: "Certified professional in process improvement.",
    },
    {
        id: 4,
        icon: <BookOpen className="w-8 h-8 text-purple-500" />,
        title: "Research Paper",
        description: "“A Secure Encrypted Digital Storage System Based on Blockchain” published in IRJMETS Journal.",
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership & Achievements</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-white dark:bg-darkGrey rounded-full flex items-center justify-center shadow-sm mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Leadership Mentions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 sm:p-10 text-white shadow-xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="pt-4 md:pt-0">
                            <div className="text-3xl font-bold mb-2">Coordinator</div>
                            <div className="text-blue-100 text-sm">Career & Placement (IIT Mandi)</div>
                        </div>
                        <div className="pt-4 md:pt-0">
                            <div className="text-3xl font-bold mb-2">Sponsorship Head</div>
                            <div className="text-blue-100 text-sm">Sharda University Club</div>
                        </div>
                        <div className="pt-4 md:pt-0">
                            <div className="text-3xl font-bold mb-2">Representative</div>
                            <div className="text-blue-100 text-sm">B.Tech Batch (Sharda University)</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
