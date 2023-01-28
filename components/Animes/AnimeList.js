import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { Waypoint } from "react-waypoint"

export const AnimeList = ({ animes, setHasMore }) => {
  const router = useRouter()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-1 lg:p-0 mr-3">
      {animes.length > 0 &&
        animes.map((p, i) => (
          <div key={i}>
            <Link
              passHref
              href={
                router.pathname === "/search"
                  ? `videos/${p.id}/${p.title.replace(/\s/g, "_")}`
                  : `${p.id}/${p.title.replace(/\s/g, "_")}`
              }
            >
              <div className="cols-span-1  h-64 bg-white p-2 cursor-pointer hover:shadow-2xl whitespace-nowrap overflow-hidden">
                <div className="h-3/4 relative">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={p.image || p.images.jpg.image_url}
                  />
                </div>
                <div className="flex flex-col justify-center h-1/4 w-full">
                  <h1 className="text-sm font-medium leading-5 mb-1 overflow-ellipsis overflow-hidden">
                    {p.title}
                  </h1>
                  <p className="text-gray-500 text-xs">{p.ep} Videos</p>
                </div>
              </div>
            </Link>
            {i === animes.length - 1 && (
              <Waypoint onEnter={() => setHasMore(true)} />
            )}
          </div>
        ))}
    </div>
  )
}
