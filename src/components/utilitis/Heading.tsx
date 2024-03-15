import React from "react";
interface headingprop {
  title: string;
  heading: string;
}
const Heading: React.FC<headingprop> = ({ title, heading }) => {
  return (
    <div>
      <p className="text-[16px]  font-[600] w-[200px] flex  items-center bg-cyan-300 rounded-[8px] py-2 px-6 uppercase">
        {title}
      </p>
      <p className="text-[48px] font-bold mt-2">{heading}</p>
    </div>
  );
};

export default Heading;
