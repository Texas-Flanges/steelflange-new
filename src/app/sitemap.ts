import { MetadataRoute } from "next";
const BASE = "https://steelflange.com";
const industries = ["oil-gas","petrochemical","power-generation","waterworks","chemical-processing","mining","pulp-paper","food-beverage","agriculture","hvac","marine","data-centers"];
const blogSlugs = ["forged-vs-plate-flanges-when-each-makes-sense","a105-vs-a694-high-yield-carbon-the-real-difference","custom-large-diameter-flanges-what-to-spec-beyond-the-catalog"];
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["","/about","/contact","/privacy-policy","/products","/products/flanges","/products/fittings","/products/custom-machining","/standards","/standards/asme-flanges","/standards/ansi-flanges","/standards/awwa-flanges","/standards/din-flanges","/materials","/materials/carbon-steel","/materials/stainless-steel","/materials/alloy-steel","/materials/exotic-alloys","/industries","/resources","/resources/flange-dimensions","/resources/cad-drawings","/resources/domestic-vs-import","/resources/technical-specs","/tools","/tools/bolt-torque-calculator","/tools/flange-dimension-calculator","/tools/pressure-temperature-rating","/blog"];
  return [
    ...routes.map((r) => ({ url: `${BASE}${r}`, lastModified, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.7 })),
    ...industries.map((slug) => ({ url: `${BASE}/industries/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...blogSlugs.map((slug) => ({ url: `${BASE}/blog/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
