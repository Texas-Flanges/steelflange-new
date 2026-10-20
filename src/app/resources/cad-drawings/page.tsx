import Link from "next/link";

export const metadata = {
  title: "Steel Flange CAD Drawings | DWG, DXF, STEP, IGES",
  description:
    "CAD drawing library for steel flanges. 2D drawings in DWG, DXF, and PDF and 3D models in STEP and IGES for ASME B16.5, B16.47, AWWA C207, and custom plate-cut flanges. How to request specific size, class, and facing.",
};

export default function CadDrawingsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Resources / CAD Drawings
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Steel Flange CAD Library
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The drawing is what tells the fabricator, the field crew, and
            the QA inspector that they are all looking at the same part.
            For steel flanges across the size and class range we supply, we
            maintain a working CAD library that the inside sales group
            pulls from to confirm geometry, dimensions, and detail before
            an order ships. Drawings are available on request for any
            specification we can quote.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            What the Library Covers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The library covers every flange type we stock and supply across
            ASME B16.5, B16.47, AWWA C207, and the lightweight Class 125LW
            family. That includes weld neck, slip-on, blind, threaded,
            socket weld, lap joint, and the reducing variants of each. For
            ring joint flanges the drawing includes the groove number and
            full groove geometry per API 6A and ASME B16.20.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For plate-cut AWWA work the library includes both the ring
            flange and the hub flange configurations. Custom plate-cut
            drawings outside the published table can be generated on a
            project basis once the specification is firm. The drawing then
            becomes the controlling document for fabrication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            On the size range, the library tracks B16.5 from 1/2 inch
            through 24 inch, B16.47 Series A and Series B from 26 inch
            through 60 inch, AWWA C207 from 4 inch through 144 inch, and
            custom plate-cut work above 60 inch in any geometry the
            project requires.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            File Formats Available
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            Drawings are issued in the format the project requests. The
            common formats and their typical use cases:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                2D Drawings
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <strong>DWG:</strong> AutoCAD native format. Editable in
                  AutoCAD and compatible CAD tools.
                </li>
                <li>
                  <strong>DXF:</strong> Drawing exchange format. Imports
                  cleanly into most CAD packages and CAM software.
                </li>
                <li>
                  <strong>PDF:</strong> Reference and review format. Not
                  editable but renders consistently across systems.
                </li>
              </ul>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-3">
                3D Models
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <strong>STEP (.stp):</strong> ISO standard 3D exchange
                  format. Works with SolidWorks, Inventor, Creo, NX, and
                  Fusion 360.
                </li>
                <li>
                  <strong>IGES (.igs):</strong> Older 3D exchange format.
                  Still widely supported for legacy CAD environments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            What to Specify When You Request a Drawing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The drawing is only useful if it matches the order. For each
            request, send the following:
          </p>
          <ul className="text-gray-700 space-y-3 mb-6 list-disc list-inside">
            <li>
              <strong>Type:</strong> Weld neck, slip-on, blind, threaded,
              socket weld, lap joint, reducing flange, plate-cut ring,
              plate-cut hub.
            </li>
            <li>
              <strong>Standard:</strong> ASME B16.5, ASME B16.47 (Series A
              or B), AWWA C207 (Class B, D, E, or F), or custom dimension.
            </li>
            <li>
              <strong>Nominal size:</strong> NPS or DN, including the
              pipe schedule if it affects the bore.
            </li>
            <li>
              <strong>Pressure class:</strong> 150, 300, 600, 900, 1500,
              2500 for ASME; B, D, E, F for AWWA; PN for DIN.
            </li>
            <li>
              <strong>Face type:</strong> Raised face, flat face, ring
              joint (with R-number), tongue and groove, male and female.
            </li>
            <li>
              <strong>Material:</strong> A105, A350 LF2, A516-70, A182
              F11/F22/F91, A694 grade, stainless grade, exotic alloy.
            </li>
            <li>
              <strong>File format:</strong> DWG, DXF, PDF, STEP, IGES.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            For custom plate-cut work outside any published standard, we
            need the bolt circle, bolt count, bolt hole size, outside
            diameter, inside diameter, thickness, and face configuration
            in writing before we generate the drawing. A markup of an
            existing drawing or a sketch is fine as a starting point.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            How to Request Drawings
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Drawing requests come in by email to sales@texasflange.com or
            by phone to (281) 484-8325. The inside sales group routes the
            request to the right drawing template and confirms back with
            the file attached or a link to download.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Standard B16.5, B16.47, and AWWA C207 drawings are typically
            available within a business day. Custom plate-cut drawings
            run longer and depend on the complexity of the geometry and
            whether the fabricating mill needs to sign off on
            manufacturability before we issue the drawing.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            For project bid packages, send the bid spec along with the
            drawing request. That lets us match the drawing to the
            material grade, the documentation requirements, and any
            project-specific tolerance callouts in one pass.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Related References
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/resources/flange-dimensions"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Flange Dimensions
              </h3>
              <p className="text-sm text-gray-700">
                Dimensional tables and steel-specific notes.
              </p>
            </Link>
            <Link
              href="/tools/flange-dimension-calculator"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Dimension Calculator
              </h3>
              <p className="text-sm text-gray-700">
                Interactive lookup by size, class, and standard.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Flange Catalog
              </h3>
              <p className="text-sm text-gray-700">
                Browse flange types and materials we stock.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Drawing Right Now?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            specification. Standard drawings come back the same day. We
            ship to PO Box 2889, Pearland TX 77588.
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
