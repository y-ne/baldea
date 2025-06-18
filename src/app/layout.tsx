import type { Metadata } from "next";
import { Gaegu, Kosugi_Maru } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
    variable: "--font-gaegu",
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

const kosugiMaru = Kosugi_Maru({
    variable: "--font-kosugi-maru",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Baldea",
    description: "Your Next.js application",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${gaegu.variable} ${kosugiMaru.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
