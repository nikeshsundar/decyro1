"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Reveal from "./reveal";

interface UseCaseCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    example: string;
    index: number;
}

export default function UseCaseCard({
    icon: Icon,
    title,
    description,
    example,
    index,
}: UseCaseCardProps) {
    return (
        <Reveal delay={index * 0.1}>
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group p-8 md:p-10 rounded-2xl border border-border bg-card-bg/30 hover:border-accent/30 hover:bg-white/50 transition-all duration-500"
            >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-fg">{title}</h3>
                <p className="text-muted text-sm leading-relaxed font-body mb-4">
                    {description}
                </p>
                <div className="pt-4 border-t border-border">
                    <span className="label block mb-2">Example</span>
                    <p className="text-fg text-sm font-body italic">&ldquo;{example}&rdquo;</p>
                </div>
            </motion.div>
        </Reveal>
    );
}
