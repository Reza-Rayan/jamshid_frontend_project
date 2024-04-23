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
      slidesPerView={1.7}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CCarousel;
