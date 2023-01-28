import { Html, Head, Main, NextScript } from "next/document"

export const Metatags = () => {
  return (
    <>
      {/* Google */}
      <meta name="title" content="Crunchyroll Clone" />
      <meta
        name="description"
        content="Page clone of Crunchyroll development by AguzzDev"
      />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://crunchyroll-clone.vercel.app/" />
      <meta property="og:title" content="Crunchyroll Clone" />
      <meta
        property="og:description"
        content="Page clone of Crunchyroll development by AguzzDev"
      />
      <meta property="og:image" content="/image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://crunchyroll-clone.vercel.app/"
      />
      <meta property="twitter:title" content="Crunchyroll Clone" />
      <meta
        property="twitter:description"
        content="Page clone of Crunchyroll development by AguzzDev"
      />
      <meta property="twitter:image" content="/image.png" />
    </>
  )
}

export default function Document() {
  return (
    <Html>
      <Head>
        <Metatags />
        <link rel="icon" href="/icon.svg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
