import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries We Supply",
  description:
    "Forged and plate steel flanges supplied to oil and gas, petrochemical, power generation, waterworks, chemical processing, mining, pulp and paper, food and beverage, agriculture, HVAC, marine, and data center customers.",
};

const industries = [
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    eyebrow: "Energy Sector",
    blurb:
      "Pipeline mainline in MSS SP-44 A694 high yield, refinery process piping in A105 with F11 and F22 chrome-moly, NACE MR0175 sour service.",
  },
  {
    slug: "petrochemical",
    name: "Petrochemical",
    eyebrow: "Process Industry",
    blurb:
      "Reactors, distillation columns, and transfer piping. A105 standard, F22 and F91 for high temperature, F304L and F316L stainless for corrosion.",
  },
  {
    slug: "power-generation",
    name: "Power Generation",
    eyebrow: "Utility Sector",
    blurb:
      "Main steam in F22 and F91 grade 91 for supercritical, boiler feedwater in A105 and A350 LF2, plate-cut AWWA C207 for cooling water.",
  },
  {
    slug: "waterworks",
    name: "Water & Wastewater",
    eyebrow: "Municipal Sector",
    blurb:
      "AWWA C207 plate-cut Class B, D, E, and F. Class 125LW lightweight steel. SA-516 Gr.70 and A36 plate to 144 inch diameter.",
  },
  {
    slug: "chemical-processing",
    name: "Chemical Processing",
    eyebrow: "Process Industry",
    blurb:
      "Stainless 304 and 316L baseline. Hastelloy and Monel for severe duty. Duplex 2205 for chloride service. Lined flanges for aggressive media.",
  },
  {
    slug: "mining",
    name: "Mining & Minerals",
    eyebrow: "Heavy Industry",
    blurb:
      "Slurry lines in A516-70 carbon with replaceable wear plates, tailings transfer, dewatering, and mineral process water service.",
  },
  {
    slug: "pulp-paper",
    name: "Pulp & Paper",
    eyebrow: "Process Industry",
    blurb:
      "Bleach plant chloride service in duplex 2205 and super duplex 2507. Recovery boilers, white liquor, and black liquor lines.",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    eyebrow: "Sanitary Process",
    blurb:
      "316L stainless with sanitary finishes. CIP compatible. Lower pressure with strict purity requirements and full documentation.",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    eyebrow: "Ag & Irrigation",
    blurb:
      "Plate-cut AWWA flanges for large diameter irrigation. Fertilizer transfer. Anhydrous ammonia in stainless where carbon is not permitted.",
  },
  {
    slug: "hvac",
    name: "HVAC & Mechanical",
    eyebrow: "Building Systems",
    blurb:
      "Chilled water on AWWA-style plate-cut for cost efficiency. ASME B16.5 Class 150 and 300 for process loops. SA-516 plate common.",
  },
  {
    slug: "marine",
    name: "Marine & Shipbuilding",
    eyebrow: "Marine Sector",
    blurb:
      "Saltwater service in Monel 400, copper-nickel 90/10, super duplex. F304L and F316L stainless. ABS, USCG, and ABYC compliant packages.",
  },
  {
    slug: "data-centers",
    name: "Data Centers",
    eyebrow: "Critical Facilities",
    blurb:
      "Chilled water cooling loops dominant. Plate-cut lightweight flanges. CRAH and CRAC system piping. Standard ASME B16.5 Class 150 common.",
  },
];

export default function IndustriesHubPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#475569] uppercase tracking-widest text-sm mb-4">
            Industries We Supply
          </p>
          <h1 className="font-display text-5xl md:text-6xl mb-6">
            Forged, Plate, or Custom for Every Sector
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
            Steel flanges supplied across twelve core industries.
            From A105 carbon forgings to F91 chrome-moly, AWWA plate-cut to
            203 inch custom diameter. Forged or plate, we cover the full
            production path that each sector actually buys.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="block bg-white border border-gray-200 p-6 hover:border-[#475569] hover:shadow-lg transition"
              >
                <p className="text-[#475569] uppercase tracking-wider text-xs mb-2">
                  {industry.eyebrow}
                </p>
                <h2 className="font-display text-2xl text-[#1B1F23] mb-3">
                  {industry.name}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {industry.blurb}
                </p>
                <p className="text-[#475569] text-sm mt-4 font-medium">
                  View industry detail
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#475569] uppercase tracking-widest text-sm mb-4">
            Why This Resource
          </p>
          <h2 className="font-display text-4xl text-[#1B1F23] mb-6">
            Forged and Plate Under One Roof
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                Both Production Paths
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Forged flanges in A105 carbon, A350 LF2 low temperature, and
                the full chrome-moly and stainless range. Plate-cut flanges
                from SA-516 Gr.70 and A36 to 203 inch custom diameter on AWWA
                and ASME patterns.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                Code and Standard Fluency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ASME B16.5, B16.47, AWWA C207, MSS SP-44, and the lightweight
                ANSI B16.1 cast iron pattern. NACE MR0175 sour service. We
                match the spec on the drawing without translation errors.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl text-[#1B1F23] mb-3">
                Material Traceability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mill test reports, heat numbers, and PMI on demand. Sour
                service certification, low temperature impact testing, and
                positive material identification handled as routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">
            Tell Us Your Service Conditions
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Pressure, temperature, media, and code. Send the line list and we
            will return a quote with the right grade and production path for
            your industry.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-8 py-4 font-medium hover:bg-gray-100 transition"
            >
              (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white px-8 py-4 font-medium hover:bg-white hover:text-[#475569] transition"
            >
              sales@texasflange.com
            </a>
          </div>
          <p className="text-sm mt-8 opacity-90">
            PO Box 2889, Pearland TX 77588
          </p>
        </div>
      </section>
    </main>
  );
}
