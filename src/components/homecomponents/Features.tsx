import React from "react";
import Heading from "../utilitis/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Productcard from "../utilitis/Productcard";
const Features: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div>
        <Heading title="Feature" heading="Feature Products" />
      </div>
      <div className="mt-[80px]">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
          <SwiperSlide>
            <Productcard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
