import Link from "next/link";

export const metadata = {
  title: "Steel Flange Materials | Carbon, Stainless, Alloy, Exotic",
  description:
    "The full steel material range from one supplier. A105 forged carbon, A36 and SA-516-70 plate, F304 and F316 stainless, F11/F22/F91 chrome-moly, and exotic alloys including Inconel, Monel, Hastelloy, and duplex.",
};

export default function MaterialsHubPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Steel Materials Catalog
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Every Grade Of Steel A Flange Should Be Made From.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Steel Flange is built around one idea: the full steel range,
            one phone number, one set of mill test reports. Forged A105
            and A350 LF carbon, plate-cut A36 and SA-516-70 blanks,
            austenitic 304 and 316 stainless, chrome-moly F11 through
            F91, and the nickel alloys, duplex, and super duplex that
            cover the corner cases. One distributor, full documentation.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Four Steel Families. One Source.
          </h2>
          <p className="text-lg leading-relaxed mb-10 text-[#1B1F23]">
            Material picks pressure rating, temperature ceiling,
            corrosion life, and welding procedure. Every steel flange
            and fitting we supply falls into one of four families. Get
            the family right first, then narrow to the grade.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/materials/carbon-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#475569] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Carbon Steel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A105 forged flanges from 1/2 inch through 96 inch, A350
                LF2 and LF3 for low-temperature service, SA-516-70 and
                A36 plate for cut-blank work, and the full A694 high
                yield range F42 through F70 for transmission pipeline.
              </p>
            </Link>
            <Link
              href="/materials/stainless-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#475569] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Stainless Steel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Austenitic F304/304L and F316/316L cover the bulk of
                the work. F321 and F347 handle elevated temperature.
                SA-240 plate available for plate-cut stainless rings,
                blinds, and AWWA configurations.
              </p>
            </Link>
            <Link
              href="/materials/alloy-steel"
              className="block bg-white border border-gray-200 p-8 hover:border-[#475569] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Chrome-Moly Alloy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                F5, F9, F11, F22, and F91 (Grade 91). The chrome-moly
                grades that hold pressure rating at 1000F and above,
                fight hydrogen attack, and earn their keep in refinery
                and supercritical power plant piping.
              </p>
            </Link>
            <Link
              href="/materials/exotic-alloys"
              className="block bg-white border border-gray-200 p-8 hover:border-[#475569] transition-colors"
            >
              <h3 className="text-2xl font-display font-bold mb-3 text-[#1B1F23]">
                Exotic Alloys
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hastelloy C-276 for severe chloride, Inconel 625 and 825
                for sour and seawater, Monel 400 for HF and brine,
                duplex 2205 and super duplex 2507 for offshore and pulp
                mill service.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Four Questions That Pick The Steel
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Most material disputes on a job come from skipping one of
            four questions. Walk through them in order and the spec
            sheet usually writes itself.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                1. What is the design pressure and temperature?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                ASME B16.5 pressure-temperature tables drop sharply with
                temperature. A105 derates fast above 500F. F22 holds
                rating up around 1000F. F91 takes you into
                supercritical steam territory. A694 earns Class 600 and
                above through heat treatment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                2. What is the fluid and how corrosive is it?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Chlorides push you to 316L minimum and often to duplex.
                Wet sour service triggers NACE MR0175 hardness limits.
                HF alkylation service is Monel territory. Plain water
                rarely needs more than coated carbon.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                3. What code governs the system?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                ASME B31.3 process piping, B31.1 power, B31.4 liquid
                pipelines, B31.8 gas transmission, and AWWA for water
                each impose their own material rules. The code chooses
                the spec before the designer does.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-white mb-2">
                4. What is the minimum design metal temperature?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A105 is good to roughly -20F without supplementary
                impact testing. LF2 takes you to -50F, LF3 to -150F,
                and austenitic stainless covers cryogenic without a
                second thought.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Forged Versus Plate-Cut
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Standard ASME B16.5 flanges through 24 inch are typically
            forged from A105 or the equivalent stainless and alloy bar.
            Above 24 inch, and on AWWA and other waterworks
            configurations, plate-cut from SA-516-70 or A36 is the
            usual route. Both serve the same function. The cut-plate
            path opens up larger sizes, non-standard drilling patterns,
            and custom thicknesses without tooling cost.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For a deeper read on how to pick the right grade for the
            service, see the grade selection guide in our{" "}
            <Link
              href="/resources"
              className="text-[#475569] underline hover:no-underline"
            >
              technical resources library
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Not Sure Which Steel You Need?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send us the line spec, the service conditions, or just the
            drawing. We will come back with a material recommendation
            and a quote, usually the same business day.
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
