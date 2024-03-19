import React from "react";
import Pageheader from "../../components/utilitis/Pageheader";
import about_img_1 from "../../assets/about/about-image1.jpg";
import about_img_2 from "../../assets/about/about-image2.jpg";
import about_video from "../../assets/about/about-video-image.jpg";
import Playstore from "../../components/utilitis/Playstore";
import Exclusive from "../../components/sharecomponents/Exclusive";
import ProgressBar from "@ramonak/react-progress-bar";
const About: React.FC = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Pageheader />
      <div className="grid grid-cols-1 mt-32 md:grid-cols-2 gap-5">
        <div>
          <div className="flex flex-col justify-center gap-2 mb-5">
            <p className="text-blue-500 text-[16px]  font-[600]">
              WE DESIGN FURNITURE{" "}
            </p>
            <p className="text-black text-[30px] font-bold">
              Our Core Divisions{" "}
            </p>
            <p>
              Ut leo . Vivamus aliquet elit ac nisl. Aenean leo ligula,
              porttitor eu , consequat vitae, elefieend ac enim . Sed cursus
              turpis vitae tortor. Vestibulum ante ipsum primis in faucibus orci
              luctus er ultrices posuere cubilia Curae; Fusces id
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold text-blue-500">
                Furniture
              </p>
              <div>
                <ProgressBar
                  completed={20}
                  labelColor="#fff"
                  animateOnRender
                  dir="auto"
                  labelClassName="label"
                  completedClassName="barCompleted"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold text-blue-500">
                Handmade
              </p>
              <div>
                <ProgressBar
                  completedClassName="barCompleted"
                  completed={50}
                  labelColor="#fff"
                  animateOnRender
                  dir="auto"
                  labelClassName="label"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold text-blue-500">Crafts</p>
              <div>
                <ProgressBar
                  completed={50}
                  completedClassName="barCompleted"
                  labelClassName="label"
                  labelColor="#fff"
                  animateOnRender
                  dir="auto"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img src={about_img_2} alt="" />
          </div>
        </div>
        <div>
          <img src={about_img_1} alt="" />
        </div>
      </div>
      <div className="mt-32 mb-32 relative">
        <img src={about_video} />
        <div className="absolute translate-x-[-50%] translate-y-[50%] top-[50%] left-[50%]">
          <Playstore />
        </div>
      </div>
      <div className="mt-32 mb-32 relative">
        <Exclusive />
      </div>
    </div>
  );
};

export default About;
