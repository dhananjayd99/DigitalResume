"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";

const experiences = [
    {
        id: 1,
        role: "Project Lead – Implementation",
        company: "Info Edge (Zwayam Product)",
        period: "Feb, 2026 - Present",
        location: "India",
        logo: "/Infoedge.jpg",
        logoClass: "object-cover",
        description: [
            "Leading a team of 9 members managing customer implementation and platform configurations.",
            "Handling customer issues including product bugs and change requests (CRs) and ensuring timely resolution.",
            "Using Jira to manage agile workflows including sprint planning, backlog management, and issue tracking.",
            "Working closely with product and engineering teams to deliver customized solutions to enterprise customers.",
            "Contributing to the development of a Customer Health Score system designed to track adoption, engagement, and churn risk.",
            "Building insights that help predict customer churn and improve retention strategies."
        ],
    },
    {
        id: 2,
        role: "Associate – Strategy Intern (SIP)",
        company: "Pristyn Care",
        period: "May, 2025 - Nov, 2025",
        location: "India",
        logo: "/Pristyn.png",
        logoClass: "object-cover",
        description: [
            "Developed a Go-to-Market strategy and investor pitch deck for launching a new patient lending vertical, identifying a $10M market opportunity and outlining a scalable execution roadmap.",
            "Conducted market research and competitive analysis to evaluate expansion opportunities in the medical ventilator segment across 300+ Tier-2 and Tier-3 cities.",
            "Analyzed operational logistics and demand patterns to support strategic expansion planning in emerging healthcare markets.",
            "Designed and implemented an end-to-end automation workflow using n8n to streamline manual bill retrieval processes, improving departmental operational efficiency by 300%.",
            "Collaborated with cross-functional teams to translate strategic insights into actionable business recommendations for healthcare financing initiatives."
        ]
    },
    {
        id: 3,
        role: "Project Engineer",
        company: "Wipro",
        client: "Client: BMO Harris Bank",
        period: "13 Sep,2021 - July,2024",
        location: "India",
        logo: "/wipro.png",
        logoClass: "object-contain p-2 md:p-3",
        description: [
            "Led a 7 member team on data-driven quality and performance initiatives delivering projects 20% ahead of schedule through effective task prioritization and sprint planning.",
            "Performed root cause and trend analysis on 30+ production incidents improving operational efficiency by 25%.",
            "Resolved 30+ production issues reducing workflow bottlenecks.",
            "Used regression, performance, security, and integration testing to reduce high severity defects by 40%.",
            "Translated analytical findings into actionable insights improving release stability and system reliability."
        ]
    },
    {
        id: 4,
        role: "QA Trainee",
        company: "Nagarro",
        period: "Apr, 2021- Jun, 2021",
        location: "India",
        logo: "/Nagarro.png",
        logoClass: "object-cover",
        description: [
            "Worked as a QA manual tester.",
            "Tested APIs using Postman.",
            "Used Jira for Agile project management.",
            "Maintained databases using Microsoft SQL Server.",
            "Created detailed and structured test plans."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-24"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative max-w-3xl mx-auto pb-12">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[40px] md:left-[56px] top-6 bottom-0 w-1 bg-gray-200 dark:bg-gray-800 rounded-full z-0 transform -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative flex items-center mb-16 md:mb-24 group cursor-default z-10 hover:z-20">

                            {/* Timeline Dot (Logo) */}
                            <div className="absolute left-[40px] md:left-[56px] transform -translate-x-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white border-4 border-accent flex items-center justify-center z-20 shadow-xl overflow-hidden group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
                                {exp.logo ? (
                                    <div className="relative w-full h-full bg-white flex items-center justify-center">
                                        <Image
                                            src={exp.logo}
                                            alt={exp.company}
                                            fill
                                            className={exp.logoClass ?? "object-cover"}
                                        />
                                    </div>
                                ) : (
                                    <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                                )}
                            </div>

                            {/* Visible Summary (Role + Company) aligned left after logo */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full pl-[96px] md:pl-[140px]"
                            >
                                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                                <div className="text-lg md:text-xl font-medium text-gray-500 block">{exp.company}</div>

                                {/* Hover Card with Full Details */}
                                <div className="pt-4 w-full md:absolute md:top-full md:left-[140px] md:w-[600px] opacity-100 md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible hover:opacity-100 hover:visible md:transform md:-translate-y-4 md:group-hover:translate-y-4 transition-all duration-300 z-30">
                                    <div className="hidden md:block absolute -top-8 h-8 w-full left-0"></div>
                                    <div className="bg-white dark:bg-darkGrey rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-100 dark:border-gray-800 pointer-events-none md:pointer-events-auto">
                                        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                                            <div className="flex items-center font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {exp.period}
                                            </div>
                                            {exp.client && (
                                                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                                    {exp.client}
                                                </div>
                                            )}
                                        </div>

                                        <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base text-left">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-accent mt-[6px] mr-3 text-xs flex-shrink-0">●</span>
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
