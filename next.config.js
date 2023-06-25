/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.leonardo.ai",
        port: "",
        pathname: "/users/419f24e8-a4fe-4906-8b3c-6bdd40eaac2e/generations/**",
      },
    ],
  },
};

module.exports = nextConfig;
