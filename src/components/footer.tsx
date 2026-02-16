import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
    Product: [
        { label: "How It Works", href: "/how-it-works" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "Pricing", href: "/pricing" },
    ],
    Company: [
        { label: "About", href: "/about" },
        { label: "Waitlist", href: "/waitlist" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ],
    "Follow Us": [
        { label: "Nithish on X", href: "https://x.com/Nithishbuilds" },
        { label: "Nikesh on X", href: "https://x.com/nikeshsundarx" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-fg text-bg">
            <div className="section-padding py-20">
                {/* Top */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-20">
                    {/* Brand */}
                    <div className="max-w-md">
                        <h3 className="font-heading font-bold text-2xl mb-4">DECYRO</h3>
                        <p className="text-bg/60 text-sm leading-relaxed font-body">
                            Autonomous AI agents that find high-intent prospects on social media and convert conversations into customers.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                                    {category}
                                </span>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-bg/70 hover:text-bg transition-colors duration-300 inline-flex items-center gap-1 font-body"
                                                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                            >
                                                {link.label}
                                                {link.href.startsWith("http") && (
                                                    <ArrowUpRight size={12} />
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-bg/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-bg/40 font-body">
                        © {new Date().getFullYear()} Decyro. All rights reserved.
                    </p>
                    <p className="text-xs text-bg/40 font-body">
                        Built for the future of customer acquisition.
                    </p>
                </div>
            </div>
        </footer>
    );
}
