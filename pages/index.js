import { useState } from "react"

import { InicioAside } from "components/AsideComponent"
import { InicioMain } from "components/MainComponent"
import { IconSm } from "components/Icon"
import { XIcon } from "@heroicons/react/solid"
import { getAllFilesMetadata } from "lib/mdx"
import { Layout } from "components/Layout"
import Link from "next/link"
import Image from "next/image"

export default function Home({ posts }) {
  const [alert, setAlert] = useState(true)

  const closeAlert = () => {
    setAlert(!alert)
  }

  return (
    <Layout title="Crunchyroll Clone">
      <div className="lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto my-2 shadow-2xl bg-white overflow-hidden">
        {alert ? (
          <div className="m-5 mb-0 p-2  border bg-blue2 border-blue1 text-blue1 rounded-md text-xs cursor-pointer flex justify-between">
            <h1>
              ¡Nuevo retos aguardan a Asta en su camino para ser Rey Mago!
              ¡Disponible ya la segunda temporada de BLACK CLOVER con doblaje en
              español!
            </h1>
            <button className="text-xl" onClick={closeAlert}>
              <IconSm Icon={XIcon} />
            </button>
          </div>
        ) : null}
        <div className="flex flex-row">
          <div className="w-full md:w-4/6">
            <InicioMain posts={posts} />
          </div>
          <div className="hidden md:flex w-2/6">
            <InicioAside />
          </div>
        </div>
      </div>

      <div className="hidden md:block fixed right-0 -bottom-5">
        <Link passHref href="https://www.crunchyroll.com/es">
          <button>
            <Image
              width={350}
              height={250}
              objectFit="contain"
              src="/banner.png"
              alt="banner_image"
            />
            <div className="z-10 top-4 -left-4 w-3/4 h-full flex flex-col items-center justify-center absolute">
              <h1 className="text-xl">Visita Crunchyroll</h1>
              <p>Click aca</p>
            </div>
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const files = await getAllFilesMetadata()

  return {
    props: {
      posts: files,
    },
  }
}
