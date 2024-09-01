import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "~/components/layout";
import SEOLayout from "~/components/layout/seo";
import { siteMetaData } from "~/constants";
import { ThemeProvider } from "~/context/themeContext";
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
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        themes={["light", "dark"]}
      >
        <Head>
          <title>{title}</title>
        </Head>
        <SEOLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SEOLayout>
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
