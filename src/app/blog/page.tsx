import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Steel Flange",
  description:
    "Articles and guides about steel flanges, piping systems, and industrial applications.",
  alternates: { canonical: "https://steelflange.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body > header.border-gray-200, header.border-gray-200 { display: none !important; }
        `,
        }}
      />

      {/* HEADER */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ background: "#1a3a5c" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-white tracking-tight">
            Steel Flange
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/#about" className="text-gray-200 hover:text-white transition">
              About
            </a>
            <a href="/#types" className="text-gray-200 hover:text-white transition">
              Types
            </a>
            <a href="/#faq" className="text-gray-200 hover:text-white transition">
              FAQ
            </a>
            <a href="/blog" className="text-white font-semibold">
              Blog
            </a>
            <a
              href="https://texasflange.com/contact-us/"
              className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        className="py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #1a3a5c 0%, #2d5a87 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-gray-200 text-lg">
            Articles and guides about steel flanges and industrial piping systems.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <a
            href="/understanding-steel-flange-basics-and-applications"
            className="block bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
              <time dateTime="2024-05-08">May 8, 2024</time>
              <span>&bull;</span>
              <span>3 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Understanding Steel Flange: Basics and Applications
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dive into the essentials of the steel flange, from types to materials, with
              clear, easy-to-follow explanations for beginners. Learn about forging vs.
              casting, common flange types, and where they&apos;re used.
            </p>
            <span className="inline-block mt-4 text-blue-700 font-semibold text-sm">
              Read article &rarr;
            </span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Steel Flange. All rights reserved.</p>
            <p className="mt-1">
              A resource by{" "}
              <a
                href="https://texasflange.com"
                className="text-white hover:underline"
              >
                Texas Flange
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
