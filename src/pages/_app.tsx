import { ReactLenis } from "lenis/react";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import { Rowdies } from "next/font/google";
import { Toaster } from "sonner";

import Layout from "~/components/layout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const rowdies = Rowdies({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <ReactLenis root>
          <div className={` ${rowdies.className}  } `}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Toaster />
          </div>
        </ReactLenis>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
