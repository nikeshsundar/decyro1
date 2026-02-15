"use client";

import {
    Rocket,
    Code2,
    Building2,
    Sparkles,
    Megaphone,
    ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import UseCaseCard from "@/components/use-case-card";
import Button from "@/components/button";
import Reveal from "@/components/reveal";

const useCases = [
    {
        icon: Rocket,
        title: "SaaS Founders",
        description:
            "You've built a great product but struggle with distribution. Decyro finds conversations where people need exactly what you've built, and puts your product in front of them.",
        example:
            "Project management tool founder discovers Reddit threads where teams complain about Jira complexity — gets 3 new signups per thread.",
    },
    {
        icon: Code2,
        title: "Indie Hackers",
        description:
            "Solo founders can't afford dedicated marketing teams. Decyro acts as your 24/7 growth agent, finding and engaging prospects while you focus on shipping features.",
        example:
            "Indie email tool maker finds X threads about inbox overload and gets recommended as the lightweight alternative.",
    },
    {
        icon: Building2,
        title: "Agencies",
        description:
            "Offer Decyro as a value-add to your clients. Show measurable lead generation results from social channels and differentiate your agency from competitors.",
        example:
            "Digital agency uses Decyro for 5 SaaS clients, generating 200+ qualified leads/month across all accounts.",
    },
    {
        icon: Sparkles,
        title: "AI Startups",
        description:
            "AI products solve real problems — make sure people discover yours. Decyro finds users struggling with manual workflows and positions your AI solution as the answer.",
        example:
            "AI writing assistant finds Reddit posts about writer's block and content creation struggles. Conversion: 12% click-through.",
    },
    {
        icon: Megaphone,
        title: "Marketing Teams",
        description:
            "Supplement your existing campaigns with intent-driven social acquisition. Decyro uncovers demand signals that paid ads and SEO can't reach.",
        example:
            "B2B marketing team discovers 40+ high-intent X conversations per week that their SEO strategy was completely missing.",
    },
];

export default function UseCasesPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding pt-40 pb-20 max-w-7xl mx-auto">
                <SectionHeading
                    label="Use Cases"
                    title="Built for Anyone Who Needs Customers — Without the Ad Spend."
                    description="From solo founders to enterprise marketing teams, Decyro adapts to your product, your audience, and your growth goals."
                />
            </section>

            {/* Use Case Cards */}
            <section className="section-padding pb-32 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((uc, i) => (
                        <UseCaseCard key={i} index={i} {...uc} />
                    ))}
                </div>
            </section>

            {/* Example Deep Dive */}
            <section className="section-padding py-32 bg-fg text-bg">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <span className="text-xs uppercase tracking-label text-bg/40 font-medium block mb-4">
                            Real-World Scenario
                        </span>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-heading font-bold text-section leading-[1.1] max-w-4xl mb-12">
                            How an Email Automation SaaS Gained 200+ Users From Reddit Alone.
                        </h2>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Reveal delay={0.15}>
                            <div className="p-6 rounded-xl border border-bg/10">
                                <span className="text-xs uppercase tracking-label text-bg/40 block mb-3">Before Decyro</span>
                                <p className="text-bg/70 text-sm leading-relaxed font-body">
                                    Spending $3,000/month on Google Ads with a $45 CAC. Cold emails had a 0.3% response rate.
                                    Growth was stalling despite a strong product with 4.8★ reviews.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
                                <span className="text-xs uppercase tracking-label text-accent-light block mb-3">With Decyro</span>
                                <p className="text-bg/70 text-sm leading-relaxed font-body">
                                    AI found 50+ daily Reddit posts from users complaining about inbox overload, email management chaos,
                                    and asking for tool recommendations. Contextual replies positioned the product as the ideal solution.
                                </p>
                            </div>
                        </Reveal>
                        <Reveal delay={0.35}>
                            <div className="p-6 rounded-xl border border-bg/10">
                                <span className="text-xs uppercase tracking-label text-bg/40 block mb-3">Results</span>
                                <p className="text-bg/70 text-sm leading-relaxed font-body">
                                    200+ new users in the first month. CAC dropped to $4. Organic referrals increased 3x
                                    from users who discovered the product through helpful Reddit replies.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding py-32 max-w-4xl mx-auto text-center">
                <Reveal>
                    <h2 className="font-heading font-bold text-display leading-[1.1] mb-8">
                        See Yourself Here?
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-muted text-lg mb-10 font-body max-w-xl mx-auto">
                        Whatever your product, if people are talking about the problems it solves — Decyro will find them.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <Button href="/waitlist" variant="primary">
                        Join Waitlist
                        <ArrowRight size={16} className="ml-2" />
                    </Button>
                </Reveal>
            </section>
        </>
    );
}
