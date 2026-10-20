import Link from "next/link";

export const metadata = {
  title: "ASME B16.5 and B16.47 Steel Flanges",
  description:
    "Complete reference for ASME B16.5 (1/2\" - 24\") and ASME B16.47 (26\" - 60\") steel pipe flanges. Pressure-temperature ratings, classes, A105 carbon through F91 chrome-moly materials, face types, and Series A vs Series B explained.",
};

export default function AsmeFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            ASME B16.5 and B16.47 Steel Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            These two standards cover the overwhelming majority of forged and
            plate-cut steel flanges in service in North America. B16.5 handles
            the small and mid-bore end. B16.47 takes over on large diameter.
            Together they define class, dimension, tolerance, material,
            marking, and the pressure-temperature ratings that every steel
            flange spec sheet ultimately references.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            ASME B16.5: Steel Pipe Flanges and Flanged Fittings, 1/2&quot; - 24&quot;
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.5 is the standard you bump into first when working with carbon
            steel, stainless steel, and chrome-moly alloy flanges in process
            piping. It covers nominal pipe sizes 1/2 inch through 24 inches in
            seven pressure classes and four face types. Almost every B16.5
            flange we ship is forged, though plate-cut is permitted for blinds
            and certain slip-on configurations where the standard allows.
          </p>

          <h3 className="text-xl font-bold text-[#1B1F23] mb-3 mt-8">
            Pressure Classes
          </h3>
          <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>Class 150</strong> the workhorse for moderate-pressure
              service. Roughly 285 psi at ambient with Group 1.1 materials,
              derating as temperature climbs.
            </li>
            <li>
              <strong>Class 300</strong> the next step up, common on steam,
              hot hydrocarbon lines, and most refinery service.
            </li>
            <li>
              <strong>Class 600</strong> higher-pressure process service.
              Many cracker and reformer headers land here.
            </li>
            <li>
              <strong>Class 900</strong> high-pressure service, often
              specified for steam, chemical, and gas processing.
            </li>
            <li>
              <strong>Class 1500</strong> severe service. Compact, heavy,
              expensive. F22 and F91 forgings are common here.
            </li>
            <li>
              <strong>Class 2500</strong> the top of the B16.5 range. Beyond
              this you move into API 6A wellhead territory.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-[#1B1F23] mb-3 mt-8">
            Face Types
          </h3>
          <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>Raised Face (RF)</strong> the default for most steel
              process piping. Concentrated gasket load on a 1/16 inch raised
              ring through Class 300, 1/4 inch above.
            </li>
            <li>
              <strong>Flat Face (FF)</strong> used when bolting steel to a
              brittle flange (cast iron) where bending the cast flange must
              be avoided. Common on B16.1 retrofit work.
            </li>
            <li>
              <strong>Ring Type Joint (RTJ)</strong> metallic ring gasket in
              a machined groove. Used on high-pressure and high-temperature
              service, especially Class 600 and above on hydrocarbon lines.
            </li>
            <li>
              <strong>Tongue and Groove / Male and Female</strong> less
              common, used where gasket retention matters and the flange pair
              is engineered together.
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed max-w-3xl">
            See the{" "}
            <a
              href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=steelflange"
              className="text-[#475569] underline"
              target="_blank"
              rel="noopener"
            >
              Complete Guide to Flanges
            </a>{" "}
            for face-finish callouts and gasket selection guidance.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ASME B16.47: Large Diameter Steel Flanges, 26&quot; - 60&quot;
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            B16.47 picks up where B16.5 stops. It covers nominal sizes 26
            inches through 60 inches, but unlike B16.5 it offers two distinct
            series with different bolt patterns. The series you specify
            matters as much as the class. On custom work we supply B16.47
            geometry well past 60 inches up to 203 inches when the project
            requires it.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">Series A</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Derived from the older <strong>MSS SP-44</strong> standard
                for steel pipeline flanges. Series A flanges are heavier
                overall, with fewer but larger-diameter bolts on a wider bolt
                circle. Designed to handle higher bolt loads and the bending
                forces seen on large transmission pipelines.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Common where pipeline operators and process plants need
                extra margin on large lines. Often plate-cut from A516-70 at
                the upper sizes.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6 rounded">
              <h3 className="text-xl font-bold text-white mb-3">Series B</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Derived from the older <strong>API 605</strong> standard.
                Series B flanges are lighter, with more bolts of smaller
                diameter on a tighter bolt circle. The geometry favors
                compactness and reduced material cost where the application
                allows.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                Common on process vessels, tank nozzles, and applications
                where weight and outside dimensions matter.
              </p>
            </div>
          </div>

          <div className="bg-[#475569] bg-opacity-20 border-l-4 border-[#475569] p-6 mt-8">
            <p className="text-white font-semibold mb-2">
              Series A and Series B are not interchangeable.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              A 36-inch Class 300 Series A flange has a different bolt
              circle, different bolt count, and different OD than a 36-inch
              Class 300 Series B flange. Mating them is not possible without
              a transition piece. Always confirm the series on the spec
              sheet, the requisition, and the mill cert before the flange
              ships.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            Steel Materials We Commonly Supply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.5 and B16.47 cover dimensional requirements. The material
            specification governs chemistry and mechanical properties. The
            combination is what gives you a final pressure-temperature
            rating. Below are the steel grades we move every week, from
            A105 carbon at one end to F91 chrome-moly at the other.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Carbon Steel</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A105 (forged), A350 LF2 (low-temp impact tested), A516-70
                (plate origin for blinds and large diameter). The carbon
                workhorses. See{" "}
                <Link
                  href="/materials/carbon-steel"
                  className="text-[#475569] underline"
                >
                  carbon steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Stainless Steel</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                F304 / 304L and F316 / 316L are the everyday austenitics.
                F321, F347, and duplex grades for specific service. See{" "}
                <Link
                  href="/materials/stainless-steel"
                  className="text-[#475569] underline"
                >
                  stainless steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Chrome-Moly Alloy</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                F11 (1.25Cr-0.5Mo), F22 (2.25Cr-1Mo), F91 (9Cr-1Mo-V) for
                elevated temperature service. F91 is the standard for
                ultra-supercritical steam. See{" "}
                <Link
                  href="/materials/alloy-steel"
                  className="text-[#475569] underline"
                >
                  alloy steel materials
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-5 rounded border border-gray-200">
              <h3 className="font-bold text-[#1B1F23] mb-2">Line Pipe Grades</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                A694 F42, F52, F60, F65, and F70 for pipeline service that
                requires matched yield with the connecting pipe. Carbon
                steel with controlled chemistry and impact testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Forged or Plate-Cut: Both Routes
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            B16.5 and B16.47 are dimensional standards. They define the
            finished geometry, not the production method. Forged flanges are
            the default below 24 inches because the forging press economics
            work in that range. Above 24 inches, and especially on blinds
            and large slip-on rings, plate-cut from A36 or A516-70 becomes
            cost-effective and often delivers a shorter lead time. We
            supply both routes on the same project when sizes and
            pressures justify it. The mill cert paperwork makes the
            production method explicit either way.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-4">
            Common Applications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.5 shows up everywhere process piping does: refineries,
            petrochemical plants, gas processing, power generation, chemical
            production, pulp and paper, and food and beverage. B16.47 takes
            over on large-bore transmission, separator vessels, large
            heat-exchanger nozzles, and oversized process headers. If the
            line is over 24 inches, B16.47 is almost always the right
            reference, and beyond 60 inches we work custom against the same
            geometric rules.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need ASME Steel Flanges for Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We carry B16.5 through 24 inches and source B16.47 in both
            series from the size and class that matches your spec. Forged
            and plate-cut both available. Send the line list and we will
            confirm material, class, and face finish on every line item.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#475569]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
