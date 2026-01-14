import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SimpliLyfe",
  description: "SimpliLyfe Terms of Service - Read our terms and conditions for using our products and services.",
};

export default function TermsOfServicePage() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using SimpliLyfe Inc.&apos;s products and services, including TheFocusPath
              (collectively, the &quot;Services&quot;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground">
              SimpliLyfe provides productivity and study management tools designed to help users
              organize their academic and personal tasks. Our flagship product, TheFocusPath,
              offers features including task management, note-taking, and focus techniques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">To use certain features of our Services, you may need to create an account. You agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide accurate and complete information when creating your account</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Use the Services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Services</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Upload or transmit viruses or other malicious code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Services and all content, features, and functionality are owned by SimpliLyfe Inc.
              and are protected by copyright, trademark, and other intellectual property laws.
              You may not copy, modify, distribute, or create derivative works without our express permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Content</h2>
            <p className="text-muted-foreground">
              You retain ownership of any content you create using our Services. Your notes, tasks,
              and study materials are stored locally on your device and remain your property.
              We do not claim any ownership rights over your content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not guarantee that the Services will be uninterrupted,
              secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, SimpliLyfe Inc. shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising out of or
              related to your use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms of Service at any time. We will notify
              users of any material changes by posting a notice on our website. Your continued
              use of the Services after such modifications constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of Canada,
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:{" "}
              <a href="mailto:support@simpli-lyfe.com" className="text-primary hover:underline">
                support@simpli-lyfe.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
