import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

const Tile: FunctionComponent<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <Link href={href} className="text-white">
      <Button>{title}</Button>
    </Link>
  );
};

export default Tile;
