import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getSearch } from "store/actions/animes"

export function useSearch(query) {
  const dispatch = useDispatch()
  const { search: searchR } = useSelector((state) => state.animes)

  const [search, setSearch] = useState([])
  const [lastQuery, setLastQuery] = useState("")
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    if (hasMore) {
      setPage((prev) => prev + 1)

      setHasMore(false)
    }
  }, [hasMore])

  useEffect(() => {
    if (!query || query !== lastQuery) {
      setSearch([])
    }
    setPage(1)
    setLastQuery(query)
    dispatch(getSearch({ query, pageNumber: page }))
  }, [page, query])

  useEffect(() => {
    if (search.length > 0) {
      setSearch((prev) => prev.concat(searchR))
    } else {
      setSearch(searchR)
    }
  }, [searchR])

  return { search, setHasMore }
}
