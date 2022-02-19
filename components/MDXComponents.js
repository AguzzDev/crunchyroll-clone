import Head from 'next/head'
import Image from 'next/image'
import NavHeader from 'components/NavHeader'

const MDXComponents = {
  p: (props) => <p className='text-gray-700' {...props} />,
  h1: (props) => <h1 className='font-bold text-2xl hover:text-orange' {...props} />,
  h2: (props) => <h2 className='py-2 text-gray-500' {...props} />,
  h3: (props) => <h3 className='text-sm text-gray-700' {...props} />,
  em: (props) => <em className='text-orange font-bold' {...props} />,
  Img: ({ img }) =>
    <div className='flex justify-center'>
      <Image src={img} height={800} width={600} />
    </div>,
  TextMarginLeft: (props) => <div className='ml-5 text-sm' {...props} />,
  TitleCenter: (props) => <h1 className='text-gray-800 text-center text-xl font-bold md:w-3/6 mx-auto' {...props} />,
  Body: (props) => <div className='my-5 lg:px-0 w-full lg:w-10/12 xl:w-7.5/12 mx-auto shadow-2xl bg-white overflow-hidden' {...props} />,
  Padding: (props) => <div className='p-5' {...props} />,
  Line: (props) => <div className='border-b border-gray-300 w-full' {...props} />,
  Author: (props) => <h3 className='text-blue-600 text-sm' {...props} />,
  li: (props) => <li className='ml-5 text-sm text-gray-700 list-disc' {...props} />,
  ImageHeader: ({ img1, img2 }) =>
    <div className='flex space-x-10 mt-3 mb-5'>
      <div className='w-3/4 border border-gray-200'>
        <img src={img1} />
      </div>
      <div className='w-1/4 border-gray-200'>
        <img src={img2} />
      </div>
    </div>,
  Head: ({ title }) =>
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/icon.svg' />
    </Head>,
  Iframe: ({ src }) => <iframe src={src} allowFullScreen className='w-3/6 h-[32vh] mx-auto' />,
  NavHeader
}

export default MDXComponents
