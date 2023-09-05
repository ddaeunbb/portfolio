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
        <SC.TextSlide>Frontend</SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide>HTML/CSS</SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide>JavaScript</SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide>React</SC.TextSlide>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <SC.TextSlide>TypeScript</SC.TextSlide>
      </SwiperSlide>
    </Swiper>
  );
}
