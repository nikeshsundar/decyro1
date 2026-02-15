"use client";

import Reveal from "@/components/reveal";
import WaitlistForm from "@/components/waitlist-form";

export default function WaitlistPage() {
    return (
        <section className="min-h-screen flex items-center justify-center section-padding py-32">
            <div className="w-full max-w-lg relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl -z-10 scale-110" />

                <div className="p-8 md:p-12 rounded-2xl border border-border bg-bg">
                    <Reveal>
                        <div className="text-center mb-10">
                            <span className="label block mb-4">Early Access</span>
                            <h1 className="font-heading font-bold text-3xl md:text-4xl text-fg mb-3">
                                Join the Decyro Waitlist
                            </h1>
                            <p className="text-muted text-sm font-body">
                                Be among the first to automate customer acquisition from social media.
                            </p>
                        </div>
                    </Reveal>

                    <WaitlistForm />
                </div>
            </div>
        </section>
    );
}
