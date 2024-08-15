import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { type ReactNode, type FunctionComponent } from "react";
import { Toaster } from "sonner";

import SignIn from "~/components/auth/signIn";
import Unauthorized from "~/components/auth/unauthorized";
import Cursor from "~/components/cursor";
import AdminLayout from "~/components/layout/adminLayout";
import Loader from "~/components/loader";
import NavBar from "~/components/navBar";
import { useLoading } from "~/hooks";

import Footer from "../footer";

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

  if (status === "unauthenticated" && pathname.startsWith("auth"))
    return <SignIn />;

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
      <Toaster />
      <Cursor />
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
    </div>
  );
};

export default Layout;
