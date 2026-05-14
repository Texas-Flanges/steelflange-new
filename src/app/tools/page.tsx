import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Steel Flange Tools | Bolt Torque, Dimension & P-T Rating Calculators",
  description:
    "Free interactive calculators for steel flange specification. Bolt torque planning, ASME B16.5 dimension lookup, and pressure-temperature rating interpolation. Built for engineers, buyers, and field crews.",
};

export default function ToolsPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Engineering Tools
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Steel Flange Calculators
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Quick reference calculators built for engineers, project
            buyers, and field crews working with steel flanges. Use these
            tools for preliminary sizing, torque planning, and rating
            checks. For production specifications, confirm against the
            latest published tables and your project documents.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-10">
            Available Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/tools/bolt-torque-calculator"
              className="bg-white p-8 rounded shadow hover:shadow-lg transition border border-gray-200"
            >
              <div className="text-[#475569] text-sm uppercase tracking-wider mb-3">
                Calculator 01
              </div>
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Bolt Torque Calculator
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estimate the torque required to develop a target bolt
                stress on a flange stud. Supports A193 B7, B7M, B8, and
                B8M across stud diameters from 1/2 inch to 2-1/2 inch.
                Lubrication and target stress configurable.
              </p>
              <span className="text-[#475569] font-semibold">
                Open calculator
              </span>
            </Link>

            <Link
              href="/tools/flange-dimension-calculator"
              className="bg-white p-8 rounded shadow hover:shadow-lg transition border border-gray-200"
            >
              <div className="text-[#475569] text-sm uppercase tracking-wider mb-3">
                Calculator 02
              </div>
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Flange Dimension Lookup
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reference outside diameter, bolt circle, bolt count, bolt
                hole size, and recommended bolt diameter for ASME B16.5
                Class 150 and Class 300 by nominal pipe size from 1/2
                inch through 24 inch.
              </p>
              <span className="text-[#475569] font-semibold">
                Open calculator
              </span>
            </Link>

            <Link
              href="/tools/pressure-temperature-rating"
              className="bg-white p-8 rounded shadow hover:shadow-lg transition border border-gray-200"
            >
              <div className="text-[#475569] text-sm uppercase tracking-wider mb-3">
                Calculator 03
              </div>
              <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-3">
                Pressure-Temperature Rating
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Look up the maximum allowable working pressure for a
                given material group, pressure class, and service
                temperature based on ASME B16.5 simplified rating
                tables with linear interpolation between table points.
              </p>
              <span className="text-[#475569] font-semibold">
                Open calculator
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Use These Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div>
              <h3 className="text-xl font-display font-bold text-[#475569] mb-3">
                Preliminary Sizing and Quoting
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Use the dimension and rating calculators during quote
                takeoff to confirm class and size compatibility before
                issuing an RFQ. The tools mirror the layout of the
                published ASME tables so results map directly to your
                specification sheets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#475569] mb-3">
                Field Assembly Planning
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Pull torque values from the bolt calculator when planning
                joint makeup. Confirm against gasket manufacturer load
                requirements and the latest revision of ASME PCC-1 before
                applying torque in the field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#475569] mb-3">
                Material Substitution Checks
              </h3>
              <p className="text-gray-300 leading-relaxed">
                When evaluating an alternate material, run the P-T rating
                calculator at the design temperature for both groups. If
                the substitute drops the rating below your design
                pressure, flag it before placing the order.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#475569] mb-3">
                Verification and QA
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Calculator output is a reference, not a stamped
                engineering deliverable. For final issued-for-construction
                documents, use the full published standards and have
                results signed off by a qualified engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Related References
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
            The calculators draw on the same dataset we maintain across the
            site. Pair each tool with the matching reference page for
            context, material details, and ordering guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/resources/flange-dimensions"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                Flange Dimensions
              </h3>
              <p className="text-gray-700 text-sm">
                Full dimensional tables and steel-specific notes.
              </p>
            </Link>
            <Link
              href="/standards/asme-flanges"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                ASME Flange Standards
              </h3>
              <p className="text-gray-700 text-sm">
                B16.5 and B16.47 standard summaries.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                Flange Product Catalog
              </h3>
              <p className="text-gray-700 text-sm">
                Browse flange types we stock and supply.
              </p>
            </Link>
            <Link
              href="/resources"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                Resource Library
              </h3>
              <p className="text-gray-700 text-sm">
                Charts, guides, and dimensional data.
              </p>
            </Link>
            <Link
              href="/blog"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                Technical Blog
              </h3>
              <p className="text-gray-700 text-sm">
                Deep dives on flange selection and metallurgy.
              </p>
            </Link>
            <Link
              href="/about"
              className="block bg-white p-6 rounded border border-gray-200 hover:border-[#475569] transition"
            >
              <h3 className="font-display font-bold text-lg text-[#1B1F23] mb-2">
                About This Resource
              </h3>
              <p className="text-gray-700 text-sm">
                Supplier and distributor capabilities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Verified Lookup or Quote?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our sales desk can confirm dimensions, ratings, and torque
            requirements against project specs and pull inventory for
            same-day quoting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-8 py-3 rounded font-semibold hover:bg-[#F8F6F0] transition"
            >
              Call (281) 484-8325
            </a>
            <Link
              href="/contact"
              className="bg-[#1B1F23] text-white px-8 py-3 rounded font-semibold hover:bg-black transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
