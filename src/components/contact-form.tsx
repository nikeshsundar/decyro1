"use client";

import { useState } from "react";
import Button from "./button";
import Reveal from "./reveal";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <h3 className="font-heading font-bold text-2xl text-fg mb-3">
                    Message sent!
                </h3>
                <p className="text-muted font-body text-sm">
                    We&apos;ll get back to you within 24 hours.
                </p>
            </div>
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
                    <label className="label block mb-2">Message</label>
                    <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your project..."
                        className="w-full px-5 py-4 rounded-xl bg-card-bg border border-border text-fg text-sm font-body placeholder:text-muted-light focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                    />
                </div>
                <Button type="submit" variant="primary" className="w-full !mt-8">
                    Send Message
                </Button>
            </form>
        </Reveal>
    );
}
