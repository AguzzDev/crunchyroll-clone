import Image from "next/image"
import Link from "next/link"
import { formatDate } from "utils/formatDate"

import { SwiperInicio } from "./swiper"

export function InicioMain({ posts }) {
  return (
    <div className="p-5 pt-0 mt-5 border-r border-gray-400">
      <SwiperInicio />
      <div className="border-b border-gray-400 my-3">
        <h1 className="text-lg font-bold">Ultimas Noticias</h1>
      </div>

      {posts.map((p) => (
        <Link key={p.id} passHref href={`noticias/${p.slug}`}>
          <article className="group flex flex-col sm:flex-row w-full mb-5 pb-3 border-b border-gray-300 cursor-pointer">
            <div className="flex items-center sm:w-2/6 h-32 relative">
              <Image alt="post_img" layout="fill" src={p.img} objectFit="cover" />
            </div>
            <div className="flex flex-col sm:w-4/6 ml-5 gap-y-1">
              <h1 className="text-lg select-none font-medium leading-5 group-hover:text-orange">
                {p.title}
              </h1>
              <p className="text-xs text-gray-500">
                Autor: <span className="text-orange">{p.author}</span>
              </p>
              <p className="text-xs text-gray-500"> {formatDate(p.date)}</p>
            </div>
          </article>
        </Link>
      ))}
      <div className="flex justify-end">
        <Link passHref href="/noticias">
          <button className="text-sm text-orange">Ver más noticias »</button>
        </Link>
      </div>
    </div>
  )
}
