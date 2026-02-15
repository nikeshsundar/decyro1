"use client";

import { Metadata } from "next";
import {
    Link2,
    Search,
    Brain,
    MessageSquare,
    Package,
    Users,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import StepCard from "@/components/step-card";
import Button from "@/components/button";
import Reveal from "@/components/reveal";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        icon: Link2,
        title: "Connect Your Product",
        description:
            "Tell Decyro about your SaaS — what it does, who it helps, and what problems it solves. Our AI builds a deep understanding of your product's unique value proposition.",
    },
    {
        icon: Search,
        title: "AI Scans Social Platforms",
        description:
            "Our agents continuously monitor Reddit, X (Twitter), and other platforms in real time. They track thousands of conversations across hundreds of communities relevant to your niche.",
    },
    {
        icon: Brain,
        title: "Detect Buying Intent",
        description:
            "Advanced NLP models analyze each post for buying signals — frustration with competitors, feature requests, recommendation asks, and explicit purchase intent.",
    },
    {
        icon: MessageSquare,
        title: "Generate Contextual Replies",
        description:
            "For high-intent matches, the AI crafts a genuinely helpful reply that addresses the user's specific problem. No templates, no spam — every response is unique and contextual.",
    },
    {
        icon: Package,
        title: "Recommend Your SaaS",
        description:
            "Your product is naturally woven into the conversation as the ideal solution. The recommendation feels organic because it directly solves the problem the user described.",
    },
    {
        icon: Users,
        title: "Convert Leads Into Customers",
        description:
            "Interested users click through to your product, sign up, and convert. Track every interaction from first touch to conversion in your Decyro dashboard.",
    },
];

export default function HowItWorksPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding pt-40 pb-20 max-w-7xl mx-auto">
                <SectionHeading
                    label="How It Works"
                    title="From Social Conversations to Paying Customers in 6 Steps."
                    description="Decyro automates the entire journey — from discovering high-intent conversations to converting them into qualified leads for your SaaS."
                />
            </section>

            {/* Steps Timeline */}
            <section className="section-padding pb-32 max-w-3xl mx-auto">
                {steps.map((step, i) => (
                    <StepCard
                        key={i}
                        number={i + 1}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        isLast={i === steps.length - 1}
                    />
                ))}
            </section>

            {/* CTA */}
            <section className="section-padding py-32 bg-fg text-bg">
                <div className="max-w-4xl mx-auto text-center">
                    <Reveal>
                        <h2 className="font-heading font-bold text-display leading-[1.1] mb-6">
                            Ready to Put It Into Action?
                        </h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-bg/60 text-lg mb-10 font-body max-w-xl mx-auto">
                            Join the waitlist and be among the first to automate your customer acquisition.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Button
                            href="/waitlist"
                            variant="secondary"
                            className="!border-bg/30 !text-bg hover:!bg-bg hover:!text-fg"
                        >
                            Join Waitlist
                            <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
