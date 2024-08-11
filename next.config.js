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
      source: "/send-verify-email",
      destination: "/auth/send-verify-email",
      permanent: true,
    },
    {
      source: "/send-reset-email",
      destination: "/auth/send-reset-email",
      permanent: true,
    },
  ],
  transpilePackages: ["geist", "gsap"],
};

export default config;
