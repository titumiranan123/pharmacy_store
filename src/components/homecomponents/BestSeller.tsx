import React from "react";
import img from "../../assets/vaccine-01.png";
import Button from "../utilitis/Button";
const BestSeller: React.FC = () => {
  return (
    <div className="py-20 gap-5 max-w-[1240px] mx-auto flex items-center">
      <div className="flex flex-col gap-5 lg:w-[50%]">
        <p className="text-[16px]  font-[600] w-[200px] flex  items-center bg-[#3fb7db] rounded-[8px] py-2 px-6 uppercase text-white">
          Best Sale
        </p>
        <p className="text-[48px] font-bold mt-2  text-white">Best Sellers</p>
        <p className=" text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          inventore perspiciatis omnis eaque obcaecati eos repellat.
        </p>
        <div></div>
        <Button className="w-[170px]" title="BUY NOW " />
      </div>
      <div className="lg:w-[50%]  vaccine-thumb ">
        <img className="vaccine-thumb" src={img} alt="" />
      </div>
    </div>
  );
};

export default BestSeller;
