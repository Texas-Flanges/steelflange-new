import Link from "next/link";

export const metadata = {
  title: "Steel Flange Standards Reference | ASME, ANSI, AWWA, DIN, API",
  description:
    "Complete reference for steel flange standards we supply and stock: ASME B16.5 and B16.47, ANSI B16.1, AWWA C207 and C228, DIN/EN 1092-1, API 605, MSS SP-44, and NACE MR0175. A105 carbon through F91 chrome-moly, forged and plate-cut.",
};

const standards = [
  {
    code: "ASME B16.5",
    title: "Steel Pipe Flanges 1/2\" - 24\"",
    summary:
      "The core spec for forged steel flanges through 24 inches. Classes 150 through 2500. A105 carbon, F304/F316 stainless, F11/F22/F91 chrome-moly. Raised face, flat face, RTJ.",
    href: "/standards/asme-flanges",
  },
  {
    code: "ASME B16.47",
    title: "Large Diameter Steel Flanges 26\" - 60\"",
    summary:
      "Series A (MSS SP-44 lineage) and Series B (API 605 lineage). Same nominal size, very different bolt patterns. Not interchangeable. Both forged and plate-cut production paths.",
    href: "/standards/asme-flanges",
  },
  {
    code: "AWWA C207",
    title: "Steel Ring Flanges for Waterworks",
    summary:
      "Class B (86 psi), Class D (175/150 psi), Class E (275 psi), Class F (300 psi). Plate-cut from A36 and A516-70. Sizes 4\" through 144\" standard, custom larger on request.",
    href: "/standards/awwa-flanges",
  },
  {
    code: "ANSI B16.1",
    title: "Cast Iron Pattern Compatibility",
    summary:
      "Legacy Class 25/125/250 cast iron pattern. The retrofit case for steel plate flanges that drop into the same bolt circle. A36 plate-cut as the modern replacement.",
    href: "/standards/ansi-flanges",
  },
  {
    code: "DIN / EN 1092-1",
    title: "European Metric Steel Flanges",
    summary:
      "PN 6 through PN 400 ratings. Type 01 flat ring, Type 11 weld neck, Type 05 blind. P250GH and P265GH carbon steel material designations.",
    href: "/standards/din-flanges",
  },
  {
    code: "API 605",
    title: "Large Diameter Steel Flange Lineage",
    summary:
      "Older API spec that fed into ASME B16.47 Series B. Still referenced on heritage process vessels and tank nozzles. Lighter cross-section with more bolts on a tighter circle.",
    href: "/standards/asme-flanges",
  },
  {
    code: "MSS SP-44",
    title: "Steel Pipeline Flanges",
    summary:
      "Large diameter pipeline flange spec that fed directly into ASME B16.47 Series A. Still seen on transmission pipeline orders. Heavier bolt loads, larger bolt diameters.",
    href: "/standards/asme-flanges",
  },
  {
    code: "NACE MR0175",
    title: "Sour Service Materials",
    summary:
      "Not a flange standard. A materials standard governing hardness and chemistry for H2S environments. Required across upstream oil and gas work in carbon and alloy steel.",
    href: "/materials/alloy-steel",
  },
];

export default function StandardsHubPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Steel Flange Standards, From 86 PSI to 6,000.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            From AWWA Class B ring flanges in A36 plate to F91 chrome-moly
            forged weld necks for ultra-supercritical steam, we supply steel
            flanges built to the codes your specs require. This is our working
            reference for the standards we stock and source every day.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            The Standards That Govern Steel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
            A steel flange is only as good as the specification it was built
            to. The standard governs dimensions, tolerance, material chemistry,
            marking, pressure-temperature ratings, and acceptable face
            finishes. Pick the wrong code and you can end up with a flange
            that bolts up just fine but is rated for a fraction of the
            pressure your system actually sees. Below are the eight standards
            that cover the vast majority of steel flange work we do, from
            forged A105 weld necks to plate-cut A36 blinds at 144 inches and
            beyond.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((s) => (
              <Link
                key={s.code}
                href={s.href}
                className="bg-white border border-gray-200 rounded p-6 hover:border-[#475569] hover:shadow-md transition"
              >
                <p className="text-[#475569] font-bold text-sm tracking-wider mb-2">
                  {s.code}
                </p>
                <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {s.summary}
                </p>
                <p className="text-[#475569] text-sm font-semibold mt-4">
                  Read the reference -&gt;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Why Standards Matter for Steel
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Interchangeability
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Bolt patterns, face thickness, and OD must match the mating
                flange. A B16.5 Class 150 steel flange and an AWWA Class D
                steel flange in the same nominal size do not always share the
                same bolt circle. The standard is what makes steel parts swap
                without a field redesign.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Pressure Ratings
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Pressure-temperature ratings derive from the material group
                and flange class. ASME ratings derate as temperature climbs,
                which is why F22 and F91 exist in the first place. AWWA
                flanges hold a single working pressure tied to class. Knowing
                which curve applies is non-negotiable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Traceability
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Code-compliant steel flanges carry marking that ties heat
                number, material grade, supplier mark, size, and class to a
                mill cert. When an inspector asks where the steel came from,
                the standard is what makes the answer possible. Every flange
                we ship carries that paper trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Cross-Reference Quick Hits
          </h2>
          <ul className="text-gray-700 leading-relaxed space-y-3 max-w-3xl">
            <li>
              <strong>ASME B16.5 Class 150</strong> roughly aligns with{" "}
              <strong>DIN PN 20</strong>. Pressure regime overlaps. Bolt
              patterns do not match.
            </li>
            <li>
              <strong>AWWA Class D (175 psi)</strong> shares its bolt circle
              and hole pattern with <strong>ANSI B16.1 Class 125</strong>{" "}
              through most common sizes, which is why plate-cut steel ring
              flanges remain the default for waterworks retrofit work.
            </li>
            <li>
              <strong>ASME B16.47 Series A</strong> uses fewer, larger bolts
              than <strong>Series B</strong>. They will not swap. Specify
              clearly on every order, on every line item.
            </li>
            <li>
              <strong>Forged vs plate-cut</strong> is a production-path
              decision, not a standards question. ASME and AWWA both permit
              plate-cut flanges where the standard allows. We supply both
              routes on the same project when sizes and pressures justify it.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            Browse the{" "}
            <Link href="/products/flanges" className="text-[#475569] underline">
              steel flange product overview
            </Link>{" "}
            for what we stock, or jump to{" "}
            <Link href="/materials" className="text-[#475569] underline">
              materials
            </Link>{" "}
            for the grade-by-grade specification reference.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Spec Cross-Check?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Send us your line list or flange schedule. We will confirm the
            standard, class, material, and face finish before anything ships.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#475569]"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
