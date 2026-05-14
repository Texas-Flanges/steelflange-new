import Link from "next/link";

export const metadata = {
  title:
    "Technical Specifications | Material Grade Quick Reference",
  description:
    "Quick lookup for steel flange material grades. A105 forged carbon, A350 LF2 and LF3 low-temp, A516-70 plate, A182 chrome-moly (F11, F22, F91), A694 high-yield, A182 stainless (F304/F316), and DIN P-grade crosswalk.",
};

export default function TechnicalSpecsPage() {
  return (
    <main>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Resources / Technical Specifications
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Material Grade Quick Reference
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A complete steel flange specification needs the standard, the
            class, the facing, and the material grade. The first three are
            usually obvious from the project documents. The material grade
            is where the rookie mistakes happen. The reference below is
            the same quick-lookup the inside sales group uses on bid days.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Forged Carbon Steel
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white border border-gray-300">
              <thead className="bg-[#1B1F23] text-white">
                <tr>
                  <th className="text-left p-4 font-bold">ASTM Grade</th>
                  <th className="text-left p-4 font-bold">Typical Use</th>
                  <th className="text-left p-4 font-bold">Min Yield</th>
                  <th className="text-left p-4 font-bold">Temp Range</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">A105</td>
                  <td className="p-4">General service forged</td>
                  <td className="p-4">36 ksi</td>
                  <td className="p-4">-20 F to 800 F</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">A350 LF2 Cl 1</td>
                  <td className="p-4">Low-temp service, impact tested</td>
                  <td className="p-4">36 ksi</td>
                  <td className="p-4">-50 F to 650 F</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">A350 LF3</td>
                  <td className="p-4">Deep cryogenic, 3.5 Ni</td>
                  <td className="p-4">37 ksi</td>
                  <td className="p-4">-150 F to 650 F</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">A694 F42-F70</td>
                  <td className="p-4">High-yield transmission pipeline</td>
                  <td className="p-4">42 to 70 ksi</td>
                  <td className="p-4">-20 F to 400 F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            A105 is the default forged carbon grade and the workhorse of
            general process and refinery service. A350 LF2 takes over below
            minus 20 F. LF3 is the cryogenic grade. A694 carries the high-
            yield designation for transmission pipeline applications where
            the flange has to mechanically match the line pipe.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Plate-Cut Carbon Steel
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-[#2a2f35] border border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-bold">ASTM Grade</th>
                  <th className="text-left p-4 font-bold">Typical Use</th>
                  <th className="text-left p-4 font-bold">Min Yield</th>
                  <th className="text-left p-4 font-bold">Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">A516 Grade 70</td>
                  <td className="p-4">Pressure-vessel plate, AWWA flanges</td>
                  <td className="p-4">38 ksi</td>
                  <td className="p-4">Notch toughness available</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">A516 Grade 60</td>
                  <td className="p-4">Lower-pressure waterworks</td>
                  <td className="p-4">32 ksi</td>
                  <td className="p-4">Used where Grade 70 strength is not needed</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">A36</td>
                  <td className="p-4">Structural blank flanges</td>
                  <td className="p-4">36 ksi</td>
                  <td className="p-4">Non-pressure structural only</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">A283 Grade C</td>
                  <td className="p-4">Mild service waterworks</td>
                  <td className="p-4">30 ksi</td>
                  <td className="p-4">Lower-grade structural plate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            A516 Grade 70 is the dominant pressure-vessel plate for
            plate-cut AWWA C207 work. A36 is structural only and should
            never appear on a pressure-rated flange. Confirm the plate
            grade on the order so the right material ships.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Alloy Steel (Chrome-Moly)
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white border border-gray-300">
              <thead className="bg-[#1B1F23] text-white">
                <tr>
                  <th className="text-left p-4 font-bold">ASTM Grade</th>
                  <th className="text-left p-4 font-bold">Chemistry</th>
                  <th className="text-left p-4 font-bold">Max Temp</th>
                  <th className="text-left p-4 font-bold">P-Number</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">A182 F11 Cl 2</td>
                  <td className="p-4">1-1/4 Cr - 1/2 Mo</td>
                  <td className="p-4">1100 F</td>
                  <td className="p-4">4</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">A182 F22 Cl 3</td>
                  <td className="p-4">2-1/4 Cr - 1 Mo</td>
                  <td className="p-4">1200 F</td>
                  <td className="p-4">5A</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">A182 F91</td>
                  <td className="p-4">9 Cr - 1 Mo - V</td>
                  <td className="p-4">1200 F</td>
                  <td className="p-4">15E</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">A182 F5</td>
                  <td className="p-4">5 Cr - 1/2 Mo</td>
                  <td className="p-4">1200 F</td>
                  <td className="p-4">5B</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Chrome-moly grades all require preheat before welding and PWHT
            after. The P-Number column corresponds to ASME Section IX welding
            procedure qualification. Mixing P-Numbers across a joint
            requires additional procedure qualification work.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Stainless Steel
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-[#2a2f35] border border-gray-700">
              <thead className="bg-black text-white">
                <tr>
                  <th className="text-left p-4 font-bold">ASTM Grade</th>
                  <th className="text-left p-4 font-bold">UNS</th>
                  <th className="text-left p-4 font-bold">Typical Use</th>
                  <th className="text-left p-4 font-bold">Max Temp</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">A182 F304</td>
                  <td className="p-4">S30400</td>
                  <td className="p-4">General stainless</td>
                  <td className="p-4">1500 F</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">A182 F304L</td>
                  <td className="p-4">S30403</td>
                  <td className="p-4">Low-carbon, welded fab</td>
                  <td className="p-4">800 F</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">A182 F316</td>
                  <td className="p-4">S31600</td>
                  <td className="p-4">Chloride resistance</td>
                  <td className="p-4">1500 F</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">A182 F316L</td>
                  <td className="p-4">S31603</td>
                  <td className="p-4">Welded chloride service</td>
                  <td className="p-4">850 F</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="p-4 font-semibold">A182 F321</td>
                  <td className="p-4">S32100</td>
                  <td className="p-4">Stabilized for high-temp</td>
                  <td className="p-4">1500 F</td>
                </tr>
                <tr className="border-t border-gray-700 bg-[#1B1F23]">
                  <td className="p-4 font-semibold">A182 F347</td>
                  <td className="p-4">S34700</td>
                  <td className="p-4">Niobium stabilized high-temp</td>
                  <td className="p-4">1500 F</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The L grades cap at lower temperatures for sustained service
            because the low-carbon chemistry sensitizes more slowly but
            also softens at high temperature. For continuous service
            above 800 F, the standard grades (304, 316) or the stabilized
            grades (321, 347) are the correct choice.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            ASME Class to DIN PN Crosswalk
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white border border-gray-300">
              <thead className="bg-[#1B1F23] text-white">
                <tr>
                  <th className="text-left p-4 font-bold">ASME Class</th>
                  <th className="text-left p-4 font-bold">Cold Rating</th>
                  <th className="text-left p-4 font-bold">Closest DIN PN</th>
                  <th className="text-left p-4 font-bold">Bolts Interchange</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Class 150</td>
                  <td className="p-4">285 psi</td>
                  <td className="p-4">PN 16 / PN 20</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Class 300</td>
                  <td className="p-4">740 psi</td>
                  <td className="p-4">PN 40 / PN 50</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Class 600</td>
                  <td className="p-4">1480 psi</td>
                  <td className="p-4">PN 100</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Class 900</td>
                  <td className="p-4">2220 psi</td>
                  <td className="p-4">PN 150 / PN 160</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-semibold">Class 1500</td>
                  <td className="p-4">3705 psi</td>
                  <td className="p-4">PN 250</td>
                  <td className="p-4">No</td>
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="p-4 font-semibold">Class 2500</td>
                  <td className="p-4">6170 psi</td>
                  <td className="p-4">PN 400</td>
                  <td className="p-4">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6">
            Bolt patterns and outside diameters do not match between ASME
            and DIN even when the cold pressure rating is similar. Mixing
            standards on the same joint requires a qualified transition
            flange or matched pairs on both sides.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Bolt Material Quick Reference
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The flange is half the joint. The bolts are the other half.
            For carbon and alloy steel flanges, ASTM A193 covers most stud
            bolt grades.
          </p>
          <ul className="text-gray-300 space-y-3 mb-6">
            <li>
              <strong>A193 B7:</strong> Chrome-moly heat-treated, the
              default stud grade. 105 ksi yield up to 2-1/2 inch diameter,
              95 ksi above. Temperature range minus 50 F to 750 F.
            </li>
            <li>
              <strong>A193 B7M:</strong> Same chemistry as B7 but tempered
              to lower hardness for NACE sour service compliance.
              80 ksi yield. Required wherever NACE MR0175 applies.
            </li>
            <li>
              <strong>A193 B8:</strong> Stainless 304 stud. 30 ksi yield.
              Used in stainless piping and chemical service.
            </li>
            <li>
              <strong>A193 B8M:</strong> Stainless 316 stud. Same yield as
              B8 but with the chloride resistance of 316.
            </li>
            <li>
              <strong>A320 L7:</strong> Low-temp version of B7. Same yield,
              with impact-tested toughness for service below minus 50 F.
            </li>
          </ul>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Matching nuts come from ASTM A194: 2H for B7, 2HM for B7M, 8
            for B8, 8M for B8M, 7 for L7.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Spec Confirmed?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            grade callout from your project spec. We will confirm
            availability, lead time, and the matching documentation.
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
