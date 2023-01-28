import axios from "axios"

const API = "https://api.jikan.moe/v4/"

export const getSearch = ({ query, pageNumber }) =>
  axios.get(`${API}anime?q=${query}&page=${pageNumber}`)
export const getDetailsAnime = (id) => axios.get(`${API}anime/${id}`)
export const getAnimesPopularity = (currentPage) =>
  axios.get(`${API}anime/${currentPage}/recommendations`)
export const getAnimeSeasonNow = (page=1) =>
  axios.get(`${API}seasons/now?page=${page}`)
export const getAnimeYear = () => axios.get(`${API}season/2021/fall`)
