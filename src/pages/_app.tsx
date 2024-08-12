import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

/* import Layout from "~/components/layout"; */
import { ThemeProvider } from "next-themes";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { Toaster } from "sonner";

import AdminLayout from "~/components/Layout/adminLayout";
import MainLayout from "~/components/Layout/mainLayout";
import "~/styles/globals.css";
import { api } from "~/utils/api";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const getLayout = () => {
    if (router.pathname.startsWith("/admin")) {
      return AdminLayout;
    }
    return MainLayout;
  };
  const Layout = getLayout();
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <div className={`${inter.className} h-full w-full`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
