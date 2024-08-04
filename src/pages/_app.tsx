import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { Inter } from 'next/font/google'

import "~/styles/globals.css";/* 
import Layout from "~/components/layout"; */
import { Theme } from "@radix-ui/themes";
import { useRouter } from "next/router";
import AdminLayout from "~/components/Layout/adminLayout";
import MainLayout from "~/components/Layout/mainLayout";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], display: "swap" })
  
  


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
      <Theme>
        <div className={`${inter.className} dark`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Theme>
    </SessionProvider>
  )
};

export default api.withTRPC(MyApp);
