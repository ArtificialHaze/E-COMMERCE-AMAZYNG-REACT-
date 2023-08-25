import React from "react";
import Hero from "./assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "./testimonials";

const TestimonialsComponent = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-container">
          <span>Top Rated</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            illum!
          </span>
        </div>
        <img src={Hero} alt="Hero" />
        <div className="testimonials-container">
          <span>100k</span>
          <span>Happy customers with us.</span>
        </div>
      </div>
      <div className="reviews">Reviews</div>
      <div className="carousel">
        <Swiper slidesPerView={3} slidesPerGroup={1} spaceBetween={20}>
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="tCarousel">
              <div className="testimonial">
                <img src={testimonial.image} alt="Testimonial-Image" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
