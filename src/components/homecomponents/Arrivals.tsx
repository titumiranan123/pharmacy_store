import React from "react";
import Heading from "../utilitis/Heading";
import Button from "../utilitis/Button";
import Productcard from "../utilitis/Productcard";

const Arrivals: React.FC = () => {
  return (
    <div className="mt-[80px] max-w-[1240px] mx-auto">
      <div className="flex justify-between items-center">
        <Heading title="ARRIVAL" heading="New Arrivals" />
        <Button className="" title="SHOP NOW" />
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </div>
  );
};

export default Arrivals;
