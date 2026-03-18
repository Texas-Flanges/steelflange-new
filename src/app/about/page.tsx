import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Steel Flange',
  description: 'Learn about Steel Flange and our commitment to quality steel flanges.',
  alternates: { canonical: "https://steelflange.com/about" },
};

export default function AboutPage() {
  return (
    <div className="w-full">
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
                name: "About",
                item: "https://steelflange.com/about",
              },
            ],
          }),
        }}
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container-wide">
          <h1 className="text-4xl font-bold">About Steel Flange</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-lg mb-4">
            Steel Flange is a leading provider of information about industrial steel flanges and their applications.
            With a commitment to quality information and technical accuracy, we serve engineers and procurement professionals
            across multiple industries.
          </p>
          <p className="text-lg mb-4">
            We combine decades of manufacturing expertise with cutting-edge technical knowledge to provide products that meet
            industry standards. Whether you need standard specifications or information about custom solutions, our resources are
            equipped to help you understand the requirements.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Our Commitment</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Quality First:</strong> Every product undergoes rigorous testing and inspection.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Expert Support:</strong> Our engineers are available to help with technical questions and specifications.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Competitive Pricing:</strong> Direct manufacturing means better value for our customers.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Fast Delivery:</strong> Extensive inventory and rapid fulfillment capabilities.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">Global Reach</h2>
          <p className="text-lg">
            We proudly serve customers worldwide, delivering technical guidance and expertise to leading industrial companies,
            engineering firms, and equipment manufacturers. Our understanding of industry standards and best practices allows us to provide
            tailored information that meets your technical requirements and specifications.
          </p>
        </div>
      </section>
    </div>
  );
}