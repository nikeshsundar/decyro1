"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
    const [form, setForm] = useState({ name: "", email: "", company: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name.trim() || !form.email.trim()) {
            setErrorMsg("Name and email are required.");
            setStatus("error");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setErrorMsg("Please enter a valid email address.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const { error } = await supabase.from("waitlist").insert([
                {
                    name: form.name.trim(),
                    email: form.email.trim().toLowerCase(),
                },
            ]);

            if (error) {
                console.error("Supabase error:", error);
                if (error.code === "23505") {
                    setErrorMsg("This email is already on the waitlist!");
                    setStatus("error");
                } else {
                    setErrorMsg(`Error: ${error.message}`);
                    setStatus("error");
                }
                return;
            }

            setStatus("success");
            setForm({ name: "", email: "", company: "" });
        } catch {
            setErrorMsg("Network error. Please check your connection and try again.");
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center"
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
                <h3 className="font-heading font-bold text-2xl text-fg mb-3">
                    You&apos;re on the list!
                </h3>
                <p className="text-muted font-body max-w-sm mx-auto">
                    We&apos;ll reach out when it&apos;s your turn. Keep an eye on your inbox.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label
                    htmlFor="waitlist-name"
                    className="block text-xs uppercase tracking-label font-medium text-muted mb-2"
                >
                    Name *
                </label>
                <input
                    id="waitlist-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg font-body text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                />
            </div>

            <div>
                <label
                    htmlFor="waitlist-email"
                    className="block text-xs uppercase tracking-label font-medium text-muted mb-2"
                >
                    Email *
                </label>
                <input
                    id="waitlist-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg font-body text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                />
            </div>

            <div>
                <label
                    htmlFor="waitlist-company"
                    className="block text-xs uppercase tracking-label font-medium text-muted mb-2"
                >
                    Company <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                    id="waitlist-company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-fg font-body text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                />
            </div>

            <AnimatePresence>
                {status === "error" && errorMsg && (
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-sm font-body"
                    >
                        {errorMsg}
                    </motion.p>
                )}
            </AnimatePresence>

            <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-fg text-bg font-heading font-semibold text-sm tracking-wide hover:bg-fg/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Joining...
                    </>
                ) : (
                    "Join Waitlist"
                )}
            </motion.button>

            <p className="text-center text-xs text-muted-light font-body">
                No spam, ever. Unsubscribe anytime.
            </p>
        </form>
    );
}
