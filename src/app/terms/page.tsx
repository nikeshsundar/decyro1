import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — Decyro",
    description: "Terms of service for Decyro's AI customer acquisition platform.",
};

export default function TermsPage() {
    return (
        <section className="section-padding pt-40 pb-32 max-w-3xl mx-auto">
            <span className="label block mb-4">Legal</span>
            <h1 className="font-heading font-bold text-display leading-[1.1] mb-10">
                Terms of Service
            </h1>

            <div className="prose prose-sm max-w-none space-y-8 text-muted font-body leading-relaxed">
                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing or using Decyro&apos;s services, you agree to be bound by these
                        Terms of Service and all applicable laws and regulations. If you do not agree
                        with any of these terms, you are prohibited from using or accessing this site.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        2. Use License
                    </h2>
                    <p>
                        Permission is granted to temporarily access and use Decyro&apos;s services for
                        personal or commercial business purposes in accordance with these Terms of Service.
                        This license does not include the right to modify, distribute, or reverse-engineer
                        any part of the service.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        3. Account Responsibilities
                    </h2>
                    <p>
                        You are responsible for maintaining the security of your account and for all
                        activities that occur under your account. You must notify us immediately of any
                        unauthorized use of your account.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        4. Service Availability
                    </h2>
                    <p>
                        Decyro strives to provide reliable service but does not guarantee 100% uptime.
                        We reserve the right to modify or discontinue the service at any time with
                        reasonable notice to active subscribers.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        5. Limitation of Liability
                    </h2>
                    <p>
                        Decyro shall not be held liable for any indirect, incidental, special, or
                        consequential damages resulting from your use of or inability to use the service.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        6. Contact
                    </h2>
                    <p>
                        For questions about these Terms of Service, please contact us at
                        legal@decyro.com.
                    </p>
                </div>

                <p className="text-xs text-muted-light pt-8 border-t border-border">
                    Last updated: February 2026
                </p>
            </div>
        </section>
    );
}
