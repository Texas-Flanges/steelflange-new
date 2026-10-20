import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#475569] to-transparent" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#475569] uppercase tracking-[0.3em] text-sm font-semibold mb-6">
            Forged. Plate-Cut. Custom.
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
            Steel Flanges Built for<br />
            <span className="text-[#475569]">Every Service Class</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            A105 carbon for the day-to-day. A694 high yield for Class 600 and above. F22 and F91 chrome-moly for high-temp creep service. Plate-cut AWWA for waterworks. Custom diameters out to 203 inches. Whatever the project needs, we stock or machine it.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#475569] text-white px-8 py-3 rounded font-semibold hover:bg-[#334155] transition">
              Request a Quote
            </Link>
            <Link href="/products/flanges" className="border border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">
              Browse Flanges
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] border-t border-[#475569]/30 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3 text-center">Three Production Paths</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-white">Forged, Plate, or Custom</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PathCard tier="Forged" desc="The industry default. ASME B16.5 and B16.47 forged carbon, stainless, and alloy. A105, A350 LF2, F11, F22, F91, plus duplex and exotic. Class 150 through 2500. 1/2 inch through 60 inch NPS." href="/standards/asme-flanges" />
            <PathCard tier="Plate-Cut" desc="Flame-cut or CNC-machined from certified plate. AWWA C207 for waterworks, B16.1 cast iron pattern compatibility, structural connections, tank nozzles. Economical for low-pressure and non-code service." href="/standards/awwa-flanges" />
            <PathCard tier="Custom" desc="Non-standard sizes through 203 inches. Overbore, special facings, ring-type joint grooves, weld overlay, hard facing. Drawings or specs, either works. Full MTR documentation on every piece." href="/products/custom-machining" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Stat number="203&quot;" label="Max Custom Diameter" />
          <Stat number="50+" label="Material Grades" />
          <Stat number="A105 - F91" label="Carbon to Chrome-Moly" />
          <Stat number="1986" label="Supplying Since" />
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">What We Supply</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">Every Steel Flange Type. Every Configuration.</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Slip-on for forgiving fit-up. Weld neck when the service gets serious. Blind to cap it off. Plus the specialty work: orifice, spectacle blind, long weld neck, RTJ, lap joint. All in steel.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ProductCard
              title="Flanges"
              desc="Weld neck, slip-on, blind, threaded, socket weld, lap joint, orifice, spectacle blind, plate, long weld neck. 1/2 inch through 203 inch. Class 150 through 2500."
              bullets={["ASME B16.5 & B16.47", "AWWA C207 & C228", "API 605 & MSS SP-44", "DIN & EN 1092-1"]}
              href="/products/flanges"
            />
            <ProductCard
              title="Pipe Fittings"
              desc="Elbows, tees, reducers, caps, couplings, unions, and specialty fittings. Butt-weld, socket-weld, threaded. Carbon, stainless, chrome alloy."
              bullets={["ASME B16.9 & B16.11", "Schedule 10 through XXH", "Seamless & welded", "Hot induction bends"]}
              href="/products/fittings"
            />
            <ProductCard
              title="Custom Machining"
              desc="Non-standard bores, overbore flanges, RTJ grooves, weld overlay, hard facing, oversized blanks. Drawings or specs. The work that catalog flanges cannot cover."
              bullets={["CNC turning & milling", "Ring-type joint grooves", "Weld overlay & hard facing", "Full MTR documentation"]}
              href="/products/custom-machining"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Standards & Compliance</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">Every Code, Documented</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Forged or plate, every flange ships with full material traceability against the standard it was ordered to. EN 10204 3.1 and 3.2 certificates on request.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StandardCard code="ASME B16.5" desc="Pipe Flanges 1/2&quot; - 24&quot;" />
            <StandardCard code="ASME B16.47" desc="Large Diameter 26&quot; - 60&quot;" />
            <StandardCard code="AWWA C207" desc="Plate Flanges 4&quot; - 144&quot; (Cl F: 4&quot; - 48&quot;)" />
            <StandardCard code="API 605" desc="Petroleum Service Flanges" />
            <StandardCard code="ANSI B16.1" desc="Cast Iron Compatibility" />
            <StandardCard code="MSS SP-44" desc="High Yield F42 - F70" />
            <StandardCard code="DIN / EN 1092" desc="European Metric" />
            <StandardCard code="NACE MR0175" desc="Sour Service Materials" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">The Difference</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-ink">Why Engineers and Buyers Pick Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard
              title="Forged AND Plate"
              desc="Most distributors do one or the other. We supply both. Forged for ASME pressure piping, plate-cut for AWWA waterworks and structural. One vendor, one set of paperwork."
            />
            <WhyCard
              title="Custom Without the Wait"
              desc="Non-standard bores, oversized blanks, special facings, RTJ grooves. Our machining program runs alongside stock inventory through partner shops. Catalog stops where most jobs actually start."
            />
            <WhyCard
              title="Full Material Range"
              desc="A105 mild carbon for the day-to-day. A694 high yield for Class 600 and above. F11, F22, F91 chrome-moly for steam and high-temp. Duplex and exotic when service demands it."
            />
            <WhyCard
              title="Sizes Through 203 Inches"
              desc="Standard ASME caps at 60 inch. AWWA goes to 144. Above 144 inch is fully custom plate fabrication outside any published standard; dimensions, drilling, and pressure rating are project-specific. We have coordinated plate-cut work through 203 inches on prior projects."
            />
            <WhyCard
              title="MTRs Before the Truck Arrives"
              desc="Every order includes mill test reports traceable to the heat number. No chasing paperwork after delivery. EN 10204 3.1 and 3.2 certificates available on request."
            />
            <WhyCard
              title="Domestic or Import"
              desc="Buy American projects covered. AIS and BABA documentation when required. Import sourcing when the budget calls for it. Both sides of the supply chain handled."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Sectors We Serve</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">From Refinery to Water Main</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Different industries, different specs. Same standard of execution.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { slug: "oil-gas", name: "Oil & Gas" },
              { slug: "petrochemical", name: "Petrochemical" },
              { slug: "power-generation", name: "Power Generation" },
              { slug: "waterworks", name: "Water & Wastewater" },
              { slug: "chemical-processing", name: "Chemical Processing" },
              { slug: "mining", name: "Mining & Minerals" },
              { slug: "pulp-paper", name: "Pulp & Paper" },
              { slug: "food-beverage", name: "Food & Beverage" },
              { slug: "agriculture", name: "Agriculture" },
              { slug: "hvac", name: "HVAC & Mechanical" },
              { slug: "marine", name: "Marine & Shipbuilding" },
              { slug: "data-centers", name: "Data Centers" }
            ].map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="bg-[#2A2F35] border border-gray-700 px-4 py-3 rounded text-center text-white hover:border-[#475569] hover:text-[#475569] transition">
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Technical Resources</p>
          <h2 className="text-4xl font-display font-bold mb-4 text-ink">Engineering Reference</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Spec sheets are fine. Understanding why the spec matters is better. These guides help your team make faster, more confident decisions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard title="Flange Types Guide" desc="Weld neck vs slip-on vs blind vs plate. Application criteria for each." href="https://www.texasflange.com/blog/the-complete-guide-to-flanges/?ref=steelflange-new" />
            <TechCard title="Pressure-Temperature Ratings" desc="ASME B16.5 P-T tables. How class translates to PSI at temperature." href="https://www.texasflange.com/blog/use-of-asme-b16-5-standards-for-flange-pressure-ratings/?ref=steelflange-new" />
            <TechCard title="Bolt Torque Reference" desc="Recommended torque values for B7 studs by size and lubrication." href="https://www.texasflange.com/blog/bolt-dimensions-explained-a-complete-guide-to-measuring-diameter-threads-and-length/?ref=steelflange-new" />
            <TechCard title="Material Grade Guide" desc="A105 vs A694 vs F11 vs F22 vs F91. Which grade for which service." href="https://www.texasflange.com/blog/do-you-offer-different-material-grades-for-a-variety-of-industrial-flanges/?ref=steelflange-new" />
            <TechCard title="Corrosion Prevention" desc="Coatings, galvanizing, material selection for corrosive environments." href="https://www.texasflange.com/blog/flange-maintenance-101-prevent-rust-corrosion-effectively/?ref=steelflange-new" />
            <TechCard title="Flange Dimension Tables" desc="ASME B16.5 dimensional data. OD, bolt circle, bolt holes, thickness by class." href="https://www.texasflange.com/flange-drawings-models2/blind/?ref=steelflange-new" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Common Questions</p>
          <h2 className="text-4xl font-display font-bold mb-12 text-ink">Frequently Asked</h2>
          <div className="space-y-6">
            <FaqItem q="When should I use plate flanges instead of forged?" a="Plate flanges are appropriate for low-pressure, non-code applications or for very large diameters where forgings are impractical. They are not a substitute for forged flanges in ASME pressure piping without engineering approval. Common use cases include AWWA waterworks (typically 300 psi or less), structural steel connections, tank nozzles, and ductwork." />
            <FaqItem q="Whats the difference between A105 and A694 carbon steel?" a="A105 is standard forged carbon steel with a yield around 36 ksi. It covers most general industrial piping in Class 150 through 600. A694 is high yield carbon, heat-treated to push the yield threshold up. Grades F42 through F70 cover yields from 42 to 70 ksi. You see A694 specified in Class 600 and above, particularly on pipeline flanges (per MSS SP-44) where the mating pipe is also high yield (X42 through X70)." />
            <FaqItem q="What size range can you supply?" a="Standard inventory covers 1/2 inch through 24 inch NPS in ASME B16.5. Large diameter from 26 inch through 60 inch in ASME B16.47. AWWA C207 goes through 144 inch in Class B, D, and E; Class F is published only through 48 inch. Above 144 inch is fully custom plate fabrication outside any published standard. We have coordinated plate-cut work through 203 inches OD on prior projects. Call (281) 484-8325 for project-specific size questions." />
            <FaqItem q="Can you handle chrome-moly grades like F11, F22, and F91?" a="Yes. F11 and F22 are common chrome-moly grades for high-temperature service. F91 (Grade 91) is used in supercritical and ultra-supercritical steam piping where creep resistance is critical. We stock common sizes and source the rest. Post weld heat treatment and hardness control matter, so we recommend specifying the full processing requirements at quote time." />
            <FaqItem q="Do you provide mill test reports?" a="Every order ships with MTRs traceable to the original heat number. EN 10204 3.1 and 3.2 certificates available on request. You get the documentation before the truck arrives, not after." />
            <FaqItem q="What is your typical lead time?" a="Standard flanges ship from stock. Custom and high-yield work follows a clear production timeline with updates, not silence. Rush options available when the shutdown clock is running. Call (281) 484-8325 for project-specific timelines." />
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Need Steel Flanges? Let's Talk.
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need ten weld necks for a maintenance shutdown or a custom plate flange machined to drawing, the process starts with a conversation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#475569] px-8 py-3 rounded font-bold hover:bg-cream transition">Request a Quote</Link>
            <a href="tel:+12814848325" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#475569] transition">(281) 484-8325</a>
          </div>
        </div>
      </section>
    </>
  );
}

