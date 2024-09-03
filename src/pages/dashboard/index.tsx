import { type NextPage } from "next";
import React from "react";

import Tile from "~/components/dashboard/tile";

const links: { href: string; title: string }[] = [
  { href: "/dashboard/core", title: "Core" },
  { href: "/dashboard/cloudinary", title: "Cloudinary" },
];

const Dashboard: NextPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {links.map((link, idx) => (
        <Tile key={idx} href={link.href} title={link.title} />
      ))}
    </div>
  );
};

export default Dashboard;
