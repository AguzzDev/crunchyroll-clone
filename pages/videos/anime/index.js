import NavSeries from "components/NavSeries"
import { getAnimesPopularity } from "store/actions/animes"
import asideAnime from "json/asideAnime.json"
import { Layout } from "components/Layout"
import { AnimeList } from "components/Animes/AnimeList"
import { useLoadMore } from "hooks/useLoadMore"

export default function AnimeScreen() {
  const { result, setHasMore } = useLoadMore(getAnimesPopularity)

  return (
    <Layout title="Busque Animes Populares">
      <NavSeries />
      <section className="flex flex-row lg:px-0 w-full lg:w-10/12 xl:w-7/12 mx-auto mt-2 ">
        <div className="w-full md:w-4/6">
          <AnimeList animes={result} setHasMore={setHasMore} />
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
      </section>
    </Layout>
  )
}
