import React from "react";
import Productcard from "../utilitis/Productcard";
import img from "../../assets/product-banner.png";
const Offers: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
      <div className="bg-[#03afe5] relative h-[800px]">
        <img className="h-[800px] w-full" src={img} alt="" />
        <div className="absolute z-20 top-20 left-32 flex flex-col justify-center items-center">
          <p className="text-[16px]  text-center justify-center font-[600] w-[200px] flex  items-center bg-[#3fb7db] rounded-[8px] py-2 px-6 uppercase text-white">
            Best Sale
          </p>
          <p className="text-[58px] text-center font-bold mt-2 text-white">
            50 % off on all <br /> product
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
