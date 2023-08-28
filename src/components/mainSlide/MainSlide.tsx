import './carousel.css';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as SC from './MainSlide.styled';

export default function MainSlide() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="swiper">
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide style={{ WebkitTextStroke: '3px #463ED8' }}>
          Frontend
        </SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide style={{ WebkitTextStroke: '3px #463ED8' }}>
          HTML/CSS
        </SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide style={{ WebkitTextStroke: '3px #463ED8' }}>
          JavaScript
        </SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide style={{ WebkitTextStroke: '3px #463ED8' }}>
          React
        </SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide style={{ WebkitTextStroke: '3px #463ED8' }}>
          TypeScript
        </SC.TextSlide>
      </SwiperSlide>
    </Swiper>
  );
}
