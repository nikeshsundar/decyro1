"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
}

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-full cursor-pointer";

    const variants: Record<string, string> = {
        primary:
            "bg-fg text-bg px-8 py-4 text-sm hover:bg-accent hover:shadow-lg hover:shadow-accent/20",
        secondary:
            "bg-transparent text-fg px-8 py-4 text-sm border border-fg/20 hover:border-fg hover:bg-fg hover:text-bg",
        ghost:
            "bg-transparent text-fg px-4 py-2 text-sm hover:text-accent",
    };

    const classes = `${base} ${variants[variant]} ${className}`;

    const motionProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 },
    };

    if (href) {
        return (
            <motion.div {...motionProps} className="inline-block">
                <Link href={href} className={classes}>
                    {children}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.button
            {...motionProps}
            className={classes}
            onClick={onClick}
            type={type}
        >
            {children}
        </motion.button>
    );
}
