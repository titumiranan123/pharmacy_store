import React from "react";
import Header from "../../components/homecomponents/Header";
import Categorysection from "../../components/homecomponents/Categorysection";
import Arrivals from "../../components/homecomponents/Arrivals";
import add from "../../assets/add/ad.jpg";
const Home: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Header />
      <Categorysection />
      <Arrivals />
      <div className="add mt-40 mb-32">
        <a href="">
          <img src={add} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
