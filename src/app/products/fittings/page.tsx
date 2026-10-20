import Link from "next/link";

export const metadata = {
  title: "Pipe Fittings | Butt-Weld, Socket-Weld, Threaded",
  description:
    "Butt-weld, socket-weld, and threaded pipe fittings to ASME B16.9 and B16.11. Elbows, tees, reducers, caps, couplings, unions, stub ends, and hot induction bends to match the flange catalog.",
};

function FittingCard({ name, blurb }: { name: string; blurb: string }) {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">{name}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{blurb}</p>
    </div>
  );
}

function ConfigBlock({
  title,
  body,
  standard,
}: {
  title: string;
  body: string;
  standard: string;
}) {
  return (
    <div className="bg-[#0F1316] border border-gray-700 p-8">
      <p className="uppercase tracking-wider text-[#475569] text-xs mb-2">{standard}</p>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{body}</p>
    </div>
  );
}

export default function FittingsPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Pipe Fittings</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Fittings That Match the Flanges
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Elbows, tees, reducers, caps, couplings, unions, and stub ends in butt-weld, socket-
            weld, and threaded configurations. ASME B16.9 and B16.11 sized from small bore through
            60 inch, schedule 10 through XXH, in the same material grades as the flange catalog so
            a single BOM does not bounce between three suppliers.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Categories</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-10">
            What We Supply
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <FittingCard
              name="Elbows - 45 and 90"
              blurb="Long radius and short radius. 45 degree and 90 degree. Available in standard and reducing configurations. Long radius is the default unless space requires the short."
            />
            <FittingCard
              name="Tees"
              blurb="Equal tees and reducing tees. Straight branch is standard. Lateral and barred tees available on request for specific service requirements."
            />
            <FittingCard
              name="Reducers"
              blurb="Concentric for centerline-critical lines such as steam and gas. Eccentric for liquid service where draining or vapor pocketing is a concern. Both supplied across schedules."
            />
            <FittingCard
              name="Caps"
              blurb="Pressed and forged pipe caps to close line ends. Used during construction, hydrotest, and for permanent terminations on dead legs."
            />
            <FittingCard
              name="Couplings"
              blurb="Full, half, and reducing couplings in socket-weld and threaded. Sized to ASME B16.11 in classes 3000, 6000, and 9000."
            />
            <FittingCard
              name="Unions"
              blurb="Threaded unions for piping that needs to be broken apart for service or inspection. Supplied in carbon, stainless, and select alloys."
            />
            <FittingCard
              name="Stub Ends"
              blurb="Type A and Type B stub ends to pair with lap joint flanges. Common in stainless and exotic alloy systems where the lap joint flange itself can be carbon."
            />
            <FittingCard
              name="Crosses"
              blurb="Equal and reducing crosses. Less common than tees but available across butt-weld and socket-weld configurations."
            />
            <FittingCard
              name="Nipples and Swages"
              blurb="Threaded and plain-end nipples, swage nipples for size transitions in small bore service. Concentric and eccentric profiles."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">End Connections</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Three Configurations
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            The end connection drives almost everything else: installation cost, leak path, fatigue
            life, and inspectability. Match the fitting type to the service, not just the pipe
            schedule.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ConfigBlock
              standard="ASME B16.9"
              title="Butt-Weld"
              body="Bevel-prepped ends welded full penetration to the pipe. Smooth bore, full strength, fully inspectable. Default for process and pipeline service at all pressures."
            />
            <ConfigBlock
              standard="ASME B16.11"
              title="Socket-Weld"
              body="Pipe slips into a counterbore and is fillet welded externally. Common on small bore high pressure. Faster fit-up than butt-weld but a crevice exists at the socket bottom."
            />
            <ConfigBlock
              standard="ASME B16.11"
              title="Threaded"
              body="NPT threaded ends in classes 2000, 3000, and 6000. Used where welding is restricted, on instrument tubing, and on utility piping. No welder qualification required for installation."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Schedules</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            Schedule 10 Through XXH
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Wall thickness on a butt-weld fitting must match the pipe it joins. The schedule range
            below covers everything from light-gauge stainless utility through extra-heavy high-
            pressure process. If the line list calls out a schedule, we match it.
          </p>
          <div className="bg-white border border-gray-200 p-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
              <div>
                <p className="font-semibold text-[#1B1F23] mb-1">Light</p>
                <p className="text-sm text-gray-700">Sch 5S, 10, 10S, 20</p>
              </div>
              <div>
                <p className="font-semibold text-[#1B1F23] mb-1">Standard</p>
                <p className="text-sm text-gray-700">Sch 30, 40, 40S, STD</p>
              </div>
              <div>
                <p className="font-semibold text-[#1B1F23] mb-1">Heavy</p>
                <p className="text-sm text-gray-700">Sch 60, 80, 80S, XH</p>
              </div>
              <div>
                <p className="font-semibold text-[#1B1F23] mb-1">Extra Heavy</p>
                <p className="text-sm text-gray-700">Sch 100, 120, 140, 160, XXH</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl">
            Schedule designations using the S suffix (5S, 10S, 40S, 80S) apply to stainless and
            follow a slightly different wall thickness table from the non-S equivalents at sizes
            above 12 inch. On a stainless project, double-check the wall against the spec before
            ordering.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Specialty</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Hot Induction Bends
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-6">
            Standard butt-weld elbows come in 1D, 1.5D, and 3D radii. When a project needs a 5D
            sweep, a non-standard angle, or a bend on heavy-wall pipe that cannot be field-bent,
            hot induction is the answer.
          </p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mb-6">
            Induction bending heats a narrow band of the pipe to forming temperature while the
            pipe is pushed through a fixed-radius arm. The result is a smooth bend with minimal
            ovality, controlled wall thinning at the extrados, and consistent mechanical properties
            through the bent region. Sourced in 3D, 5D, 7D, 10D, and custom radii across carbon,
            low-temp carbon, stainless, and alloy materials.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#0F1316] border border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">Radius Range</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                3D through 20D and beyond. Custom radii to drawing on request.
              </p>
            </div>
            <div className="bg-[#0F1316] border border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">Angle Range</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Any angle from a few degrees through 180. Tangent lengths to spec on both ends.
              </p>
            </div>
            <div className="bg-[#0F1316] border border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-white mb-2">Size Range</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Through 60 inch outside diameter. Heavy wall and pipeline grades supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Need Fittings to Match the Flanges?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            One purchase order. One MTR package. One delivery. Send the BOM and we will quote it.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#475569] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:2814848325"
              className="inline-block border border-white text-white font-semibold px-8 py-3 hover:bg-white hover:text-[#475569] transition-colors"
            >
              Call (281) 484-8325
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
