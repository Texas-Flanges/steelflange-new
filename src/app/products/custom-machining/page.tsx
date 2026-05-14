import Link from "next/link";

export const metadata = {
  title: "Custom Machining | Up to 203 Inch Diameter",
  description:
    "The custom shop. Non-standard bores, overbore flanges, special facings, RTJ grooves, weld overlay, hard facing, and plate-cut flanges to drawing through 203 inch outside diameter.",
};

function CapabilityCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white border border-gray-200 p-6">
      <h3 className="text-lg font-display font-bold text-[#1B1F23] mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-[#0F1316] border border-gray-700 p-8">
      <p className="text-[#475569] font-display text-3xl font-bold mb-2">{number}</p>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{body}</p>
    </div>
  );
}

export default function CustomMachiningPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Custom Machining</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            The Custom Shop. Up to 203 Inch.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Non-standard bores, overbore flanges, special facings, ring-type joint grooves, weld
            overlay, hard facing, and plate-cut flanges to drawing through 203 inch outside
            diameter. Send a drawing or a specification. We will source the forging, the bar
            stock, or the plate, and have it machined to print.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Headline Capability</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-6">
            203 Inch Outside Diameter
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-6">
            The headline capability of the custom program is size. Plate-cut steel flanges run
            through 203 inch outside diameter on custom orders. That covers nearly any vessel
            head, large-diameter waterworks tap, hydroelectric penstock connection, or industrial
            ducting flange a project can put in front of us.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Below that, the custom desk handles everything else that does not fit the catalog:
            non-standard bores, overbores, custom facings, RTJ retrofits, weld overlay, hard
            facing, and one-off plate work. If a steel flange exists on paper, it can be made.
          </p>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Capabilities</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            What the Custom Shop Handles
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10">
            The list below covers the work that crosses the custom desk most often. If something
            you need is not here, it is probably still possible. Ask.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <CapabilityCard
              title="Plate-Cut to Drawing"
              body="Profile-cut steel plate flanges produced to engineering drawing. Carbon steel, structural grades, and select alloys. Outside diameters through 203 inch. Drilling, facing, and surface prep all per print."
            />
            <CapabilityCard
              title="Non-Standard Bores"
              body="Bore-to-fit on weld neck and slip-on flanges when pipe ID does not match a standard schedule. Common on imported pipe, heavy wall pipeline, and legacy systems."
            />
            <CapabilityCard
              title="Overbore Flanges"
              body="Larger inside diameter than the original spec to reduce turbulence, fit liner sleeves, or accommodate insulation. Includes ID taper if requested."
            />
            <CapabilityCard
              title="Special Facings"
              body="Tongue and groove, male and female, lens ring, and other non-standard sealing geometries machined to ASME B16.5 supplemental requirements or drawing."
            />
            <CapabilityCard
              title="Ring-Type Joint Grooves"
              body="R, RX, and BX style ring grooves cut into existing raised face flanges or machined from blank stock for high-pressure sealing service."
            />
            <CapabilityCard
              title="Weld Overlay"
              body="Inconel 625, 825, and stainless cladding on carbon flange bodies for corrosion or wear service. Machined back to spec and PMI-verified before ship."
            />
            <CapabilityCard
              title="Hard Facing"
              body="Cobalt-based and chromium-carbide hard facing on seat surfaces, gate surfaces, and other wear-critical geometries. Ground to finish after deposition."
            />
            <CapabilityCard
              title="Drilling Modifications"
              body="Bolt pattern changes when retrofitting between standards, for example AWWA C207 to ASME B16.5 on a fire main upgrade or B16.47 Series A to Series B."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Process</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            How a Custom Job Runs
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            Five steps from drawing in to MTR out. No theatrics. The job either makes sense or it
            does not, and we tell you which one early.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProcessStep
              number="01"
              title="Drawing or Spec"
              body="A dimensioned drawing is ideal. A written specification works. Even a photo with rough measurements is enough to start the conversation. We will tell you what else we need."
            />
            <ProcessStep
              number="02"
              title="Review"
              body="We check the drawing against shop capacity, applicable standards, and material availability. If something on the print does not line up with the spec, we flag it before quoting."
            />
            <ProcessStep
              number="03"
              title="Quote"
              body="Firm price and a real lead time, not a placeholder. Material, machining, documentation, and freight all spelled out. Approved drawing locks the order."
            />
            <ProcessStep
              number="04"
              title="Machine"
              body="Forging, bar stock, or plate sourced to the specified material grade. Machined to print on the appropriate equipment. In-process and final inspection per the QA plan agreed up front."
            />
            <ProcessStep
              number="05"
              title="MTR and Ship"
              body="Full MTR package with heat numbers traceable to the finished part. PMI, dimensional reports, and NDE results included when called for. Then it ships."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Documentation</p>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            MTR Package as Standard
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-8">
            Every custom job ships with the documentation a pressure-piping audit expects to see.
            Heat-numbered Mill Test Reports tying the raw material to the finished part, the
            machining traveler, and any inspection records called for in the order.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0F1316] border border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-white mb-3">
                Standard Documentation
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>- Mill Test Report with heat number</li>
                <li>- Chemical and mechanical properties</li>
                <li>- Dimensional inspection report</li>
                <li>- Material certification per ordered grade</li>
              </ul>
            </div>
            <div className="bg-[#0F1316] border border-gray-700 p-6">
              <h3 className="text-lg font-display font-bold text-white mb-3">
                Available on Request
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>- Positive Material Identification (PMI)</li>
                <li>- NACE MR0175 / ISO 15156 compliance</li>
                <li>- Liquid penetrant or magnetic particle NDE</li>
                <li>- Charpy impact testing for low-temp service</li>
                <li>- Hardness testing on overlay and hard-faced surfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Examples</p>
          <h2 className="text-4xl font-display font-bold text-[#1B1F23] mb-4">
            Work We See Often
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-10">
            Real categories of work that come through the custom desk. None of this is rare. Most
            of it is just outside what a catalog forging covers off the shelf.
          </p>
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                Large-Diameter Plate Flange
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A municipal water authority needs a 168 inch plate flange to terminate a transmission
                main at a clearwell. AWWA C207 stops at 144 inch. We plate-cut to drawing, drill the
                bolt pattern to match the mating ring, and ship with MTR.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                Heavy-Wall Pipeline Bore Match
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A pipeline contractor receives heavy-wall A694 F65 pipe with an inside diameter
                that does not match any standard schedule. We bore the mating weld neck flanges to
                match the pipe ID so the field weld is a flush root.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                RTJ Conversion on Existing Vessel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A refinery wants to upgrade a Class 600 raised face nozzle to RTJ during a
                turnaround. We machine the R-style groove into the existing flange face per
                ASME B16.20 dimensions and re-certify the surface finish.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                Inconel Overlay on Sour Service
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A producer needs the wetted surface of a carbon steel flange clad with Inconel 625
                for a high-H2S well. We have the flange overlay-welded, machined back to spec, and
                PMI-verified before ship.
              </p>
            </div>
            <div className="bg-white border-l-4 border-[#475569] p-6">
              <h3 className="text-xl font-display font-bold text-[#1B1F23] mb-2">
                Legacy Mill Flange Recreation
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A mill is running 40-year-old equipment with a proprietary flange pattern. We
                field-measure a sample, draft the replacement, and have it produced in the
                original material grade or an approved substitution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Have a Drawing?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Email the print, the photo, or the rough sketch and we will tell you whether it is
            stock, modified stock, or a full custom job. Quotes typically come back within one
            business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sales@texasflange.com"
              className="inline-block bg-white text-[#475569] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              sales@texasflange.com
            </a>
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
