import Link from "next/link";

export const metadata = {
  title:
    "Domestic vs Import Steel Flanges | Buy American, BABA, AIS, ARRA",
  description:
    "Buy American, BABA (Build America, Buy America), AIS (American Iron and Steel), and ARRA compliance for steel flanges. When melt origin is contractually binding, how to specify it on a quote, and the trade-offs between domestic and import sourcing.",
};

export default function DomesticVsImportPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Resources / Domestic vs Import
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Domestic vs Import Steel Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The domestic versus import question on steel flanges sounds
            simple until you read the project contract. Buy American, Build
            America Buy America, American Iron and Steel, and ARRA all
            sound similar. They are not. Each program has its own scope,
            its own definition of qualifying origin, and its own
            documentation requirements. Specifying the wrong combination
            on a quote request can disqualify the bid or expose the
            project to a compliance finding mid-construction.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            The Programs at a Glance
          </h2>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-2">
                Buy American Act (BAA)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The federal procurement statute that has applied to direct
                federal purchases since 1933. Steel flanges supplied to a
                federal agency under direct contract typically have to be
                manufactured in the United States from US-origin components,
                with limited waivers for cost or availability. The
                "manufactured in the US" test for forged steel flanges
                generally means the forging and machining occur
                domestically. Melt origin (where the steel was poured) is
                not always required by BAA itself but is often required by
                program-specific overlays.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-2">
                Build America, Buy America (BABA)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The 2021 infrastructure law that extended Buy American
                provisions to federally assisted infrastructure projects,
                not just direct federal purchases. BABA applies to
                projects funded in whole or in part by federal grants,
                cooperative agreements, and other financial assistance
                programs. Iron and steel products under BABA must be
                produced in the United States, including melting,
                pouring, and all manufacturing operations. Documentation
                requires a domestic origin certification at every stage
                in the supply chain.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-2">
                American Iron and Steel (AIS)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The EPA State Revolving Fund provision that requires all
                iron and steel products used in qualifying drinking water
                and clean water projects to be produced in the United
                States. AIS is the program that catches most municipal
                waterworks flange orders. The standard requires that all
                manufacturing processes, from melting the raw materials to
                final coating, occur in US facilities. AIS documentation
                must accompany every shipment.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-2">
                ARRA (American Recovery and Reinvestment Act)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The 2009 stimulus law that included a Buy American
                provision for iron, steel, and manufactured goods used in
                public buildings and public works funded by ARRA grants.
                ARRA-funded projects are mostly historical at this point,
                but the documentation expectation set by ARRA has
                influenced the language of subsequent federal programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            What Counts as a Qualifying Mill
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For steel flanges, the qualifying-origin question divides into
            three production steps: melt, forge or plate roll, and
            machine. Different programs scope which steps must occur
            domestically.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            BABA requires all three. The steel must be melted in a
            domestic mill. The forging or plate rolling must occur in a
            domestic facility. The final machining must be domestic. A
            flange forged in the US from an imported billet does not
            qualify under BABA. A flange forged offshore and finish-
            machined domestically does not qualify either.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            AIS for water and wastewater projects follows a similar
            comprehensive standard. All production steps must be US-based.
            The documentation trail through the supply chain has to show
            domestic origin at every step, with mill MTRs from US
            facilities and fabrication certificates from US shops.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The traditional Buy American Act is more flexible in some
            contracting scenarios. Some BAA contracts qualify a final
            product as "domestic" if substantial transformation occurs
            in the US, even when the input materials are imported. Project
            counsel should confirm which definition applies before any
            substitution is made.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            When to Spec Each
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The compliance program applicable to a project flows from the
            funding source, not from the procurement preference. If the
            project receives BABA-covered federal infrastructure funding,
            the flanges have to be BABA-compliant whether the contract
            documents say so or not. The opposite case also applies:
            commercial private projects with no federal funding usually
            have no domestic-origin requirement, and the lowest qualified
            quote wins.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For projects without a regulatory mandate, the domestic
            versus import decision usually comes down to lead time and
            unit cost. Domestic forged flanges in common B16.5 sizes
            typically run 25 to 60 percent higher per unit than
            equivalent import flanges from qualified mills. Lead times
            on domestic stock can be shorter for small-quantity orders
            and longer for large-quantity orders depending on mill
            production schedules.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For projects where the spec is silent on origin, we quote
            import by default and flag domestic pricing on request. For
            projects with a clear domestic mandate, we quote domestic
            only and require the project to confirm in writing which
            program applies.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Specify on a Quote Request
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The single most important piece of information on a quote
            request that touches domestic-origin requirements is the
            program name. Do not just write "Buy American required" and
            assume the supplier understands the scope. Write the program
            by name: BAA, BABA, AIS, or ARRA. Each carries different
            documentation, and the price difference between programs can
            be significant.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Include the qualifying-origin scope: melt, forge, or full
            manufacturing. Include the project funding source if known.
            Include any project-specific waivers that the prime
            contractor has already secured. Without that scope
            information, the safest quote response is the strictest
            interpretation, which is usually the most expensive option.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            For municipal water projects with EPA SRF funding, the AIS
            certification language is well-established and most domestic
            mills understand the requirement. For BABA, the program is
            newer and the documentation expectations are still evolving.
            Confirm the certification language with the prime contractor
            before the quote goes out so the supplied documentation
            matches the project's compliance plan.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Documentation We Supply
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For domestic-origin orders, the documentation package
            typically includes the mill MTR (in EN 10204 type 3.1 format),
            a domestic origin certification from the manufacturing mill,
            and a chain of custody letter from us as the distributor
            confirming that the part shipped is the part documented.
            Where the project requires it, we also supply a notarized
            affidavit of domestic origin or a similar contractual
            attestation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For import orders, the documentation package includes the
            mill MTR, country of origin marking on the part itself, and
            the import documentation that customs requires. Import
            flanges from qualified mills carry the same ASTM and
            dimensional certifications as domestic equivalents. The
            difference is the origin documentation, not the technical
            quality.
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
              href="/resources/technical-specs"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Technical Specifications
              </h3>
              <p className="text-sm text-gray-400">
                Material grade quick lookup.
              </p>
            </Link>
            <Link
              href="/resources/flange-dimensions"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Flange Dimensions
              </h3>
              <p className="text-sm text-gray-400">
                Dimensional reference tables.
              </p>
            </Link>
            <Link
              href="/standards/awwa-flanges"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                AWWA Standards
              </h3>
              <p className="text-sm text-gray-400">
                Plate-cut and waterworks reference.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Domestic-Origin Pricing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            program (BABA, AIS, BAA) and the project funding source. We
            quote against the compliance requirement and supply the
            documentation the project needs.
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
