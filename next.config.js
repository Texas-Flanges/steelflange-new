/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/understanding-professional-steel-design-and-specifications",
        destination: "/understanding-steel-flange-basics-and-applications",
        permanent: true,
      },
      {
        source: "/blog/industrial-applications-for-professional-steel",
        destination: "/understanding-steel-flange-basics-and-applications",
        permanent: true,
      },
      {
        source: "/blog/standards-and-quality-assurance-in-professional-steel",
        destination: "/understanding-steel-flange-basics-and-applications",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
