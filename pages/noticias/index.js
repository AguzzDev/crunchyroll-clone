import Image from "next/image"
import Link from "next/link"

import { getAllFilesMetadata } from "lib/mdx"
import { NoticiasAside } from "components/AsideComponent"
import { useRouter } from "next/router"
import { Layout } from "components/Layout"

export default function Noticias({ posts }) {
  const router = useRouter()
  return (
    <Layout title="Crunchyroll Clone - Noticias">
      <section className="lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto mt-2 shadow-2xl bg-white overflow-hidden">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-2 w-full md:w-4/6 p-4">
            {posts.map((post, i) => (
              <article className="p-3 border border-orange" key={i}>
                <Link passHref href={`${router.asPath}/${post.slug}`}>
                  <h1 className="font-bold text-xl text-gray-800 hover:text-orange cursor-pointer">
                    {post.title}
                  </h1>
                </Link>
                <h2 className="text-gray-600 text-sm mb-3">{post.subtitle}</h2>
                <p className="text-xs text-orange">{post.author}</p>
                <div className="flex  py-2 border-t border-gray-300">
                  <Image alt="post_img" src={post.img} height={500} width={500} />
                  <p className="ml-2 text-sm">{post.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="hidden md:flex w-2/6">
            <NoticiasAside />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export async function getStaticProps() {
  const posts = await getAllFilesMetadata()

  return {
    props: {
      posts,
    },
  }
}
