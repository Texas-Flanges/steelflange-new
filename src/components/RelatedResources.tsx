import relatedResources from "@/data/related-resources.json";

type RelatedLink = {
  url: string;
  label: string;
  note: string;
};

export default function RelatedResources() {
  const { heading, links } = relatedResources as {
    heading: string;
    links: RelatedLink[];
  };

  if (links.length === 0) return null;

  return (
    <section aria-labelledby="related-resources" className="bg-cream py-20 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 id="related-resources" className="text-4xl font-display font-bold mb-6 text-ink">
          {heading}
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url} className="text-[#475569] font-semibold hover:text-[#334155]">
                {link.label}
              </a>
              {" — "}
              {link.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
