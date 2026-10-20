import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Bolt Torque Calculator | Steel Flange" },
  description: "Estimate the torque required to develop a target bolt stress on a flange stud from bolt size, grade, lubrication and target stress."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
