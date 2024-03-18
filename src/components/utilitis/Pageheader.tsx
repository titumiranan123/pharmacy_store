import React from "react";
import { useLocation } from "react-router-dom";

const Pageheader: React.FC = () => {
  const path = useLocation();
  return (
    <div className="bg-img max-w-[1240px]  mx-auto ">
      <h1 className="flex capitalize h-[250px] flex-col  justify-center items-center ">
        <h1 className="text-[48px] font-bold text-white">
          {" "}
          {path.pathname.split("/")[1]}
        </h1>
        <p className="text-white text-xl">
          Home.{path.pathname.split("/")[1]}{" "}
        </p>
      </h1>
    </div>
  );
};

export default Pageheader;
