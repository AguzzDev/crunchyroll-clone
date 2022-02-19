import axios from 'axios'
import { useEffect, useState } from 'react'

export function useSearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState([])
  const [hasMore, setHasMore] = useState([])

  useEffect(() => {
    setSearch([])
  }, [query])

  useEffect(() => {
    if (!query) {
      return setLoading(false)
    }

    setLoading(true)
    setError(false)

    let cancel
    axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v3/search/anime',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setSearch(prevSearch => {
        return [...new Set([...prevSearch, res.data.results.map(w => {
          return {
            id: w.mal_id,
            title: w.title,
            synopsis: w.synopsis,
            type: w.type,
            episodes: w.episodes,
            image: w.image_url,
            score: w.score
          }
        })]
        )]
      })
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, search, hasMore }
}
