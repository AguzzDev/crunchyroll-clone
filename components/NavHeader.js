import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuIcon, SearchIcon } from '@heroicons/react/solid'

import { useSearch } from 'hooks/useSearch'
import { IconSm } from './Icon'
import { numberAnimeRandom } from 'utils/formats'

export default function NavHeader() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { search } = useSearch(query, pageNumber)

  const handleInputChange = (e) => {
    if (e.target.value === ' ') return
    setQuery(e.target.value)
    setPageNumber(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${query}`)
  }

  return (
    <div className='w-full bg-white shadow-xl'>
      <div className='flex flex-row justify-between px-4 lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto'>
        <div className='hidden sm:flex flex-row items-center space-x-5 select-none'>
          <Link href='/'>
            <div title='Crunchyroll' className='mt-2 cursor-pointer'>
              <Image src='/logo.svg' height={50} width={140} />
            </div>
          </Link>
          <Link href='/videos/anime'>
            <h1 className='font-medium text-sm cursor-pointer hover:text-orange'>Series</h1>
          </Link>
          <Link href='/noticias'>
            <h1 className='font-medium text-sm cursor-pointer hover:text-orange'>Noticias</h1>
          </Link>
          <Link href='/'>
            <h1 className='font-medium text-sm cursor-pointer hover:text-orange'>Juegos</h1>
          </Link>
          <Link href='/'>
            <h1 className='font-medium text-sm cursor-pointer hover:text-orange'>Premium</h1>
          </Link>
        </div>

        <div className='hidden md:flex flex-row items-center space-x-5 select-none'>
          <div className='flex flex-col group cursor-pointer'>
            <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
              <path d='M33.3,8H14.7C13.2,8,12,9.5,12,11v28.6c0,0.5,0.3,1,0.7,1.2c0.2,0.1,0.4,0.1,0.6,0.1c0.3,0,0.5-0.1,0.8-0.2l9.9-7.1l9.9,7.1c0.2,0.2,0.5,0.2,0.8,0.2c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.7-0.7,0.7-1.2V11C36,9.5,34.8,8,33.3,8z' />
            </svg>
            <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Mi lista</h1>
          </div>

          <Link href={`/${numberAnimeRandom()}`}>
            <button className='group'>
              <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
                <path d='M40,12.3C40,9.9,38.1,8,35.7,8H12.3C9.9,8,8,9.9,8,12.3v23.5c0,2.4,1.9,4.3,4.3,4.3h23.5c2.4,0,4.3-1.9,4.3-4.3V12.3zM16.3,19.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S18.4,19.7,16.3,19.7z M32.2,35.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S34.3,35.6,32.2,35.6z' />
              </svg>
              <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Aleatorio</h1>
            </button>
          </Link>

          <div className='flex flex-col group cursor-pointer'>
            <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
              <g>
                <circle cx='16' cy='16' r='8' />
                <path d='M16,28c-5.3,0-16,2.7-16,8v4h32v-4C32,30.7,21.3,28,16,28z' />
              </g>
              <path d='M34.4,26.5L40,32c0.6,0.6,1.5,0.6,2,0l5.6-5.6c0.9-0.9,0.3-2.5-1-2.5H35.4C34.2,24,33.5,25.6,34.4,26.5z' />
            </svg>
            <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Perfil</h1>
          </div>

          <form onSubmit={handleSubmit} className='relative'>
            <div className='flex justify-between border py-2 border-gray-300 mx-auto'>
              <input
                value={query}
                placeholder='Anime, drama, etc.'
                onChange={handleInputChange}
                autoComplete='off'
                className='outline-none ml-2 w-full text-sm'
              />
              <button className='mr-3 text-gray-400'>
                <IconSm Icon={SearchIcon} />
              </button>
            </div>
            {search && search[0] && search[0].length > 0 &&
              <div className='w-56 bg-white absolute right-0 border border-gray-300 rounded-md'>

                {search[0].map(s => (
                  <Link key={s.id} href={`/videos/${s.id}/${(s.title).split(' ').join('_')}`}>
                    <div className='flex items-center space-x-3 border-b border-gray-300 w-full p-2 cursor-pointer'>
                      <div className='w-2/6 flex items-center'>
                        <Image src={s.image} height={40} width={70} className='object-cover w-full h-full' />
                      </div>
                      <div className='text-sm w-4/6'>
                        <h1 className='font-bold truncate w-32'>{s.title}</h1>
                        <p>{s.type}</p>
                      </div>
                    </div>
                  </Link>
                )).slice(0, 5)}

              </div>}
          </form>

        </div>
      </div>
      <Link href='/'><img className='hidden lg:flex h-16 object-cover cursor-pointer' src='https://img1.ak.crunchyroll.com/i/spire3/be50e6912408e2ee1d0740881ece8d451626996624_main.png' /></Link>

      {/* Mobile */}
      <div className='flex sm:hidden flex-row justify-between px-1'>
        <div className='flex'>
          <div className='flex pl-1 pr-4'>
            <button id='Button-Menu' className='text-gray-400'>
              <IconSm Icon={MenuIcon} />
            </button>
          </div>
          <Link href='/'>
            <div title='Crunchyroll' className='mt-2 cursor-pointer'>
              <Image src='/logo.svg' height={50} width={140} />
            </div>
          </Link>
        </div>
        <div className='hidden absolute flex-col items-left space-y-5 pl-5 py-3 select-none bg-white shadow-xl' id='Menu' style={{ top: '73px', left: '-5px', minWidth: '33%', maxWidth: '33%' }}>
          <Link href='/'>
            <h1 className='font-semibold text-sm cursor-pointer hover:text-orange'>Series</h1>
          </Link>
          <Link href='/'>
            <h1 className='font-semibold text-sm cursor-pointer hover:text-orange'>Noticias</h1>
          </Link>
          <Link href='/'>
            <h1 className='font-semibold text-sm cursor-pointer hover:text-orange'>Juegos</h1>
          </Link>
          <Link href='/'>
            <h1 className='font-semibold text-sm cursor-pointer hover:text-orange'>Premium</h1>
          </Link>
        </div>

        <div className='flex flex-row items-center space-x-3 select-none'>
          <div className='flex flex-col group cursor-pointer'>
            <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
              <path d='M33.3,8H14.7C13.2,8,12,9.5,12,11v28.6c0,0.5,0.3,1,0.7,1.2c0.2,0.1,0.4,0.1,0.6,0.1c0.3,0,0.5-0.1,0.8-0.2l9.9-7.1l9.9,7.1c0.2,0.2,0.5,0.2,0.8,0.2c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.7-0.7,0.7-1.2V11C36,9.5,34.8,8,33.3,8z' />
            </svg>
            <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Mi lista</h1>
          </div>

          <Link href='/videos/30'>
            <button className='flex flex-col group cursor-pointer'>
              <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
                <path d='M40,12.3C40,9.9,38.1,8,35.7,8H12.3C9.9,8,8,9.9,8,12.3v23.5c0,2.4,1.9,4.3,4.3,4.3h23.5c2.4,0,4.3-1.9,4.3-4.3V12.3zM16.3,19.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S18.4,19.7,16.3,19.7z M32.2,35.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S34.3,35.6,32.2,35.6z' />
              </svg>
              <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Aleatorio</h1>
            </button>
          </Link>

          <div className='flex flex-col group cursor-pointer'>
            <svg viewBox='0 0 48 48' className='fill-current text-gray-400 group-hover:text-orange w-6 mx-auto'>
              <g>
                <circle cx='16' cy='16' r='8' />
                <path d='M16,28c-5.3,0-16,2.7-16,8v4h32v-4C32,30.7,21.3,28,16,28z' />
              </g>
              <path d='M34.4,26.5L40,32c0.6,0.6,1.5,0.6,2,0l5.6-5.6c0.9-0.9,0.3-2.5-1-2.5H35.4C34.2,24,33.5,25.6,34.4,26.5z' />
            </svg>
            <h1 className='font-semibold text-xs group-hover:text-orange text-gray-400'>Perfil</h1>
          </div>
        </div>
      </div>
    </div>

  )
}
