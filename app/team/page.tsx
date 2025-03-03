"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
    {
        id: 1,
        name: "Flower Garden",
        role: "Founder",
        bio: "Full Stack Developer with expertise in web and application development.",
    },
    {
        id: 2,
        name: "Alexandrovna",
        role: "Co-Founder",
        bio: "Manages digital assets and company finances with precision and strategic insight.",
    },
];

export default function TeamPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Team
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Meet the talented people behind バルデア who make the
                        magic happen
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden p-6 hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.2 + index * 0.1,
                                duration: 0.5,
                            }}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-purple-500 font-medium mb-3">
                                {member.role}
                            </p>
                            <p className="text-gray-600">{member.bio}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
