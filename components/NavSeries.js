import { useRouter } from "next/router"

export default function NavSeries() {
  const router = useRouter()

  const Tab1Children = ({ path, title }) => (
    <div
      className={`${
        router.pathname === path ? "bg-white" : "bg-gray-800 text-white"
      } cursor-pointer font-semibold  px-5 py-2`}
    >
      <p> {title}</p>
    </div>
  )
  const Tab2Children = ({ path, title }) => (
    <div className="px-5 py-2 cursor-pointer">
      <p
        className={`${
          router.pathname === path ? "text-gray-700" : "text-gray-400"
        } font-semibold hover:text-gray-700`}
      >
        {title}
      </p>
    </div>
  )

  return (
    <section className="flex flex-col lg:px-0 p-1 lg:w-10/12 xl:w-7/12 mx-auto mt-2 select-none">
      <div className="flex space-x-1 bg-gray-600 px-1 pt-1">
        <Tab1Children title="Anime" path="/videos/anime" />
        <Tab1Children title="Drama" path="/videos/drama" />
      </div>

      <div className="flex bg-white">
        <Tab2Children title="Popular" path="/videos/anime" />
        <Tab2Children title="Novedades" path="/videos/novedades" />
        <Tab2Children title="Alfabeto" path="/videos/alfabeto" />
        <Tab2Children title="Géneros" path="/videos/generos" />
        <Tab2Children title="Temporadas" path="/videos/temporadas" />
      </div>
    </section>
  )
}
