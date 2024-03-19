import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import mlogo from "../../assets/whitelogo.svg";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import { RxCross2 } from "react-icons/rx";
const Navbar: React.FC = () => {
  interface navProp {
    href: string;
    className: string;
    title: string;
  }
  const CustomNav: React.FC<navProp> = ({ href, className, title }) => {
    return (
      <Link
        className={`${className} ${
          path.pathname == href
            ? "text-orange-400  font-bold"
            : `${open ? "text-white" : "text-black"}`
        } font-sora text-[16px] font-[500] `}
        to={href}
      >
        {title}
      </Link>
    );
  };
  const path = useLocation();
  console.log(path.pathname);
  const [open, setOpen] = useState(false);
  const handelNav = () => {
    console.log("active");
    setOpen(!open);
  };
  return (
    <div
      className={`${
        !open ? "px-6" : ""
      } max-w-[1240px] mx-auto lg:px-0  flex justify-between items-center py-10`}
    >
      <img src={logo} alt="" />
      <div className="lg:flex justify-center items-center gap-4 hidden">
        <CustomNav href="/" title="Home" className=" " />
        <CustomNav href="/about" title="About" className=" " />
        <CustomNav href="/shop" title="Shop" className=" " />
        <CustomNav href="/blog-classic" title="Blog" className=" " />
        <CustomNav href="/contact" title="Contact" className=" " />
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className=" border lg:flex hidden justify-between items-center border-[#d8d8d7] text-slate-300 rounded-full">
          <input
            type="text"
            className="py-2 px-4 rounded-s-full"
            placeholder="Search..."
          />
          <button>
            <CiSearch className="bg-blue-600 py-3 px-3 font-bold text-[50px] rounded-full" />
          </button>
        </div>
        <div className="flex  gap-5">
          <div className="relative">
            <img className="w-[26px] h-[26px]" src={heart} alt="" />
            <span className="h-[20px] w-[20px] flex justify-center items-center rounded-full bg-orange-500 text-white absolute -top-2 -right-3">
              3
            </span>
          </div>
          <div className="relative">
            <img className="w-[26px] h-[26px]" src={cart} alt="" />
            <span className="h-[20px] w-[20px] flex justify-center items-center rounded-full bg-orange-500 text-white absolute -top-2 -right-3">
              3
            </span>
          </div>
          <div
            onClick={handelNav}
            className="flex cursor-pointer lg:hidden justify-center items-center flex-col gap-1"
          >
            <span className="w-6 bg-black h-[2px]"></span>
            <span className="w-6 bg-black h-[2px]"></span>
            <span className="w-6 bg-black h-[2px]"></span>
          </div>
        </div>
      </div>
      {open && (
        <div className="  absolute grid grid-cols-3 z-50 lg:hidden right-0 top-0 h-screen w-full   ">
          <div className=" col-span-1 h-screen bg-black  bg-opacity-60"></div>
          <div className="bg-black col-span-2 p-6 border-l-4 border-orange-500">
            <div className="flex justify-between items-center ">
              <img className="w-40" src={mlogo} />
              <div onClick={() => setOpen(!open)} className="text-white">
                <RxCross2 className="text-2xl" />
              </div>
            </div>
            <div className="flex flex-col   mt-10 gap-2 justify-center  ">
              <div className=" border flex bg-white justify-between items-center border-[#d8d8d7] text-slate-300 rounded-full">
                <input
                  type="text"
                  className="py-1 px-2 w-3/4 rounded-s-full outline-none focus:outline-none text-black"
                  placeholder="Search..."
                />
                <button>
                  <CiSearch className="bg-blue-600 py-1 px-1 font-bold text-[30px] rounded-full" />
                </button>
              </div>
              <div className=" flex-col flex justify-center mt-8 gap-2">
                <CustomNav href="/" title="Home" className="" />
                <span className="w-full h-[1px] bg-white"></span>
                <CustomNav href="/about" title="About" className=" " />
                <span className="w-full h-[1px] bg-white"></span>

                <CustomNav href="/shop" title="Shop" className=" " />
                <span className="w-full h-[1px] bg-white"></span>

                <CustomNav href="/blog-classic" title="Blog" className=" " />
                <span className="w-full h-[1px] bg-white"></span>

                <CustomNav href="/contact" title="Contact" className=" " />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
