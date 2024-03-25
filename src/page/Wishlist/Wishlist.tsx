import React, { useState } from "react";
import Pageheader from "../../components/utilitis/Pageheader";
import img from "../../assets/Product/product-01.png";
import { FaX } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

const Wishlist: React.FC = () => {
  const [increase, setChange] = useState(1);
  const [total, setTotal] = useState(20);

  return (
    <div className="max-w-[1240px] mx-auto overflow-x-scroll ">
      <div>
        <Pageheader />
      </div>
      <div className="max-w-[1240px] mx-auto overflow-x-scroll ">
        <div className="min-w-[1200px]">
          <table className="mt-32 mb-32  w-full">
            <thead>
              <tr className="grid grid-cols-9">
                <th className="border col-span-2 px-4 py-2 border-[#555555]">
                  Images
                </th>
                <th className="border-t-[1px]  border-b-[1px] px-4 py-2 border-[#555555] col-span-2">
                  Product
                </th>
                <th className="border-t-[1px] border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555]">
                  Unit Price
                </th>
                <th className="border px-4 py-2 border-[#555555] col-span-2">
                  Quantity{" "}
                </th>
                <th className="border-t-[1px]  border-b-[1px] px-4 py-2 border-[#555555]">
                  {" "}
                  Total
                </th>
                <th className="border-t-[1px] border-r-[1px]  border-l-[1px] px-4 py-2 border-[#555555]">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="grid grid-cols-9 w-full">
                <td className=" col-span-2 px-4 py-2 border-[#555555] border-l-[1px]  border-b-[1px]">
                  <img src={img} className="w-[200px] h-[230px] p-6" alt="" />
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] col-span-2 flex justify-center items-center p-6 text-[22px] font-semibold">
                  Alexander Sofa
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] flex justify-center items-center  font-semibold text-[22px]">
                  {" "}
                  $20{" "}
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] col-span-2 p-6 flex justify-center items-center">
                  <div className="border border-[#555555] text-[#555555] flex justify-between items-center gap-4 p-5">
                    <FaMinus
                      onClick={() => {
                        if (increase !== 1) {
                          setChange(increase - 1);
                          setTotal(total - 20);
                        }
                      }}
                    />
                    <p className="text-[20px]">{increase}</p>
                    <FaPlus
                      onClick={() => {
                        setChange(increase + 1);
                        setTotal(total + 20);
                      }}
                    />
                  </div>
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] flex justify-center items-center text-[22px] font-semibold">
                  {" "}
                  ${total}
                </td>
                <td className="border px-4 py-2 border-[#555555] flex justify-center items-center">
                  <FaX />
                </td>
              </tr>
              <tr className="grid grid-cols-9">
                <td className=" col-span-2 px-4 py-2 border-[#555555] border-l-[1px]  border-b-[1px]">
                  <img src={img} className="w-[200px] h-[230px] p-6" alt="" />
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] col-span-2 flex justify-center items-center p-6 text-[22px] font-semibold">
                  Alexander Sofa
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] flex justify-center items-center  font-semibold text-[22px]">
                  {" "}
                  $20{" "}
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] col-span-2 p-6 flex justify-center items-center">
                  <div className="border border-[#555555] text-[#555555] flex justify-between items-center gap-4 p-5">
                    <FaMinus
                      onClick={() => {
                        if (increase !== 1) {
                          setChange(increase - 1);
                          setTotal(total - 20);
                        }
                      }}
                    />
                    <p className="text-[20px]">{increase}</p>
                    <FaPlus
                      onClick={() => {
                        setChange(increase + 1);
                        setTotal(total + 20);
                      }}
                    />
                  </div>
                </td>
                <td className="border-l-[1px]  border-b-[1px] px-4 py-2 border-[#555555] flex justify-center items-center text-[22px] font-semibold">
                  {" "}
                  ${total}
                </td>
                <td className="border px-4 py-2 border-[#555555] flex justify-center items-center">
                  <FaX />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
