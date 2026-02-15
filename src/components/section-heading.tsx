"use client";

import Reveal from "./reveal";

interface SectionHeadingProps {
    label?: string;
    title: string;
    description?: string;
    className?: string;
    align?: "left" | "center";
}

export default function SectionHeading({
    label,
    title,
    description,
    className = "",
    align = "left",
}: SectionHeadingProps) {
    return (
        <div
            className={`${align === "center" ? "text-center" : ""} ${className}`}
        >
            {label && (
                <Reveal delay={0}>
                    <span className="label mb-4 block">{label}</span>
                </Reveal>
            )}
            <Reveal delay={0.1}>
                <h2 className="font-heading font-bold text-section text-fg leading-[1.1] max-w-4xl">
                    {title}
                </h2>
            </Reveal>
            {description && (
                <Reveal delay={0.2}>
                    <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed font-body">
                        {description}
                    </p>
                </Reveal>
            )}
        </div>
    );
}
