import Link from "next/link";

export const metadata = {
  title: "Products | Steel Flanges, Fittings & Custom Machining",
  description:
    "Forged, plate, or custom. Steel flanges from 1/2 inch through 203 inch in A105 carbon through F91 chrome-moly. Plus pipe fittings and a full custom machining program from a single supplier.",
};

type CategoryCardProps = {
  eyebrow: string;
  title: string;
  href: string;
  body: string;
  bullets: string[];
};

function CategoryCard({ eyebrow, title, href, body, bullets }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white border border-gray-200 p-8 hover:border-[#475569] transition-colors"
    >
      <p className="uppercase tracking-wider text-[#475569] text-xs mb-3">{eyebrow}</p>
      <h3 className="text-2xl font-display font-bold text-[#1B1F23] mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-5">{body}</p>
      <ul className="space-y-2 mb-6">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-gray-700">
            - {b}
          </li>
        ))}
      </ul>
      <span className="text-[#475569] font-semibold text-sm">Explore the category -&gt;</span>
    </Link>
  );
}

function StandardChip({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block border border-gray-600 px-4 py-2 text-sm text-gray-300 hover:border-[#475569] hover:text-white transition-colors"
    >
      {label}
    </Link>
  );
}

export default function ProductsHubPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Product Catalog</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Forged, Plate, or Custom. One Source.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Steel flanges across the full production spectrum. Forged ASME B16.5 from 1/2 inch
            through 24 inch, B16.47 large diameter, plate-cut AWWA and structural through 203 inch,
            and full custom machining when the catalog runs out. Plus the pipe fittings to match.
            One supplier, one purchase order, one MTR package.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Browse</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-10">
            What We Supply
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard
              eyebrow="Category 01"
              title="Flanges"
              href="/products/flanges"
              body="The full steel flange catalog. Weld neck, slip-on, blind, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, long weld neck, plate, and ring-type joint. Forged for pressure service, plate-cut for large-diameter water and structural work."
              bullets={[
                "1/2 inch through 203 inch diameters",
                "A105 carbon through F91 chrome-moly",
                "ASME B16.5, B16.47, AWWA C207, MSS SP-44",
              ]}
            />
            <CategoryCard
              eyebrow="Category 02"
              title="Pipe Fittings"
              href="/products/fittings"
              body="Butt-weld, socket-weld, and threaded fittings to ASME B16.9 and B16.11. Elbows, tees, reducers, caps, couplings, unions, and stub ends. Schedule 10 through XXH and hot induction bends as a specialty for non-standard radii."
              bullets={[
                "Schedule 10 through XXH",
                "Butt-weld, socket-weld, and threaded",
                "Hot induction bends to spec",
              ]}
            />
            <CategoryCard
              eyebrow="Category 03"
              title="Custom Machining"
              href="/products/custom-machining"
              body="Non-standard bores, overbore flanges, special facings, RTJ grooves, weld overlay, and plate-cut to drawing. Up to 203 inch outside diameter on plate work. Send a drawing or a specification and we will quote it against real shop capacity."
              bullets={[
                "Up to 203 inch outside diameter",
                "Plate-cut, overbore, special facing",
                "Weld overlay and hard facing",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Standards Coverage</p>
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            The Full Steel Flange Spectrum
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            A flange is only as useful as the standard it conforms to. We source across the entire
            steel flange production spectrum so a single project does not need three suppliers and
            three different MTR formats.
          </p>
          <div className="flex flex-wrap gap-3">
            <StandardChip label="ASME B16.5" href="/standards/asme-flanges" />
            <StandardChip label="ASME B16.47 Series A/B" href="/standards/asme-flanges" />
            <StandardChip label="MSS SP-44" href="/standards/asme-flanges" />
            <StandardChip label="AWWA C207" href="/standards/awwa-flanges" />
            <StandardChip label="ANSI" href="/standards/ansi-flanges" />
            <StandardChip label="DIN / EN 1092" href="/standards/din-flanges" />
            <StandardChip label="API 605" href="/products/flanges" />
            <StandardChip label="API 6A" href="/products/flanges" />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Why Source Here</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-10">
            Built for Procurement, Engineering, and Project Managers
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Forged and Plate Under One Roof
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most distributors stop at forged B16.5 or stop at plate-cut waterworks. We supply
                both. Class 600 weld neck in A105 and a 96 inch AWWA C207 ring out of plate ship
                on the same purchase order if the project calls for it.
              </p>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Material Traceability That Survives an Audit
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mill Test Reports tied to heat numbers, NACE MR0175 for sour service when specified,
                and full chemistry and mechanical reports on request. Standard practice, not an
                upcharge.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Inventory You Can Actually See
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Houston-area stock on the common sizes and schedules, mill direct on the long tail.
                If we do not have it on the shelf, we will tell you a real lead time instead of a
                guess.
              </p>
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-3">
                Engineering Help Without the Sales Routine
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bring the drawing, the line list, or the question. We will tell you what fits, what
                does not, and what the standard actually says. See the{" "}
                <Link href="/resources" className="text-[#475569] underline">
                  resources library
                </Link>{" "}
                and{" "}
                <Link href="/tools" className="text-[#475569] underline">
                  reference tools
                </Link>{" "}
                for self-serve material.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready for a Quote?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Send a line list, a drawing, or a question. We will come back with stock, lead times,
            and pricing on real items, not a brochure.
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
