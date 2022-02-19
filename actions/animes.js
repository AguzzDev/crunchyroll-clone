import * as api from 'api'
import { FETCH_SEARCH, FETCH_DETAILS_ANIME, FETCH_POPULARITY, FETCH_RECOMENDATIONS, LOADING_TRUE, LOADING_FALSE } from 'constants/actionsType'

export const getSearch = (searchText) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getSearch(searchText)

    dispatch({ type: FETCH_SEARCH, payload: data })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}
export const getDetailsAnime = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getDetailsAnime(id)

    dispatch({ type: FETCH_DETAILS_ANIME, payload: data })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}

export const getAnimesPopularity = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getAnimesPopularity(currentPage)

    const popularityResults = data.top.map(top => {
      return {
        id: top.mal_id,
        title: top.title,
        ep: top.episodes,
        image: top.image_url,
        startDate: top.start_date,
        endDate: top.end_date,
        type: top.type,
        url: top.url
      }
    })

    dispatch({ type: FETCH_POPULARITY, payload: popularityResults })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}
export const getAnimeRecomendations = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE })
    const { data } = await api.getAnimeRecomendations()

    const recomendationsResults = data.recommendations.map(r => {
      return {
        id: r.mal_id,
        title: r.title,
        recommendation: r.recommendation_count,
        image: r.image_url
      }
    })

    dispatch({ type: FETCH_RECOMENDATIONS, payload: recomendationsResults })
    dispatch({ type: LOADING_FALSE })
  } catch (error) {
    console.log(error)
  }
}
