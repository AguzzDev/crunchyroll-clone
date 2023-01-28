import {
  FETCH_DETAILS_ANIME,
  FETCH_RECOMENDATIONS,
  LOADING_TRUE,
  LOADING_FALSE,
  FETCH_POPULARITY,
  FETCH_SEARCH,
} from "store/constants/actionsType"

export const animes = (
  state = { animes: [], search: [], isLoading: true },
  action
) => {
  switch (action.type) {
    case LOADING_TRUE:
      return { ...state, isLoading: true, animes: [], search: [] }
    case LOADING_FALSE:
      return { ...state, isLoading: false }
    case FETCH_DETAILS_ANIME:
    case FETCH_POPULARITY:
      return { ...state, animes: action.payload }
    case FETCH_SEARCH:
      return { ...state, search: action.payload }
    case FETCH_RECOMENDATIONS:
      return { ...state, animes: action.payload.slice(0, 5) }
    default:
      return state
  }
}
