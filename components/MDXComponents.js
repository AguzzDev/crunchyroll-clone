import Image from "next/image"
import { H1, H2, H3 } from "./Elements"

const MDXComponents = {
  bold: (props) => <bold {...props} />,
  p: (props) => (
    <p className={`text-gray-700 ${props.styles} my-2`} {...props} />
  ),
  em: (props) => <em className="text-orange font-bold" {...props} />,
  Img: ({ img }) => (
    <div className="flex justify-center">
      <Image alt="img" src={img} height={800} width={600} />
    </div>
  ),
  Titular: ({ titular, description, author, date }) => (
    <div className="border-b border-gray-300">
      <H1>{titular}</H1>
      <H2>{description}</H2>
      <H3 styles="text-blue-600">{author}</H3>
      <H3>{date}</H3>
    </div>
  ),
  TextMarginLeft: ({ text }) => (
    <div className="ml-5 text-sm">
      <h1>{text}</h1>
    </div>
  ),
  TitleCenter: ({ text }) => (
    <h1 className="text-gray-800 text-center text-xl font-bold md:w-3/6 mx-auto mb-2">
      {text}
    </h1>
  ),
  Body: (props) => (
    <div
      className="my-5 p-3 lg:p-5 w-full lg:w-10/12 xl:w-7.5/12 mx-auto shadow-2xl bg-white overflow-hidden"
      {...props}
    />
  ),
  DivMargin: (props) => <div className="my-3" {...props} />,
  li: (props) => (
    <li className="ml-5 text-sm text-gray-700 list-disc" {...props} />
  ),
  ImageHeader: ({ img1, img2 }) => (
    <div className="flex flex-col-reverse sm:flex-row gap-y-2 sm:gap-y-0 mt-3 mb-5">
      <div className="w-full sm:w-3/4 relative h-[15rem] md:h-[20rem]">
        <Image alt="img" layout="fill" objectFit="contain" src={img1} />
      </div>
      <div className="w-1/4 relative h-[5rem] md:h-[10rem]">
        <Image alt="img" layout="fill" objectFit="contain" src={img2} />
      </div>
    </div>
  ),
  Iframe: ({ src }) => (
    <iframe src={src} allowFullScreen className="w-3/6 h-[32vh] mx-auto" />
  ),
}

export default MDXComponents
