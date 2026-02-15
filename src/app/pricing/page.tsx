"use client";

import SectionHeading from "@/components/section-heading";
import PricingCard from "@/components/pricing-card";
import FaqItem from "@/components/faq-item";
import Reveal from "@/components/reveal";

const plans = [
    {
        name: "Free",
        price: "$0",
        description: "Perfect for testing the waters and seeing Decyro in action.",
        features: [
            "1 keyword to track",
            "50 scans per day",
            "Basic intent detection",
            "Manual reply suggestions",
            "Community support",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "$xx",
        period: "month",
        description: "For founders ready to start acquiring customers consistently.",
        features: [
            "5 keywords to track",
            "Unlimited daily scans",
            "Advanced intent detection",
            "AI-generated replies",
            "Multi-platform monitoring",
            "Lead conversion tracking",
            "Email support",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        price: "$xx",
        period: "month",
        description: "Full autonomous operation for scaling customer acquisition.",
        features: [
            "Unlimited keywords",
            "Autonomous AI agents",
            "Priority scraping queue",
            "Custom reply tone & guidelines",
            "Advanced analytics dashboard",
            "API access",
            "Dedicated support",
            "Custom integrations",
        ],
        highlighted: true,
    },
];

const pricingFaqs = [
    {
        question: "Can I switch plans anytime?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
        question: "Is there a free trial for paid plans?",
        answer:
            "All paid plans come with a 14-day free trial. No credit card required to start. You can explore all Pro or Growth features before committing.",
    },
    {
        question: "What happens if I exceed my keyword limit?",
        answer:
            "You'll receive a notification suggesting an upgrade. Your existing keywords will continue working — we never interrupt active campaigns without warning.",
    },
    {
        question: "Do you offer annual pricing?",
        answer:
            "Yes! Annual plans save you 20%. Contact us for annual pricing details.",
    },
];

export default function PricingPage() {
    return (
        <>
            {/* Hero */}
            <section className="section-padding pt-40 pb-20 max-w-7xl mx-auto text-center">
                <SectionHeading
                    label="Pricing"
                    title="Simple Pricing. Powerful Results."
                    description="Start free. Scale when you're ready. No hidden fees, no surprises."
                    align="center"
                />
            </section>

            {/* Pricing Cards */}
            <section className="section-padding pb-32 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, i) => (
                        <PricingCard key={i} index={i} {...plan} />
                    ))}
                </div>
            </section>

            {/* Pricing FAQ */}
            <section className="section-padding py-32 bg-card-bg/50 max-w-3xl mx-auto">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <h2 className="font-heading font-bold text-2xl text-fg mb-12">
                            Pricing FAQ
                        </h2>
                    </Reveal>
                    {pricingFaqs.map((faq, i) => (
                        <FaqItem key={i} index={i} {...faq} />
                    ))}
                </div>
            </section>
        </>
    );
}
