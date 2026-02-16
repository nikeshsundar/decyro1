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
    Shield,
    Clock,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Button from "@/components/button";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import FeatureCard from "@/components/feature-card";
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

const stats = [
    { value: "10x", label: "Lower CAC than paid ads", icon: DollarSign },
    { value: "48h", label: "To first qualified lead", icon: Clock },
    { value: "200+", label: "Founders on waitlist", icon: Users },
    { value: "95%", label: "Reply quality score", icon: Sparkles },
];

const trustPoints = [
    "Built by former growth engineers from Y Combinator startups",
    "SOC 2 compliance roadmap — your data stays yours",
    "Every AI reply follows platform community guidelines",
    "Full transparency — review any reply before it goes live",
    "No long-term contracts — cancel anytime",
    "Backed by leading AI and SaaS angel investors",
];

const faqs = [
    {
        question: "How does Decyro actually find my potential customers?",
        answer:
            "Decyro works in 3 steps: First, you tell us about your product — what it does, who it helps, and what problems it solves. Then, our AI agents scan thousands of conversations on Reddit and X in real time, looking for people who are actively discussing problems your product solves. For example, if you sell an email tool, Decyro finds posts like 'I'm drowning in inbox chaos, any recommendations?' Finally, it generates a genuinely helpful reply that addresses their pain point and naturally mentions your product as a solution.",
    },
    {
        question: "Is this spam? Won't my brand get flagged?",
        answer:
            "This is the opposite of spam. Spam is irrelevant, mass-sent, and annoying. Decyro only replies to people who are actively asking for help or recommendations — and the replies are genuinely helpful. Each response is unique, contextual, and directly addresses the user's specific problem. Think of it like having a knowledgeable friend who happens to recommend your product when someone needs exactly what you offer. We also follow every platform's community guidelines strictly, and you can review every reply before it's posted.",
    },
    {
        question: "What platforms does Decyro monitor?",
        answer:
            "Right now, Decyro monitors Reddit (all subreddits relevant to your niche) and X (Twitter). These are the two highest-intent platforms where people openly discuss their problems, ask for tool recommendations, and share frustrations with existing solutions. We're building support for LinkedIn, Hacker News, Product Hunt, Quora, and niche community forums next — launching Q3 2026.",
    },
    {
        question: "How is this different from social listening tools like Mention or Brand24?",
        answer:
            "Social listening tools tell you that a conversation happened. Decyro actually participates in it. Traditional tools give you alerts and dashboards — you still have to manually read each post, write a reply, and post it. Decyro does the entire workflow autonomously: it finds high-intent posts, understands the context, writes a helpful and natural response, and positions your product as the solution. It's the difference between a radar and an autopilot.",
    },
    {
        question: "How long until I see actual results?",
        answer:
            "Most users see their first qualified leads within 48 hours. Here's what the timeline looks like: Day 1 — you set up your product profile and configure your keywords. Day 1-2 — Decyro starts scanning and identifies high-intent conversations. Day 2-3 — first AI replies go live and users start clicking through to your product. By week 2, you'll have clear data on which conversations convert best and the AI will be continuously improving its targeting.",
    },
    {
        question: "Can I control what the AI says about my product?",
        answer:
            "100%. You have full control over the AI's voice and messaging. You set the tone (professional, casual, technical), define key talking points, specify what to highlight and what to avoid, and set messaging guidelines. You can also choose between two modes: Review Mode (approve every reply before it posts) or Autonomous Mode (AI posts automatically based on your guidelines). Most founders start with Review Mode and switch to Autonomous after seeing 20-30 replies they're happy with.",
    },
    {
        question: "What kind of products work best with Decyro?",
        answer:
            "Decyro works best for B2B SaaS products, developer tools, productivity apps, and any software where people actively discuss problems online. If your target audience uses Reddit, X, or online communities to ask questions and share frustrations, Decyro will find them. Examples: project management tools, email clients, CRM software, design tools, DevOps tools, AI writing assistants, analytics platforms, and more. If people Google your product category, they're probably talking about it on social media too.",
    },
    {
        question: "What does it cost? Is there a free plan?",
        answer:
            "Yes! We have a free Starter plan that lets you track 1 keyword with 50 scans per day — perfect for validating the concept with your product. The Pro plan ($29/month) gives you 5 keywords, unlimited scans, and AI-generated replies. The Growth plan ($79/month) unlocks fully autonomous agents, unlimited keywords, custom reply guidelines, advanced analytics, and API access. No long-term contracts on any plan — you can upgrade, downgrade, or cancel anytime.",
    },
];

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>
            {/* ═══ HERO ═══ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Gradient orbs */}
                <div className="gradient-orb w-[500px] h-[500px] bg-accent top-[-100px] right-[-100px] animate-float" />
                <div className="gradient-orb w-[400px] h-[400px] bg-purple-400 bottom-[-50px] left-[-100px] animate-float" style={{ animationDelay: "3s" }} />

                <div className="section-padding w-full max-w-7xl mx-auto pt-28 pb-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <span className="label block mb-4">AI Customer Acquisition for SaaS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-heading font-bold text-[clamp(2.5rem,6vw,5.2rem)] leading-[1.08] max-w-5xl mb-6"
                    >
                        Find People Asking for Your Product on Reddit & X — <span className="text-accent">Reply Automatically</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-muted text-base md:text-lg max-w-2xl mb-8 leading-relaxed font-body"
                    >
                        Decyro scans Reddit and X for people with problems your SaaS solves,
                        then generates helpful replies that recommend your product — so you get
                        qualified leads without ads or cold outreach.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                        className="max-w-xl"
                    >
                        <form
                            onSubmit={(e) => { e.preventDefault(); window.location.href = "/waitlist"; }}
                            className="flex flex-col sm:flex-row gap-3 mb-3"
                        >
                            <input
                                type="url"
                                placeholder="Enter your product URL (e.g. yourapp.com)"
                                className="flex-1 px-4 py-3.5 rounded-xl border border-border bg-bg text-fg font-body text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3.5 rounded-xl bg-fg text-bg font-heading font-semibold text-sm tracking-wide hover:bg-fg/90 transition-colors duration-200 whitespace-nowrap flex items-center gap-2"
                            >
                                Start Finding Leads
                                <ArrowRight size={16} />
                            </button>
                        </form>
                        <div className="flex items-center gap-4">
                            <p className="text-muted-light text-xs font-body">Free to start · No credit card required</p>
                            <span className="text-muted-light text-xs">·</span>
                            <a href="/how-it-works" className="text-accent text-xs font-medium hover:underline font-body">
                                See how it works →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══ MARQUEE ═══ */}
            <section className="py-8 border-y border-border overflow-hidden">
                <div className="marquee-track marquee-reverse">
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
            <section className="section-padding py-32 bg-fg text-bg">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                            Why Trust Decyro
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-section leading-[1.1] max-w-4xl mb-16">
                            Built for Founders Who Measure Results,
                            <span className="text-accent-light"> Not Vanity Metrics.</span>
                        </h2>
                    </Reveal>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                        {stats.map((stat, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="text-center p-6 rounded-2xl border border-bg/10 bg-bg/5 hover:bg-bg/10 transition-colors duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                                        <stat.icon size={20} className="text-accent-light" />
                                    </div>
                                    <p className="font-heading font-bold text-4xl md:text-5xl text-bg mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-bg/50 text-sm font-body">{stat.label}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Trust Points */}
                    <Reveal delay={0.2}>
                        <div className="border-t border-bg/10 pt-12">
                            <p className="text-xs uppercase tracking-label text-bg/40 font-medium mb-8">
                                Our Commitments
                            </p>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {trustPoints.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl hover:bg-bg/5 transition-colors duration-200">
                                        <CheckCircle2 size={18} className="text-accent-light flex-shrink-0 mt-0.5" />
                                        <p className="text-bg/70 text-sm font-body leading-relaxed">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* CTA within social proof */}
                    <Reveal delay={0.3}>
                        <div className="mt-16 text-center">
                            <p className="text-bg/50 text-sm font-body mb-6">
                                Join 200+ founders already on the waitlist
                            </p>
                            <Button href="/waitlist" variant="primary">
                                Get Early Access
                                <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </Reveal>
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
