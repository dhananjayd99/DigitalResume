"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
// Import puter
// Note: using puter.js typically relies on window.puter if it's script-tag loaded,
// but since we installed @heyputer/puter.js via npm, we can import it.
import puter from "@heyputer/puter.js";

type Message = { role: "user" | "assistant"; content: string };

const RESUME_CONTEXT = `
You are an AI assistant representing Dhananjay Joshi. You are embedded on his portfolio website.
Dhananjay is an MBA in Data Science and AI with experience as a Product Implementation Executive at Info Edge (Naukri.com),
and Project Engineer at Wipro. Core skills: Power BI, SQL, Python, Jira Agile.
Keep answers concise, confident, and professional. 
Always aim to persuade the recruiter to contact Dhananjay for Data Science, Product, or Implementation roles.
Do not hallucinate. If you don't know something about Dhananjay, say you don't know but suggest contacting him at dhananjayjoshi2770@gmail.com.
`;

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Dhananjay's AI assistant. Ask me anything about his experience, skills, or projects!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            // Puter.js AI chat feature
            // We pass a combined prompt since puter.ai.chat typically takes a single string.
            const prompt = `System: ${RESUME_CONTEXT}\n\nHere is the user's question: ${userMsg}\n\nPlease respond as the AI assistant.`;

            // Using puter.ai.chat(prompt)
            const response = await puter.ai.chat(prompt);
            const responseText = (response as any).message?.content || (response as any).text || String(response);

            setMessages(prev => [...prev, {
                role: "assistant",
                content: responseText || "Sorry, I couldn't process that right now."
            }]);
        } catch (error) {
            console.error("Puter AI Error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "Oops! I seem to have lost my connection. Please try again later, or contact Dhananjay directly." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mb-4 w-[350px] bg-white dark:bg-darkGrey rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col"
                        style={{ height: "450px" }}
                    >
                        {/* Header */}
                        <div className="bg-accent p-4 text-white flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Bot size={20} />
                                <span className="font-bold">Dhananjay's Agent</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors focus:outline-none">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user"
                                        ? "bg-accent text-white rounded-tr-sm"
                                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-sm"
                                        }`}>
                                        <p className="text-sm leading-relaxed">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-sm flex space-x-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-darkGrey border-t border-gray-100 dark:border-gray-800 flex items-center">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about his experience..."
                                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="ml-2 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus:outline-none"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
}
