"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
            <div className="text-center px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    バルデア
                </motion.h1>

                <motion.p
                    className="text-xl text-gray-600 max-w-xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Crafting Pathways to Gaming Mastery
                </motion.p>
            </div>
        </div>
    );
}
