import Link from "next/link";

export const metadata = {
  title:
    "Exotic Alloy Flanges | Hastelloy, Inconel, Monel, Duplex, Titanium",
  description:
    "Exotic alloy flange supply. Hastelloy C276 and C22, Inconel 600/625/825, Monel 400, duplex 2205, super duplex 2507, titanium Grade 2, and copper-nickel 90/10 and 70/30. Severe service applications and ASTM B564 reference.",
};

export default function ExoticAlloysPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Exotic Alloy Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When the service environment defeats stainless, the answer is
            usually a nickel alloy, a duplex stainless, or one of the
            reactive metals. We supply the full slate of ASTM B564 nickel
            alloy forgings, duplex and super duplex grades, plus titanium
            and copper alloys for the jobs where ordinary materials simply
            do not survive. Most of these orders are project-specific. The
            material is the variable. The dimensional pattern, the class,
            and the documentation are the constants.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Nickel Alloys (ASTM B564)
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            ASTM B564 covers nickel alloy forgings for piping flanges and
            fittings. The grades split into families by which chemistry
            problem they were designed to solve. The cost ladder runs from
            roughly four times stainless on the entry-level grades up to
            twenty times or more on the heavy-nickel grades. The
            specification choice comes down to corrosion testing and
            service experience, not list price.
          </p>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">Hastelloy C276 and C22</h3>
              <p className="text-lg leading-relaxed mb-3">
                The nickel-molybdenum-chromium grades. Built for severe wet
                chlorine, mixed acid, hypochlorite, and the kind of
                aggressive chemistry that eats 316 for breakfast. C276
                (UNS N10276) is the long-standing reference grade for wet
                chlorine and FGD scrubber service. C22 (UNS N06022) is the
                newer, slightly more corrosion-resistant grade with better
                performance in highly oxidizing acid environments.
              </p>
              <p className="text-base leading-relaxed">
                Both grades are widely available in forged flanges to
                B16.5 dimensions. Stock varies by size and class. Common
                applications include flue gas desulfurization (FGD) piping,
                chlor-alkali plant chemical lines, pulp and paper bleach
                plant piping, and any service with localized pitting or
                crevice corrosion risk that exceeds 316L capability.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">Inconel 600, 625, and 825</h3>
              <p className="text-lg leading-relaxed mb-3">
                The nickel-chromium and nickel-chromium-molybdenum grades.
                Inconel 600 (UNS N06600) is the workhorse nickel-chromium
                for high temperature service, used in heat treating
                equipment, nuclear reactor components, and chemical process
                at elevated temperature. Inconel 625 (UNS N06625) adds
                significant molybdenum and niobium for combined high
                strength and aqueous corrosion resistance. Incoloy 825
                (UNS N08825) is the iron-rich, lower-cost option for
                sulfuric acid service and produced water handling.
              </p>
              <p className="text-base leading-relaxed">
                Inconel 625 is the most commonly specified of the three in
                upstream oil and gas. Subsea wellhead equipment, sour gas
                handling, and the production tree internals of high-pressure
                gas wells all use 625 for trim, coatings, and forged flange
                bodies where stainless cannot survive the chloride and
                hydrogen sulfide combination.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">Monel 400 and K-500</h3>
              <p className="text-lg leading-relaxed mb-3">
                Nickel-copper alloys for seawater, hydrofluoric acid, and
                certain reducing chemistry. Monel 400 (UNS N04400) is the
                solid solution alloy used in seawater handling, marine
                heat exchanger flanges, and HF alkylation unit piping in
                refineries. K-500 (UNS N05500) is the age-hardened higher
                strength version, primarily used in fastener and shaft
                applications rather than flanges.
              </p>
              <p className="text-base leading-relaxed">
                For seawater service the choice often comes down to Monel
                400 versus 90/10 copper-nickel versus super duplex 2507.
                All three work. Monel handles the higher temperatures and
                the higher velocities. Copper-nickel is cheaper. Super
                duplex carries the strength advantage. The decision
                typically follows the project specification and the
                fabricator's welding experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Duplex and Super Duplex Stainless
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Duplex stainless steels combine the mechanical strength of a
            ferritic grade with the corrosion resistance of an austenitic
            grade. The grade family bracketing seawater, offshore, and
            chloride-bearing chemical service has two dominant entries.
          </p>
          <div className="space-y-6">
            <div className="bg-[#2a2f35] border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Duplex 2205 (UNS S31803 / S32205)</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                The standard duplex grade. Roughly twice the yield strength
                of 316L, significantly better chloride pitting resistance,
                and a cost between 316L and the nickel alloys. Used
                extensively in oil and gas production manifolds, offshore
                process piping, chemical tanker piping, and pulp and paper
                bleach plants.
              </p>
              <p className="text-base leading-relaxed text-gray-300">
                The pitting resistance equivalent number (PREN) for 2205
                runs in the 33 to 38 range, well above 316L's 24 to 26.
                That extra margin handles brackish water, mildly chloride-
                bearing process streams, and the pitting environments
                where 316L would fail in service.
              </p>
            </div>
            <div className="bg-[#2a2f35] border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Super Duplex 2507 (UNS S32750)</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                Higher chromium, molybdenum, and nitrogen than 2205, with a
                PREN above 40. Super duplex is the standard for offshore
                topside piping in seawater service, FPSO process lines, and
                subsea well jumper systems. The combination of yield
                strength, weight savings, and chloride pitting resistance
                makes it the dominant choice on offshore production
                projects where weight matters.
              </p>
              <p className="text-base leading-relaxed text-gray-300">
                Welding 2507 requires controlled heat input to maintain
                the phase balance between ferrite and austenite. Most
                offshore fabrication shops have qualified procedures, but
                the cost adder versus duplex 2205 is real. For projects
                that can use 2205, that is usually the right call. For
                projects in true seawater, 2507 is the durability play.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Titanium Grades
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Titanium handles environments where every other metal struggles:
            chlorinated brine, hypochlorite bleach, wet chlorine gas, hot
            seawater, and the chemistry of some pharmaceutical processes.
            The two grades that dominate flange supply are commercially pure
            Grade 2 and the alpha-beta alloy Grade 5 (Ti-6Al-4V).
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Grade 2 (UNS R50400) is the standard commercial purity titanium
            for piping flanges. It has good corrosion resistance in
            oxidizing acid and chloride environments and moderate
            mechanical strength. Most titanium flanges in chemical plant
            service are Grade 2 to ASTM B381 specification.
          </p>
          <p className="text-lg leading-relaxed">
            Grade 5 adds aluminum and vanadium for significantly higher
            strength, used where the corrosion resistance of titanium is
            needed but the mechanical strength of Grade 2 is insufficient.
            Aerospace and high-end marine applications drive most of the
            Grade 5 demand. Piping flange work in this grade is rare and
            typically project-specific.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Copper-Nickel for Marine Service
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Copper-nickel alloys are the traditional answer to seawater
            handling on naval and commercial marine work. The two grades
            in piping service are 90/10 and 70/30, named for the copper
            and nickel content.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            90/10 copper-nickel (UNS C70600) is the lower-cost grade,
            used in seawater piping at moderate velocity, condenser water
            boxes, and shipboard fire main service. The biofouling
            resistance is excellent. The mechanical strength is moderate.
            Above about 12 feet per second seawater velocity, the alloy
            begins to erode and the spec usually steps up to 70/30.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            70/30 copper-nickel (UNS C71500) adds higher mechanical
            strength, better velocity tolerance, and improved performance
            in polluted seawater. Used in heat exchanger tube sheets,
            high-velocity pump piping, and the higher-grade naval
            specifications. Flanges in both grades are forged to B16.5
            dimensions and supplied with MTRs traceable to the original
            mill heat.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Sourcing, Lead Times, and Documentation
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Exotic alloy work is rarely a stock pull. Most orders go to
            domestic or qualified import mills against the project
            specification. Lead times run from four to sixteen weeks
            depending on grade, size, and the mill production schedule.
            The common 316L flange that ships same-day from inventory does
            not have an equivalent in the exotic alloy world.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Documentation requirements are heavier on exotic work. Full
            EN 10204 type 3.1 MTRs are standard. Type 3.2 third-party
            witness inspection is common on nickel alloys for offshore or
            nuclear service. PMI (positive material identification) on the
            finished part is frequently project-required. Heat traceability
            from the original melt through the forging to the final flange
            is the baseline.
          </p>
          <p className="text-lg leading-relaxed">
            For NACE MR0175 sour service, the alloy chemistry and the
            forging hardness both fall under the standard. Most reputable
            mills carry NACE-qualified production lines, but the
            qualification has to be confirmed on the order rather than
            assumed.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Selecting the Right Alloy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The selection process usually starts with a corrosion study
            specific to the service environment. The output is a short
            list of acceptable alloys ranked by service life and cost.
            From that list the project chooses based on procurement lead
            time, fabrication welding qualification, and any matching
            grade requirements on the rest of the piping system.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For seawater service the candidates are 70/30 copper-nickel,
            Monel 400, super duplex 2507, and titanium Grade 2. For wet
            chlorine the candidates are Hastelloy C276 or C22 and
            titanium Grade 2. For sour gas the candidates are Inconel 625
            and the NACE-qualified duplex grades. The right answer
            depends on the full service envelope.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            We do not recommend material selection from a website. We
            supply what the project specifies. When the spec is still
            being written, the right move is to call the corrosion
            engineer who handles the rest of the project chemistry and
            have them issue the alloy callout. Our inside sales group
            can then quote against the specification and confirm mill
            availability.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Related Materials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/materials/stainless-steel"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Stainless Steel
              </h3>
              <p className="text-sm text-gray-700">
                304/304L, 316/316L, 321, 347.
              </p>
            </Link>
            <Link
              href="/materials/alloy-steel"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Alloy Steel
              </h3>
              <p className="text-sm text-gray-700">
                Chrome-moly F11, F22, F91; low-temp LF2, LF3.
              </p>
            </Link>
            <Link
              href="/materials/carbon-steel"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Carbon Steel
              </h3>
              <p className="text-sm text-gray-700">
                A105, A350 LF2, plate-cut A516-70.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need an Exotic Alloy Quote?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            grade, size, class, and documentation requirements. Most
            exotic work is project-specific, and we coordinate the order
            directly with the qualifying mill.
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
