"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function GachaponPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-4 flex flex-col items-center justify-center">
            <motion.div
                className="text-center max-w-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Under Development
                </h1>

                <p className="text-xl text-gray-600 mb-8">
                    Our gachapon boosting services are currently being
                    developed. Please check back soon for updates.
                </p>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                    >
                        Return to Home
                    </Link>
                </motion.div>
            </motion.div>

            <div className="mt-16 w-full max-w-md">
                <div className="w-full h-px bg-gray-200 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-300 to-purple-400"
                        initial={{ width: "15%" }}
                        animate={{
                            width: ["15%", "85%", "15%"],
                            transition: {
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
