"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, PlayCircle, Loader2 } from "lucide-react";

// Mock data representing recent tracks. Once OAuth is configured with Spotify,
// this will be fetched from an API endpoint using the SPOTIFY_CLIENT_ID.
const mockTracks = [
    { id: "7MXVkk9YMqq6vqvSlt5m9P", title: "Starboy", artist: "The Weeknd" },
    { id: "0VjIjW4GlUZAMYd2vXMi3b", title: "Blinding Lights", artist: "The Weeknd" },
    { id: "7qiZfU4dY1lWllzX7mPBI3", title: "Shape of You", artist: "Ed Sheeran" },
    { id: "3KkXRkHbMCARz0aVfEt68P", title: "Sunflower", artist: "Post Malone" },
    { id: "2VxeLyX666F8uXCJ0dZF8B", title: "Shallow", artist: "Lady Gaga" },
    { id: "0pqnGHJpmpxLKifKRmU6WP", title: "Believer", artist: "Imagine Dragons" },
    { id: "62yJjFtgMkHde0k2HsbPdn", title: "Radioactive", artist: "Imagine Dragons" },
    { id: "748mdHapucXQri7IAO8yFK", title: "Kiss Me More", artist: "Doja Cat" },
    { id: "5QO79kh1waicV47BqGRL3g", title: "Save Your Tears", artist: "The Weeknd" },
    { id: "463CkQjx2Zk1yXoBuierM9", title: "Levitating", artist: "Dua Lipa" },
];

export default function SpotifyPlayer() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTrack, setActiveTrack] = useState<string | null>(null);

    return (
        <div
            className="fixed bottom-6 left-6 z-50 flex flex-col items-start"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="mb-3 w-72 bg-white dark:bg-darkGrey border border-gray-100 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {activeTrack ? (
                            <div className="w-full h-[152px]">
                                <iframe
                                    src={`https://open.spotify.com/embed/track/${activeTrack}?utm_source=generator&theme=0`}
                                    width="100%"
                                    height="152"
                                    frameBorder="0"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        ) : (
                            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-[#1db954]/10">
                                <h4 className="text-sm font-bold text-gray-900 dark:text-white flex items-center">
                                    <Music size={14} className="mr-2 text-[#1db954]" />
                                    Recently Played
                                </h4>
                            </div>
                        )}

                        <div className="max-h-60 overflow-y-auto">
                            {mockTracks.map((track) => (
                                <button
                                    key={track.id}
                                    onClick={() => setActiveTrack(track.id)}
                                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center group border-b border-gray-50 dark:border-gray-800/50 last:border-0 ${activeTrack === track.id ? 'bg-[#1db954]/5 dark:bg-[#1db954]/10' : ''}`}
                                >
                                    <div className="mr-3 text-[#1db954] opacity-50 group-hover:opacity-100 transition-opacity">
                                        <PlayCircle size={20} />
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">{track.title}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{track.artist}</div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-white dark:bg-darkGrey px-4 py-3 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 cursor-default"
            >
                <div className="w-8 h-8 rounded-full bg-[#1db954] flex items-center justify-center text-white">
                    <Music size={16} fill="currentColor" />
                </div>
                <div className="overflow-hidden w-32 relative">
                    <div className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate block">Now Playing</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate block">Hover to Listen</div>
                </div>
            </motion.div>
        </div>
    );
}
