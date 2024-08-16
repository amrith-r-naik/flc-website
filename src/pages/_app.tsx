import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ReactLenis } from "lenis/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "~/components/layout";
import { siteMetaData } from "~/constants";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  // Set the title of the page dynamically
  const { pathname } = useRouter();
  const title = `${
    pathname === "/"
      ? "Home | "
      : pathname.split("/")[1]!.charAt(0).toUpperCase() +
        pathname.split("/")[1]!.slice(1) +
        " | "
  }${siteMetaData.title}`;

  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <ReactLenis root>
          <Head>
            <title>{title}</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Analytics />
          <SpeedInsights />
        </ReactLenis>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
