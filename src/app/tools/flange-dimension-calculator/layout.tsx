import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Flange Dimension Lookup | Steel Flange" },
  description: "Outside diameter, bolt circle, bolt count, bolt hole size, bolt diameter and flange thickness for ASME B16.5 Class 150 and Class 300 weld neck flanges."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
