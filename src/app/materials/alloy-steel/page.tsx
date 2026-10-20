import Link from "next/link";

export const metadata = {
  title:
    "Alloy Steel Flanges | F11, F22, F91 Chrome-Moly, A350 Low-Temp, A694 High-Yield",
  description:
    "Alloy steel flange reference for high-temperature, low-temperature, and high-yield service. Chrome-moly F11, F22, F91, low-temp A350 LF2 and LF3, and pipeline-grade A694 F42 through F70. Pressure-temperature ratings, applications, and welding notes.",
};

export default function AlloySteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Alloy Steel Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When carbon steel runs out of capability, alloy steel steps in.
            The chrome-moly grades handle temperatures and creep environments
            where A105 would soften and yield. The low-temp grades stay
            ductile and tough at cryogenic conditions where ordinary carbon
            steel turns brittle. The high-yield pipeline grades match the
            mechanical properties of modern transmission pipe so the joint
            does not become the weakest link. We supply the full alloy
            range in forged and plate-cut configurations across ASME B16.5,
            B16.47, MSS SP-44, and custom dimensions.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Chrome-Moly Grades for High Temperature
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            ASTM A182 covers forged or rolled alloy steel flanges for
            high-temperature service. The chrome-moly family adds chromium
            and molybdenum to carbon steel to push the creep limit upward
            and let the flange hold pressure at temperatures that defeat
            A105. The grade selection follows the operating temperature and
            the service conditions on either side of the flange.
          </p>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">F11 (1-1/4 Cr - 1/2 Mo)</h3>
              <p className="text-lg leading-relaxed mb-3">
                F11 Class 2 is the lower-strength chrome-moly grade. It
                serves up to about 1100 F for ASME B31.1 power piping and
                steam service, with a sweet spot in the 700 F to 950 F
                range where carbon steel has derated significantly but the
                heavier alloy is not yet required. F11 takes weld procedures
                that match the parent piping and tolerates PWHT well.
                Typical service includes steam piping in fossil power
                plants, refinery process piping at intermediate temperature,
                and the upstream side of fired heater coils.
              </p>
              <p className="text-base leading-relaxed">
                Specification callouts read A182 F11 Class 2. Class 1 is a
                lower-yield grade rarely used in current piping. Class 2 is
                the dominant grade for new construction.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">F22 (2-1/4 Cr - 1 Mo)</h3>
              <p className="text-lg leading-relaxed mb-3">
                F22 Class 3 is the workhorse chrome-moly for high-temperature
                refinery and power service. Higher chromium and molybdenum
                content than F11 pushes the upper temperature ceiling to
                roughly 1200 F and improves creep resistance and hydrogen
                attack resistance significantly. Hydroprocessing reactor
                piping, FCC feed lines, hydrocracker effluent piping, and
                similar high-temperature high-pressure refinery service is
                where F22 dominates.
              </p>
              <p className="text-base leading-relaxed">
                F22 requires careful welding procedure qualification and
                post-weld heat treatment. The PWHT cycle is non-negotiable
                on any pressure joint. Specifying F22 without PWHT in the
                weld procedure is a common bid-stage mistake.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2">F91 (9 Cr - 1 Mo - V, Grade 91)</h3>
              <p className="text-lg leading-relaxed mb-3">
                F91 is the modern high-temperature alloy, a 9 Cr martensitic
                grade with niobium and vanadium additions. The mechanical
                properties at elevated temperature are significantly better
                than F22, which lets designers use thinner wall pipe and
                lighter flanges at the same pressure and temperature. F91
                shows up in supercritical and ultra-supercritical power
                stations, in new high-temperature petrochemical service,
                and anywhere the project budget can absorb the material and
                welding cost in exchange for weight and thickness savings.
              </p>
              <p className="text-base leading-relaxed">
                Welding F91 demands strict control of preheat, interpass
                temperature, and the PWHT thermal cycle. Get any one of
                them wrong and the heat-affected zone develops brittle
                phases that crack in service. The flange-side welding
                procedure must match the project specification exactly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Low-Temperature Grades A350 LF2 and LF3
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            On the cold end of the spectrum, ASTM A350 covers carbon and
            low-alloy forgings qualified for low-temperature service by
            Charpy V-notch impact testing. The two grades that dominate
            piping work are LF2 and LF3.
          </p>
          <div className="space-y-6">
            <div className="bg-[#2a2f35] border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">A350 LF2 (Carbon Steel)</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                LF2 Class 1 is essentially A105 with a documented impact
                test at minus 50 F. Same chemistry, same tensile properties,
                same hardness. The difference is the qualification testing:
                LF2 has been Charpy-tested to confirm it stays ductile in
                cold service, and the MTR carries the impact result. For
                any piping that sees temperatures below 0 F, ASME B31.3
                practically requires LF2 in place of A105.
              </p>
              <p className="text-base leading-relaxed text-gray-300">
                Typical service includes ethylene plant cold sections, LNG
                ancillary piping, hydrogen service in cold climates, and
                propylene refrigeration. The flange ships from the same
                forging line as A105 but with an extra QC step and the
                impact certificate in the documentation package.
              </p>
            </div>
            <div className="bg-[#2a2f35] border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold text-white mb-2">A350 LF3 (3.5 Ni Low-Alloy)</h3>
              <p className="text-lg leading-relaxed text-gray-300 mb-3">
                LF3 adds 3.5 percent nickel to the chemistry, which pushes
                the qualified service temperature down to minus 150 F. This
                is the grade for the cold core of LNG plants, cryogenic
                ethylene piping, deep refrigeration in petrochemical
                service, and any process loop where the design minimum
                temperature drops into deep cryogenic range without going
                fully to stainless or to a 9 percent nickel grade.
              </p>
              <p className="text-base leading-relaxed text-gray-300">
                LF3 is a forged grade only. There is no plate-cut LF3
                because the qualification depends on the forging-induced
                grain structure. For applications colder than minus 150 F,
                the next step is A707 or a fully austenitic stainless
                grade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            High-Yield Pipeline Grades A694
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            For transmission pipeline service the flange has to mechanically
            match the line pipe, not just hold pressure. ASTM A694 covers
            forged carbon and alloy steel flanges with high yield strength,
            specifically intended to mate with API 5L line pipe in grades
            X42 through X70. The grade designation F42, F52, F60, F65, F70
            tracks the same minimum yield strength as the matching pipe
            grade in ksi.
          </p>
          <div className="bg-white border-l-4 border-[#475569] p-6 mb-6">
            <h3 className="text-2xl font-display font-bold mb-2">Why High-Yield Matters</h3>
            <p className="text-lg leading-relaxed mb-3">
              A105 has a minimum yield of 36 ksi. X65 line pipe has a
              minimum yield of 65 ksi. Welding a Class 600 A105 flange to
              X65 transmission pipe creates a stress discontinuity at the
              weld: the pipe can carry more stress than the flange. In
              elastic service the joint works. Under pressure cycling,
              ground movement, or the kind of bending loads that pipelines
              experience routinely, the lower-strength flange becomes the
              limiting component.
            </p>
            <p className="text-base leading-relaxed">
              A694 F65 has matched yield strength to X65 pipe. The weld no
              longer creates a strength discontinuity. The joint behaves as
              an integrated structural element, which is what the API 1104
              welding procedure and the project pipeline code both assume.
            </p>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            The economic and regulatory pressure to upgrade gets stronger
            at higher classes. Class 600 and above transmission service in
            X52, X60, X65, or X70 pipe rarely accepts A105 anymore. The
            spec defaults to A694 in the matching grade. MSS SP-44 carries
            the standardized large-diameter pipeline flange pattern, and
            most of those flanges are supplied in A694 with the appropriate
            yield grade.
          </p>
          <p className="text-lg leading-relaxed">
            A694 is a forged grade. Plate-cut work in equivalent chemistry
            is sometimes available for very large diameters but requires
            qualification on the project-specific basis. For standard
            B16.5, B16.47, and MSS SP-44 sizes, forged A694 is the right
            answer.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Selecting the Right Alloy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            The decision tree usually starts with temperature. Above 800 F,
            chrome-moly takes over from carbon steel. Above 1100 F, F91
            becomes a serious candidate. Below 0 F, LF2 is the minimum
            qualification. Below minus 50 F, LF3 starts to make sense.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            After temperature comes the matching pipe grade. Transmission
            and gathering line work in API 5L pipe needs flanges that match
            the pipe yield. Any Class 600 or higher service in X-grade pipe
            should be A694 by default unless the project specification
            permits otherwise.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            The third consideration is the process environment. Hydrogen
            service, wet sour service, and any application with NACE MR0175
            exposure adds chemistry and hardness restrictions that
            constrain the alloy choice. Confirm the project NACE
            requirements before the order routes to a specific mill.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-[#1B1F23] mb-6">
            Welding Considerations
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Alloy steel flanges almost always require preheat before
            welding and post-weld heat treatment after. The exact thermal
            cycle depends on the grade and the thickness of the joint.
            F11 typically requires preheat to 300 F and PWHT at 1250 F to
            1300 F. F22 typically requires preheat to 400 F and PWHT at
            1300 F to 1375 F. F91 demands tight control of preheat,
            interpass, cooldown, and a PWHT cycle in the 1400 F to 1450 F
            range.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            On the flange side, the material certification needs to match
            the welding procedure qualification record (WPQR or PQR) the
            project is using. For B31.3 process piping, the procedure
            usually qualifies the base material grade by P-Number from
            ASME Section IX. F11 is P-Number 4. F22 is P-Number 5A. F91
            is P-Number 15E. Mixing P-Numbers across the joint requires
            additional qualification work.
          </p>
          <p className="text-lg leading-relaxed">
            A350 grades weld as carbon steel for procedure purposes but
            require maintaining the impact qualification through the weld
            and heat-affected zone. Most LF2 procedures use low-hydrogen
            consumables and controlled heat input to preserve toughness.
            For LF3 the consumable choice usually includes nickel-bearing
            filler metal to match the parent chemistry.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Documentation and Sourcing
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Alloy steel flanges are sourced from domestic forging mills and
            from qualified import mills depending on project requirements.
            MTRs in EN 10204 type 3.1 format are standard. For F91 and
            other high-alloy grades, third-party witness inspection (type
            3.2) is sometimes specified, particularly for power plant and
            high-pressure refinery service.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            For A694 pipeline service, additional certifications often
            apply: API 6D for ball valve trim, NACE MR0175 for sour
            service, and project-specific testing such as hardness
            verification on the finished part. Confirm the test
            requirements before the order routes to the mill so the
            QA package matches what the project expects.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Lead time on alloy steel varies by grade and size. F11 and F22
            in B16.5 sizes are usually available from stock or short
            production cycle. F91 typically runs longer. A694 in
            mainline pipeline sizes (24 inch and above) is a project lead
            time, not a stock pull. Call the sales desk early in the bid
            cycle for any alloy that is not A105.
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
            <Link
              href="/materials/stainless-steel"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Stainless Steel
              </h3>
              <p className="text-sm text-gray-700">
                304/304L, 316/316L, 321, 347 forgings.
              </p>
            </Link>
            <Link
              href="/materials/exotic-alloys"
              className="block bg-white p-6 border-l-4 border-[#475569] hover:shadow-lg transition"
            >
              <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">
                Exotic Alloys
              </h3>
              <p className="text-sm text-gray-700">
                Inconel, Hastelloy, duplex, titanium.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need an Alloy Quote?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Call (281) 484-8325 or email sales@texasflange.com with the
            grade, size, class, and any project-specific NDE or NACE
            requirements. Alloy work runs from stock on the common grades
            and through mill production on the heavier alloys.
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
