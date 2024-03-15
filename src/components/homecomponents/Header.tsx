import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/effect-fade";
import add from "../../assets/discount.png";
import banner from "../../assets/banner-4-1.png";
import mask from "../../assets/msk.png";
const Header: React.FC = () => {
  const data = [
    {
      img: banner,
      heading: "Buy Inhalers Online Now!",
      description:
        "Lorem ipsum dolor sit amet consetetur adipiscing elit. Impedit ofiiciis vitae offica dolorem?",
    },
    {
      img: mask,
      heading: "Premium Face Masks!",
      description:
        "Lorem ipsum dolor sit amet consetetur adipiscing elit. Impedit ofiiciis vitae offica dolorem?",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto h-[700px]">
      <div className="">
        <Swiper
          className="mySwiper"
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect="fade"
        >
          {data.map((data, idx) => (
            <SwiperSlide key={idx}>
              <SwiperSlinder data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
interface cardProp {
  data: {
    heading: string;
    description: string;
    img: string;
  };
}
const SwiperSlinder: React.FC<cardProp> = ({ data }) => {
  return (
    <div className="flex justify-center lg:flex-nowrap mt-[80px] lg:px-0 px-6 flex-wrap items-center bg-white">
      <div className="lg:w-[50%] w-full">
        <div className="flex flex-col gap-5">
          <p className="text-[16px]  font-[500] w-[200px] flex justify-center items-center bg-cyan-300 rounded-[8px] py-2 px-2">
            Welcome to Addina
          </p>
          <div className="">
            <p className="text-[80px] font-sora font-bold text-black leading-[80px]">
              {data.heading}
            </p>
            <p className="mt-4 font-sora text-slate-500">{data.description}</p>
          </div>
          <div className="flex gap-2 mt-9">
            <button className="bg-orange-500 text-[20px] font-[500] text-white py-5 px-8 flex justify-center items-center">
              BUY NOW{" "}
            </button>
            <button className="hover:bg-orange-500 text-[20px] font-[500] hover:text-white py-5 px-8 flex justify-center items-center">
              VIEW MORE{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-full relative h-[550px]">
        <img src={data.img} alt="Nature 1" />
        <img
          src={add}
          className="absolute top-0 left-[30%] -rotate-12 "
          alt=""
        />
      </div>
    </div>
  );
};
