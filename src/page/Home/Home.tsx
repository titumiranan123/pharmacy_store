import React from "react";
import Header from "../../components/homecomponents/Header";
import Categorysection from "../../components/homecomponents/Categorysection";
import Arrivals from "../../components/homecomponents/Arrivals";
import add from "../../assets/add/ad.jpg";
import Features from "../../components/homecomponents/Features";
import BestSeller from "../../components/homecomponents/BestSeller";
const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <Categorysection />
      <Arrivals />
      <div className="add mt-32 mb-32 max-w-[1240px] mx-auto">
        <a href="">
          <img src={add} alt="" />
        </a>
      </div>
      <Features />
      <div className="bg-[#03afe5] mt-32">
        <BestSeller />
      </div>
    </div>
  );
};

export default Home;
