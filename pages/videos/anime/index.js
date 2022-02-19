import { Waypoint } from "react-waypoint"
import Head from "next/head"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import Link from "next/link"

import NavHeader from "components/NavHeader"
import NavSeries from "components/NavSeries"
import { getAnimesPopularity } from "actions/animes"
import asideAnime from "json/asideAnime.json"

export default function AnimeScreen() {
  const { animes } = useSelector((state) => state.animes)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    setTimeout(() => {
      setCurrentPage((currentPage) => currentPage + 1)
    }, 1000)
  }

  useEffect(() => {
    dispatch(getAnimesPopularity(currentPage))
  }, [currentPage])

  return (
    <>
      <Head>
        <title>Busque Animes Populares</title>
        <link rel="icon" href="/icon.svg" />
      </Head>

      <NavHeader />
      <NavSeries />
      <div className="flex flex-row lg:px-0 w-full lg:w-10/12 xl:w-7/12 mx-auto mt-2 ">
        <div className="w-full md:w-4/6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-1 lg:p-0 mr-3">
            {animes.length > 0 &&
              animes.map((p, i) => (
                <>
                  <Link
                    key={p.id}
                    href={`${p.id}/${p.title.split(" ").join("_")}`}
                  >
                    <div className="cols-span-1  h-64 bg-white p-2 cursor-pointer hover:shadow-2xl whitespace-nowrap overflow-hidden">
                      <div className="h-3/4">
                        <img
                          src={p.image}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center h-1/4 w-full">
                        <h1 className="text-sm font-medium leading-5 mb-1 overflow-ellipsis overflow-hidden">
                          {p.title}
                        </h1>
                        <p className="text-gray-500 text-xs">{p.ep} Videos</p>
                      </div>
                    </div>
                  </Link>
                  {i === animes.length - 1 && <Waypoint onEnter={nextPage} />}
                </>
              ))}
          </div>
        </div>

        <div className="hidden md:flex flex-col w-2/6">
          {asideAnime.map(({ id, title, data, data2 }) => (
            <div
              key={id}
              className="flex flex-col space-y-2 text-sm p-5 leading-5 border-b border-t border-gray-300"
            >
              <h1 className="text-gray-700 font-medium">{title}</h1>
              <p>{data}</p>
              <p className="text-blue-600">{data2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
