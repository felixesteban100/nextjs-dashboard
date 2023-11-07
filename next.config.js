/** @type {import('next').NextConfig} */
const nextConfig = {
    /* experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"] // <-- and this
      },
      // and the following to enable top-level await support for Webpack
      webpack: (config) => {
        config.experiments = {
          topLevelAwait: true
        };
        return config;
      }, */
      images: {
        // domains: ['cdn.jsdelivr.net', 'upload.wikimedia.org'], //make it 'your-domain.com'
        remotePatterns: [
          {
            // protocol: "https",
            hostname: "**",
          },
        ],
      },
};

module.exports = nextConfig;
