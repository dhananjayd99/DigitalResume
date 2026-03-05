"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="education" className="py-20 pb-48 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div ref={containerRef} className="relative max-w-6xl mx-auto">
                    {/* Horizontal Line for Desktop - Background */}
                    <div className="hidden md:block absolute top-[48px] lg:top-[64px] left-8 right-8 h-1 bg-gray-200 rounded-full z-0"></div>

                    {/* Horizontal Line for Desktop - Animated Progress */}
                    <motion.div
                        style={{ scaleX, originX: 0 }}
                        className="hidden md:block absolute top-[48px] lg:top-[64px] left-8 right-8 h-1 bg-accent rounded-full z-1"
                    ></motion.div>

                    <div className="flex flex-col md:flex-row justify-between relative z-10 gap-16 md:gap-4">
                        {educationDetails.map((edu, index) => {
                            // Align tooltip so it doesn't overflow screen
                            let alignClass = "md:left-1/2 md:-translate-x-1/2";
                            if (index === 0) alignClass = "md:left-0";
                            if (index === educationDetails.length - 1) alignClass = "md:right-0";

                            return (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "0px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex-1 flex flex-col items-center group relative cursor-default"
                                >
                                    {/* Photo/Logo */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-xl overflow-hidden group-hover:border-blue-500 transition-colors duration-300 z-20"
                                    >
                                        <div className="w-full h-full relative flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                            {edu.logo ? (
                                                <div className="relative w-full h-full bg-white flex items-center justify-center">
                                                    <Image
                                                        src={edu.logo}
                                                        alt={edu.institution}
                                                        fill
                                                        priority
                                                        className="object-contain p-2"
                                                    />
                                                </div>
                                            ) : (
                                                <GraduationCap className="w-8 h-8 lg:w-10 lg:h-10 text-accent" />
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Short Degree Name */}
                                    <div className="mt-6 text-xl font-bold text-gray-900 group-hover:text-accent transition-colors z-20 md:bg-transparent text-center">
                                        {edu.shortDegree}
                                    </div>

                                    {/* Hover Card details */}
                                    <div className={`pt-4 md:absolute md:top-full ${alignClass} w-full max-w-[280px] md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible md:transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300 z-50`}>
                                        <div className="bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 md:pointer-events-auto">
                                            <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{edu.degree}</h3>
                                            <div className="text-sm font-medium text-accent mb-4 block">{edu.institution}</div>

                                            <div className="flex justify-between items-end border-t border-gray-100 pt-4">
                                                <div className="font-medium bg-gray-100 px-2 py-1 rounded text-gray-600 text-xs whitespace-nowrap">
                                                    {edu.period}
                                                </div>
                                                <div className="font-bold text-green-600 text-sm">
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
