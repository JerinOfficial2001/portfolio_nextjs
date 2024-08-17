import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jers-folio</title>
        <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-48x48.png"
          sizes="48x48"
          type="image/png"
        />
        <meta
          name="description"
          content={`Welcome to Jers-folio,
            Let's collaborate to bring your vision to life!`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
