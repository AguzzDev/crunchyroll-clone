import * as api from "store/api"
import {
  FETCH_SEARCH,
  FETCH_DETAILS_ANIME,
  FETCH_POPULARITY,
  FETCH_RECOMENDATIONS,
  LOADING_TRUE,
  LOADING_FALSE,
} from "store/constants/actionsType"

export const getSearch =
  ({ query, pageNumber }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOADING_TRUE })
      const { data } = await api.getSearch({ query, pageNumber })

      console.log(pageNumber, data.pagination.last_visible_page)
      if (pageNumber > data.pagination.last_visible_page) return

      const results = data.data.map((d) => {
        return {
          ...d,
          id: d.mal_id,
        }
      })

      dispatch({
        type: FETCH_SEARCH,
        payload: results,
      })
      dispatch({ type: LOADING_FALSE })
    } catch (error) {
      console.log(error)
    }
  }
export const getDetailsAnime = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getDetailsAnime(id)

    dispatch({ type: FETCH_DETAILS_ANIME, payload: data.data })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}

export const getAnimesPopularity = (pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getAnimeSeasonNow(pageNumber)

    if (pageNumber > data.pagination.last_visible_page) return

    const results = data.data.map((r) => {
      return {
        id: r.mal_id,
        title: r.title,
        recommendation: r.score,
        image: r.images.jpg.image_url,
      }
    })

    dispatch({
      type: FETCH_POPULARITY,
      payload: results,
    })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}

export const getAnimeRecommendations = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getAnimeSeasonNow()

    const results = data.data.map((r) => {
      return {
        id: r.mal_id,
        title: r.title,
        recommendation: r.score,
        image: r.images.jpg.image_url,
      }
    })

    dispatch({
      type: FETCH_RECOMENDATIONS,
      payload: results,
    })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}
