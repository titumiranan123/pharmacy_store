import React from "react";
import Header from "../../components/homecomponents/Header";
import Categorysection from "../../components/homecomponents/Categorysection";

const Home: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Header />
      <Categorysection />
    </div>
  );
};

export default Home;
