"use client";

import { motion } from "framer-motion";
import {
    Brain,
    MessageSquare,
    Globe,
    BarChart3,
    Search,
    Target,
    Zap,
    TrendingUp,
    ArrowRight,
    DollarSign,
    Users,
    Mail,
} from "lucide-react";
import Button from "@/components/button";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import FeatureCard from "@/components/feature-card";
import TestimonialCard from "@/components/testimonial-card";
import FaqItem from "@/components/faq-item";

// ─── Data ────────────────────────────────────────────────────
const marqueeItems = [
    "10x Cheaper Than Ads",
    "100% Autonomous Agents",
    "Reddit & X Coverage",
    "High-Intent Prospects",
    "AI-Powered Replies",
    "Zero Cold Outreach",
    "Real-Time Monitoring",
    "Intent Detection",
];

const problems = [
    {
        icon: DollarSign,
        title: "Ads Are Burning Cash",
        desc: "You're spending thousands on paid acquisition with diminishing returns. CPC keeps rising while conversion rates plateau.",
    },
    {
        icon: Mail,
        title: "Cold Outreach Is Dead",
        desc: "Mass emails land in spam. LinkedIn messages get ignored. Traditional outreach feels impersonal and yields under 1% response rates.",
    },
    {
        icon: Users,
        title: "Prospects Are Hiding in Plain Sight",
        desc: "Every day, thousands of potential customers share their pain points on Reddit and X — but you're not there when they need you.",
    },
    {
        icon: Target,
        title: "Manual Prospecting Doesn't Scale",
        desc: "Finding and responding to high-intent conversations manually is time-consuming, inconsistent, and impossible to sustain.",
    },
];

const solutions = [
    {
        icon: Globe,
        title: "AI Scans Reddit & X",
        desc: "Our agents continuously monitor thousands of conversations across social platforms for relevant discussions.",
    },
    {
        icon: Search,
        title: "Detects Problem Posts",
        desc: "Natural language processing identifies posts where users express frustration, needs, or ask for recommendations.",
    },
    {
        icon: Brain,
        title: "Identifies Intent",
        desc: "Advanced intent classification separates casual mentions from genuine buying signals and active problem-solving.",
    },
    {
        icon: MessageSquare,
        title: "Generates Contextual Replies",
        desc: "AI crafts authentic, helpful responses that naturally address the user's problem — no spammy pitches.",
    },
    {
        icon: TrendingUp,
        title: "Recommends Your Product",
        desc: "Your SaaS is positioned as the ideal solution within genuine conversations, driving organic interest and conversions.",
    },
];

const features = [
    {
        icon: Brain,
        title: "Intent Detection AI",
        description:
            "Our proprietary models analyze sentiment, context, and buying signals to identify users who are actively looking for solutions like yours.",
    },
    {
        icon: MessageSquare,
        title: "Autonomous Reply Agents",
        description:
            "AI agents craft and deliver contextually relevant responses that feel natural, helpful, and non-promotional — because they are.",
    },
    {
        icon: Globe,
        title: "Multi-Platform Scraping",
        description:
            "Simultaneous monitoring across Reddit, X (Twitter), and other platforms. Thousands of conversations scanned in real time.",
    },
    {
        icon: BarChart3,
        title: "Lead Conversion Tracking",
        description:
            "Track every interaction from initial reply to website visit to signup. Full-funnel visibility into your social acquisition pipeline.",
    },
];

const testimonials = [
    {
        quote:
            "Decyro helped us acquire 340 qualified leads in the first month — without spending a dollar on ads. The ROI is unreal.",
        name: "Sarah Chen",
        role: "CEO, MailFlow",
    },
    {
        quote:
            "We went from zero organic social presence to 50+ daily conversations mentioning our product. It's like having a 24/7 growth team.",
        name: "Marcus Rivera",
        role: "Founder, DevStack",
    },
    {
        quote:
            "The AI replies are indistinguishable from human responses. Our community engagement has never been this authentic or this effective.",
        name: "Emily Watson",
        role: "Head of Growth, CloudSync",
    },
];

