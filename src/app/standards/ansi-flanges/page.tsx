import Link from "next/link";

export const metadata = {
  title: "ANSI B16.1 Cast Iron Pattern | Steel Plate-Cut Retrofit",
  description:
    "ANSI B16.1 cast iron pipe flange pattern reference. Class 25/125/250 bolt circles and the steel plate-cut retrofit case. A36 carbon steel as the modern replacement for legacy cast iron flanges in water, HVAC, and low-pressure service.",
};

export default function AnsiFlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Standards Reference
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            ANSI B16.1: The Cast Iron Pattern That Still Drives Steel
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            ANSI B16.1 covers cast iron pipe flanges and flanged fittings in
            Class 25, 125, and 250. On its own it might look like a niche
            legacy standard. The reason it shows up in a steel flange
            reference is simple. The entire lightweight steel ring flange
            family was designed to bolt directly to it. This is the pattern
            that keeps decades of municipal, HVAC, and low-pressure plant
            piping serviceable, and it is the case for plate-cut A36 steel
            as the modern retrofit answer.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6 text-[#1B1F23]">
            What ANSI B16.1 Covers
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
            B16.1 sets dimensions, tolerance, drilling, and
            pressure-temperature ratings for gray iron flanges and flanged
            fittings. The standard is organized into three classes that
            reflect the pressure regime the cast flange is designed for. The
            bolt circles, hole counts, and outside diameters defined here
            are what every Class 125LW steel ring flange replicates.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#475569] font-bold text-sm tracking-wider mb-2">
                CLASS 25
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Light-Duty Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                25 psi maximum non-shock working pressure. Largely obsolete
                on new installations, but you will run into it on older
                municipal and industrial water systems where a section needs
                replacement and the bolt pattern has to match.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#475569] font-bold text-sm tracking-wider mb-2">
                CLASS 125
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Standard Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                The most common cast iron class by far. 175 psi cold working
                pressure in smaller sizes, derating with diameter. This is
                the bolt pattern that A36 plate-cut steel ring flanges are
                purpose-built to match.
              </p>
            </div>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p className="text-[#475569] font-bold text-sm tracking-wider mb-2">
                CLASS 250
              </p>
              <h3 className="text-lg font-bold text-[#1B1F23] mb-2">
                Heavy Cast Iron
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                400 psi cold working pressure in smaller sizes. Heavier
                cross-section than Class 125, used where higher pressure or
                shock loading is expected. Higher-class steel plate flanges
                handle the retrofit on this pattern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            The Retrofit Case for Steel
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl">
            Cast iron is brittle. It cracks under bolt overload. It cannot
            be field-welded. It rusts on the outside, scales on the inside,
            and after fifty years of service in a treatment plant or a
            chilled water loop, it is often the weakest link in a system
            otherwise built to last another fifty. The retrofit answer is
            almost always plate-cut steel.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Drop-In Bolt Pattern
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                A plate-cut A36 carbon steel ring flange built to the
                Class 125 pattern shares OD, bolt circle, bolt count, and
                hole diameter with the cast iron flange it replaces. No
                field modification. No adapter. Just unbolt the old
                fitting, drop in the new steel flange, and reassemble.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Weldable and Repairable
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Steel takes a weld. A36 plate-cut flanges can be tacked,
                seal-welded, or modified in the field without the cracking
                risk that cast iron carries. Maintenance crews stop
                fighting brittle metal and start working with material that
                behaves predictably.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Plate Origin, Lower Cost
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Steel plate-cut flanges cost less than forged equivalents
                in larger sizes, and they cost less than new cast iron in
                most sizes. The math gets better the bigger the flange
                gets. By the time you reach 24 inches and up, plate-cut
                A36 is the obvious answer on price alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-[#1B1F23]">
            The Class 125LW Steel Family
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            <strong>Class 125LW</strong> (Lightweight) is the steel flange
            designation that replicates the B16.1 Class 125 cast iron
            pattern. The flange has the same outside diameter, same bolt
            circle, and same number and size of bolt holes as a
            corresponding B16.1 Class 125 cast iron flange. That
            dimensional match is the whole point. It lets a steel flange
            bolt up directly to a cast iron valve, pump, strainer, or
            existing section of cast iron pipe without an adapter or a
            custom drill.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            Class 125LW flanges are typically plate-cut from{" "}
            <strong>ASTM A36</strong> carbon steel for the ring
            configuration, or forged from <strong>A105</strong> when the
            spec calls for a hub. They are produced to AWWA C207 material
            requirements rather than the heavier B16.5 material spec,
            which is why the cross-section is lighter and the price
            sits below the equivalent B16.5 Class 150.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            When a spec calls for a steel flange that bolts to a cast iron
            valve or pump, the answer is almost always a Class 125LW
            slip-on, blind, or weld neck. See the{" "}
            <Link
              href="/standards/awwa-flanges"
              className="text-[#475569] underline"
            >
              AWWA C207 reference
            </Link>{" "}
            for the full plate-cut steel family in waterworks service.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Where the B16.1 Pattern Still Lives
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Legacy Cast Iron Systems
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-3">
                Gray iron per ASTM A126 Class A, B, and C is the historical
                material for B16.1 flanges. Class B is the most common.
                Cast iron is brittle, which is why flat-face flanges (FF)
                are used when mating steel to cast iron. A raised face
                concentrates load and can crack the cast iron flange.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                These systems are still in service. The pattern is
                preserved by the plate-cut steel flanges that replace
                them one section at a time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                Where the Pattern Shows Up
              </h3>
              <ul className="text-gray-300 leading-relaxed text-sm space-y-2">
                <li>Municipal water distribution (low pressure)</li>
                <li>Wastewater treatment plant headers</li>
                <li>HVAC chilled and condenser water</li>
                <li>Low-pressure steam and condensate</li>
                <li>Fire protection mains on older systems</li>
                <li>
                  Plant utility water and any application using cast iron
                  pumps, valves, or strainers as the mating part
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need Class 125LW Steel Flanges?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We stock plate-cut A36 ring flanges and forged A105 weld necks
            built to the B16.1 Class 125 pattern, in sizes 4 inch through
            144 inch standard and larger on custom work. Tell us the mating
            part and we will match the bolt pattern.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-6 py-3 rounded font-semibold hover:bg-gray-100"
            >
              Call (281) 484-8325
            </a>
            <a
              href="mailto:sales@texasflange.com"
              className="border border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#475569]"
            >
              sales@texasflange.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
