import React from "react";
import { FaAngleRight } from "react-icons/fa";
interface Blogprop {
  title: string;
  name: string;
  date: string;
  description: string;
  img: string;
}

const Blogcard: React.FC<Blogprop> = ({
  title,
  name,
  description,
  date,
  img,
}) => {
  return (
    <div className=" bg-white h-[450px] flex  justify-center items-center p-10 ">
      <div>
        <h1 className="text-[18px] font-[500] px-2 py-1 text-blue-500 bg-[#03b0e536] w-24  rounded-[8px]">
          {title}
        </h1>
        <div className="flex  items-center gap-5 mt-5">
          <p className="text-[#808080] hover:text-orange-500 text-[18px]">
            {name}
          </p>
          <p className="text-[#808080] hover:text-orange-500">{date}</p>
        </div>
        <div>
          <p className="text-[30px] font-bold mt-3">{description}</p>
        </div>
        <div className="bg-orange-300 w-14 h-14 hover:bg-orange-500 mt-5 group flex justify-center items-center rounded-full ">
          <FaAngleRight className="text-3xl group-hover:text-white" />
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Blogcard;
