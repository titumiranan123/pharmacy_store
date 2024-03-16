import React from "react";
interface buttonprop {
  title: string;
  className: string;
}
const Button: React.FC<buttonprop> = ({ title, className }) => {
  return (
    <button
      className={`bg-orange-500 text-[20px] font-[500] text-white py-5 px-8 flex justify-center items-center ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