const faqs = [
    {
        question: "How does Decyro find potential customers?",
        answer:
            "Decyro's AI agents continuously scan public posts on Reddit and X (Twitter), looking for conversations where users express problems, frustrations, or needs related to your product category. When high-intent discussions are detected, our agents generate contextual, helpful replies that naturally recommend your SaaS as a solution.",
    },
    {
        question: "Is this spam or against platform rules?",
        answer:
            "Absolutely not. Decyro generates genuinely helpful responses that address real user problems. Our replies are contextual, valuable, and follow each platform's community guidelines. Think of it as automated community engagement, not spam.",
    },
    {
        question: "What platforms does Decyro support?",
        answer:
            "Currently, Decyro monitors Reddit and X (Twitter). We're actively developing support for LinkedIn, Hacker News, Product Hunt, and other platforms where SaaS buying conversations happen.",
    },
    {
        question: "How long until I see results?",
        answer:
            "Most customers see their first qualified leads within 48 hours of setup. The AI needs a brief training period to understand your product and ideal customer profile, after which it starts engaging autonomously.",
    },
    {
        question: "Can I control what the AI says?",
        answer:
            "Yes. You set the tone, messaging guidelines, and key value propositions. You can review and approve replies before they're posted, or let the AI operate fully autonomously once you're comfortable with its output quality.",
    },
];

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Gradient orbs */}
                <div className="gradient-orb w-[500px] h-[500px] bg-accent top-[-100px] right-[-100px] animate-float" />
                <div className="gradient-orb w-[400px] h-[400px] bg-purple-400 bottom-[-50px] left-[-100px] animate-float" style={{ animationDelay: "3s" }} />

                <div className="section-padding w-full max-w-7xl mx-auto pt-32 pb-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <span className="label block mb-6">AI-Powered Customer Acquisition</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-heading font-bold text-hero leading-[1.05] max-w-5xl mb-8"
                    >
                        Turn Social Media
                        <br />
                        Conversations Into
                        <br />
                        <span className="text-accent">Customers</span> — Automatically
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-muted text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body"
                    >
                        Decyro&apos;s autonomous AI agents find high‑intent prospects, generate
                        contextual replies, and recommend your SaaS as the perfect solution.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button href="/waitlist" variant="primary">
                            Join Waitlist
                            <ArrowRight size={16} className="ml-2" />
                        </Button>
                        <Button href="/how-it-works" variant="secondary">
                            See How It Works
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* ═══ MARQUEE ═══ */}
            <section className="py-8 border-y border-border overflow-hidden">
                <div className="marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className="text-sm font-heading font-medium text-muted whitespace-nowrap flex items-center gap-3"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* ═══ PROBLEM ═══ */}
            <section className="section-padding py-32 max-w-7xl mx-auto">
                <SectionHeading
                    label="The Problem"
                    title="Your Best Customers Are Already Talking About You. You're Just Not There."
                />
                <div className="grid md:grid-cols-2 gap-6 mt-16">
                    {problems.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="p-8 rounded-2xl border border-border bg-card-bg/30 flex gap-5">
                                <div className="w-10 h-10 rounded-lg bg-fg/5 flex items-center justify-center flex-shrink-0">
                                    <item.icon size={20} className="text-fg" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-fg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed font-body">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ═══ SOLUTION ═══ */}
            <section className="section-padding py-32 bg-fg text-bg">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                            The Solution
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-section leading-[1.1] max-w-4xl mb-16">
                            Decyro Turns Every Relevant Conversation Into a
                            <span className="text-accent-light"> Customer Acquisition </span>
                            Opportunity.
                        </h2>
                    </Reveal>

                    <div className="space-y-0">
                        {solutions.map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="flex gap-6 md:gap-8 py-8 border-b border-bg/10 group">
                                    <div className="w-12 h-12 rounded-xl bg-bg/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                        <item.icon size={22} className="text-accent-light" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl text-bg mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-bg/60 text-sm leading-relaxed font-body max-w-xl">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FEATURES ═══ */}
            <section className="section-padding py-32 max-w-7xl mx-auto">
                <SectionHeading
                    label="Capabilities"
                    title="Everything You Need to Acquire Customers on Autopilot."
                    description="Four core capabilities that work together to turn social media noise into qualified pipeline."
                />
                <div className="grid md:grid-cols-2 gap-6 mt-16">
                    {features.map((feature, i) => (
                        <FeatureCard key={i} index={i} {...feature} />
                    ))}
                </div>
            </section>

            {/* ═══ SOCIAL PROOF ═══ */}
            <section className="section-padding py-32 bg-card-bg/50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        label="What People Say"
                        title="Trusted by Founders Who Refuse to Overspend on Acquisition."
                    />
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={i} index={i} {...t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="section-padding py-32 max-w-3xl mx-auto">
                <SectionHeading
                    label="FAQ"
                    title="Questions? We Have Answers."
                    align="center"
                />
                <div className="mt-16">
                    {faqs.map((faq, i) => (
                        <FaqItem key={i} index={i} {...faq} />
                    ))}
                </div>
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="relative section-padding py-32 overflow-hidden">
                <div className="gradient-orb w-[600px] h-[600px] bg-accent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <Reveal>
                        <span className="label block mb-6">Ready to Start?</span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-display leading-[1.1] mb-8">
                            Start Acquiring Customers
                            <br />
                            on Autopilot.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-muted text-lg mb-10 font-body max-w-xl mx-auto">
                            Join hundreds of SaaS founders who are turning social media conversations
                            into their most efficient acquisition channel.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <Button href="/waitlist" variant="primary">
                            Join Waitlist
                            <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
