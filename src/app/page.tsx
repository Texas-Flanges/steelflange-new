import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steel Flange - Your Guide to Industrial Steel Flanges",
  description:
    "A simple, surface-level guide for anyone looking to understand the basics of steel flanges. Learn about types, materials, and functions of steel flanges.",
  keywords:
    "steel flanges, steel pipe flanges, forged flanges, industrial steel flanges, flange manufacturer, weld neck flange, slip-on flange, blind flange",
  openGraph: {
    title: "Steel Flange - Your Guide to Industrial Steel Flanges",
    description:
      "A simple, surface-level guide for anyone looking to understand the basics of steel flanges. Learn about types, materials, and functions of steel flanges.",
    url: "https://steelflange.com",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Flange - Your Guide to Industrial Steel Flanges",
    description:
      "A simple, surface-level guide for anyone looking to understand the basics of steel flanges. Learn about types, materials, and functions of steel flanges.",
  },
  alternates: { canonical: "https://steelflange.com" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Steel Flanges",
              url: "https://steelflange.com",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-281-484-8325",
                contactType: "sales",
                email: "sales@texasflange.com",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Texas Flange & Fitting Supply",
                url: "https://texasflange.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a steel flange?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A flange is a forged or cast steel ring designed to connect sections of pipe, or to join a pipe to a valve, pump, or other piece of equipment. Flanges are bolted together with a gasket in between to create a secure, leak-proof seal that allows for easier system maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why choose a steel flange?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Steel flanges are the industry standard because they offer the best combination of strength, durability, and cost-effectiveness. They handle high-pressure and high-temperature requirements, making them the go-to material for oil and gas, manufacturing, and power generation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do flanges connect pipes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A flange is welded or screwed onto the end of each pipe. A gasket is placed between the two flat flange faces, then bolts are inserted through the matching bolt holes and tightened with nuts. This compresses the gasket, creating a tight, leak-proof seal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of steel flange are there?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The most common types include Weld Neck flanges for high-pressure and high-temperature applications, Slip-On flanges for easier alignment and installation, and Blind flanges to seal the end of a piping system.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where are steel flanges used?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Steel flanges are essential in virtually all industrial piping systems, especially in oil and gas pipelines and refineries, petrochemical and chemical processing plants, power generation facilities, and municipal water treatment systems.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I choose the right flange?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Consider pipe size, pressure rating, material compatibility, and application environment for best fit. An expert team at Texas Flange can help you with any questions.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          body > header.border-gray-200, header.border-gray-200 { display: none !important; }
          .rv { opacity: 1; transform: none; }
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
            <a href="#about" className="text-gray-200 hover:text-white transition">
              About
            </a>
            <a href="#types" className="text-gray-200 hover:text-white transition">
              Types
            </a>
            <a href="#faq" className="text-gray-200 hover:text-white transition">
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
        className="relative py-12 sm:py-16 lg:py-24 md:py-32"
        style={{
          backgroundImage: "linear-gradient(rgba(26,58,92,0.72), rgba(26,58,92,0.72)), url(/hero-flange.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 rv">
            Steel Flange
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 rv max-w-3xl mx-auto leading-relaxed">
            We know the industrial piping world can be complex. This site was created to
            be a simple, surface-level guide for anyone looking to understand the basics.
            Here, you&apos;ll find straightforward articles and guides on the common types,
            materials, and functions of steel flanges.
          </p>
          <p className="text-base text-gray-300 rv max-w-2xl mx-auto">
            This is an informational resource only. When you&apos;re ready to source
            high-quality flanges from an industry leader, we proudly direct you to our
            partners at{" "}
            <a
              href="https://texasflange.com/carbon-steel-flanges/?ref=steelflange"
              className="text-white underline font-semibold hover:text-gray-100"
            >
              Texas Flange
            </a>
            .
          </p>
        </div>
      </section>

      {/* WHAT IS A STEEL FLANGE */}
      <section id="about" className="py-16 md:py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 rv">
                What is a Steel Flange?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 rv">
                <p>
                  A steel flange is a fundamental component used to connect pipes, valves,
                  pumps, and other equipment to form a complete industrial piping system.
                  Typically forged or cast, these flanges are designed to be bolted together
                  with a gasket in between to create a secure, leak-proof seal.
                </p>
            <p className="mt-4">
              They are available in various types, like weld neck, slip-on, and blind
              flanges, and different materials, such as carbon steel (A105) or stainless
              steel (304/316). Selecting the correct flange requires matching its
              dimensions, pressure rating (e.g., 150#, 300#), and technical specifications
              to your project&apos;s requirements.
            </p>
            <p className="mt-4">
              An expert team is available at{" "}
              <a
                href="https://texasflange.com/carbon-steel-flanges/?ref=steelflange"
                className="text-blue-700 underline font-semibold"
              >
                Texas Flange
              </a>{" "}
              to help you with any questions you may have and all your sourcing needs.
            </p>
          </div>
            </div>
            <div className="rv">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/grid-flange.jpg"
                alt="Close-up of various steel flanges arranged on a workshop table"
                className="rounded-lg shadow-lg w-full"
                width={606}
                height={606}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE STEEL */}
      <section className="py-16 md:py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rv order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/unsplash-flange.jpg"
                alt="Steel flanges closeup showing bolt holes and machined faces"
                className="rounded-lg shadow-lg w-full"
                width={606}
                height={606}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 rv">
                Why Choose a Steel Flange?
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 rv">
                <p>
                  Steel flanges are the industry&apos;s most trusted and widely specified
                  material due to their exceptional strength, reliability, and
                  cost-effectiveness. Ideal for most standard industrial applications, carbon
                  steel provides robust performance in high-pressure and high-temperature
                  environments.
                </p>
                <p className="mt-4">
                  You can source all types, from weld neck and slip-on flanges to blind
                  flanges, in common specifications like A105. This material is the workhorse
                  for industries like oil and gas, power generation, and manufacturing, and it
                  is available in all standard dimensions and pressure ratings (like 150# or
                  300#) to meet your project&apos;s requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHICH STEEL IS MOST POPULAR */}
      <section className="py-16 md:py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 rv">
            Which Steel Is Most Popular?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 rv">
            <p>
              The most widely used material grade out there is A105 forged carbon steel. It covers a broad size range - 1/2&quot; to 24&quot; under ASME B16.5, 26&quot; to 60&quot; under ASME B16.47, and all the way up to 96&quot; under B16.1. That size flexibility, combined with a working range of ambient up to 1,000°F and pressures anywhere from 20 to 6,170 psi, makes carbon steel flanges a practical fit for a wide variety of industrial applications. They also happen to be one of the more cost-effective options on the market, which never hurts, and it is the industry standard replacement for the previously designed cast iron specification. Most A105 flanges come painted from the factory, but you can also opt for galvanization.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE HIGH YIELD */}
      <section className="py-16 md:py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 rv">
            Why Choose High Yield Carbon Steel Flanges?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 rv">
            <p>
              When we talk about yield strength, we&apos;re really just talking about how much stress a piece of steel can take before it starts to permanently deform. That threshold is known as the &quot;yield point&quot; and is essentially the maximum load you want to put on the material. The good news about yielding is that it&apos;s a gradual process, so deformation is usually visible before anything catastrophic happens. High yield carbon steel flanges are heat treated to push that deformation threshold higher, which makes them the go-to choice for high pressure and high temperature applications: typically Class 600# and above. They also carry a slightly higher carbon content than mild steel, which makes them tougher and less brittle overall. This also has an effect on weldability, so make sure to take that into consideration if you are a fabricator. What really sets these flanges apart in demanding service conditions is their resistance to wear. When you need something that&apos;s going to last in a tough environment, that durability is what matters most. These flanges fall under specifications A694 and MSS-SP44, which cover the full range of grades from F42 to F70, with F52 and F65 being the most common choices.
            </p>
          </div>
        </div>
      </section>

      {/* COMMON TYPES */}
      <section id="types" className="py-16 md:py-10 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center rv">
            Common Types of Steel Flanges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 rv">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weld Neck Flange</h3>
              <p className="text-gray-700">
                Recognizable by its long, tapered hub. The hub is welded directly to the
                pipe, providing a very strong, reinforced connection ideal for
                high-pressure systems and extreme temperatures.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 rv">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Slip-On Flange</h3>
              <p className="text-gray-700">
                Designed to slip over the end of the pipe, then welded in two places.
                Generally easier to install and align than a weld neck, making it a
                popular choice for lower-pressure applications.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 rv">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blind Flange</h3>
              <p className="text-gray-700">
                A solid disc with bolt holes used to seal or &quot;blank off&quot; the end
                of a pipe, valve, or pressure vessel opening, effectively acting as a cap
                for the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-10 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center rv">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "What is a steel flange?",
                a: "A flange is a forged or cast steel ring designed to connect sections of pipe, or to join a pipe to a valve, pump, or other piece of equipment. Flanges are bolted together with a gasket in between to create a secure, leak-proof seal that allows for easier system maintenance.",
              },
              {
                q: "Why choose a steel flange?",
                a: "Steel flanges are the industry standard because they offer the best combination of strength, durability, and cost-effectiveness. They are strong enough to handle high-pressure and high-temperature requirements, making them the go-to material for critical applications in oil and gas, manufacturing, and power generation. As the most common specification (like A105 for carbon steel), they are easy to source in all types (like weld neck or slip-on) and dimensions.",
              },
              {
                q: "How do flanges connect pipes?",
                a: "Flanges create a strong, bolted joint. A flange is typically welded or screwed onto the end of each pipe. To make the connection, a gasket (a ring of softer, compressible material) is placed between the two flat flange faces. Bolts are then inserted through the matching bolt holes and tightened with nuts. This action compresses the gasket, creating a tight, leak-proof seal that securely fastens the two pipe sections together.",
              },
              {
                q: "What types of steel flange are there?",
                a: "The most common types include Weld Neck flanges, which are ideal for high-pressure and high-temperature applications; Slip-On flanges, which are easier to align and install; and Blind flanges, which are used to seal the end of a piping system.",
              },
              {
                q: "Where are steel flanges used?",
                a: "Steel flanges are essential components in virtually all industrial and mechanical piping systems. You'll find them in any industry that transports liquids or gases, especially under high pressure or at high temperatures. Key industries include oil and gas (for pipelines and refineries), petrochemical and chemical processing plants, and power generation facilities. They are also critical for connecting pumps, valves, and equipment in municipal water treatment systems.",
              },
              {
                q: "How do I choose the right flange?",
                a: "Consider pipe size, pressure, material compatibility, and application environment for best fit, and call Texas Flange today!",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm rv">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #1a3a5c 0%, #2d5a87 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center rv">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Source Your Flanges?
          </h2>
          <p className="text-gray-200 mb-8 text-lg">
            When your project demands high-quality components that can be trusted under
            pressure, partner with the experts at Texas Flange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://texasflange.com/contact-us/?ref=steelflange"
              className="bg-white text-gray-900 px-8 py-3 rounded font-bold text-lg hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
            <a
              href="tel:281-484-8325"
              className="border-2 border-white text-white px-8 py-3 rounded font-bold text-lg hover:bg-white hover:text-gray-900 transition"
            >
              Call 281-484-8325
            </a>
          </div>
        </div>
      </section>

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
                <a href="#about" className="block hover:text-white transition">
                  About Steel Flanges
                </a>
                <a href="#types" className="block hover:text-white transition">
                  Types of Flanges
                </a>
                <a href="#faq" className="block hover:text-white transition">
                  FAQ
                </a>
                <a href="/blog" className="block hover:text-white transition">
                  Blog
                </a>
                <a
                  href="/understanding-steel-flange-basics-and-applications"
                  className="block hover:text-white transition"
                >
                  Steel Flange Guide
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
                <p>Fax: 281-484-8730</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@texasflange.com"
                    className="hover:text-white transition"
                  >
                    sales@texasflange.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Steel Flange. All rights reserved.</p>
            <p className="mt-1">
              A resource by{" "}
              <a
                href="https://texasflange.com/carbon-steel-flanges/?ref=steelflange"
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
