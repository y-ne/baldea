"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function NotFound() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="text-center px-4">
                <motion.h1
                    className="text-6xl md:text-8xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    404
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-semibold mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Page Not Found
                </motion.h2>

                <motion.div
                    className="mb-8 flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <Image
                            src="/kokomi_pray.webp"
                            alt="Kokomi - Page not found"
                            fill
                            sizes="(max-width: 768px) 192px, 256px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.p
                    className="text-lg mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link
                        href="/"
                        className="inline-block font-bold px-6 py-3 rounded-lg border border-current hover:bg-foreground hover:text-background transition-colors duration-200"
                    >
                        Go Back Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
