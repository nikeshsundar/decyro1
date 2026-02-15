"use client";

import Reveal from "./reveal";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    index: number;
}

export default function TestimonialCard({
    quote,
    name,
    role,
    index,
}: TestimonialCardProps) {
    return (
        <Reveal delay={index * 0.15}>
            <div className="p-8 md:p-10 rounded-2xl border border-border bg-card-bg/30">
                <Quote size={32} className="text-accent/30 mb-6" />
                <p className="font-body text-lg text-fg leading-relaxed mb-8">
                    &ldquo;{quote}&rdquo;
                </p>
                <div>
                    <p className="font-heading font-semibold text-fg text-sm">{name}</p>
                    <p className="text-muted text-xs mt-1">{role}</p>
                </div>
            </div>
        </Reveal>
    );
}
