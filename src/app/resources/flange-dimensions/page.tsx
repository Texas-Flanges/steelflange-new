import Link from "next/link";

export const metadata = {
  title: "Steel Flange Dimensions Reference | ASME B16.5 and B16.47",
  description:
    "Dimensional reference for steel flanges. ASME B16.5 (1/2 inch to 24 inch), B16.47 Series A and B (26 inch to 60 inch), and AWWA C207 (4 inch to 144 inch). OD, bolt circle, bolt count, raised face callouts, and steel-specific notes.",
};

export default function FlangeDimensionsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Resources / Flange Dimensions
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Steel Flange Dimensions Reference
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A flange is a stack of dimensions. Get any one of them wrong and
            the joint either will not bolt up or will not seal. ASME B16.5
            and B16.47 do the heavy lifting for forged steel flanges. AWWA
            C207 handles the plate-cut large diameter end. Below is an
            orientation to what those tables contain and the
            steel-specific traps that catch first-time buyers.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            What a Dimension Table Contains
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Every standardized steel flange table presents the same family
            of dimensions. Outside diameter sets the physical footprint and
            determines whether the part will clear adjacent piping,
            supports, and equipment nozzles. Bolt circle diameter dictates
            where the studs land relative to that outside diameter and is
            the single most common interchange criterion when an engineer
            is checking whether a flange will bolt up to a mating part.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bolt count and bolt hole diameter combine with bolt circle to
            define the bolting pattern. The bolt holes are straddle drilled,
            meaning they sit symmetrically across the principal horizontal
            and vertical centerlines of the flange face. Hub dimensions
            cover length through hub, hub diameter at the base, hub
            diameter at the point of welding, and the small end bore that
            matches the pipe schedule the flange will be welded to.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Raised face dimensions add face height above the back of the
            flange and face diameter. Both affect gasket selection and stud
            length. For ring joint flanges the raised face is replaced by
            an octagonal or oval groove. The groove number indexes into a
            ring gasket table on both sides of the joint.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            ASME B16.5: 1/2 inch through 24 inch
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            B16.5 is the dominant flange standard for steel piping in the
            small and mid-bore range. The standard covers seven pressure
            classes: 150, 300, 400, 600, 900, 1500, and 2500. Class 150 and
            300 cover the bulk of general process service. Class 600 and
            above appear in high-pressure refinery and chemical work.
            Below is an illustrative subset of Class 150 and Class 300 weld
            neck dimensions in steel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Class 150 Weld Neck (steel)
              </h3>
              <table className="w-full text-sm text-gray-300">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="text-left py-2">Size</th>
                    <th className="text-left py-2">OD</th>
                    <th className="text-left py-2">BC</th>
                    <th className="text-left py-2">Bolts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2">2 in</td><td>6.00</td><td>4.75</td><td>4 x 5/8</td></tr>
                  <tr><td className="py-2">4 in</td><td>9.00</td><td>7.50</td><td>8 x 5/8</td></tr>
                  <tr><td className="py-2">6 in</td><td>11.00</td><td>9.50</td><td>8 x 3/4</td></tr>
                  <tr><td className="py-2">8 in</td><td>13.50</td><td>11.75</td><td>8 x 3/4</td></tr>
                  <tr><td className="py-2">12 in</td><td>19.00</td><td>17.00</td><td>12 x 7/8</td></tr>
                  <tr><td className="py-2">24 in</td><td>32.00</td><td>29.50</td><td>20 x 1-1/4</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-[#2a2f35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Class 300 Weld Neck (steel)
              </h3>
              <table className="w-full text-sm text-gray-300">
                <thead className="border-b border-gray-600">
                  <tr>
                    <th className="text-left py-2">Size</th>
                    <th className="text-left py-2">OD</th>
                    <th className="text-left py-2">BC</th>
                    <th className="text-left py-2">Bolts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2">2 in</td><td>6.50</td><td>5.00</td><td>8 x 5/8</td></tr>
                  <tr><td className="py-2">4 in</td><td>10.00</td><td>7.88</td><td>8 x 3/4</td></tr>
                  <tr><td className="py-2">6 in</td><td>12.50</td><td>10.62</td><td>12 x 3/4</td></tr>
                  <tr><td className="py-2">8 in</td><td>15.00</td><td>13.00</td><td>12 x 7/8</td></tr>
                  <tr><td className="py-2">12 in</td><td>20.50</td><td>17.75</td><td>16 x 1-1/4</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            ASME B16.47: 26 inch through 60 inch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            B16.47 picks up where B16.5 ends, covering nominal pipe sizes 26
            inch through 60 inch. The standard splits into two series. Series
            A is the heavier MSS SP-44 derived pattern, common in
            transmission pipeline and high-pressure service. Series B is
            lighter, derived from API 605, and shows up in lower-pressure
            applications and refinery work where weight savings matter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The two series are not interchangeable. A Series A flange has a
            larger outside diameter and a different bolt pattern than the
            Series B flange of the same nominal size and class. Specifying
            B16.47 without calling out the series is a recipe for a
            mismatched joint at the field connection. Bid documents must
            include the series designation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Class coverage in B16.47 runs 75, 150, 300, 400, 600, and 900.
            Class 75 is rarely encountered in current work. Class 150
            through 900 covers the production range. For sizes above 60
            inch the flange moves to AWWA C207 dimensions or to custom
            plate-cut work outside any published standard.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            AWWA C207: 4 inch through 144 inch Plate-Cut
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            AWWA C207 covers plate-cut steel flanges for waterworks and
            large diameter service. The Class B, D, E, and F families top
            out at 86, 175, 275, and 300 psi respectively. The dimensional
            importance is that Class B and D share their outside diameter,
            bolt circle, bolt count, and bolt hole size with ANSI B16.1
            Class 125 cast iron and, in most sizes, with the ANSI B16.5
            Class 150 pattern.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            What does not transfer is the working pressure. A Class B
            flange at 86 psi looks identical to a Class 125 cast iron
            flange on the bolt side, but it is not rated for the same
            service. Always confirm the class stamping and the project
            specification before assuming interchangeability.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Steel-Specific Dimensional Notes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Raised face height changes with class. Class 150 and 300 steel
            flanges have a 1/16 inch raised face by default. Class 600 and
            higher have a 1/4 inch raised face. When that detail is missed,
            the stud length and gasket compression calculations both come
            out wrong. The studs ship short. The joint does not seal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Forged steel flanges have a hub dimension that depends on the
            pipe schedule the flange welds to. The bore on a Class 600
            weld neck for Schedule 80 pipe is not the same as the bore for
            Schedule 40 in the same nominal size. The order has to specify
            the schedule, or the default is Schedule 40 (or Standard for
            sizes 12 inch and below).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plate-cut flanges in steel do not have a forged hub. The hub,
            where present, is welded on as a separate component. That
            difference matters for the QA package: forged flanges carry
            integral hub MTRs; plate-cut flanges with welded hubs carry
            separate certifications for the ring and the hub plus a
            welding procedure qualification record.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lightweight Class 125LW flanges intended for valve bodies and
            pump casings share the bolt pattern with Class 150 but are
            dimensionally lighter through the hub and face. They are not
            rated for the same piping service and should not be substituted
            without engineering review.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Working Tools and Drawings
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For a full dimensional lookup at any size and class
            combination, use our calculator. For PDF and CAD drawings of
            the specific flange you need, see the CAD drawings page.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tools/flange-dimension-calculator"
              className="inline-block bg-[#475569] text-white px-6 py-3 font-semibold hover:bg-[#334155] transition"
            >
              Dimension Calculator
            </Link>
            <Link
              href="/resources/cad-drawings"
              className="inline-block border border-[#475569] text-[#475569] px-6 py-3 font-semibold hover:bg-[#475569] hover:text-white transition"
            >
              CAD Drawings
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Dimension Confirmed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            size, class, and facing. We will confirm against our stock and
            send the dimensional drawing for review.
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
