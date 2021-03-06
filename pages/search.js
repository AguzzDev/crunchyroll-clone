import { SearchIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import { IconSm } from 'components/Icon'
import NavHeader from 'components/NavHeader'
import { useSearch } from 'hooks/useSearch'

export default function Search() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const { loading, search } = useSearch(query, pageNumber)

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
      <Head>
        <title>{query} - Crunchyroll</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/icon.svg' />
      </Head>

      <NavHeader />

      <div className='w-full lg:w-10/12 xl:w-7/12 mx-auto my-8'>
        <h1 className='font-bold text-xl text-gray-700'>Búsqueda</h1>
      </div>
      <div className='flex flex-row p-5 lg:w-10/12 xl:w-7/12 mx-auto shadow-2xl bg-white min-h-screen'>
        <div className='w-2/12' />
        <div className='w-10/12 border-l border-gray-400 pl-5'>
          <form>
            <div className='flex justify-between border border-gray-500 w-8/12 mx-auto'>
              <input
                value={query}
                onChange={handleInputChange}
                autoComplete='off'
                className='outline-none ml-2 w-full'
              />
              <button
                className='bg-orange text-white px-2 py-2'
              >
                <IconSm Icon={SearchIcon} />
              </button>
            </div>
          </form>

          <div>
            <h1 className='text-lg font-bold text-gray-700'>Videos</h1>
            <p className='text-sm'>Desplegando resultados de: {query}</p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 w-full'>
            {loading && <h1>Loading</h1>}
            {search && search.length > 0 && search[0].map((s) => {
              return (
                <Link
                  key={s.id}
                  href={`/videos/${s.id}/${(s.title).split(' ').join('_')}`}>
                  <div
                    className='flex flex-col mx-auto mt-5 cursor-pointer overflow-hidden' style={{ width: '230px', height: '550px' }}
                  >
                    <div className='hover:opacity-50' style={{ height: '50%' }}>
                      <img src={s.image} className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col' style={{ height: '45%' }}>
                      <h1 className='font-medium w-full my-1 mb-2'>{s.title}</h1>
                      <p className='text-sm overflow-hidden'>{s.synopsis}</p>
                    </div>
                    <div className='flex justify-center font-medium' style={{ height: '5%' }}>
                      <p className='text-gray-700 text-sm'>{s.episodes} Videos</p>
                      <p className='text-sm ml-2 text-orange'>{s.type}</p>
                      <p className='text-sm ml-2 text-red-700'>{s.score}/10</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
