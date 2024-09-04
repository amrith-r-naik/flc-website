import Link from "next/link";
import React, { type FunctionComponent } from "react";

import DashboardMobileNav from "~/components/navBar/dashboardNavbar/sidebarMobile";
import { adminNavItems } from "~/constants";

const AdminSidebar: FunctionComponent = () => {
  return (
    <>
      <div className="fixed left-0 right-0 top-[13%] z-50 w-full bg-gray-500 p-4 text-white sm:hidden">
        <DashboardMobileNav />
      </div>
      <div className="hidden w-1/6 space-y-3 border-r px-4 text-white shadow-md sm:block">
        <h1 className="subheading mt-4 border-b text-left font-extrabold tracking-wide">
          Admin Dashboard
        </h1>
        {adminNavItems.map((item, index) => (
          <div
            key={index}
            className="mt-2 w-full cursor-pointer space-y-1 rounded-r-lg border-b border-l-2 border-border p-4 px-2"
          >
            <Link href={item.link}>
              <p>{item.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSidebar;
