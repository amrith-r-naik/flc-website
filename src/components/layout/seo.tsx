import Head from "next/head";
import { usePathname } from "next/navigation";
import React, { type FunctionComponent, type ReactNode } from "react";

import { env } from "~/env";

const SEOLayout: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const pathname = usePathname();
  const routes = pathname?.split("/");
  let path = null;
  if (routes?.[1])
    path = routes[1]
      ? routes[1].charAt(0).toUpperCase() + routes[1].slice(1)
      : null;

  return (
    <>
      <Head>
        <meta
          property="twitter:image"
          content={`${env.NEXT_PUBLIC_CANONICAL_URL}api/og?page=${path}`}
        />
        <meta property="twitter:title" content="FLC Title" />
        <meta property="twitter:description" content="Finite Loop Club" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:image"
          content={`${env.NEXT_PUBLIC_CANONICAL_URL}api/og?page=${path}`}
        />
        <meta property="og:site_name" content="Link preview site name" />
        <meta property="og:title" content="Link preview title" />
        <meta property="og:description" content="Link preview description" />
        <meta property="og:url" content="Canonical link preview URL" />
      </Head>
      {children}
    </>
  );
};

export default SEOLayout;
