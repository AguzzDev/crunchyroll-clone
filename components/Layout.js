import Head from "next/head"
import React from "react"
import NavHeader from "./NavHeader"

export const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} - Crunchyroll Clone</title>
      </Head>

      <main>
        <NavHeader />
        {children}
      </main>
    </>
  )
}
