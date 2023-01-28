import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { SearchIcon } from "@heroicons/react/solid"

import { IconSm } from "./Icon"
import { numberAnimeRandom } from "utils/formats"

export default function NavHeader() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${query}`)
  }

  const NavItem = ({ path, title }) => (
    <Link passHref href={path}>
      {!title ? (
        <div title={title} className="mt-2 cursor-pointer">
          <Image alt="logo_img" src="/logo.svg" height={50} width={140} />
        </div>
      ) : (
        <h1 className="font-medium text-sm cursor-pointer hover:text-orange">
          {title}
        </h1>
      )}
    </Link>
  )

  const NavItemIcon = ({ path, icon, title }) => (
    <Link passHref href={path}>
      <button className="flex flex-col group cursor-pointer">
        <div className="h-6 w-3/4 mx-auto">{icon}</div>

        <h1 className="mt-1 font-semibold text-xs group-hover:text-orange text-gray-400">
          {title}
        </h1>
      </button>
    </Link>
  )

  return (
    <section className="w-full bg-white shadow-xl select-none sticky top-0 z-50">
      <div className="hidden md:flex justify-between px-4 lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto">
        <div className="flex flex-row items-center space-x-2 lg:space-x-5">
          <NavItem path="/" />
          <NavItem path="/videos/anime" title="Series" />
          <NavItem path="/noticias" title="Noticias" />
          <NavItem path="/" title="Juegos" />
          <NavItem path="/" title="Premium" />
        </div>

        <div className="flex flex-row items-center space-x-2 lg:space-x-5">
          <NavItemIcon
            path="/"
            title="Mi lista"
            icon={
              <svg
                viewBox="0 0 48 48"
                class="fill-current group-hover:text-orange text-gray-400"
              >
                <path d="M33.3,8H14.7C13.2,8,12,9.5,12,11v28.6c0,0.5,0.3,1,0.7,1.2c0.2,0.1,0.4,0.1,0.6,0.1c0.3,0,0.5-0.1,0.8-0.2l9.9-7.1l9.9,7.1c0.2,0.2,0.5,0.2,0.8,0.2c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.7-0.7,0.7-1.2V11C36,9.5,34.8,8,33.3,8z" />
              </svg>
            }
          />
          <NavItemIcon
            path={`/${numberAnimeRandom()}`}
            title="Aleatorio"
            icon={
              <svg
                viewBox="0 0 58 46"
                class="fill-current group-hover:text-orange text-gray-400"
              >
                <path d="M40,12.3C40,9.9,38.1,8,35.7,8H12.3C9.9,8,8,9.9,8,12.3v23.5c0,2.4,1.9,4.3,4.3,4.3h23.5c2.4,0,4.3-1.9,4.3-4.3V12.3zM16.3,19.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S18.4,19.7,16.3,19.7z M32.2,35.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S34.3,35.6,32.2,35.6z" />
              </svg>
            }
          />

          <form onSubmit={handleSubmit}>
            <div className="flex justify-between border py-2 border-gray-300 mx-auto">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Anime, drama, etc."
                autoComplete="off"
                className="outline-none ml-2 w-full text-sm"
              />
              <button className="mr-3 text-gray-400">
                <IconSm Icon={SearchIcon} />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col items-center px-4">
        <div className="flex justify-between items-center w-full">
          <NavItem path="/" />

          <div className="flex items-center space-x-2">
            <div className="hidden sm:block">
              <NavItemIcon
                path={`/${numberAnimeRandom()}`}
                title="Aleatorio"
                icon={
                  <svg
                    viewBox="0 0 58 46"
                    class="fill-current group-hover:text-orange text-gray-400"
                  >
                    <path d="M40,12.3C40,9.9,38.1,8,35.7,8H12.3C9.9,8,8,9.9,8,12.3v23.5c0,2.4,1.9,4.3,4.3,4.3h23.5c2.4,0,4.3-1.9,4.3-4.3V12.3zM16.3,19.7c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S18.4,19.7,16.3,19.7z M32.2,35.6c-2.1,0-3.8-1.7-3.8-3.8s1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8S34.3,35.6,32.2,35.6z" />
                  </svg>
                }
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between border py-2 border-gray-300 mx-auto">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Anime, drama, etc."
                  autoComplete="off"
                  className="outline-none ml-2 w-full text-sm"
                />
                <button className="mr-3 text-gray-400">
                  <IconSm Icon={SearchIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex space-x-5 pb-3">
          <NavItem path="/videos/anime" title="Series" />
          <NavItem path="/noticias" title="Noticias" />
          <NavItem path="/" title="Juegos" />
          <NavItem path="/" title="Premium" />
        </div>
      </div>
    </section>
  )
}
