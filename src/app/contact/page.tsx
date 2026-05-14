import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Steel Flange. Quotes, specifications, MTR requests, and technical questions on forged, plate-cut, and custom steel flanges. (281) 484-8325 / sales@texasflange.com."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">Contact</p>
          <h1 className="text-5xl font-display font-bold mb-6 text-white">Let's Get You a Quote</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Send a drawing, a BOM, or a description of what you need. Forged catalog, plate-cut
            non-standard, or custom-bored. We will sort out the details and return a firm quote with
            lead time.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded p-8">
            <h2 className="text-2xl font-display font-bold mb-6 text-ink">Get in Touch</h2>
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-wider text-[#475569] font-semibold mb-1">Phone</p>
                <a href="tel:+12814848325" className="text-xl text-ink font-semibold hover:text-[#475569]">
                  (281) 484-8325
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-[#475569] font-semibold mb-1">Email</p>
                <a href="mailto:sales@texasflange.com" className="text-xl text-ink font-semibold hover:text-[#475569]">
                  sales@texasflange.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-[#475569] font-semibold mb-1">Mailing Address</p>
                <p className="text-ink">PO Box 2889<br />Pearland, TX 77588</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wider text-[#475569] font-semibold mb-1">Hours</p>
                <p className="text-ink">Monday to Friday<br />8:00 AM to 5:00 PM CST</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded p-8">
            <h2 className="text-2xl font-display font-bold mb-4 text-ink">What to Send</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Faster quotes happen when we have what we need. If you can include the following, the
              quote turns around quicker:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Flange type and production method (forged, plate-cut, custom)</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Size (NPS or OD) and pressure class</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Material grade (A105, F316, F91, or service conditions)</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Standard (ASME B16.5, B16.47, AWWA C207, MSS SP-44)</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Facing type (RF, FF, RTJ)</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Quantity and need-by date</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> Domestic or import requirements</li>
              <li className="flex items-start"><span className="text-[#475569] mr-2">&#10003;</span> MTR, PMI, or NACE certification needs</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Don't have all of it? Send what you have. We will fill in the gaps before quoting.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-4 text-white">Need It Yesterday?</h2>
          <p className="text-lg text-white/90 mb-6">
            Call directly. The phone gets answered by someone who can help.
          </p>
          <a href="tel:+12814848325" className="inline-block bg-white text-[#475569] px-10 py-4 rounded font-bold text-xl hover:bg-cream transition">
            (281) 484-8325
          </a>
        </div>
      </section>
    </>
  );
}
