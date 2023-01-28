import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { SearchIcon } from "@heroicons/react/solid"

import { IconSm } from "./Icon"
import { numberAnimeRandom } from "utils/formats"
import { ListIcon } from "public/svg/ListIcon"
import { DiceIcon } from "public/svg/DiceIcon"

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
          <NavItemIcon path="/" title="Mi lista" icon={<ListIcon />} />
          <NavItemIcon
            path={`/${numberAnimeRandom()}`}
            title="Aleatorio"
            icon={<DiceIcon />}
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
                icon={<DiceIcon />}
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