function PathCard({ tier, desc, href }: { tier: string; desc: string; href: string }) {
  return (
    <Link href={href} className="block bg-[#2A2F35] border border-gray-700 rounded p-6 hover:border-[#475569] transition">
      <p className="text-[#475569] text-xs uppercase tracking-wider mb-2 font-semibold">{tier}</p>
      <p className="text-gray-300 leading-relaxed">{desc}</p>
    </Link>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <p className="text-4xl md:text-5xl font-display font-bold text-[#475569]" dangerouslySetInnerHTML={{ __html: number }} />
      <p className="text-gray-700 text-sm uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

function ProductCard({ title, desc, bullets, href }: { title: string; desc: string; bullets: string[]; href: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded p-6 hover:border-[#475569] transition">
      <h3 className="text-2xl font-display font-bold mb-3 text-ink">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{desc}</p>
      <ul className="space-y-1 text-sm text-gray-700 mb-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span><span>{b}</span></li>
        ))}
      </ul>
      <Link href={href} className="text-[#475569] font-semibold hover:text-[#334155]">View Details &rarr;</Link>
    </div>
  );
}

function StandardCard({ code, desc }: { code: string; desc: string }) {
  return (
    <div className="border border-gray-700 rounded p-4 bg-[#2A2F35]">
      <p className="text-white font-display font-bold text-lg mb-1">{code}</p>
      <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

function WhyCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border-l-4 border-[#475569] pl-5">
      <h3 className="text-xl font-display font-bold mb-2 text-ink">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{desc}</p>
    </div>
  );
}

function TechCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded p-5 hover:border-[#475569] transition">
      <h3 className="font-display font-bold text-lg mb-2 text-ink">{title}</h3>
      <p className="text-gray-700 text-sm">{desc}</p>
      <p className="text-[#475569] text-sm mt-3 font-semibold">Access Resource &rarr;</p>
    </a>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-white border border-gray-200 rounded p-5 group">
      <summary className="font-semibold text-ink cursor-pointer flex justify-between items-center">
        <span>{q}</span>
        <span className="text-[#475569] group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-700 mt-3 leading-relaxed">{a}</p>
    </details>
  );
}
