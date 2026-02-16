import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Decyro — Find People Asking for Your Product & Reply Automatically",
    description:
        "Decyro scans Reddit and X for people with problems your SaaS solves, then generates helpful replies that recommend your product.",
    icons: {
        icon: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        title: "Decyro — Find People Asking for Your Product & Reply Automatically",
        description:
            "Decyro scans Reddit and X for high-intent prospects and generates contextual replies that recommend your SaaS.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body className="font-body bg-bg text-fg antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
