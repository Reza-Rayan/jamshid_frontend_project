import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

interface SlideItem {
  content: React.ReactNode;
}

interface CCarouselProps {
  slides: SlideItem[];
}

const CCarousel = ({ slides }: CCarouselProps) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CCarousel;
