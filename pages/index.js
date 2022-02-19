import Head from 'next/head'
import { useState } from 'react'

import { InicioAside } from 'components/AsideComponent'
import { InicioMain } from 'components/MainComponent'
import NavHeader from 'components/NavHeader'
import { IconSm } from 'components/Icon'
import { XIcon } from '@heroicons/react/solid'

export default function Home() {
  const [alert, setAlert] = useState(true)

  const closeAlert = () => {
    setAlert(!alert)
  }

  return (
    <>
      <Head>
        <title>Crunchyroll Clone</title>
        <link rel='icon' href='/icon.svg' />
      </Head>

      <NavHeader />

      <div className='lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto my-2 shadow-2xl bg-white overflow-hidden'>
        {alert
          ? (
            <div className='m-5 mb-0 p-2  border bg-blue2 border-blue1 text-blue1 rounded-md text-xs cursor-pointer flex justify-between'>
              <h1>¡Nuevo retos aguardan a Asta en su camino para ser Rey Mago! ¡Disponible ya la segunda temporada de BLACK CLOVER con doblaje en español!</h1>
              <button
                className='text-xl'
                onClick={closeAlert}
              >
                <IconSm Icon={XIcon} />
              </button>
            </div>
          )
          : null}
        <div className='flex flex-row'>
          <div className='w-full md:w-4/6'>
            <InicioMain />
          </div>
          <div className='hidden md:flex w-2/6'>
            <InicioAside />
          </div>
        </div>
      </div>

      <div className='hidden md:block fixed right-0 bottom-0'>
        <img src='https://www.crunchyroll.com/opt-in/hime-banner.png' alt='Beta img' />
        <div className='text-xs z-10 bottom-14 left-7 absolute'>
          <h1>Prueba la Nueva CrunchyrollBETA</h1>
          <div className='flex justify-center mt-4'>
            <a className='bg-white py-2 px-3' target='_blank' href='https://www.crunchyroll.com/es/trybeta' rel='noreferrer'>Pruebala</a>
          </div>
        </div>
      </div>
    </>
  )
}
