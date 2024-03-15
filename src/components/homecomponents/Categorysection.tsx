import React from "react";
import Heading from "../utilitis/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import productImg from "../../assets/category/deltol.png";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Categorysection: React.FC = () => {
  return (
    <div>
      <Heading title="Categorie" heading="Top Categories" />
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
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard img={productImg} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
interface cardprop {
  img: string;
}
const CategoryCard: React.FC<cardprop> = ({ img }) => {
  return (
    <div className="w-[250px] flex flex-col justify-center items-center gap-5 bg-cyan-100 h-[300px] rounded-[20px]">
      <div>
        <p className="text-[14px] text-orange-500 font-sora font-[600] text-center">
          FLAT 15% OFF
        </p>
        <p className="text-center text-black font-[600] font-sora text-[18px]">
          Medicine
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Categorysection;
