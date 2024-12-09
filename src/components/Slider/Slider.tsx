import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay  } from "swiper/modules";

import './Slider.css'

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// images
import slide1 from './assets/csela_img1.png'
import slide2 from './assets/csela_img2.png'
import slide3 from './assets/csela_facebook_1.jpg'
import slide4 from './assets/ecae_criancas.jpg'
import slide5 from './assets/oficina_violao.jpg'

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Scrollbar, Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      className="slider"
    >
      <SwiperSlide className="slider-item">
        <img src={slide1} alt="teste1" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide2} alt="teste2" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide3} alt="teste3" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide4} alt="teste3" />
      </SwiperSlide>
      <SwiperSlide className="slider-item">
        <img src={slide5} alt="teste3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
