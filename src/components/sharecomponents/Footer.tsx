import React from "react";
import mobileLogo from "../../assets/whitelogo.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import pay from "../../assets/paypal.png";
import payoneer from "../../assets/payoneer.png";
import master from "../../assets/maser.png";
const Footer: React.FC = () => {
  return (
    <div className="bg-[#191919]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1240px] mx-auto py-20">
        <div className="flex  gap-4 flex-col">
          <img src={mobileLogo} alt="" />
          <p className="text-[#9f9f9f]">
            It helps designers plan out where the content <br /> will sit , the
            content to be written and apporved .
          </p>
          <div className="flex  items-center gap-2">
            <FaFacebook className="text-white text-4xl bg-[#191919]" />

            <FaTwitter className="bg-white text-4xl text-[#191919] rounded-full p-2" />

            <FaLinkedin className="bg-white text-4xl text-[#191919] rounded-full p-2" />
          </div>
        </div>
        <div className="flex   mx-auto flex-col">
          <h1 className="text-white text-[20px] font-bold mb-5">Services </h1>
          <div className="flex flex-col gap-2 text-[16px] text-[#9f9f9f] font-[600]">
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Log In
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              WishList
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Return Policy
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Testimonial
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Shopping FAQs
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Privacy policy{" "}
            </p>
          </div>
        </div>
        <div className="flex mx-auto   flex-col">
          <h1 className="text-white text-[20px] font-bold mb-5">Company </h1>
          <div className="flex flex-col gap-2 text-[16px]  font-[600]">
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Home{" "}
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              About us
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              How its work
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Pages
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Blog
            </p>
            <p className="hover:text-white text-[#9f9f9f] duration-100 transition hover:translate-x-3">
              Contact us
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 mx-auto  flex-col">
          <img className="w-28 h-10" src={payoneer} alt="" />
          <img className="w-28 h-10" src={master} alt="" />
          <img className="w-28 h-10" src={pay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
