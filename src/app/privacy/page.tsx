import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — Decyro",
    description: "Privacy policy for Decyro's AI customer acquisition platform.",
};

export default function PrivacyPage() {
    return (
        <section className="section-padding pt-40 pb-32 max-w-3xl mx-auto">
            <span className="label block mb-4">Legal</span>
            <h1 className="font-heading font-bold text-display leading-[1.1] mb-10">
                Privacy Policy
            </h1>

            <div className="prose prose-sm max-w-none space-y-8 text-muted font-body leading-relaxed">
                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        1. Information We Collect
                    </h2>
                    <p>
                        We collect information you provide directly to us, such as your name, email
                        address, and company name when you sign up for our waitlist or create an account.
                        We also collect usage data, including how you interact with our platform, the
                        keywords you track, and general analytics about your usage patterns.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        2. How We Use Your Information
                    </h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services;
                        to communicate with you about your account and our products; and to personalize
                        your experience. We do not sell your personal data to third parties.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        3. Data Security
                    </h2>
                    <p>
                        We implement industry-standard security measures to protect your personal
                        information. This includes encryption in transit and at rest, regular security
                        audits, and restricted access controls.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        4. Cookies & Tracking
                    </h2>
                    <p>
                        We use essential cookies to maintain your session and preferences. We may use
                        analytics cookies to understand how our website is used. You can control cookie
                        preferences through your browser settings.
                    </p>
                </div>

                <div>
                    <h2 className="font-heading font-semibold text-lg text-fg mb-3">
                        5. Contact Us
                    </h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at
                        privacy@decyro.com.
                    </p>
                </div>

                <p className="text-xs text-muted-light pt-8 border-t border-border">
                    Last updated: February 2026
                </p>
            </div>
        </section>
    );
}
