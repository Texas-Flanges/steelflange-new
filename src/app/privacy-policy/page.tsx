import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Steel Flange",
  description: "Privacy policy for Steel Flange website",
  alternates: { canonical: "https://steelflange.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://steelflange.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Privacy Policy",
                item: "https://steelflange.com/privacy-policy",
              },
            ],
          }),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        `,
        }}
      />

      {/* HEADER */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ background: "#1a3a5c" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white tracking-tight">
            Steel Flange
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/#about" className="text-gray-200 hover:text-white transition">
              About
            </a>
            <a href="/#types" className="text-gray-200 hover:text-white transition">
              Types
            </a>
            <a href="/#faq" className="text-gray-200 hover:text-white transition">
              FAQ
            </a>
            <a href="/blog" className="text-gray-200 hover:text-white transition">
              Blog
            </a>
            <a
              href="https://texasflange.com/contact-us/?ref=steelflange"
              className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #1a3a5c 0%, #2d5a87 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-gray">
          <h2>Privacy Policy for Steel Flange</h2>
          <p>
            Steel Flange is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the site includes:
          </p>
          <ul>
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Technical information (IP address, browser type, pages visited, etc.)</li>
            <li>Usage information (how you interact with our website)</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul>
            <li>Generate a personal profile about you so that future visits to the site will be personalized</li>
            <li>Increase the efficiency and operation of the site</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site</li>
            <li>Notify you about changes to our website</li>
            <li>Process your requests and send you related information</li>
          </ul>

          <h3>Disclosure of Your Information</h3>
          <p>
            We may share or disclose your information in the following situations:
          </p>
          <ul>
            <li>By Law or to Protect Rights: If we believe the release of information is necessary to comply with the law</li>
            <li>Third-Party Service Providers: We may share your information with third parties that perform services for us</li>
            <li>Business Transfers: If Steel Flange is involved in a merger, acquisition, or asset sale, your information may be transferred</li>
          </ul>

          <h3>Security of Your Information</h3>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:sales@texasflange.com">sales@texasflange.com</a></li>
            <li>Phone: <a href="tel:281-484-8325">281-484-8325</a></li>
            <li>Website: <a href="https://texasflange.com?ref=steelflange">texasflange.com</a></li>
          </ul>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            Steel Flange reserves the right to modify this Privacy Policy at any time. Changes and clarifications will take effect immediately upon their posting to the website. If we make material changes to this policy, we will notify you here.
          </p>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Steel Flange</h3>
              <p className="text-sm leading-relaxed">
                An informational resource for understanding steel flanges. For sourcing
                needs, visit our partners at Texas Flange.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="/#about" className="block hover:text-white transition">
                  About Steel Flanges
                </a>
                <a href="/#types" className="block hover:text-white transition">
                  Types of Flanges
                </a>
                <a href="/#faq" className="block hover:text-white transition">
                  FAQ
                </a>
                <a href="/blog" className="block hover:text-white transition">
                  Blog
                </a>
                <a href="/privacy-policy" className="block hover:text-white transition">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  Phone:{" "}
                  <a href="tel:281-484-8325" className="hover:text-white transition">
                    +1 281-484-8325
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@texasflange.com"
                    className="hover:text-white transition"
                  >
                    sales@texasflange.com
                  </a>
                </p>
                <p>
                  Hours:{" "}
                  <span className="text-gray-300">
                    Mon–Fri, 8 AM – 5 PM CST
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Steel Flange. All rights reserved.</p>
            <p className="mt-1">
              A resource by{" "}
              <a
                href="https://texasflange.com?ref=steelflange"
                className="text-white hover:underline"
              >
                Texas Flange
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
