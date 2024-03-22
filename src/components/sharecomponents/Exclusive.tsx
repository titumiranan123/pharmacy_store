import React from "react";
import play from "../../assets/play-store.png";
import apple from "../../assets/apple-store.png";
const Exclusive: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:p-0 p-4 gap-4 mt-32 mb-32 max-w-[1240px] mx-auto md:grid-cols-1 lg:grid-cols-3">
      <div className="bg-cyan-200 p-10 flex gap-5 flex-col">
        <h1 className="text-[24px] font-bold text-black">
          Exclusive Offers for You
        </h1>
        <p className="text-slate-500">
          Get Weekly deals , valuable health <br /> Information and more .
        </p>
        <button className="hover:bg-orange-500 w-40 py-5 px-4 font-bold hover:text-white hover:border-none border border-black">
          {" "}
          SING UP
        </button>
      </div>
      <div className="bg-[#fae7c3] p-10 flex gap-5 flex-col">
        <h1 className="text-[24px] font-bold text-black">Join Our Community</h1>
        <p className="text-slate-500">
          Get Weekly deals , valuable health <br /> Information and more .
        </p>
        <button className="hover:bg-orange-500 w-40 py-5 px-4 font-bold hover:text-white hover:border-none border border-black">
          {" "}
          JOIN FREE NOW
        </button>
      </div>
      <div className=" p-10 bg-[#f5d8c5] flex gap-5 flex-col">
        <h1 className="text-[24px] font-bold text-black">
          Exclusive Offers for You
        </h1>
        <p className="text-slate-500">
          Get Weekly deals , valuable health <br /> Information and more .
        </p>
        <div className="flex justify-center gap-2 items-center ">
          <img
            className="bg-black w-[150px] cursor-pointer hover:-translate-y-1 duration-150 transition-all p-2"
            src={play}
            alt=""
          />
          <img
            className="bg-black cursor-pointer hover:-translate-y-1 duration-150 transition-all w-[150px] p-2"
            src={apple}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
