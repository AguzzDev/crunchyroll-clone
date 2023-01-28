import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

export function useLoadMore(action) {
  const dispatch = useDispatch()
  const { animes } = useSelector((state) => state.animes)

  const [result, setResult] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    if (hasMore) {
      setPage((prev) => prev + 1)
      setHasMore(false)
    }
  }, [hasMore])

  useEffect(() => {
    dispatch(action(page))
  }, [page])

  useEffect(() => {
    if (animes.length > 0) {
      setResult((prev) => prev.concat(animes))
    }
  }, [animes])

  return { result, setHasMore }
}
