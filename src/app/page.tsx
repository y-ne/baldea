"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="text-center px-4">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Under Maintenance
                </motion.h1>

                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <Image
                            src="/kokomi_pray.webp"
                            alt="Kokomi"
                            fill
                            sizes="(max-width: 768px) 192px, 256px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.p
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Please be patient
                </motion.p>
            </div>
        </div>
    );
}
