import { useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import { Rowdies } from "next/font/google";
import { useRouter } from "next/router";
import React, { type ReactNode, type FunctionComponent } from "react";
import { Toaster } from "sonner";

import SignIn from "~/components/auth/signIn";
import Unauthorized from "~/components/auth/unauthorized";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import DashboardLayout from "~/components/layout/dashboardLayout";
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
  const { theme, systemTheme } = useTheme();

  const loading = useLoading();

  if (status === "loading")
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader />
      </div>
    );

  if (
    status === "unauthenticated" &&
    pathname.startsWith("/dashboard") &&
    pathname.startsWith("/profile")
  )
    return <SignIn />;

  if (
    status === "authenticated" &&
    pathname.startsWith("/dashboard/organiser") &&
    session.user.role !== "ORGANISER" &&
    session.user.role !== "ADMIN"
  )
    return <Unauthorized user={session.user} />;

  if (
    status === "authenticated" &&
    pathname.startsWith("/dashboard/admin") &&
    session.user.role !== "ADMIN"
  )
    return <Unauthorized user={session.user} />;

  if (pathname.startsWith("/dashboard"))
    return <DashboardLayout>{children}</DashboardLayout>;

  return (
    <div
      className={cn(
        rowdies.className,
        theme === "light" || (theme === "system" && systemTheme === "light")
          ? "bg-white"
          : "bg-[#100020]",
        "flex h-screen w-screen cursor-none",
      )}
    >
      <Cursor />
      <Toaster />

      <div className="flex h-full w-full flex-col ">
        <NavBar />

        <main className={cn("pt-[calc(4rem_+_1rem)]")}>
          {loading ? (
            <div className="flex size-full items-center justify-center">
              <Loader />
            </div>
          ) : (
            children
          )}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
