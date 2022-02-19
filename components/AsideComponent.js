import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAnimeRecomendations } from "actions/animes"

export function InicioAside() {
  const { animes, isLoading } = useSelector((state) => state.animes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAnimeRecomendations())
  }, [])

  return (
    <div className="p-5">
      <img src="https://img1.ak.crunchyroll.com/i/spire4/9bfc75ef6d3045d6938377fa5af53bd31626997566_main.png" />
      <div className="flex flex-col w-full">
        <h1 className="font-bold mb-2">Series Destacadas</h1>

        {isLoading ? (
          <h1>Estoy cargando...</h1>
        ) : (
          animes.length > 0 &&
          animes.map((r) => (
            <Link href={`videos/${r.id}/${r.title.split(" ").join("_")}`}>
              <div
                key={r.id}
                className="flex flex-row pb-3 select-none cursor-pointer"
              >
                <div className="flex items-center w-2/6">
                  <img src={r.image} className="object-cover" />
                </div>
                <div className="flex flex-col w-full pl-3">
                  <h1
                    className="font-medium leading-5 mb-1 whitespace-nowrap"
                    style={{ fontSize: "0.75em" }}
                  >
                    {r.title}
                  </h1>
                  <p className="text-gray-500 text-xs">
                    {r.recommendation} Recommendations
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
export function NoticiasAside() {
  return (
    <div className="p-5">
      <a
        className="twitter-timeline"
        data-height="700"
        href="https://twitter.com/crunchyroll_la?ref_src=twsrc%5Etfw"
      >
        Tweets by crunchyroll_la
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
    </div>
  )
}
