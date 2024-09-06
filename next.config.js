const  BuilderDevTools = require("@builder.io/dev-tools/next");
// const {
//   withHydrationOverlay,
// }  = require("@builder.io/react-hydration-overlay/next");



/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()({
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "/api/v1/image/**",
      },
      {
        protocol: "https",
        hostname: "www.orlandohealth.com",
        port: "",
        pathname: "/-/media/images/**",
      },
    ],
  },
});


module.exports = nextConfig;

// module.exports = withHydrationOverlay({
//   /**
//    * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
//    * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
//    */
//   //appRootSelector: "main",
// })(nextConfig);