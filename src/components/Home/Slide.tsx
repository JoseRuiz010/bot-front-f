import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/";
import { dataNoticias } from "../../data/dataNoticias";
import { Noticia } from "../Noticias/Noticia";
export const Slide = () => {
  console.log(dataNoticias);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="cube"
    >
      {dataNoticias.map((n) => (
        <SwiperSlide>
          <Noticia noticia={n}></Noticia>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
