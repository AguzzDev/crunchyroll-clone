import { SearchIcon } from "@heroicons/react/solid"

import { useState } from "react"

import { IconSm } from "components/Icon"
import { useSearch } from "hooks/useSearch"
import { Layout } from "components/Layout"
import { useDebounce } from "hooks/useDebounce"
import { AnimeList } from "components/Animes/AnimeList"
import { useRouter } from "next/router"

export default function Search() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const text = useDebounce(query, 500)
  const finalQuery = query || router.query.q

  const { search, setHasMore } = useSearch(text || router.query.q)

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`search?q=${query}`)
  }

  return (
    <Layout title={`${query || router.query.q} - Crunchyroll`}>
      <section>
        <div className="w-full lg:w-10/12 xl:w-7/12 mx-auto my-8">
          <h1 className="font-bold text-xl text-gray-700">Búsqueda</h1>
        </div>
        <section className="flex flex-row p-5 lg:w-10/12 xl:w-7/12 mx-auto shadow-2xl bg-white min-h-screen">
          <div className="w-2/12" />
          <div className="w-10/12 border-l border-gray-400 pl-5">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between border border-gray-500 w-8/12 mx-auto">
                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    router.push(`search?q=${e.target.value}`)
                  }}
                  autoComplete="off"
                  className="outline-none ml-2 w-full"
                />
                <button className="bg-orange text-white px-2 py-2">
                  <IconSm Icon={SearchIcon} />
                </button>
              </div>
            </form>

            <div>
              <h1 className="text-lg font-bold text-gray-700">Videos</h1>
              <p className="text-sm">Desplegando resultados de: {finalQuery}</p>
            </div>

            {search && <AnimeList animes={search} setHasMore={setHasMore} />}
          </div>
        </section>
      </section>
    </Layout>
  )
}
