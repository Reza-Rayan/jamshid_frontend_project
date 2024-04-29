import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

interface SlideItem {
  content: React.ReactNode;
}

interface CCarouselProps {
  slides: SlideItem[];
  perSlider: number;
  spaceBetween: number;
}

const CCarousel = ({ slides, perSlider, spaceBetween }: CCarouselProps) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      className="mb-0"
      slidesPerView={perSlider}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide.content}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CCarousel;
