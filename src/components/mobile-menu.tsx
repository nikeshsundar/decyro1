"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Join Waitlist", href: "/waitlist" },
];

interface MobileMenuProps {
    onClose: () => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center items-center"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center gap-8"
            >
                {links.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="font-heading text-4xl md:text-5xl font-bold text-fg hover:text-accent transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
