"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "dark" ? -90 : 0,
                    scale: theme === "dark" ? 0 : 1,
                    opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Sun size={20} className="text-gray-700 dark:text-gray-300" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === "light" ? 90 : 0,
                    scale: theme === "light" ? 0 : 1,
                    opacity: theme === "light" ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute"
            >
                <Moon size={20} className="text-gray-700 dark:text-gray-300" />
            </motion.div>
        </button>
    );
}
