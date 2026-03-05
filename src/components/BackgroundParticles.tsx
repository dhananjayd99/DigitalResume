"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
    const [particles, setParticles] = useState<any[]>([]);
    const [orbs, setOrbs] = useState<any[]>([]);

    useEffect(() => {
        const generateParticles = () => {
            const p = [];
            for (let i = 0; i < 40; i++) {
                p.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    duration: Math.random() * 20 + 10,
                    delay: Math.random() * 5,
                });
            }
            setParticles(p);

            const o = [
                { id: 'o1', x: 20, y: 30, size: 500, color: 'bg-blue-500/10', duration: 25 },
                { id: 'o2', x: 80, y: 70, size: 600, color: 'bg-accent/10', duration: 30 },
                { id: 'o3', x: 50, y: 50, size: 400, color: 'bg-indigo-500/10', duration: 20 },
            ];
            setOrbs(o);
        };
        generateParticles();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#030712]">
            {/* Gaussian Orbs */}
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full blur-[120px] ${orb.color}`}
                    animate={{
                        x: [`${orb.x - 10}vw`, `${orb.x + 10}vw`, `${orb.x - 10}vw`],
                        y: [`${orb.y - 10}vh`, `${orb.y + 10}vh`, `${orb.y - 10}vh`],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: 0,
                        top: 0,
                    }}
                />
            ))}

            {/* Small Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/20"
                    initial={{
                        x: `${p.x}vw`,
                        y: `${p.y}vh`,
                        opacity: 0,
                    }}
                    animate={{
                        y: [`${p.y}vh`, `${p.y - 20}vh`],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay,
                    }}
                    style={{
                        width: p.size,
                        height: p.size,
                        filter: 'blur(0.5px)',
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;
