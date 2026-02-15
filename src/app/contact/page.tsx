"use client";

import Reveal from "@/components/reveal";
import ContactForm from "@/components/contact-form";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="section-padding pt-40 pb-32 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
                {/* Left */}
                <div>
                    <Reveal>
                        <span className="label block mb-4">Get in Touch</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="font-heading font-bold text-display leading-[1.1] mb-6">
                            Let&apos;s Talk About
                            <br />
                            Your Growth.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-muted text-lg leading-relaxed font-body mb-10">
                            Have questions about Decyro? Want to discuss a partnership or enterprise plan?
                            We&apos;d love to hear from you.
                        </p>
                    </Reveal>

                    <div className="space-y-6">
                        <Reveal delay={0.3}>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Mail size={18} className="text-accent" />
                                </div>
                                <div>
                                    <p className="label mb-1">Email</p>
                                    <p className="text-fg text-sm font-body">hello@decyro.com</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <MapPin size={18} className="text-accent" />
                                </div>
                                <div>
                                    <p className="label mb-1">Location</p>
                                    <p className="text-fg text-sm font-body">Remote-first, Global</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Right */}
                <div className="p-8 md:p-10 rounded-2xl border border-border bg-card-bg/30">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
