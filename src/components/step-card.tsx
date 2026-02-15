"use client";

import Reveal from "./reveal";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
    isLast?: boolean;
}

export default function StepCard({
    number,
    title,
    description,
    icon: Icon,
    isLast = false,
}: StepCardProps) {
    return (
        <Reveal delay={number * 0.1}>
            <div className="flex gap-6 md:gap-8">
                {/* Left: Number + Line */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-bg flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                        {String(number).padStart(2, "0")}
                    </div>
                    {!isLast && (
                        <div className="w-px flex-1 bg-border mt-4 min-h-[40px]" />
                    )}
                </div>

                {/* Right: Content */}
                <div className="pb-12">
                    <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className="text-accent" />
                        <h3 className="font-heading font-bold text-xl text-fg">
                            {title}
                        </h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed font-body max-w-md">
                        {description}
                    </p>
                </div>
            </div>
        </Reveal>
    );
}
