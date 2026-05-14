import Link from "next/link";

export const metadata = {
  title:
    "Carbon Steel Flanges | A105, LF2, LF3, SA-516-70, A36, A694 | Steel Flange",
  description:
    "Carbon steel flange material guide. A105 forged flanges 1/2 inch through 96 inch, A350 LF2/LF3 for low temperature, SA-516-70 plate for pressure cut blanks, A36 plate for AWWA and structural, and the full A694 high yield F42 through F70 range.",
};

export default function CarbonSteelPage() {
  return (
    <main className="bg-[#F8F6F0] text-[#1B1F23]">
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Material Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Carbon Steel Flanges & Fittings
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Carbon steel is still the default for the majority of
            process, pipeline, water, and utility piping in North
            America. We stock ASTM A105 forgings as the workhorse,
            A350 LF2 and LF3 for low-temperature service, SA-516-70
            and A36 plate for cut-blank fabrication, and the full A694
            high yield family for transmission pipeline flanges from
            Class 600 on up.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            ASTM A105 - The Workhorse
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-[#1B1F23]">
            A105 is the carbon steel forging grade that covers the
            overwhelming majority of ASME B16.5 flanges in ambient and
            moderately elevated service. Pressure ratings run from
            roughly 20 psi at the top of the temperature curve up to
            6,170 psi at ambient on a Class 2500 flange, with
            allowable service temperatures from cryogenic territory
            (with supplementary impact testing) up to about 1,000F at
            the very top end of the rating tables.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-[#1B1F23]">
            We carry A105 across the full standard size range: 1/2
            inch nominal pipe size through 24 inch in forged B16.5
            geometry, and 26 inch through 96 inch as plate-cut blanks
            machined to flange tolerance. The same grade covers
            weld neck, slip-on, blind, lap joint, threaded, and socket
            weld configurations under ASME B16.5, and ring joint
            blinds and large-bore patterns under B16.47 Series A and B.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            ASME pressure-temperature tables derate A105 steeply above
            500F, which is why high-temperature service typically
            shifts to chrome-moly alloy. For minimum design metal
            temperature below about -20F, A105 needs supplementary
            impact testing or a switch to A350 LF2.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            A350 LF2 And LF3 - Low Temperature Carbon
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-white">
                A350 LF2 - Charpy Tested To -50F
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                LF2 is the impact-tested forging that takes over below
                the A105 limit. Charpy testing is performed at -50F as
                standard, making LF2 the workhorse for cold-climate
                gas processing, LNG export trains, ethylene and
                propylene service, and anywhere a low MDMT lands on
                the line list. Mechanically similar to A105, so
                substitution is usually transparent to downstream
                calculations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2 text-white">
                A350 LF3 - Charpy Tested To -150F
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                LF3 carries about 3.5 percent nickel, which gives it
                Charpy performance down around -150F. This is the spec
                for deep cryogenic carbon service before you have to
                step up into austenitic stainless or 9 percent nickel
                plate. Common on LNG and ethylene flange packages
                where the MDMT undercuts what LF2 can support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Plate Materials - SA-516-70 And A36
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-[#1B1F23]">
            When a flange is cut from plate rather than forged, the
            choice of plate steel matters more than the geometry it
            ends up cut to. Two grades cover almost everything we ship
            in plate-cut form.
          </p>
          <div className="space-y-8">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                SA-516 Grade 70 - Pressure Vessel Plate
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                SA-516-70 is the standard carbon pressure vessel plate
                under ASME Section II. It is the typical base material
                for cut-plate ring flanges, blinds, and large-diameter
                ring and hub flanges where pressure containment is the
                governing requirement. Often used as a direct
                substitute for A105 on cut-plate fabrications where
                the geometry is non-standard or the size exceeds
                forged B16.5 limits. Available in normalized condition
                when the spec calls for it.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-2xl font-display font-bold mb-2 text-[#1B1F23]">
                A36 Plate - Structural And AWWA
              </h3>
              <p className="text-lg leading-relaxed text-[#1B1F23]">
                A36 is general-purpose structural carbon plate. In
                flange work it shows up on AWWA C207 ring and hub
                flanges for large-diameter waterworks, on backing
                rings, on non-pressure structural connections, and on
                low-pressure utility service where SA-516-70 is more
                grade than the application warrants. Significantly
                cheaper than pressure vessel plate when the duty
                allows the substitution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            High Yield Carbon - The A694 Family
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            For transmission pipeline service the standard A105 yield
            strength of 36 ksi is not enough. ASTM A694 covers
            heat-treated carbon and low alloy steel forgings designed
            to match the higher yield grades of API 5L line pipe. The
            grades are designated by minimum yield strength in ksi:
            F42, F46, F52, F56, F60, F65, and F70.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            A694 forgings are governed by MSS SP-44, the standard for
            steel pipeline flanges, rather than ASME B16.5. They are
            typically specified in Class 600 and above and mate
            cleanly to API 5L pipe in matching grades X42 through X70.
            The higher yield threshold is achieved through controlled
            heat treatment, which means welding procedures need to
            account for the property work the forging has already
            received. A sloppy weld can undo the gains the forging
            spec delivers.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F42 through F52
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The lower yield grades of the A694 family. Common on
                gathering systems and lower-pressure transmission
                lines where the operator wants A694 documentation
                without paying for the full F65 or F70 property work.
                Pairs to X42, X46, and X52 line pipe.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F56 and F60
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The middle of the range. F60 in particular shows up
                frequently on natural gas transmission where the pipe
                is X60 and the operator wants a matching flange yield
                without going to full F65.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F65
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Probably the most-stocked A694 grade in the United
                States. Pairs to X65 line pipe, handles Class 900 and
                1500 service, and is the typical specification on
                long-haul gas transmission.
              </p>
            </div>
            <div className="bg-[#2A2F35] p-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                F70
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The top of the standard A694 range. F70 is used on
                the highest-pressure transmission systems and on
                offshore risers where every pound of wall thickness
                saved at the flange matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Finishes - Painted, Galvanized, And Coated
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Carbon steel ships from the mill in one of a few standard
            surface conditions. Mill finish (black oxide) is the
            default and is suitable for service environments where the
            flange will be insulated or quickly painted in the field.
            Black paint or a thin oil dip is common on stock material
            for corrosion protection during shipping and storage. Hot
            dip galvanized per ASTM A153 adds a zinc layer that is
            standard on waterworks, structural, and outdoor utility
            installations. Specialty coatings (epoxy, phenolic, fusion
            bonded) are project-specific and quoted to spec.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            Pick the finish to match the service. Painted A105 in a
            buried pipeline rots out fast without supplemental cathodic
            protection. Galvanized A105 in a steam line burns the zinc
            off in days. The fundamentals do not change with the
            coating.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-white">
            Where Steel Replaced Cast Iron
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            A generation ago, large-diameter water transmission, sewer
            force mains, and low-pressure industrial utility piping
            were dominated by cast iron flanges per the old ANSI B16.1
            standard. Cast iron is brittle, fails poorly under impact,
            and corrodes unpredictably. Most modern projects replace
            it with steel - either ductile iron under AWWA C110 and
            C153 for direct cast-iron compatibility, or carbon steel
            cut from SA-516-70 or A36 plate to AWWA C207 dimensions
            for ring and hub flanges.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Cast iron pattern flanges are still produced for retrofit
            and like-for-like replacement work. We can quote them when
            the project calls for it, but the conversation usually
            starts with whether the upgrade to steel is worth doing
            once the line is open anyway.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            Where Carbon Steel Fits
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-[#1B1F23]">
            Carbon steel covers the bulk of the work in oil and gas
            production, midstream gathering and transmission,
            refineries, petrochemical plants, power generation
            balance-of-plant, and general industrial utilities. It is
            also the standard for municipal waterworks and large
            diameter water transmission, usually as AWWA C207 ring or
            hub flanges cut from A36 or SA-516-70 plate.
          </p>
          <p className="text-lg leading-relaxed text-[#1B1F23]">
            For applications that step outside carbon's comfort zone
            (temperatures above 800F, aggressive chemistry, sour gas,
            or cryogenic service) see our{" "}
            <Link
              href="/materials/alloy-steel"
              className="text-[#475569] underline hover:no-underline"
            >
              alloy steel
            </Link>
            ,{" "}
            <Link
              href="/materials/stainless-steel"
              className="text-[#475569] underline hover:no-underline"
            >
              stainless steel
            </Link>
            , and{" "}
            <Link
              href="/materials/exotic-alloys"
              className="text-[#475569] underline hover:no-underline"
            >
              exotic alloy
            </Link>{" "}
            sections.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            Carbon Steel On A Schedule?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Standard A105 and LF2 typically ship the same week. A694
            in any grade, quoted fast with mill test reports. SA-516-70
            and A36 plate-cut blanks to your drawing.
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
