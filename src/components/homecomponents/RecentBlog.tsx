import React from "react";
import img from "../../assets/blog-5.jpg";
import img2 from "../../assets/blog-6.jpg";
import Blogcard from "../Blogcard";
const data = [
  {
    title: "Health",
    name: "By Alex Manie ",
    date: "07 jan, 2024",
    description: "Experimental Cancer vaccine both treats",
    img: img,
  },
  {
    title: "Health",
    name: "By Alex Manie ",
    date: "07 jan, 2024",
    description: "Experimental Cancer vaccine both treats",
    img: img2,
  },
];
const RecentBlog: React.FC = () => {
  return (
    <div className="bg-blue-500 py-20 gap-4 mt-32  flex justify-center items-center flex-col">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex justify-center items-center flex-col mb-20">
          <h1 className="text-[18px] font-bold text-white bg-[#03b0e536] px-2 py-2">
            READ BLOG{" "}
          </h1>
          <p className="text-6xl font-bold text-white">Recent Blog</p>
        </div>
        <div className="flex justify-center gap-4 items-center md:flex-nowrap flex-wrap p-4">
          {data.map((data, indx) => (
            <Blogcard
              key={indx}
              name={data.name}
              img={data.img}
              title={data.title}
              description={data.description}
              date={data.date}
            ></Blogcard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
