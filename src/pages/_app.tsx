import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { Inter } from 'next/font/google'

import "~/styles/globals.css";
import Layout from "~/components/layout";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], display: "swap" })

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <div className={inter.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </SessionProvider>
    )
};

export default api.withTRPC(MyApp);
