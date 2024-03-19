import React from "react";
import Pageheader from "../../components/utilitis/Pageheader";
import {
  FaAngleRight,
  FaComment,
  FaSearch,
  FaStopwatch,
  FaTimesCircle,
  FaUser,
} from "react-icons/fa";
import img from "../../assets/about/about-image2.jpg";
const Blogs: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto ">
      <div>
        <Pageheader />
      </div>
      <div className="lg:grid-cols-3 mt-32 grid grid-cols-1 ">
        <div className="lg:col-span-2 flex flex-col gap-5 col-span-1">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className="p-4 md:p-0">
          <div className=" md:mt-10 lg:mt-0">
            <div className="py-5 rounded-[8px] px-6 border border-[#555555] text-[#555555] flex justify-between items-center lg:ms-0 md:ms-10  lg:me-0 md:me-10">
              <input
                type="text"
                className="outline-none focus:outline-none"
                placeholder="Enter Your keywords ..."
              />{" "}
              <FaSearch className="text-2xl hover:scale-[1.2]" />
            </div>
            <div className="mt-10 lg:ms-0 md:ms-10 lg:me-0 md:me-10">
              <h1 className="text-[22px] font-bold text-black"> Category</h1>
              <ul className="mt-4 flex list-disc flex-col gap-4">
                <li className="flex  justify-between items-center text-[#555555] text-[18px] ">
                  <p>Business</p> <p>10</p>
                </li>
                <li className="flex  justify-between items-center text-[#555555] text-[18px] ">
                  <p>Cleaning</p> <p>08</p>
                </li>
                <li className="flex  justify-between items-center text-[#555555] text-[18px] ">
                  <p>Consultant</p> <p>24</p>
                </li>
                <li className="flex  justify-between items-center text-[#555555] text-[18px] ">
                  <p>Creative</p> <p>37</p>
                </li>
                <li className="flex  justify-between items-center text-[#555555] text-[18px] ">
                  <p>Technology</p> <p>103</p>
                </li>
              </ul>
            </div>
            <div className="mt-32 flex justify-center items-center flex-col ">
              <h1 className="text-[22px] font-bold text-black"> Category</h1>
              <div className="mt-10 flex flex-col gap-4">
                <div className="blog-card flex gap-4  justify-center items-center">
                  <div>
                    <img src={img} className="w-40 h-32" alt="" />
                  </div>
                  <div>
                    <h1 className="text-black font-bold text-[20px]">
                      Business meeting 2021 in San Francisco
                    </h1>
                    <div className="flex gap-2 text-[#555555] items-center">
                      <FaStopwatch /> <p>July 21, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="blog-card flex gap-4  justify-center items-center">
                  <div>
                    <img src={img} className="w-40 h-32" alt="" />
                  </div>
                  <div>
                    <h1 className="text-black font-bold text-[20px]">
                      Business meeting 2021 in San Francisco
                    </h1>
                    <div className="flex gap-2 text-[#555555] items-center">
                      <FaStopwatch /> <p>July 21, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="blog-card flex gap-4  justify-center items-center">
                  <div>
                    <img src={img} className="w-40 h-32" alt="" />
                  </div>
                  <div>
                    <h1 className="text-black font-bold text-[20px]">
                      Business meeting 2021 in San Francisco
                    </h1>
                    <div className="flex gap-2 text-[#555555] items-center">
                      <FaStopwatch /> <p>July 21, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-32 flex justify-center items-center flex-col mb-32">
              <h1 className="text-[22px] font-bold text-black"> Tags </h1>
              <div className="flex mt-10 flex-wrap gap-4">
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500">
                  Techonology
                </button>{" "}
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500 w-20">
                  Food
                </button>{" "}
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500">
                  Personality
                </button>{" "}
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500">
                  Lify Style
                </button>
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500">
                  Travel
                </button>
                <button className="py-2 px-4 border border-[#555555] text-[#555555] hover:text-white hover:bg-blue-500">
                  Nature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

const BlogCard = () => {
  return (
    <div className="lg:w-[750px] p-4">
      <img className="h-[350px]" src={img} alt="" />
      <div>
        <div className="mt-4 flex  flex-col gap-4">
          <div
            className="flex mt-4
            gap-3 text-[#555555]"
          >
            <p className="flex gap-1 justify-center items-center">
              <FaUser /> By Alex Manie
            </p>
            <p className="flex gap-1 justify-center items-center">
              <FaTimesCircle /> January 22, 2022{" "}
            </p>
            <p className="flex gap-1 justify-center items-center">
              <FaComment /> 35
            </p>
          </div>
          <h1 className="text-black font-bold text-[28px] ">
            Colour ideas for kitchen and dining spaces
          </h1>
          <p className="text-[#555555]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            atque soluta reprehenderit sint quod consequatur veniam eveniet
            dolorem, molestias delectus et voluptatum eius suscipit impedit qui,
            cupiditate voluptatibus deserunt vero quas provident magni dolores.
          </p>
          <button className="py-3 px-3 text-[20px] flex  items-center gap-1 text-[#555555] font-[600] uppercase">
            EXPLORE NOW <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};
