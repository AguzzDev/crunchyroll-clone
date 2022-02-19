import Link from 'next/link'

import NewsInicio from 'json/newsInicio.json'
import { SwiperInicio } from './swiper'

export function InicioMain ({ posts }) {
  return (
    <div className='p-5 pt-0 mt-5 border-r border-gray-400'>
      <SwiperInicio />
      <div className='border-b border-gray-400 my-3'>
        <h1 className='text-lg font-bold'>Ultimas Noticias</h1>
      </div>

      {NewsInicio.map(news => (
        <div
          key={news.id}
          className='flex flex-col sm:flex-row w-full mb-5 pb-3 border-b border-gray-300'
        >
          <div className='flex items-center sm:w-2/6'>
            <img src={news.image} className='object-cover w-full' style={{ height: '150px' }} />
          </div>
          <div className='flex flex-col sm:w-4/6 ml-5'>
            <h1 className='text-lg select-none font-medium leading-5 mb-1'>{news.title}</h1>
            <p className='text-xs text-gray-500'>Autor: <span className='text-orange'>{news.author}</span>
              <span> {news.time}</span>
            </p>
            <p className='text-xs mt-3'>{news.text}</p>
          </div>
        </div>
      )).reverse()}
      <div className='flex justify-end'>
        <Link href='/noticias'>
          <button className='text-sm text-orange'>Ver más noticias »</button>
        </Link>
      </div>
    </div>
  )
}
