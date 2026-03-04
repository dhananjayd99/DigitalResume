"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const educationDetails = [
    {
        id: 1,
        shortDegree: "MBA",
        degree: "MBA – Data Science & Artificial Intelligence",
        institution: "Indian Institute of Technology (IIT) Mandi",
        period: "2024 – 2026",
        score: "CGPA: 7.33",
        logo: "/IITMANDI.png",
    },
    {
        id: 2,
        shortDegree: "B.Tech",
        degree: "B.Tech – Computer Science & Engineering",
        institution: "Sharda University",
        period: "2017 – 2021",
        score: "CGPA: 8.43 (Honours)",
        logo: "/sharda.jpg",
    },
    {
        id: 3,
        shortDegree: "12th",
        degree: "12th CBSE (PCM)",
        institution: "Nirmala Convent Sen. Sec. School",
        period: "Completed",
        score: "61.6%",
        logo: "/Nirmala.jpg",
    },
    {
        id: 4,
        shortDegree: "10th",
        degree: "10th CBSE PCM",
        institution: "Nirmala Convent Sen. Sec. School",
        period: "Completed",
        score: "7 CGPA",
        logo: "/Nirmala.jpg",
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Horizontal Line for Desktop */}
                    <div className="hidden md:block absolute top-[48px] lg:top-[64px] left-8 right-8 h-1 bg-gray-200 dark:bg-gray-800 rounded-full z-0"></div>

                    <div className="flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-4">
                        {educationDetails.map((edu, index) => {
                            // Align tooltip so it doesn't overflow screen
                            let alignClass = "left-1/2 -translate-x-1/2";
                            if (index === 0) alignClass = "left-0";
                            if (index === educationDetails.length - 1) alignClass = "right-0";

                            return (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-1 flex flex-col items-center group relative cursor-default"
                                >
                                    {/* Photo/Logo */}
                                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-xl overflow-hidden transform group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300 z-20">
                                        {edu.logo ? (
                                            <div className="relative w-full h-full bg-white flex items-center justify-center">
                                                <Image
                                                    src={edu.logo}
                                                    alt={edu.institution}
                                                    fill
                                                    className="object-contain p-2"
                                                />
                                            </div>
                                        ) : (
                                            <GraduationCap className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
                                        )}
                                    </div>

                                    {/* Short Degree Name */}
                                    <div className="mt-6 text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors z-20 bg-gray-50 dark:bg-gray-900/50 px-4 py-1 rounded-full md:bg-transparent text-center">
                                        {edu.shortDegree}
                                    </div>

                                    {/* Hover Card details */}
                                    <div className={`pt-4 md:absolute top-full ${alignClass} w-full max-w-[280px] md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 z-30`}>
                                        <div className="bg-white dark:bg-black rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-gray-800 pointer-events-none md:pointer-events-auto">
                                            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-tight">{edu.degree}</h3>
                                            <div className="text-sm font-medium text-accent mb-4 block">{edu.institution}</div>

                                            <div className="flex justify-between items-end border-t border-gray-100 dark:border-gray-800 pt-4">
                                                <div className="font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-foreground text-xs whitespace-nowrap">
                                                    {edu.period}
                                                </div>
                                                <div className="font-bold text-green-600 dark:text-green-400 text-sm">
                                                    {edu.score}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
