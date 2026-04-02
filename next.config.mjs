
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/offer",
        destination: "/build",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
