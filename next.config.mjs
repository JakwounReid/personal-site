
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
      // Site Care is retired; /sites (migration + Launch Sprint) is its successor.
      // /build has been a cached permanent redirect since September, so it can never be
      // reused as a live route — it stays a redirect.
      { source: "/site-care", destination: "/sites", permanent: true },
      { source: "/build", destination: "/sites", permanent: true },
      { source: "/offer", destination: "/sites", permanent: true },
      // 12-week coaching is retired; career strategy consulting is its successor.
      { source: "/coaching", destination: "/career-strategy", permanent: true },
      { source: "/portfolio", destination: "/hire", permanent: true },
      { source: "/contract", destination: "/hire", permanent: true },
      { source: "/resume", destination: "/hire", permanent: true },
      { source: "/work", destination: "/sites", permanent: true },
    ];
  },
};
export default nextConfig;
