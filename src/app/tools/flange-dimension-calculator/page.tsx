"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type FlangeRow = {
  size: string;
  od: string;
  bc: string;
  bolts: number;
  hole: string;
  bolt: string;
  thickness: string;
};

const B16_5_150: Record<string, FlangeRow> = {
  "0.5": { size: '1/2"', od: "3.50", bc: "2.375", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '7/16"' },
  "0.75": { size: '3/4"', od: "3.88", bc: "2.75", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '1/2"' },
  "1": { size: '1"', od: "4.25", bc: "3.125", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '9/16"' },
  "1.25": { size: '1-1/4"', od: "4.62", bc: "3.50", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '5/8"' },
  "1.5": { size: '1-1/2"', od: "5.00", bc: "3.875", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '11/16"' },
  "2": { size: '2"', od: "6.00", bc: "4.75", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '3/4"' },
  "2.5": { size: '2-1/2"', od: "7.00", bc: "5.50", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '7/8"' },
  "3": { size: '3"', od: "7.50", bc: "6.00", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '15/16"' },
  "4": { size: '4"', od: "9.00", bc: "7.50", bolts: 8, hole: '3/4"', bolt: '5/8"', thickness: '15/16"' },
  "5": { size: '5"', od: "10.00", bc: "8.50", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '15/16"' },
  "6": { size: '6"', od: "11.00", bc: "9.50", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1"' },
  "8": { size: '8"', od: "13.50", bc: "11.75", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1-1/8"' },
  "10": { size: '10"', od: "16.00", bc: "14.25", bolts: 12, hole: '1"', bolt: '7/8"', thickness: '1-3/16"' },
  "12": { size: '12"', od: "19.00", bc: "17.00", bolts: 12, hole: '1"', bolt: '7/8"', thickness: '1-1/4"' },
  "14": { size: '14"', od: "21.00", bc: "18.75", bolts: 12, hole: '1-1/8"', bolt: '1"', thickness: '1-3/8"' },
  "16": { size: '16"', od: "23.50", bc: "21.25", bolts: 16, hole: '1-1/8"', bolt: '1"', thickness: '1-7/16"' },
  "18": { size: '18"', od: "25.00", bc: "22.75", bolts: 16, hole: '1-1/4"', bolt: '1-1/8"', thickness: '1-9/16"' },
  "20": { size: '20"', od: "27.50", bc: "25.00", bolts: 20, hole: '1-1/4"', bolt: '1-1/8"', thickness: '1-11/16"' },
  "24": { size: '24"', od: "32.00", bc: "29.50", bolts: 20, hole: '1-3/8"', bolt: '1-1/4"', thickness: '1-7/8"' },
};

const B16_5_300: Record<string, FlangeRow> = {
  "0.5": { size: '1/2"', od: "3.75", bc: "2.625", bolts: 4, hole: '5/8"', bolt: '1/2"', thickness: '9/16"' },
  "0.75": { size: '3/4"', od: "4.62", bc: "3.25", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '5/8"' },
  "1": { size: '1"', od: "4.88", bc: "3.50", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '11/16"' },
  "1.25": { size: '1-1/4"', od: "5.25", bc: "3.875", bolts: 4, hole: '3/4"', bolt: '5/8"', thickness: '3/4"' },
  "1.5": { size: '1-1/2"', od: "6.12", bc: "4.50", bolts: 4, hole: '7/8"', bolt: '3/4"', thickness: '13/16"' },
  "2": { size: '2"', od: "6.50", bc: "5.00", bolts: 8, hole: '3/4"', bolt: '5/8"', thickness: '7/8"' },
  "2.5": { size: '2-1/2"', od: "7.50", bc: "5.875", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1"' },
  "3": { size: '3"', od: "8.25", bc: "6.625", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1-1/8"' },
  "4": { size: '4"', od: "10.00", bc: "7.875", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1-1/4"' },
  "5": { size: '5"', od: "11.00", bc: "9.25", bolts: 8, hole: '7/8"', bolt: '3/4"', thickness: '1-3/8"' },
  "6": { size: '6"', od: "12.50", bc: "10.625", bolts: 12, hole: '7/8"', bolt: '3/4"', thickness: '1-7/16"' },
  "8": { size: '8"', od: "15.00", bc: "13.00", bolts: 12, hole: '1"', bolt: '7/8"', thickness: '1-5/8"' },
  "10": { size: '10"', od: "17.50", bc: "15.25", bolts: 16, hole: '1-1/8"', bolt: '1"', thickness: '1-7/8"' },
  "12": { size: '12"', od: "20.50", bc: "17.75", bolts: 16, hole: '1-1/4"', bolt: '1-1/8"', thickness: '2"' },
  "14": { size: '14"', od: "23.00", bc: "20.25", bolts: 20, hole: '1-1/4"', bolt: '1-1/8"', thickness: '2-1/8"' },
  "16": { size: '16"', od: "25.50", bc: "22.50", bolts: 20, hole: '1-3/8"', bolt: '1-1/4"', thickness: '2-1/4"' },
  "18": { size: '18"', od: "28.00", bc: "24.75", bolts: 24, hole: '1-3/8"', bolt: '1-1/4"', thickness: '2-3/8"' },
  "20": { size: '20"', od: "30.50", bc: "27.00", bolts: 24, hole: '1-3/8"', bolt: '1-1/4"', thickness: '2-1/2"' },
  "24": { size: '24"', od: "36.00", bc: "32.00", bolts: 24, hole: '1-5/8"', bolt: '1-1/2"', thickness: '2-3/4"' },
};

const CLASSES = ["150", "300"];

const SIZES = [
  "0.5", "0.75", "1", "1.25", "1.5", "2", "2.5", "3", "4",
  "5", "6", "8", "10", "12", "14", "16", "18", "20", "24",
];

export default function FlangeDimensionCalculator() {
  const [klass, setKlass] = useState<string>("150");
  const [size, setSize] = useState<string>("4");

  const row = useMemo<FlangeRow | null>(() => {
    if (klass === "150") {
      return B16_5_150[size] ?? null;
    }
    if (klass === "300") {
      return B16_5_300[size] ?? null;
    }
    return null;
  }, [klass, size]);

  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
            Tool 02
          </p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">
            Flange Dimension Lookup
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Look up the outside diameter, bolt circle, bolt count, bolt
            hole size, recommended bolt diameter, and flange thickness for
            ASME B16.5 Class 150 and Class 300 weld neck flanges. Select
            the pressure class and nominal pipe size to populate the
            reference row.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F6F0] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded shadow border border-gray-200">
            <h2 className="text-2xl font-display font-bold text-[#1B1F23] mb-6">
              Inputs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Pressure Class (ASME B16.5)
                </label>
                <select
                  value={klass}
                  onChange={(e) => setKlass(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {CLASSES.map((c) => (
                    <option key={c} value={c}>
                      Class {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1B1F23] mb-2">
                  Nominal Pipe Size (NPS)
                </label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  {SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s}&quot;
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10">
              <p className="uppercase tracking-wider text-[#475569] text-sm mb-3">
                Reference Dimensions
              </p>
              {row ? (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300">
                    <thead className="bg-[#1B1F23] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Spec</th>
                        <th className="px-4 py-3 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">Size</td>
                        <td className="px-4 py-3">{row.size}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Outside Diameter (OD)
                        </td>
                        <td className="px-4 py-3">{row.od}&quot;</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Bolt Circle Diameter
                        </td>
                        <td className="px-4 py-3">{row.bc}&quot;</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">Bolt Count</td>
                        <td className="px-4 py-3">{row.bolts}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Bolt Hole Diameter
                        </td>
                        <td className="px-4 py-3">{row.hole}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Recommended Bolt Size
                        </td>
                        <td className="px-4 py-3">{row.bolt}</td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="px-4 py-3 font-semibold">
                          Flange Thickness
                        </td>
                        <td className="px-4 py-3">{row.thickness}</td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="px-4 py-3 font-semibold">
                          Raised Face Thickness
                        </td>
                        <td className="px-4 py-3">1/16&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-[#F8F6F0] border border-[#475569] p-6 rounded">
                  <p className="text-[#1B1F23] font-semibold mb-2">
                    Reference table not available for this combination.
                  </p>
                  <p className="text-gray-700">
                    Call (281) 484-8325 for a full lookup, or email{" "}
                    <a
                      href="mailto:sales@texasflange.com"
                      className="text-[#475569] underline"
                    >
                      sales@texasflange.com
                    </a>{" "}
                    with your class and size. We will confirm against the
                    latest published edition.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> Dimensions shown are a
                reference drawn from common editions of ASME B16.5. For
                issued-for-construction or QA documents, confirm against
                the latest published edition of the standard. For sizes
                above 24 inch, larger classes (600 to 2500), or AWWA
                C207 plate-cut flanges, call our sales desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-white mb-6">
            Related References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/standards/asme-flanges"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                ASME Flange Standards
              </h3>
              <p className="text-gray-300 text-sm">
                Summary of B16.5 and B16.47 coverage.
              </p>
            </Link>
            <Link
              href="/tools/bolt-torque-calculator"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Bolt Torque Calculator
              </h3>
              <p className="text-gray-300 text-sm">
                Pair bolt size with target torque.
              </p>
            </Link>
            <Link
              href="/products/flanges"
              className="block bg-[#2A2E33] p-6 rounded hover:bg-[#33383E] transition"
            >
              <h3 className="font-display font-bold text-lg text-white mb-2">
                Flange Catalog
              </h3>
              <p className="text-gray-300 text-sm">
                Browse types and materials we stock.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#475569] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Need a Verified Cut Sheet?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We can pull verified mill cut sheets and MTRs for the exact
            flange you need. Call our sales desk for same-day pricing and
            lead times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2814848325"
              className="bg-white text-[#475569] px-8 py-3 rounded font-semibold hover:bg-[#F8F6F0] transition"
            >
              Call (281) 484-8325
            </a>
            <Link
              href="/contact"
              className="bg-[#1B1F23] text-white px-8 py-3 rounded font-semibold hover:bg-black transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
