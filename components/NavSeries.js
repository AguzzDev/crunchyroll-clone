import { useRouter } from 'next/router'

export default function NavSeries() {
  const router = useRouter()
  return (
    <div className='flex flex-col lg:px-0 p-1 lg:w-10/12 xl:w-7/12 mx-auto mt-2 select-none'>
      <div className='flex space-x-1 bg-gray-600 w-full px-1 pt-1'>
        <div className={`${router.pathname === '/videos/anime' ? 'cursor-pointer font-semibold bg-white  px-5 py-2' : 'cursor-pointer font-semibold  px-5 py-2 bg-gray-800 text-white'}`}>Anime</div>
        <div className={`${router.pathname === '/videos/drama' ? 'cursor-pointer font-semibold bg-white  px-5 py-2' : 'cursor-pointer font-semibold  px-5 py-2 bg-gray-800 text-white'}`}>Drama</div>
      </div>
      <div className='flex space-x-7 bg-white text-gray-500 px-7 py-2'>
        <div className={`${router.pathname === '/videos/anime' ? 'cursor-pointer hover:text-blue-600 font-semibold text-gray-900' : 'cursor-pointer hover:text-blue-600 font-semibold'}`}>Popular</div>
        <div className='cursor-pointer hover:text-blue-600 font-semibold'>Simulcasts</div>
        <div className='cursor-pointer hover:text-blue-600 font-semibold'>Novedades</div>
        <div className='cursor-pointer hover:text-blue-600 font-semibold'>Alfabético</div>
        <div className='cursor-pointer hover:text-blue-600 font-semibold'>Géneros</div>
        <div className='cursor-pointer hover:text-blue-600 font-semibold'>Temporadas</div>
      </div>
    </div>
  )
}
