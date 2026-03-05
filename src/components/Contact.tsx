"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate sending an email - in a real app, you'd wire this to an API
        location.href = `mailto:dhananjayjoshi2770@gmail.com?subject=Contact from Portfolio: ${formData.name}&body=${formData.message} (%0A%0AFrom: ${formData.email})`;
    };

    return (
        <section id="contact" className="py-20 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                        I'm always open to discussing new opportunities, analytics projects, or product implementation strategies.
                    </p>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 gap-12 max-w-xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Email Me</h4>
                                <a href="mailto:dhananjayjoshi2770@gmail.com" className="text-gray-600 hover:text-accent transition-colors">
                                    dhananjayjoshi2770@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Call Me</h4>
                                <a href="tel:+917310783379" className="text-gray-600 hover:text-accent transition-colors">
                                    +91 7310783379
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-100 text-accent rounded-full flex items-center justify-center flex-shrink-0 mr-6 group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Connect</h4>
                                <a
                                    href="https://www.linkedin.com/in/dhananjay-joshii/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-accent transition-colors"
                                >
                                    linkedin.com/in/dhananjay-joshii/
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
