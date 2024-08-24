import { useTheme } from "next-themes";
import React, { type FunctionComponent } from "react";
import { Toaster } from "sonner";

import DashboardNavBar from "~/components/navBar/dashboardNavbar";
import AdminSidebar from "~/components/navBar/dashboardNavbar/sidebar";
import { cn } from "~/lib/utils";

const AdminLayout: FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { theme, systemTheme } = useTheme();

  return (
    <div
      className={cn(
        theme === "light" || (theme === "system" && systemTheme === "light")
          ? "bg-white"
          : "bg-[#100020]",
        "relative flex h-fit min-h-screen w-full transition-all",
      )}
    >
      <AdminSidebar />

      <div className="w-full">
        <DashboardNavBar />
        <main className="flex h-full w-full flex-col pt-[calc(4rem_+_1rem)]">
          {children}
        </main>
      </div>

      <Toaster />
    </div>
  );
};

export default AdminLayout;
