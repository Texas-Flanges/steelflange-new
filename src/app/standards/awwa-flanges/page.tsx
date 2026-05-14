import Link from "next/link";

export const metadata = {
  title:
    "AWWA C207 Steel Flanges | Class B, D, E, F Plate-Cut Large Diameter",
  description:
    "AWWA C207 plate-cut steel flange reference. Class B (86 psi), Class D (175 psi), Class E (275 psi), and Class F (300 psi) in carbon steel and stainless. Sizes 4 inch through 144 inch for waterworks, structural, and large diameter service.",
};

export default function AwwaFlangesPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            AWWA C207 Plate-Cut Steel Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            AWWA C207 is where plate-cut steel flanges earned their reputation.
            The standard covers steel ring flanges and hub flanges from 4 inch
            through 144 inch, fabricated from rolled plate rather than forged
            from a billet. Class B, D, E, and F bracket the working pressure
            range from 86 psi cold water service up through 300 psi, and the
            same dimensional pattern that makes them drop-in compatible with
            ANSI B16.1 Class 125 cast iron is what keeps them in nearly every
            municipal waterworks, treatment plant, transmission main, and
            large diameter structural application across North America.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Why Plate-Cut, Not Forged
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Forged flanges start as a heated steel billet that gets pressed or
            hammered into the rough flange shape and then machined to final
            dimension. That production path makes economic sense up through
            roughly 24 inches in standard ASME classes, where the forging die
            cost amortizes over thousands of identical parts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At AWWA sizes, the calculus inverts. A 60 inch flange forged from
            a single billet would require press tonnage and a billet starting
            size that no economic forging operation supports. Plate-cut
            flanges side-step that problem by burning the ring profile out of
            ASTM A516 Grade 70 or A36 carbon steel plate, then machining the
            faces, drilling the bolt pattern, and welding on a hub where the
            design calls for one. The result is a flange that meets the same
            dimensional and pressure-temperature requirements at a fraction
            of the cost and lead time that any forging shop could quote at
            this scale.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The plate-cut production path also opens the door to non-standard
            dimensions. If a project needs a custom bolt pattern, a non-stock
            outside diameter, or an oversized inside diameter that no forging
            die supports, plate-cut is the only practical answer. We supply
            both standard AWWA C207 flanges from inventory and custom
            plate-cut work for cases that fall outside the published table.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            AWWA C207 Pressure Classes
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            The standard organizes plate-cut steel flanges into four pressure
            classes. The class determines working pressure, plate thickness,
            and where the flange fits in the system. All four classes are
            available across the full 4 inch through 144 inch size range.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-[#2a2f35] border border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-bold">Class</th>
                  <th className="text-left p-4 font-bold">Working Pressure</th>
                  <th className="text-left p-4 font-bold">Typical Service</th>
                  <th className="text-left p-4 font-bold">Bolt Pattern</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">Class B</td>
                  <td className="p-4">86 psi CWP</td>
                  <td className="p-4">Buried municipal water, low head</td>
                  <td className="p-4">Matches B16.1 Class 125</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">Class D</td>
                  <td className="p-4">175 psi CWP</td>
                  <td className="p-4">Treatment plants, transmission, pumps</td>
                  <td className="p-4">Matches B16.1 Class 125 / B16.5 Cl 150</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">Class E</td>
                  <td className="p-4">275 psi CWP</td>
                  <td className="p-4">High pressure mains, pump discharge</td>
                  <td className="p-4">Heavier pattern, see C207 table</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">Class F</td>
                  <td className="p-4">300 psi CWP</td>
                  <td className="p-4">Hydroelectric, penstock, severe service</td>
                  <td className="p-4">Heaviest C207 pattern</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-6 max-w-3xl">
            Cold working pressure (CWP) ratings apply at 100 F. Higher
            temperatures derate per the C207 table. Confirm against the
            published standard for any service above ambient.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Large Diameter to 144 Inch
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The size range is where AWWA C207 separates from the ASME world.
            B16.5 stops at 24 inch. B16.47 extends to 60 inch. AWWA C207 keeps
            going. The published table covers 4 inch through 144 inch in
            standard increments, and plate-cut fabrication makes anything in
            between available on a project basis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A 96 inch AWWA Class D flange has an outside diameter of 122
            inches, a bolt circle of 117 inches, and forty-four 1-1/2 inch
            bolt holes. A 144 inch Class D flange runs 173 inches outside,
            166-1/2 inch bolt circle, and sixty-eight 1-3/4 inch bolt holes.
            These are not parts that ship out of a stock yard the way a 6
            inch Class 150 weld neck does. They are made to order, frequently
            with project-specific facing, drilling, and hub details, and the
            production lead time runs in weeks rather than days.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For projects that already know the diameter and class but need
            confirmation on bolt circle, hole count, or thickness, our
            inside sales group can pull the C207 table value and confirm
            against current mill capability. Where the project diverges from
            the published table, we coordinate the custom plate-cut work
            with the partner mills we have used for that scope.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Drop-In Compatibility With Cast Iron
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The single most useful feature of AWWA C207 Class B and Class D
            is that the bolt pattern matches ANSI B16.1 Class 125 cast iron
            in every size. Same outside diameter. Same bolt circle. Same
            bolt count. Same hole size. A retrofit project can pull an
            aging cast iron flange off a valve, pump, or manifold and bolt a
            new plate-cut steel flange to the existing mating part with the
            same studs and gasket.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            That compatibility extends, in most sizes, to ANSI B16.5 Class
            150 forged steel. A waterworks butterfly valve with AWWA Class D
            flanges will bolt to a Class 150 weld neck on the upstream side
            and a Class 125 cast iron tee on the downstream side, all using
            the same bolt and gasket spec. The pressure ratings differ, but
            the joint geometry does not.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The benefit on a retrofit is that the structural and piping
            footprint stays the same while the flange itself gains ductility,
            inspectability, and weight reduction. Cast iron at large diameter
            is heavy. A 36 inch Class 125 cast iron flange weighs over 400
            pounds. The C207 Class D equivalent runs closer to 220 pounds,
            which changes hanger sizing, lift planning, and the structural
            load on the existing rack.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Structural and Non-Pressure Applications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Plate-cut flanges in AWWA C207 dimensions show up in plenty of
            places that have nothing to do with water service. The
            combination of large diameter, flat face, and predictable bolt
            pattern makes them a default choice for structural columns, wind
            tower base plates, sign foundations, transmission line monopole
            bases, and any application where a circular bolted joint at scale
            is needed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            For these structural uses the flange is typically blank, meaning
            no bore drilled through the center, and the material may be A36
            structural plate rather than the pressure-vessel grade A516-70
            that C207 calls out by default. The bolt pattern still follows
            the C207 dimensional template because that table is the most
            commonly referenced source of large diameter bolt circles in
            North American engineering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We supply both pressure-rated AWWA flanges with MTR documentation
            and structural blank flanges for non-pressure use. The drawings
            differ. The order documentation differs. The mill source differs.
            Confirm the application when you request the quote so we route
            the order to the right production path.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            AWWA C228 Stainless Counterparts
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For corrosive water, brackish service, or treated wastewater, the
            stainless equivalent is AWWA C228. The standard parallels C207 in
            dimension but specifies austenitic stainless plate, typically
            304L or 316L, with the same Class B, D, E, F pressure rating
            structure.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            316L is the more common spec on coastal raw water intakes, on
            reverse osmosis pretreatment, and on the chemical feed side of
            water treatment plants. 304L sees use where chlorides are not a
            factor. Both come from the same plate-cut production path as the
            carbon steel version, and the project documentation follows the
            same MTR and heat traceability rules.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Material and Documentation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Carbon steel AWWA C207 flanges come standard in ASTM A105
            (forged hub variants), A516 Grade 70 (plate ring), and A36
            (structural blank). Stainless C228 work uses A240 plate for the
            ring and A182 forgings where a hub is welded on. Specifying the
            plate grade matters: municipal and treatment plant contracts
            usually call out A516-70 by default; structural blank work
            commonly accepts A36; chemical service work often demands a
            specific A240 stainless grade with heat traceability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            MTRs are standard on any pressure-rated AWWA flange we supply.
            For buried municipal water work where Buy American Iron and
            Steel (AIS) provisions apply, melt origin documentation is
            available on request. For projects with BABA or ARRA exposure,
            confirm the requirement on the RFQ so the order routes to a
            qualifying mill.
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
                Forged flange standards for pressure piping.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Flange Product Catalog
              </h3>
              <p className="text-sm text-gray-400">
                Plate-cut, forged, slip-on, blind, custom.
              </p>
            </Link>
            <Link
              href="/tools/flange-dimension-calculator"
              className="block bg-[#2a2f35] p-6 hover:bg-[#343a41] transition"
            >
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Dimension Calculator
              </h3>
              <p className="text-sm text-gray-400">
                Look up AWWA Class D and ASME sizes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Plate-Cut Flange Quoted?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the size,
            class, and any custom drilling or facing requirements. Standard
            sizes ship from inventory. Custom work runs against our partner
            mills.
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
