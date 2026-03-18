import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://steelflange.com"),
  title: "Steel Flange",
  description: "Industrial Pipe Flanges",
  openGraph: {
    type: "website",
    siteName: "Steel Flange",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
