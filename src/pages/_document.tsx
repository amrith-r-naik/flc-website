import { Html, Head, Main, NextScript } from "next/document";

import { siteMetaData } from "~/constants";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      {/* Title of the page is being set in _app.tsx */}
      <Head>
        <meta name="name" content={siteMetaData.name} />
        <meta name="email" content={siteMetaData.email} />
        <meta name="address" content={siteMetaData.address} />
        <meta name="author" content={siteMetaData.author} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
