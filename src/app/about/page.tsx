import Link from "next/link";

export const metadata = {
  title: "About This Resource",
  description: "About the Steel Flange resource. A reference for engineers and buyers sourcing forged, plate-cut, or custom steel flanges."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">About This Resource</p>
          <h1 className="text-5xl font-display font-bold mb-6 text-white">Forged, Plate, or Custom. The Full Steel Flange Spectrum.</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Most steel flange references stop at the forged catalog. This one does not. It exists for
            engineers, buyers, and procurement teams who have to spec across the full production
            spectrum, from a 1/2 inch A105 slip-on to a 203 inch plate-cut blind, sometimes inside the
            same project.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="text-3xl font-display font-bold mb-6 text-ink">Why This Site Exists</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Steel flange work does not live in one production method. A municipal water project might
            run forged ASME B16.5 slip-ons through the pump house, plate-cut AWWA C207 Class D rings
            on the large diameter mains, and custom-bored transitions where the two systems meet.
            Three production methods, three standards, often three different suppliers. The paperwork
            and the lead times stretch out across all of them.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This resource was built to flatten that. Forged catalog flanges sit alongside plate-cut
            structural rings. Slip-on slip-ons through 203 inch sit alongside F91 chrome-moly weld
            necks for power generation service. Sourcing comes from one point. Documentation matches.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">What You Can Find Here</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Reference content for the major production methods, standards, and materials in
            commercial steel flange use:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Forged flanges per ASME B16.5 (1/2 inch through 24 inch) and B16.47 Series A and B (26 inch through 60 inch)</li>
            <li>Plate-cut flanges per AWWA C207, MSS SP-44, and custom drawings for non-catalog sizes</li>
            <li>Slip-on specialty in extreme diameters through 203 inch for tank, vessel, and structural service</li>
            <li>Carbon grades from A105 and A350 LF2 through A694 high yield for pipeline mating</li>
            <li>Stainless 304 and 316 in F304/F304L and F316/F316L dual certified</li>
            <li>Chrome-moly F11, F22, and F91 for elevated temperature and creep service</li>
            <li>Nickel alloys including Inconel 625, Hastelloy C-276, and Monel 400 for corrosive duty</li>
            <li>NACE MR0175 compliance for sour service applications</li>
          </ul>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Who Is Behind It</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The supply side of this resource is a Houston-area distributor of forged, plate-cut,
            and custom steel flanges shipping into oil and gas, waterworks, power generation,
            petrochemical, and structural fabrication. The content here draws on the engineering
            work that goes into every non-catalog quote, and the technical questions that come in
            by phone every week.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            What that means in practice: the dimensional charts, the metallurgy notes, and the
            production method comparisons here were not pulled from a textbook. They came from
            actually sourcing steel flanges to job sites with the right MTR paperwork and the right
            heat traceability.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">The Production Spectrum</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The choice between forged and plate-cut is rarely cosmetic. Forged flanges carry the
            grain orientation that high pressure cyclic service demands. Plate-cut flanges open up
            sizes, thicknesses, and bore configurations that no forging mill will tool for under
            production minimums. Custom work bridges the two when the application falls between
            catalog standards. Knowing which method belongs on which line item is half the spec.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">How To Use It</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If you are speccing flanges, the <Link href="/standards" className="text-[#475569] font-semibold">Standards</Link> and
            {" "}<Link href="/materials" className="text-[#475569] font-semibold">Materials</Link> sections will help you cross-reference
            production method, grade, and pressure class. If you are looking at a specific application,
            the {" "}<Link href="/industries" className="text-[#475569] font-semibold">Industries</Link> pages map common steel
            flange selections to common service conditions. If you need dimensions or torque values,
            the {" "}<Link href="/tools" className="text-[#475569] font-semibold">Tools</Link> section has calculators for bolt
            torque, flange dimensions, and pressure-temperature lookup.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When you are ready to source, the contact info is right there. No web forms that route
            into a void.
          </p>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Ready to Talk Steel Flanges?</h2>
          <p className="text-lg text-white/90 mb-6">
            Forged, plate-cut, or custom. The supply team is one phone call away.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#475569] px-8 py-3 rounded font-bold hover:bg-cream transition">
              Request a Quote
            </Link>
            <a href="tel:+12814848325" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#475569] transition">
              (281) 484-8325
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
