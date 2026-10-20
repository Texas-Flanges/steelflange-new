import Link from "next/link";

export const metadata = {
  title:
    "Stainless Steel Flanges | F304, F316, F321, F347, SA-240 | Steel Flange",
  description:
    "Stainless steel flange guide. F304/304L and F316/316L for general corrosion service, F321 and F347 for elevated temperature, SA-240 plate for plate-cut stainless flanges. NACE service, sanitary finishes, and the full A182 product family.",
};

export default function StainlessSteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Stainless Steel Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Stainless steel earns its place wherever carbon corrodes
            too quickly, hygiene matters, or temperatures sit high
            enough that chromium oxide stability becomes a real design
            factor. We stock and source the full ASTM A182 forged
            family plus SA-240 stainless plate for plate-cut flanges,
            with 304/304L and 316/316L moving through inventory every
            week.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            The Austenitic Workhorses
          </h2>
          <p className="text-lg leading-relaxed mb-8 text-[#1B1F23]">
            Roughly 70 percent of the stainless flanges and fittings
            on the planet are austenitic 18-8 family material, and the
            bulk of that is 304 or 316 in dual-certified L variants.
            The L designation caps carbon below 0.030 percent, which
            protects against chromium carbide precipitation in the
            heat-affected zone of welds.
          </p>
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F304 / F304L
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The general purpose austenitic. 18 percent chromium,
                8 percent nickel, no molybdenum. Good corrosion
                resistance in mild atmospheric, fresh water, and most
                organic chemistry. Used heavily in food and beverage
                process lines, pharmaceutical utility systems,
                low-pressure refinery and chemical service, and
                architectural piping. Pitting starts to appear in
                chloride-rich environments past about 200 ppm.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F316 / F316L
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                The molybdenum addition in 316 (roughly 2 to 3 percent
                Mo) buys real chloride and pitting resistance. The
                pitting resistance equivalent climbs from around 19
                for 304 to around 26 for 316L. This is the default
                stainless in chemical processing, marine atmospheric
                exposure, brackish service, and most seawater-adjacent
                piping that does not warrant the cost of duplex. 316L
                is the typical spec when welding is involved.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F321 - Titanium Stabilized
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                When service temperature sits in the 800F to 1500F
                band, conventional 304 is vulnerable to sensitization.
                F321 adds titanium to tie up carbon and prevent
                chromium carbide formation at temperature, keeping
                grain-boundary corrosion in check. Common on
                high-temperature exhaust, expansion joints, and
                refining service.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                F347 - Columbium Stabilized
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                F347 uses columbium (niobium) instead of titanium for
                the same stabilization job, and is preferred for
                higher temperature service and for applications where
                titanium would react with the working fluid. Common
                on petrochemical reactor outlets, certain power plant
                service, and severe high-temperature steam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            SA-240 Plate For Plate-Cut Stainless
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Large-diameter stainless flanges and non-standard
            configurations are typically cut from SA-240 plate, the
            ASME pressure vessel grade for chromium and chromium-nickel
            stainless steels. The same 304L, 316L, 321, and 347 grade
            designations apply, just to plate rather than forged bar.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Plate-cut stainless covers ring flanges, blinds, custom
            drilling patterns, AWWA-style large-diameter
            configurations, and anything else where forged B16.5 does
            not reach. The material properties of SA-240 plate match
            SA-182 forging closely enough that downstream calculations
            usually stay clean.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We carry SA-240 in both 304L and 316L as the standard
            grades for plate-cut work. Other grades and thicker plate
            quoted to project requirements.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Sanitary Finishes For Food And Pharma
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Food, beverage, dairy, and pharmaceutical service requires
            interior surface finishes far below standard mill finish.
            The typical specifications run from 32 Ra microinch
            (mechanical polish) down to 15 Ra or lower with
            electropolish for pharma utility loops. 316L is the
            default grade, since 304 does not meet most cleanroom and
            CIP corrosion requirements.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            We source sanitary-finished stainless flanges and fittings
            in tri-clamp, butt weld, and threaded configurations.
            Documentation includes material certs, finish certs, and
            ferrite content when the spec calls for it.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            NACE Service In Stainless
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            For sour service governed by NACE MR0175 (ISO 15156),
            stainless grades have their own hardness and metallurgical
            requirements. 316L is acceptable for wet H2S service
            within defined partial pressure limits and provided the
            material is solution annealed and the hardness is verified
            below 22 HRC.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            For more aggressive sour conditions, the spec usually
            moves to duplex 2205, super duplex 2507, or one of the
            nickel alloys. See the{" "}
            <Link
              href="/materials/exotic-alloys"
              className="text-[#475569] underline hover:no-underline"
            >
              exotic alloys page
            </Link>{" "}
            for the duplex and nickel options.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            The Honest Trade-Offs
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Stainless is more expensive than carbon, usually by a
            factor of three to five on a per-flange basis. It also
            has lower allowable stresses than carbon at room
            temperature, which means heavier wall in some
            pressure-temperature combinations. And it is more
            sensitive to chloride stress cracking than many designers
            realize. Even 316 has limits, which is why duplex exists.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For chloride service that pushes past 316, the{" "}
            <Link
              href="/materials/exotic-alloys"
              className="text-[#475569] underline hover:no-underline"
            >
              exotic alloys page
            </Link>{" "}
            covers duplex and the nickel-rich grades.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Stainless Quote, Same Business Day
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            304, 304L, 316, 316L, 321, 347. Forged A182 or plate-cut
            SA-240. Send the line and the schedule, we will come back
            with stock or lead time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12814848325"
              className="bg-white text-[#475569] px-8 py-3 font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-[#475569]"
            >
              Email sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
