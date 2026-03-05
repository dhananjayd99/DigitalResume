"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Analytics & Data",
        skills: [
            { name: "Power BI", level: 90 },
            { name: "SQL", level: 85 },
            { name: "Python", level: 80 },
            { name: "R / R Studio", level: 75 },
        ],
    },
    {
        category: "Tools & Frameworks",
        skills: [
            { name: "Jira / Agile", level: 95 },
            { name: "Postman API", level: 85 },
            { name: "n8n Automation", level: 80 },
        ],
    },
    {
        category: "Domain Expertise",
        skills: [
            { name: "Product Implementation", level: 95 },
            { name: "Customer Success Analytics", level: 90 },
            { name: "Process Automation", level: 85 },
            { name: "Root Cause Analysis", level: 90 },
        ],
    },
    {
        category: "Soft Skills",
        skills: [
            { name: "Leadership", level: 95 },
            { name: "Problem Solving", level: 90 },
            { name: "Communication", level: 95 },
            { name: "Empathy & Teamwork", level: 95 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Skills & Capabilities</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillsData.map((section, idx) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            animate={{
                                y: [0, -5, 0],
                            }}
                            viewport={{ once: true }}
                            transition={{
                                opacity: { duration: 0.5, delay: idx * 0.1 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }
                            }}
                        >
                            <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                                {section.category}
                            </h3>

                            <div className="space-y-6">
                                {section.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ y: -5 }}
                                        className="group"
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium text-gray-700 group-hover:text-accent transition-colors">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-medium text-gray-500">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden shadow-inner">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                                                className="bg-accent h-2.5 rounded-full group-hover:bg-blue-600 transition-colors"
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
