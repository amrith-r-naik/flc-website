/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  /**
   * If you are using `appDir` then you must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "private-user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.filepicker.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true,
  redirects: async () => [
    // NOTE: Won't work with router.push unless middleware is present
    {
      source: "/login",
      destination: "/auth/login",
      permanent: true,
    },
    {
      source: "/signup",
      destination: "/auth/signup",
      permanent: true,
    },
    {
      source: "/verify-email",
      destination: "/auth/verify-email",
      permanent: true,
    },
    {
      source: "/send-verify-email",
      destination: "/auth/send-verify-email",
      permanent: true,
    },
    {
      source: "/sent-verify-email",
      destination: "/auth/sent-verify-email",
      permanent: true,
    },
    {
      source: "/reset-password",
      destination: "/auth/reset-password",
      permanent: true,
    },
    {
      source: "/send-reset-email",
      destination: "/auth/send-reset-email",
      permanent: true,
    },
    {
      source: "/sent-reset-email",
      destination: "/auth/sent-reset-email",
      permanent: true,
    },
  ],
  transpilePackages: ["geist", "gsap"],
};

export default config;
