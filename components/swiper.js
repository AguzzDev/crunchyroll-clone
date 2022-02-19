import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, A11y } from "swiper"

import sliderInicio from "json/sliderInicio.json"

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
            <img src={sInicio.image} className="w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
