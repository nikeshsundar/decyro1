"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
}

export default function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.7,
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const controls = useAnimation();

    const directionMap: Record<string, { x?: number; y?: number }> = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    opacity: 0,
                    ...directionMap[direction],
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration,
                        delay,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}
