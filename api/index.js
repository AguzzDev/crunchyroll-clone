import axios from 'axios'

const API = 'https://api.jikan.moe/v3/'

export const getSearch = (searchText) => axios.get(`${API}search/anime?q=${searchText}`)
export const getDetailsAnime = (id) => axios.get(`${API}anime/${id}`)
export const getAnimesPopularity = (currentPage) => axios.get(`${API}top/anime/${currentPage}`)
export const getAnimeRecomendations = () => axios.get(`${API}anime/1/recommendations`)
export const getAnimeYear = () => axios.get(`${API}season/2021/fall`)
