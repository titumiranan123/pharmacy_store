import React from "react";
import product1 from "../../assets/Product/product-01.png";

import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
const Productcard: React.FC = () => {
  return (
    <div className="w-[280px] group border border-orange-400 rounded-xl p-2">
      <div className="relative">
        <img
          className="p-2 hover:scale-110 transition duration-200"
          src={product1}
          alt=""
        />
        <span className="text-white  absolute top-4 left-4 px-2 py-1 bg-orange-500 rounded-lg">
          10% off
        </span>
        <div className="flex justify-center h-[30px] items-center gap-3 group-hover:opacity-100 opacity-0 transition duration-150 ">
          <div
            className="group-hover:h-[40px] w-10 p-1 flex justify-center items-center  bg-blue-500 rounded-full  h-0 transition-all duration-500"
            title="Add Your Cart"
          >
            <FaShoppingCart className="text-[30px] text-white p-1" />
          </div>
          <div
            className="group-hover:h-[40px] w-10 p-1 flex justify-center items-center  bg-blue-500 rounded-full  h-0 transition-all duration-500"
            title="Add Your Cart"
          >
            <FaHeart className="text-[30px] text-white p-1" />
          </div>
          <div
            className="group-hover:h-[40px] w-10 p-1 flex justify-center items-center  bg-blue-500 rounded-full  h-0 transition-all duration-500"
            title="Add Your Cart"
          >
            <FaEye className="text-[30px] text-white p-1" />
          </div>
          {/* <img src={eye} alt="" /> */}
        </div>
      </div>
      <div className="flex justify-start flex-col p-2 gap-1 mt-2 ">
        <p className="text-[16px] font-sora text-orange-500">ACCESSORIES</p>
        <p className="font-[700] text-[24px] text-black">Supradyn Daily </p>
        <div>
          <span className="text-slate-400 text-[14px] line-through font-sora">
            $15.00
          </span>
          <span className="text-blue-500 text-[18px] font-[600] font-sora">
            $12.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
