import React from "react";

import Navbar from "../navBar";
import AdminSidebar from "../sidebar/adminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main className="flex">
        <AdminSidebar />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
