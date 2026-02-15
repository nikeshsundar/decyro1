"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./button";
import Reveal from "./reveal";

interface PricingCardProps {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    index: number;
}

export default function PricingCard({
    name,
    price,
    period,
    description,
    features,
    highlighted = false,
    index,
}: PricingCardProps) {
    return (
        <Reveal delay={index * 0.15}>
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-500 ${highlighted
                        ? "border-accent bg-fg text-bg shadow-2xl shadow-accent/10 scale-[1.02]"
                        : "border-border bg-card-bg/50 text-fg hover:border-accent/30"
                    }`}
            >
                {highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-bg text-xs font-medium px-4 py-1 rounded-full uppercase tracking-label">
                        Most Popular
                    </span>
                )}

                <div className="mb-8">
                    <span className="label block mb-2">{name}</span>
                    <div className="flex items-baseline gap-1 mb-3">
                        <span className="font-heading font-bold text-4xl">{price}</span>
                        {period && (
                            <span className={`text-sm ${highlighted ? "text-bg/60" : "text-muted"}`}>
                                /{period}
                            </span>
                        )}
                    </div>
                    <p className={`text-sm ${highlighted ? "text-bg/70" : "text-muted"}`}>
                        {description}
                    </p>
                </div>

                <ul className="space-y-3 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <Check
                                size={16}
                                className={`mt-0.5 flex-shrink-0 ${highlighted ? "text-accent-light" : "text-accent"
                                    }`}
                            />
                            <span className={`text-sm ${highlighted ? "text-bg/80" : "text-muted"}`}>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                <Button
                    href="/waitlist"
                    variant={highlighted ? "secondary" : "primary"}
                    className={`w-full ${highlighted
                            ? "!bg-bg !text-fg hover:!bg-accent hover:!text-bg"
                            : ""
                        }`}
                >
                    Get Started
                </Button>
            </motion.div>
        </Reveal>
    );
}
