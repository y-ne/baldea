import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    Under Maintenance
                </h1>

                {/* Kokomi Image */}
                <div className="mb-8 flex justify-center">
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
                </div>

                <p className="text-2xl font-bold">Please be patience</p>
            </div>
        </div>
    );
}
