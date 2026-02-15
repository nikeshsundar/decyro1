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
    title: "Decyro — Turn Social Media Conversations Into Customers",
    description:
        "Decyro's autonomous AI agents find high-intent prospects on Reddit & X, generate contextual replies, and recommend your SaaS as the perfect solution.",
    openGraph: {
        title: "Decyro — Turn Social Media Conversations Into Customers",
        description:
            "Autonomous AI agents that convert social media conversations into customer acquisition opportunities.",
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
