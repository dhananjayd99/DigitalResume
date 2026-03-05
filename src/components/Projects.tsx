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

import { useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

function ProjectCard({ project, index }: { project: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        x.set(mouseXPos / width - 0.5);
        y.set(mouseYPos / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <div className="text-sm font-medium text-accent">
                            {project.organization}
                        </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-full text-accent group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                </div>

                <p className="text-gray-600 mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="flex items-center text-sm font-bold text-green-600 mb-6 bg-green-50 px-4 py-2 rounded-lg w-fit">
                    Impact: {project.impact}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Project Highlights</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="text-accent font-bold text-2xl mb-1">3+ Years</div>
                            <div className="text-gray-500 text-sm">Professional Experience</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="text-accent font-bold text-2xl mb-1">MBA</div>
                            <div className="text-gray-500 text-sm">Data Science & AI @ IIT Mandi</div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
