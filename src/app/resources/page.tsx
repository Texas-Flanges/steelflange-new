import Link from "next/link";

export const metadata = {
  title: "Engineering Resources | Steel Flange Reference",
  description:
    "Technical resources for steel flange specification: dimensional tables, CAD drawings, domestic vs import compliance, and material grade reference for A105 carbon through F91 chrome-moly, in forged and plate-cut configurations.",
};

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Resources
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Steel Flange Reference Library
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Specifying steel flanges across the full size and material range,
            from 1/2 inch ASME B16.5 forged carbon through 203 inch custom
            plate-cut, demands a working reference set. The pages collected
            here are the same documents our inside sales group uses when
            reviewing bid packages, confirming material grade callouts, and
            answering the technical questions that come in on the phone every
            day.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-10">
            Reference Library
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/resources/flange-dimensions"
              className="block bg-white p-8 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Flange Dimensions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Outside diameter, bolt circle, bolt count, bolt hole size, and
                hub callouts for ASME B16.5 and B16.47 forged flanges and
                AWWA C207 plate-cut large diameter. Steel-specific dimensional
                notes and the gotchas that trip up first-time specifiers.
              </p>
            </Link>
            <Link
              href="/resources/cad-drawings"
              className="block bg-white p-8 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                CAD Drawings
              </h3>
              <p className="text-gray-700 leading-relaxed">
                2D drawings in DWG, DXF, and PDF and 3D models in STEP and
                IGES for weld neck, slip-on, blind, threaded, socket weld,
                lap joint, and large diameter plate-cut flanges. How to
                request a specific size, class, facing, and material.
              </p>
            </Link>
            <Link
              href="/resources/domestic-vs-import"
              className="block bg-white p-8 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Domestic vs Import
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buy American, BABA, ARRA, and AIS compliance explained in
                plain language. When melt origin is contractually binding,
                how to specify it on a quote request, and what counts as a
                qualifying mill for each program.
              </p>
            </Link>
            <Link
              href="/resources/technical-specs"
              className="block bg-white p-8 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Technical Specs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Material grade quick lookup. A105 carbon through F91
                chrome-moly. ASTM A350 LF2 and LF3 for low-temperature
                service. A694 high-yield grades for transmission pipeline
                work. Specification crosswalk between ASME, AWWA, and DIN
                callouts.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Calculation Tools
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The reference pages explain what the numbers mean. The tools
            section gives you a working interface to pull dimensions,
            calculate torque, and check pressure-temperature ratings
            without opening a PDF. Each calculator is built around the
            same standards we source against every day.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link
              href="/tools/bolt-torque-calculator"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Bolt Torque Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Stud diameter, lubrication, and target preload to ft-lbs.
              </p>
            </Link>
            <Link
              href="/tools/flange-dimension-calculator"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Flange Dimension Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Size, class, and facing lookup with full dimensional output.
              </p>
            </Link>
            <Link
              href="/tools/pressure-temperature-rating"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Pressure-Temperature Rating
              </h3>
              <p className="text-sm text-gray-400">
                ASME B16.5 derating curves by material group.
              </p>
            </Link>
          </div>
          <Link
            href="/tools"
            className="inline-block border border-[#475569] text-[#475569] px-6 py-3 font-semibold hover:bg-[#475569] hover:text-white transition"
          >
            View All Tools
          </Link>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Forged, Plate, or Custom
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            Every steel flange order comes down to a production-path
            choice. Forged is the right answer for the bulk of B16.5 and
            B16.47 work up through 60 inch. Plate-cut takes over above 60
            inch and on any AWWA C207 size where the dimensional
            flexibility matters more than the metallurgical advantage of
            forging. Custom plate-cut work covers the cases the catalog
            does not.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            We stock and source all three paths. The selection logic
            depends on size, material, lead time, and the project
            documentation requirements. The reference pages above explain
            the considerations on each path. The blog covers the practical
            engineering on when to spec each.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="inline-block bg-[#475569] text-white px-6 py-3 font-semibold hover:bg-[#334155] transition"
            >
              Technical Blog
            </Link>
            <Link
              href="/products/flanges"
              className="inline-block border border-[#475569] text-[#475569] px-6 py-3 font-semibold hover:bg-[#475569] hover:text-white transition"
            >
              Flange Catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Use These Resources
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4 max-w-3xl">
            For a one-off specification check, the dimension and tech spec
            pages will usually answer the question. For active bid work,
            pull the CAD drawings you need, run the relevant calculator,
            and confirm domestic versus import requirements before the
            RFQ goes out. Anything you cannot resolve from the written
            material can go to our inside sales group.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            These pages are written from a distributor perspective. We
            supply forged and plate-cut steel flanges from inventory and
            from our partner mills. We do not forge or machine the parts
            ourselves. We carry the inventory, coordinate with the right
            mill for the project, and supply the documentation packages
            that downstream contracts require.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Have a Specification Question?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com. Our inside
            sales group answers technical questions every day and routes
            anything unusual to the right person.
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
