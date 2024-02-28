// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation} from 'swiper/modules';
import React from "react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default (props: { image: string }) => {
  return (
    <Swiper className="max-w-7xl"
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        1000: {slidesPerView: 3,},
        100: {slidesPerView: 1}
      }}
      pagination ={{ clickable: true }}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={props.image} alt=""/></SwiperSlide>
      <SwiperSlide><img src={props.image} alt=""/></SwiperSlide>
      <SwiperSlide><img src={props.image} alt=""/></SwiperSlide>
      <SwiperSlide><img src={props.image} alt=""/></SwiperSlide>
    </Swiper>
  );
};
