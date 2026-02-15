"use client";

import Reveal from "@/components/reveal";
import Button from "@/components/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding pt-40 pb-32 max-w-5xl mx-auto">
                <Reveal>
                    <span className="label block mb-6">About Decyro</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h1 className="font-heading font-bold text-hero leading-[1.05] mb-8">
                        We Believe Customer
                        <br />
                        Acquisition Should Be
                        <br />
                        <span className="text-accent">Effortless.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-muted text-xl leading-relaxed font-body max-w-2xl">
                        Decyro was born from a simple observation: the best customers come from genuine
                        conversations — not cold outreach, not expensive ads, but real human moments
                        where someone needs help.
                    </p>
                </Reveal>
            </section>

            {/* Mission */}
            <section className="section-padding py-32 bg-fg text-bg">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <Reveal>
                                <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                                    Our Mission
                                </span>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <h2 className="font-heading font-bold text-section leading-[1.1] mb-6">
                                    Democratize Customer Acquisition.
                                </h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className="text-bg/60 text-lg leading-relaxed font-body">
                                    We&apos;re building a world where every SaaS founder — whether solo or
                                    funded — has access to intelligent, autonomous growth tools that actually
                                    work. No marketing budget required.
                                </p>
                            </Reveal>
                        </div>
                        <div>
                            <Reveal delay={0.15}>
                                <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                                    Our Vision
                                </span>
                            </Reveal>
                            <Reveal delay={0.25}>
                                <h2 className="font-heading font-bold text-section leading-[1.1] mb-6">
                                    The Future of Growth Is Conversational.
                                </h2>
                            </Reveal>
                            <Reveal delay={0.35}>
                                <p className="text-bg/60 text-lg leading-relaxed font-body">
                                    We envision a future where AI agents operate as tireless members of your
                                    growth team — listening, understanding, and engaging across every platform
                                    where your customers gather.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Decyro Exists */}
            <section className="section-padding py-32 max-w-5xl mx-auto">
                <Reveal>
                    <span className="label block mb-4">Why We Exist</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="font-heading font-bold text-display leading-[1.1] max-w-4xl mb-10">
                        Because Great Products Deserve to Be Discovered.
                    </h2>
                </Reveal>

                <div className="space-y-8">
                    <Reveal delay={0.2}>
                        <p className="text-muted text-lg leading-relaxed font-body max-w-3xl">
                            Every day, thousands of people go online to ask for help. They share their
                            frustrations on Reddit. They tweet about tools that let them down. They ask
                            for recommendations in niche communities.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-muted text-lg leading-relaxed font-body max-w-3xl">
                            But most of these conversations go unanswered by the people who could actually
                            help — the founders and teams who&apos;ve built solutions to these exact problems.
                            Not because they don&apos;t care, but because it&apos;s impossible to be everywhere at once.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-fg text-xl leading-relaxed font-heading font-semibold max-w-3xl">
                            Decyro changes that. We make it possible for every product to be
                            in the right conversation, at the right time, with the right message.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Future */}
            <section className="section-padding py-32 bg-card-bg/50">
                <div className="max-w-5xl mx-auto">
                    <Reveal>
                        <span className="label block mb-4">What&apos;s Next</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-display leading-[1.1] max-w-4xl mb-10">
                            The Future of AI Customer Acquisition.
                        </h2>
                    </Reveal>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Reveal delay={0.2}>
                            <div className="p-6 rounded-2xl border border-border">
                                <h3 className="font-heading font-semibold text-lg mb-3 text-fg">
                                    Multi-Platform Expansion
                                </h3>
                                <p className="text-muted text-sm leading-relaxed font-body">
                                    LinkedIn, Hacker News, Product Hunt, Quora, and more. Wherever your customers
                                    talk, Decyro will be there.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <div className="p-6 rounded-2xl border border-border">
                                <h3 className="font-heading font-semibold text-lg mb-3 text-fg">
                                    Predictive Lead Scoring
                                </h3>
                                <p className="text-muted text-sm leading-relaxed font-body">
                                    AI that doesn&apos;t just find prospects, but predicts which ones are most
                                    likely to convert — prioritizing your highest-value opportunities.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <div className="p-6 rounded-2xl border border-border">
                                <h3 className="font-heading font-semibold text-lg mb-3 text-fg">
                                    Autonomous Campaign Optimization
                                </h3>
                                <p className="text-muted text-sm leading-relaxed font-body">
                                    Self-improving agents that learn from every interaction, continuously
                                    refining their approach to maximize conversions.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Co-Founders */}
            <section className="section-padding py-24 bg-fg text-bg">
                <div className="max-w-3xl mx-auto text-center">
                    <Reveal>
                        <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                            Built By
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-bg mb-4">
                            Meet the Co-Founders
                        </h2>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="text-bg/50 font-body mb-12 max-w-lg mx-auto">
                            For the latest updates, product drops, and behind-the-scenes — follow us on X.
                        </p>
                    </Reveal>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Reveal delay={0.2}>
                            <a
                                href="https://x.com/Nithishbuilds"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-6 py-4 rounded-2xl border border-bg/10 bg-bg/5 hover:bg-bg/10 transition-all duration-300 min-w-[240px]"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                                    <span className="font-heading font-bold text-lg text-accent-light">N</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-heading font-semibold text-bg">Nithish</p>
                                    <p className="text-bg/40 text-sm font-body flex items-center gap-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        @Nithishbuilds
                                    </p>
                                </div>
                            </a>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <a
                                href="https://x.com/nikeshsundarx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-6 py-4 rounded-2xl border border-bg/10 bg-bg/5 hover:bg-bg/10 transition-all duration-300 min-w-[240px]"
                            >
                                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                                    <span className="font-heading font-bold text-lg text-accent-light">N</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-heading font-semibold text-bg">Nikesh</p>
                                    <p className="text-bg/40 text-sm font-body flex items-center gap-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                        @nikeshsundarx
                                    </p>
                                </div>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding py-32 max-w-4xl mx-auto text-center">
                <Reveal>
                    <h2 className="font-heading font-bold text-display leading-[1.1] mb-8">
                        Join Us in Building the Future.
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <Button href="/waitlist" variant="primary">
                        Join Waitlist
                        <ArrowRight size={16} className="ml-2" />
                    </Button>
                </Reveal>
            </section>
        </>
    );
}
