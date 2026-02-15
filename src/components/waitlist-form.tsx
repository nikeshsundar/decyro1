"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./button";
import Reveal from "./reveal";

export default function WaitlistForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
            >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6C3BF5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </motion.div>
                </div>
                <h3 className="font-heading font-bold text-2xl text-fg mb-3">
                    You&apos;re on the list!
                </h3>
                <p className="text-muted font-body text-sm">
                    We&apos;ll be in touch soon with early access details.
                </p>
            </motion.div>
        );
    }

    return (
        <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="label block mb-2">Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full px-5 py-4 rounded-xl bg-card-bg border border-border text-fg text-sm font-body placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    />
                </div>
                <div>
                    <label className="label block mb-2">Email</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className="w-full px-5 py-4 rounded-xl bg-card-bg border border-border text-fg text-sm font-body placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    />
                </div>
                <div>
                    <label className="label block mb-2">Company / Product</label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Your SaaS product name"
                        className="w-full px-5 py-4 rounded-xl bg-card-bg border border-border text-fg text-sm font-body placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                    />
                </div>
                <Button type="submit" variant="primary" className="w-full !mt-8">
                    Join Waitlist
                </Button>
            </form>
        </Reveal>
    );
}
