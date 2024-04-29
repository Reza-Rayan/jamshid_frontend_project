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
    <Swiper spaceBetween={spaceBetween} slidesPerView={perSlider}>
      {slides.map((slide, index) => (
        <SwiperSlide className="min-h-[100px] max-h-[200px]" key={index}>
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CCarousel;
