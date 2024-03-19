import React from "react";
import Pageheader from "../../components/utilitis/Pageheader";
import { FaBars } from "react-icons/fa";
import Productcard from "../../components/utilitis/Productcard";

const Shop: React.FC = () => {
  return (
    <div className="max-w-[1240px]  mx-auto">
      <div>
        <Pageheader />
      </div>
      <div className="mb-32 flex justify-center items-center flex-col">
        <div className="flex md:flex-row flex-col  mt-32  justify-between items-center md:gap-56 lg:gap-0  gap-5">
          <div>
            <h1 className="text-[20px] font-bold  text-black">
              10 Item On List
            </h1>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="flex text-[18px] text-[#555555] justify-center items-center gap-1">
              <FaBars /> FILTER
            </p>
            <div>
              <select>
                <option>This Past Year</option>
                <option>This past Week </option>
                <option>The Past Month</option>
                <option>Show 20</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
    </div>
  );
};

export default Shop;
