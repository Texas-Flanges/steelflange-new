import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "Steel Flange | Forged, Plate, and Custom Steel Pipe Flanges",
    template: "%s | Steel Flange"
  },
  description:
    "The full steel flange line. A105 carbon through F91 chrome-moly. Forged or plate-cut. Standard sizes through 203 inch custom diameters. ASME, ANSI, AWWA, API standards.",
  keywords:
    "steel flanges, carbon steel flanges, A105 flanges, A694 flanges, F91 chrome-moly, plate flanges, AWWA C207, slip-on flanges, weld neck flanges, blind flanges, high yield carbon, MSS SP-44, forged flanges, large diameter flanges",
  metadataBase: new URL("https://steelflange.com"),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Steel Flange",
    title: "Steel Flange | Forged, Plate, and Custom",
    description:
      "A105 through F91. Forged and plate-cut. Standard through 203 inch custom. The full steel flange line.",
    url: "https://steelflange.com"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1B1F23" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Steel Flange",
              url: "https://steelflange.com",
              logo: "https://steelflange.com/logo.png",
              description:
                "Steel pipe flange resource and supply. Forged, plate-cut, and custom. Carbon, alloy, and stainless. ASME, ANSI, AWWA, API.",
              telephone: "+1-281-484-8325",
              email: "sales@texasflange.com",
              address: {
                "@type": "PostalAddress",
                postOfficeBoxNumber: "PO Box 2889",
                addressLocality: "Pearland",
                addressRegion: "TX",
                postalCode: "77588",
                addressCountry: "US"
              }
            })
          }}
        />
      </head>
      <body className="bg-cream text-ink font-body">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
