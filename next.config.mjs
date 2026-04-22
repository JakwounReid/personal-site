
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/offer", destination: "/build", permanent: true },
      { source: "/portfolio", destination: "/hire", permanent: true },
      { source: "/contract", destination: "/hire", permanent: true },
      { source: "/resume", destination: "/hire", permanent: true },
      { source: "/work", destination: "/build", permanent: true },
    ];
  },
};
export default nextConfig;
