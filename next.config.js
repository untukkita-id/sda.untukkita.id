const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.netlify.com *.googletagmanager.com analytics.google.com *.airtable.com unpkg.com;
  img-src 'self' blob: data: https:;
  style-src 'self' 'unsafe-inline';
  connect-src 'self' www.google-analytics.com analytics.google.com stats.g.doubleclick.net covid.sda.untukkita.my.id;
  object-src 'none';
  frame-src 'self' https://*.airtable.com airtable.com;
`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
];

module.exports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    headers: async () => {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
    experimental: {
      optimizeCss: true,
      optimizeImages: true,
      workerThreads: true,
    },
    images: {
      domains: ['netlify.com', 'www.netlify.com'],
    },
    reactStrictMode: true,
    compilerOptions: {
      baseUrl: '.',
      paths: {
        '@/components/*': ['components/*'],
      },
    },
  })
);
