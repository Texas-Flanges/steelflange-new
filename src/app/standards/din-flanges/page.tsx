import Link from "next/link";

export const metadata = {
  title:
    "DIN EN 1092-1 Flanges | PN 6 through PN 400 Metric Steel Flanges",
  description:
    "DIN EN 1092-1 European metric flange reference. PN 6, PN 10, PN 16, PN 25, PN 40, PN 64, PN 100, PN 160, PN 250, PN 320, and PN 400 ratings. DN sizes, mating to ASME equivalents, and material grade crosswalk.",
};

export default function DinFlangesPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            DIN EN 1092-1: European Metric Steel Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            DIN EN 1092-1 is the European answer to ASME B16.5. It covers
            steel flanges for pipework, valves, fittings, and accessories in
            the full nominal diameter range from DN 10 up through DN 4000,
            with pressure ratings designated PN 6 through PN 400. The
            dimensional system is metric. The pressure designation is in bar.
            The bolt patterns do not interchange with ASME without an
            adapter. For projects with European equipment, German pump
            packages, or imported skids, DIN is the standard the upstream
            documentation will reference.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            How PN Ratings Work
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            PN stands for nominal pressure, expressed in bar at room
            temperature. PN 16 is roughly 232 psi cold working pressure. PN
            40 is roughly 580 psi. PN 100 is roughly 1450 psi. The rating
            derates with temperature in much the same way an ASME class
            does, and the EN 1092-1 standard publishes a pressure-temperature
            table for every PN rating against the qualifying material
            groups.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The full PN ladder runs PN 6, PN 10, PN 16, PN 25, PN 40, PN 64,
            PN 100, PN 160, PN 250, PN 320, and PN 400. Not every PN is
            available in every DN size. The lower PN ratings dominate water
            and low-pressure utility service. PN 40 is the workhorse for
            general industrial piping. PN 100 and above appear in
            high-pressure hydraulic systems, chemical process, and
            high-pressure gas handling. PN 250, PN 320, and PN 400 are the
            heavy end of the standard, used in petrochemical and some
            specialized hydraulic service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For a quick mental crosswalk, PN 16 roughly maps to ASME Class
            150. PN 40 sits between ASME 150 and 300. PN 100 is in the same
            neighborhood as Class 600. PN 250 corresponds roughly to Class
            1500. These are working approximations. The exact mating
            requires either matched pairs on both sides of the joint or a
            qualified transition flange between them.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            PN to ASME Crosswalk
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-[#2a2f35] border border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-bold">DIN PN</th>
                  <th className="text-left p-4 font-bold">Bar (cold)</th>
                  <th className="text-left p-4 font-bold">PSI (cold)</th>
                  <th className="text-left p-4 font-bold">Closest ASME Class</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 6</td>
                  <td className="p-4">6</td>
                  <td className="p-4">87</td>
                  <td className="p-4">AWWA Class B / Class 125 cast iron</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">PN 10</td>
                  <td className="p-4">10</td>
                  <td className="p-4">145</td>
                  <td className="p-4">Below Class 150</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 16</td>
                  <td className="p-4">16</td>
                  <td className="p-4">232</td>
                  <td className="p-4">Approx Class 150</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">PN 25</td>
                  <td className="p-4">25</td>
                  <td className="p-4">363</td>
                  <td className="p-4">Between Class 150 and 300</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 40</td>
                  <td className="p-4">40</td>
                  <td className="p-4">580</td>
                  <td className="p-4">Approx Class 300</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">PN 64</td>
                  <td className="p-4">64</td>
                  <td className="p-4">928</td>
                  <td className="p-4">Approx Class 400 to 600</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 100</td>
                  <td className="p-4">100</td>
                  <td className="p-4">1450</td>
                  <td className="p-4">Approx Class 600</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">PN 160</td>
                  <td className="p-4">160</td>
                  <td className="p-4">2320</td>
                  <td className="p-4">Approx Class 900</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 250</td>
                  <td className="p-4">250</td>
                  <td className="p-4">3625</td>
                  <td className="p-4">Approx Class 1500</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">PN 320</td>
                  <td className="p-4">320</td>
                  <td className="p-4">4640</td>
                  <td className="p-4">Between Class 1500 and 2500</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">PN 400</td>
                  <td className="p-4">400</td>
                  <td className="p-4">5800</td>
                  <td className="p-4">Approx Class 2500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-6 max-w-3xl">
            Crosswalk values are approximate cold rating equivalents. Bolt
            patterns, outside diameters, and gasket geometries do not match
            between DIN and ASME. Do not mix the two on the same joint
            without a qualified transition.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Flange Types in EN 1092-1
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The standard organizes flange shapes by type number, similar to
            the way ASME splits weld neck, slip-on, blind, threaded, and
            socket weld into named categories. Type 01 is a plate flange.
            Type 02 is a loose flange with weld-on collar. Type 04 is a
            loose flange with stub end, the metric cousin of a lap joint.
            Type 05 is a blind flange. Type 11 is a weld neck. Type 12 is a
            slip-on (now superseded in newer revisions). Type 13 is a hub
            slip-on. Type 21 is an integral flange.
          </p>
          <p className="text-gray-700 leading-relaxed">
            On the majority of DIN piping, Type 11 weld neck dominates the
            higher PN ratings the same way it dominates ASME at Class 300
            and above. Type 01 plate flanges appear in low pressure water
            service. Type 05 blind flanges close off the end of a header.
            The face options include type B raised face (default), type C
            tongue, type D groove, type E spigot, and type F recess, with
            ring joint variants for high pressure service.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            DN Sizes and Their Inch Equivalents
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            DN is nominal diameter in millimeters. Common piping sizes run
            DN 15 (1/2 inch), DN 20 (3/4 inch), DN 25 (1 inch), DN 32, DN
            40, DN 50 (2 inch), DN 65, DN 80 (3 inch), DN 100 (4 inch), DN
            150 (6 inch), DN 200 (8 inch), DN 250 (10 inch), DN 300 (12
            inch), DN 350, DN 400 (16 inch), DN 500 (20 inch), DN 600 (24
            inch), and up through DN 4000 in large diameter water and
            penstock work.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The size designation is nominal. The actual outside diameter
            of a DN 100 flange in PN 16 is 220 mm. A DN 100 in PN 40 is 235
            mm. The bolt circle, bolt count, and bolt hole diameter all
            shift with the PN rating, which is the practical reason DIN
            flanges of different PN do not bolt together even at the same
            nominal diameter.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Materials Under EN 1092-1
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            EN 1092-1 references material groups that parallel the ASME B16.5
            material group system. Group 1E0 covers low and medium-strength
            carbon steel (P250GH, P265GH). Group 3E0 covers austenitic
            stainless (1.4404 / 316L, 1.4541 / 321). Group 5E0 covers
            chrome-moly creep-resistant grades (13CrMo4-5, 10CrMo9-10,
            equivalents to F11 and F22). The chemistry and mechanical
            properties of each EN grade map to a corresponding ASTM grade,
            and most mills publish the crosswalk on the MTR for projects
            that need both certifications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For carbon steel projects, P250GH is the closest analog to A105.
            P265GH is the higher-strength grade often used in pressure
            vessel work. Stainless work follows the 1.4xxx number system,
            with 1.4571 (a stabilized 316Ti) being a common European
            preference for steam and high-temperature service. Confirm the
            grade callout against the project specification, especially
            when a US-based fabricator is sourcing flanges to a European
            equipment spec.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            When You Need DIN, When You Need ASME
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            US-built piping defaults to ASME B16.5 and B16.47. Most North
            American refineries, chemical plants, and power stations spec
            ASME throughout. European-built equipment, German pumps and
            valves, and most LNG packages assembled in Europe come with DIN
            connections. When that European equipment lands in a US plant,
            somebody has to manage the transition.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The cleanest answer is a transition flange or a spool piece with
            a DIN flange on one end and an ASME flange on the other. We
            supply transition flanges in matched pairs when the project
            calls for them. The alternative is to convert the equipment
            connection itself, which is sometimes cheaper, sometimes more
            expensive, and almost always slower.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            For projects shipping equipment overseas, the order frequently
            runs the other direction. Domestic fabrication using DIN-pattern
            flanges so the assembled skid drops into a European piping
            footprint without a transition on either side. We source DIN
            flanges from EU mills and from qualified Asian mills depending
            on the project documentation requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Documentation and Sourcing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            EN 10204 type 3.1 MTRs are the European standard for material
            certification and are equivalent in practical use to an ASTM-spec
            MTR. Type 3.2 adds independent third-party witness inspection,
            which some specifications require for high-pressure or critical
            service. Confirm the MTR type required by the project before the
            order goes out.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For US-flagged projects with Buy American exposure, DIN-pattern
            flanges from European mills will typically not qualify unless
            the project carries a specific waiver. Domestic plate-cut work
            in DIN dimensions is one workaround when the pattern is required
            but the procurement contract demands US melt origin. Call the
            sales desk to discuss the combination before the bid closes.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Related References
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/standards/asme-flanges"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                ASME B16.5 and B16.47
              </h3>
              <p className="text-sm text-gray-400">
                North American flange standards.
              </p>
            </Link>
            <Link
              href="/resources/technical-specs"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Technical Specifications
              </h3>
              <p className="text-sm text-gray-400">
                Material group and class crosswalks.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Flange Catalog
              </h3>
              <p className="text-sm text-gray-400">
                Forged, plate-cut, custom for any standard.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need DIN Flanges Sourced?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the DN
            size, PN rating, type, and material. We supply European-origin
            and qualifying domestic-origin DIN flanges depending on project
            documentation requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#475569] px-8 py-3 font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
