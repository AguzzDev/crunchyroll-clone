import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getDetailsAnime } from "store/actions/animes"
import { Layout } from "components/Layout"
import { AnimeDetailsComponent } from "components/Animes/AnimeDetailsComponent"

export default function AnimeDetails() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { animes, isLoading } = useSelector((state) => state.animes)
  const { id, title: titleUrl } = router.query

  useEffect(() => {
    if (id) {
      dispatch(getDetailsAnime(id))
    }
  }, [id])

  return (
    <Layout title={titleUrl}>
      <section className="flex flex-col lg:px-0 w-full lg:w-10/12 xl:w-7/12 mx-auto mt-2">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <AnimeDetailsComponent animes={animes} />
        )}
      </section>
    </Layout>
  )
}
