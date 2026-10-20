import Link from "next/link";

export const metadata = {
  title: "Steel Flanges | A105 Through F91, 1/2 in to 203 in",
  description:
    "The full steel flange catalog from one supplier. Forged and plate-cut, weld neck through RTJ, A105 carbon through F91 chrome-moly. ASME B16.5, B16.47, AWWA C207, and MSS SP-44 from 1/2 inch through 203 inch custom diameters.",
};

function TypeCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">{name}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{blurb}</p>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-3">
      <span className="text-gray-300">{label}</span>
      <span className="text-white font-semibold text-right">{value}</span>
    </div>
  );
}

export default function FlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Steel Flanges</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Forged, Plate, or Custom. Every Steel Flange Type.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The full steel flange catalog out of one supplier. Forged ASME B16.5 from 1/2 inch
            through 24 inch. ASME B16.47 and MSS SP-44 large-diameter forgings. Plate-cut AWWA
            C207 rings and structural flanges through 203 inch. Carbon through chrome-moly. If a
            steel flange exists, it lives somewhere on this page.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Catalog</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">Every Flange Type</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            The twelve flange types below cover essentially every piping isometric, vessel nozzle,
            and waterworks tap that comes through the quote desk. Anything truly one-off lives on
            the{" "}
            <Link href="/products/custom-machining" className="text-[#475569] underline">
              custom machining
            </Link>{" "}
            page.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <TypeCard
              name="Weld Neck"
              blurb="The workhorse for high pressure, high temperature, and cyclic service. Long tapered hub transfers stress from the flange ring into the pipe wall. Specified for most process, pipeline, and refinery work."
            />
            <TypeCard
              name="Slip-On"
              blurb="Slides over the pipe and is fillet welded on both sides. Lower cost than weld neck, easier alignment, but lower fatigue rating. Common on utility, lower-pressure process lines, and large-diameter water service."
            />
            <TypeCard
              name="Blind"
              blurb="Solid flange used to close the end of a pipe, valve, or vessel nozzle. Frequently drilled and machined later for instrumentation. Stocked in all standard classes and materials, plate-cut for large diameter."
            />
            <TypeCard
              name="Threaded"
              blurb="NPT threaded bore for piping that cannot be welded. Common on small bore utility lines, instrument connections, and hazardous-area piping where welding is restricted."
            />
            <TypeCard
              name="Socket Weld"
              blurb="Pipe drops into a counterbore and is fillet welded on the outside. Used on small bore high-pressure lines typically 2 inch and below. Sized to ASME B16.5."
            />
            <TypeCard
              name="Lap Joint"
              blurb="Used with a stub end so the flange can rotate for bolt-hole alignment. Common in stainless and exotic alloy systems where the lap joint flange itself can be carbon to save cost."
            />
            <TypeCard
              name="Reducing"
              blurb="Single flange that reduces from one size to another without an additional reducer fitting. Useful when space is tight or schedule is critical."
            />
            <TypeCard
              name="Orifice"
              blurb="Paired flanges with tapped pressure connections for orifice plate flow measurement. Stocked in weld neck and slip-on configurations across standard classes."
            />
            <TypeCard
              name="Spectacle Blind"
              blurb="Figure-8 plate with a blind on one end and a spacer ring on the other. Pivots between positions for positive isolation during maintenance and turnarounds. Plate-cut in large sizes."
            />
            <TypeCard
              name="Long Weld Neck"
              blurb="Extended neck used as a nozzle on pressure vessels and column trays. Bored to match vessel wall thickness rather than standard pipe schedule."
            />
            <TypeCard
              name="Plate"
              blurb="Flat plate flange machined from rolled plate. Cost-effective for large-diameter, lower-pressure service such as water distribution, HVAC, and structural connections through 203 inch."
            />
            <TypeCard
              name="Ring-Type Joint"
              blurb="RTJ facing with metal ring gasket for high-pressure and high-temperature sealing. Standard on Class 900 and above when service conditions demand metal-to-metal sealing."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Production Paths</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Forged vs Plate
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Two production paths cover the steel flange universe. Forged flanges start as a heated
            billet, hammered or pressed into ring form, then machined to spec. Plate flanges start
            as rolled steel plate, profile-cut and drilled. Which one a project needs depends on
            pressure, diameter, and what the relevant standard allows.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F1316] border border-gray-700 p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4">Forged</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The grain flow of the parent material is preserved and oriented along the load
                path. Required for all ASME B16.5 pressure service, all API wellhead service, and
                anywhere a hub geometry is needed - which is to say, anywhere a weld neck or slip-on
                lives.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Standard size range is 1/2 inch through 24 inch in B16.5. ASME B16.47 and MSS
                SP-44 extend forged production through 60 inch in large-diameter applications.
              </p>
            </div>
            <div className="bg-[#0F1316] border border-gray-700 p-8">
              <h3 className="text-xl font-display font-bold text-white mb-4">Plate</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Profile-cut from rolled steel plate. Cost-effective for large-diameter, lower-
                pressure service. Acceptable under AWWA C207 for waterworks, and widely used on
                blind flanges, structural connections, and custom geometries where no forging
                exists.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Plate production opens the door to sizes that forged simply cannot reach. Custom
                plate-cut flanges go through 203 inch outside diameter when a job requires it.
              </p>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed mt-8 max-w-3xl">
            For pressure piping, the standard dictates which path is allowed. AWWA C207 explicitly
            permits plate. ASME B16.5 does not. When in doubt, send the spec.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Process</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            ASME B16.5 and B16.47
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            The two standards that cover the bulk of refinery, petrochemical, midstream, and
            general process piping. B16.5 handles 1/2 inch through 24 inch. B16.47 picks up at 26
            inch and runs through 60 inch in Series A and Series B, each with its own dimensional
            family.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                ASME B16.5 - 1/2 in through 24 in
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pressure classes 150, 300, 400, 600, 900, 1500, and 2500. Standard facings include
                raised face, flat face, and ring-type joint. Materials from A105 carbon up through
                stainless, low-temp, and chrome-moly alloy steels.
              </p>
              <Link
                href="/standards/asme-flanges"
                className="text-[#475569] font-semibold text-sm"
              >
                B16.5 reference -&gt;
              </Link>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                ASME B16.47 - 26 in through 60 in
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Series A (formerly MSS SP-44) and Series B (formerly API 605) cover large
                diameter. Different outside diameters and bolt patterns between the two, so always
                confirm which series the line was originally designed to before sourcing
                replacements.
              </p>
              <Link
                href="/standards/asme-flanges"
                className="text-[#475569] font-semibold text-sm"
              >
                B16.47 reference -&gt;
              </Link>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            Pressure-temperature ratings drop as temperature rises. A Class 300 carbon steel
            flange rated at 740 psi at ambient is rated closer to 535 psi at 700 F. The B16.5
            tables are the source of truth. If you need a copy of the rating curves, ask and we
            will send them.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Waterworks</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            AWWA C207 and Plate-Cut Rings
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Waterworks, fire protection, low-pressure process, and HVAC distribution do not need a
            forged Class 1500 flange. AWWA C207 covers ring and hub flanges sized for water service
            from 4 inch up through 144 inch in Class B, D, and E (Class F is published only through
            48 inch). Above 144 inch is fully custom plate fabrication outside any published
            standard; dimensions, drilling, and pressure rating are project-specific. Bolt patterns on Class B, D, and E match ASME B16.1 Class 125
            for sizes 24 inch and under so retrofits do not require ripping out mating flanges.
          </p>
          <div className="bg-[#0F1316] border border-gray-700 p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              AWWA C207 Pressure Ratings
            </h3>
            <SpecRow label="Class B - 4 in to 144 in" value="86 psi" />
            <SpecRow label="Class D (12 in and smaller)" value="175 psi" />
            <SpecRow label="Class D (larger than 12 in)" value="150 psi" />
            <SpecRow label="Class E - 4 in to 144 in" value="275 psi" />
            <SpecRow label="Class F - 4 in to 48 in" value="300 psi" />
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl mt-8">
            Above 144 inch the published standard ends and the work becomes fully custom plate
            fabrication. Dimensions, drilling, and pressure rating are project-specific and not
            governed by any published flange code. We have coordinated plate-cut work through 203
            inch outside diameter in carbon steel and structural grades on prior projects.
            Drilling, facing, and surface prep all per the engineering drawing.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Materials</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            A105 Through F91
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Material selection drives more headaches than dimensional selection. The list below
            covers the bulk of what crosses our quote desk on steel flange orders. Anything not
            listed, ask.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Carbon and Low Temp
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>A105</strong> - standard forged carbon for ambient and moderate temperature.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>A350 LF2</strong> - low-temperature carbon, impact tested to -50 F.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>A36 / A516 plate</strong> - plate-cut grades for AWWA and structural work.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>A694 F52 through F70</strong> - high-yield pipeline grades for transmission
                service.
              </p>
              <Link
                href="/materials/carbon-steel"
                className="text-[#475569] font-semibold text-sm"
              >
                Carbon steel detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Stainless</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F304 / F304L</strong> - general-purpose austenitic stainless.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F316 / F316L</strong> - molybdenum-bearing for improved chloride
                resistance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>F321, F347</strong> - stabilized grades for elevated temperature.
              </p>
              <Link
                href="/materials/stainless-steel"
                className="text-[#475569] font-semibold text-sm"
              >
                Stainless detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Chrome-Moly Alloy</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F11 (1-1/4 Cr)</strong> - moderate elevated temperature service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>F22 (2-1/4 Cr)</strong> - hydrogen and high-temp refinery service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>F91 (9 Cr)</strong> - high-pressure steam, power generation, and creep-
                critical service.
              </p>
              <Link
                href="/materials/alloy-steel"
                className="text-[#475569] font-semibold text-sm"
              >
                Alloy steel detail -&gt;
              </Link>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">Exotic</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Duplex 2205, Super Duplex 2507</strong> - offshore and sour service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Inconel 625, 825</strong> - high-temperature corrosion resistance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Hastelloy C276, Monel 400, Titanium Gr 2</strong> - specialty service.
              </p>
              <Link
                href="/materials/exotic-alloys"
                className="text-[#475569] font-semibold text-sm"
              >
                Exotic alloys detail -&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Size Range</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            1/2 Inch Through 203 Inch
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            Steel flanges run the full range of pipe and vessel sizes used in industrial and
            municipal service. Forged sizes track the ASME and MSS standards. Plate-cut sizes
            extend well past where forging stops, all the way to 203 inch on custom diameters
            coordinated through partner plate-cut fabricators.
          </p>
          <div className="bg-[#0F1316] border border-gray-700 p-8">
            <SpecRow label="ASME B16.5 forged" value="1/2 in to 24 in" />
            <SpecRow label="ASME B16.47 / MSS SP-44 forged" value="26 in to 60 in" />
            <SpecRow label="AWWA C207 plate" value="4 in to 144 in" />
            <SpecRow label="Custom plate-cut" value="up to 203 in" />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Technical Resources
          </p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-6">
            Read Before You Specify
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Reference content from our technical library. Useful when reviewing a
            line list or when the standard in question is not the one you specify every day.
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=steelflange-new"
                className="text-[#475569] underline"
                target="_blank"
                rel="noopener"
              >
                The Complete Guide to Flanges
              </a>
              <span className="text-gray-700"> - types, facings, ratings, and selection logic.</span>
            </li>
            <li>
              <Link href="/standards/awwa-flanges" className="text-[#475569] underline">
                AWWA C207 Reference
              </Link>
              <span className="text-gray-700"> - lightweight pressure classes and drilling.</span>
            </li>
            <li>
              <Link href="/standards/asme-flanges" className="text-[#475569] underline">
                ASME B16.5 / B16.47 Reference
              </Link>
              <span className="text-gray-700"> - dimensions, facings, and material groups.</span>
            </li>
            <li>
              <Link href="/tools" className="text-[#475569] underline">
                Pressure-Temperature Calculator
              </Link>
              <span className="text-gray-700"> - find the derated pressure at your service temp.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Send the Line List
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Email a BOM, an isometric, or a take-off and we will price it against current stock
            and confirm lead times for anything that ships from the mill.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#475569] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="mailto:sales@texasflange.com"
              className="inline-block border border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#475569] transition-colors"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
