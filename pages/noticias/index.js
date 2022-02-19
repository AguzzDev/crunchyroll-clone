import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { getAllFilesMetadata } from 'lib/mdx'
import NavHeader from 'components/NavHeader'
import { NoticiasAside } from 'components/AsideComponent'

export default function Noticias({ posts }) {
  return (
    <>
      <Head>
        <title>Crunchyroll Clone - Noticias</title>
        <link rel='icon' href='/icon.svg' />
      </Head>

      <NavHeader />

      <div className='lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto mt-2 shadow-2xl bg-white overflow-hidden'>
        <div className='flex flex-row'>
          <div className='flex flex-col space-y-2 w-full md:w-4/6 p-4'>
            {posts.map((post, i) => (
              <div
                className='p-3 border border-orange'
                key={post.slug}
              >
                <Link href={`noticias/${post.slug}`}>
                  <h1 className='font-bold text-xl text-gray-800 hover:text-orange cursor-pointer'>{post.title}</h1>
                </Link>
                <h2 className='text-gray-600 text-sm mb-3'>{post.subtitle}</h2>
                <p className='text-xs text-orange'>{post.author}</p>
                <div className='flex  py-2 border-t border-gray-300'>
                  <Image src={post.img} height={500} width={500} />
                  <p className='ml-2 text-sm'>{post.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='hidden md:flex w-2/6'>
            <NoticiasAside />
          </div>
        </div>
      </div>
    </>
  )
}
export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    props: {
      posts: posts
    }
  }
}
