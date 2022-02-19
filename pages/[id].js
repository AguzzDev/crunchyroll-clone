import { useRouter } from 'next/router'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import StarRatingComponent from 'react-star-rating-component'

import NavHeader from 'components/NavHeader'
import { getDetailsAnime } from 'actions/animes'
import { genresMap, studioMap, producersMap, durationTotal, scoredBy, allFavorites } from 'utils/formats'

export default function AnimeDetails () {
  const dispatch = useDispatch()
  const router = useRouter()
  const { animes, isLoading } = useSelector(state => state.animes)
  const { id, title: titleUrl } = router.query

  const { title, trailer_url, synopsis, type, duration, episodes, image_url, airing, status, broadcast, score, scored_by, producers, genres, favorites, studios } = animes

  useEffect(() => {
    dispatch(getDetailsAnime(id))
  }, [id])

  return (
    <>
      <Head>
        <title>{titleUrl}</title>
        <link rel='icon' href='/icon.svg' />
      </Head>

      <NavHeader />

      <div className='flex flex-col lg:px-0 w-full lg:w-10/12 xl:w-7/12 mx-auto mt-2'>

        {isLoading
          ? 'Cargando...'
          : <>
            <h1 className='text-2xl px-5 lg:py-2 lg:px-0'>{title}</h1>
            <div className='flex  flex-col-reverse lg:flex-row justify-between lg:space-x-4  p-5 lg:pt-0 lg:pl-0'>
              <div className=' lg:w-9/12'>
                {trailer_url ? <iframe src={trailer_url} className='w-full h-96 lg:h-2/4' /> : <img src='https://fightthenewdrug.org/wp-content/uploads/video/screenshot.png' />}
                <img
                  className='mt-4'
                  src='https://img1.ak.crunchyroll.com/i/spire3/1c2077d4053ed9160ce49a7fff6737541632243091_main.png'
                />
                <div className='py-5'>
                  <h1 className='font-medium text-sm mb-2'>Synopsis</h1>
                  <p className='text-sm text-gray-700'>{synopsis}</p>
                  <div className='mt-2 text-sm font-medium '>
                    {type === 'Movie'
                      ? <p>Duration total: <span className='text-bluelight1 font-normal'>{duration}</span></p>
                      : <>
                        <p>Episodes: <span className='text-bluelight1 font-normal'>{episodes} - {duration}</span></p>
                        <p>Duration total: {durationTotal(duration, episodes)}</p>
                      </>}
                  </div>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row lg:flex-col lg:justify-start lg:w-3/12 md:space-x-5 lg:space-x-0'>
                <div className='w-5/12 lg:w-full'>
                  <img src={image_url} className='mb-5 object-cover' />
                </div>
                <div className='flex flex-col w-full'>
                  <div className='border-t  border-gray-400 pt-2 pb-5'>
                    <h1 className='text-sm font-medium'>Availability Information</h1>
                    {
                      !airing ? (<p className='p-2 bg-yellow-300 text-gray-700 text-sm font-medium'>{status}</p>) : (<p className='p-2 bg-yellow-300 text-gray-700 text-sm font-medium'>{broadcast}</p>)
                    }
                  </div>
                  <div className='border-t  border-gray-400 pt-2 pb-5'>
                    <h1 className='text-sm font-medium'>User Ratings</h1>
                    <div className='flex items-center'>
                      <StarRatingComponent
                        className='text-2xl pr-2'
                        editing={false}
                        starCount={5}
                        value={score < 9 ? score / 2 : 5}
                      />
                      <span className='text-bluelight1'>{score}</span>
                    </div>

                    <p className='text-gray-700'>Scored by: <span className='text-bluelight1'>{scoredBy(scored_by)}</span></p>
                    <p className='text-gray-700'>Favorites: <span className='text-bluelight1'>{allFavorites(favorites)}</span></p>
                  </div>

                  <div className='border-t  text-gray-700 border-gray-400 pt-2 pb-5'>
                    <h1 className='text-black text-sm font-medium'>Details</h1>
                    <p>Type:<span className='text-bluelight1'> {type}</span></p>
                    <p>Gender: <span className='lowercase text-bluelight1'>{genresMap(genres)}</span></p>
                    <p>Studio: <span className='text-bluelight1'>{studioMap(studios)}</span></p>
                    <p>Producers: <span className='text-bluelight1'>{producersMap(producers)}</span></p>
                  </div>

                </div>
              </div>

            </div>
          </>}
      </div>
    </>
  )
}
