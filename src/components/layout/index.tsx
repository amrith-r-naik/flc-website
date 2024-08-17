import { useSession } from "next-auth/react";
import { Rowdies } from "next/font/google";
import { useRouter } from "next/router";
import React, { type ReactNode, type FunctionComponent } from "react";
import { Toaster } from "sonner";

import SignIn from "~/components/auth/signIn";
import Unauthorized from "~/components/auth/unauthorized";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import AdminLayout from "~/components/layout/adminLayout";
import Loader from "~/components/loader";
import NavBar from "~/components/navBar";
import { useLoading } from "~/hooks";
import { cn } from "~/lib/utils";

const rowdies = Rowdies({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-rowdies",
});

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const { pathname } = useRouter();
  const { status, data: session } = useSession();

  const loading = useLoading();

  if (status === "loading")
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader />
      </div>
    );
/* 
  if (status === "unauthenticated" && !pathname.startsWith("/auth"))
    return <SignIn />; */

  if (
    status === "authenticated" &&
    pathname.startsWith("/admin") &&
    session.user.role !== "ADMIN"
  )
    return <Unauthorized user={session.user} />;

  if (pathname.startsWith("/admin"))
    return <AdminLayout>{children}</AdminLayout>;

  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-full w-full flex-col">
        <NavBar />
        <main className="flex">
          {loading ? (
            <div className="flex size-full items-center justify-center">
              <Loader />
            </div>
          ) : (
            children
          )}
        </main>
        <Footer />
      </div>
      {/* <Cursor /> */}
      <Toaster />
    </div>
  );
};

export default Layout;
