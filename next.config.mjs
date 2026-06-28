
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
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
