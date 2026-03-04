"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Patient Lending Vertical Strategy",
        organization: "Pristyn Care",
        period: "May 2025 – Jun 2025",
        description: "Developed a comprehensive go-to-market strategy for a new patient lending vertical, successfully identifying a $10M market opportunity through data analysis.",
        impact: "$10M Opportunity Identified",
        tags: ["Market Strategy", "Data Analysis", "Go-To-Market"]
    },
    {
        id: 2,
        title: "Ventilator Market Expansion",
        organization: "Pristyn Care",
        period: "May 2025 – Jun 2025",
        description: "Designed an aggressive expansion strategy targeting the ventilator market across 300+ Tier 2 and Tier 3 cities across the country.",
        impact: "300+ Cities Targeted",
        tags: ["Expansion Strategy", "Market Research"]
    },
    {
        id: 3,
        title: "Bill Retrieval Automation",
        organization: "Pristyn Care",
        period: "May 2025 – Jun 2025",
        description: "Architected and built an automated workflow using n8n to replace manual bill retrieval processes, drastically improving operational agility.",
        impact: "300% Efficiency Increase",
        tags: ["n8n", "Workflow Automation", "Process Optimization"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-darkGrey rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="text-sm font-medium text-accent">
                                        {project.organization}
                                    </div>
                                </div>
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full text-accent group-hover:scale-110 transition-transform">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex items-center text-sm font-bold text-green-600 dark:text-green-400 mb-6 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg w-fit">
                                Impact: {project.impact}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
