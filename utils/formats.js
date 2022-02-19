const synopsisF = (synopsis) => {
  return synopsis?.split(".").slice(0, -1)
}
const genresMap = (genres) => {
  return genres?.map(g => g.name).join(', ')
}
const studioMap = (studio) => {
  return studio?.map(s => s.name)
}
const producersMap = (producers) => {
  return producers?.map(s => s.name).join(',')
}
const durationTotal = (duration, episodes) => {
  const durationAll = duration?.slice(0, 2)
  const durationToNumber = parseInt(durationAll, 10)
  const result = Math.round(durationToNumber * episodes)
  return result > 60 ? (<span className='text-bluelight1 font-normal'>{Math.round(result / 60)}  Hs</span>) : (<span className='text-bluelight1 font-normal'>{result} Mins</span>)
}
const scoredBy = (scored) => {
  return scored?.toLocaleString()
}
const allFavorites = (favorite) => {
  return favorite?.toLocaleString()
}
const sortByDate = (posts) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const postsMap = posts.map(w => new Date(w.date).toLocaleDateString("es", options)).sort((a, b) => a.length < b.length ? 1 : -1)
  return {
    ...posts,
    date: postsMap
  }
}
const numberAnimeRandom = () => {
  const randomNumber = Math.floor(Math.random() * 1000).toString()
  return randomNumber
}

export { sortByDate, synopsisF, genresMap, studioMap, producersMap, durationTotal, scoredBy, allFavorites, numberAnimeRandom }
