import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "./products";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        navigation
        loop
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderProducts.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="left-slide">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price} $</span>
              <div>Shop now</div>
            </div>
            <img src={slide.img} alt="Slide-Image" className="img-product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
