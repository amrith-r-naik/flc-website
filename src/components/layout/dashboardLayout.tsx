import { useTheme } from "next-themes";
import React, { type FunctionComponent } from "react";
import { Toaster } from "sonner";

import Loader from "~/components/loader";
import DashboardNavBar from "~/components/navBar/dashboardNavbar";
import AdminSidebar from "~/components/navBar/dashboardNavbar/sidebar";
import { useLoading } from "~/hooks";
import { cn } from "~/lib/utils";

const AdminLayout: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const loading = useLoading();

  const { theme, systemTheme } = useTheme();

  return (
    <div
      className={cn(
        theme === "light" || (theme === "system" && systemTheme === "light")
          ? "bg-white"
          : "bg-[#100020]",
        "flex h-screen w-screen",
      )}
    >
      <Toaster />
      <AdminSidebar />

      <div className="flex h-full w-full flex-col ">
        <DashboardNavBar />

        <main className={cn("pt-[calc(4rem_+_1rem)]")}>
          {loading ? (
            <div className="flex size-full items-center justify-center">
              <Loader />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
