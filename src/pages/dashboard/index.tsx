import { type NextPage } from "next";
import React from "react";

import Tile from "~/components/dashboard/tile";

const links: { href: string; title: string }[] = [
  { href: "/dashboard/core", title: "Core" },
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
