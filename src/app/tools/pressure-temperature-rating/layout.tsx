import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Pressure-Temperature Rating Lookup | Steel Flange" },
  description: "Maximum allowable working pressure (PSIG) at a given service temperature for ASME B16.5 steel flanges by material group and pressure class."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
