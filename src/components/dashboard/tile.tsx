import Link from "next/link";
import React, { type FunctionComponent } from "react";

import { Button } from "~/components/ui/button";

const Tile: FunctionComponent<{
  title: string;
  href: string;
}> = ({ title, href }) => {
  return (
    <Button asChild>
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default Tile;
