import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper"

import sliderInicio from "json/sliderInicio.json"
import Image from "next/image"

export function SwiperInicio() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="select-none"
      >
        {sliderInicio.map((sInicio) => (
          <SwiperSlide key={sInicio.id}>
            <div className="w-full h-[20rem] relative">
              <Image alt="slider_img" layout="fill" objectFit="contain" src={sInicio.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
