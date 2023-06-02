import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-3 px-4 py-8 text-white text-xs font-bold sm:text-sm md:text-md lg:text-lg">
      {/* Card */}
      <div className="relative">
        <div className="absolute z-2 bg-black/40 w-full h-full"></div>
        <div className="absolute z-3 ">
          <div>
            Sun's Out, BOGO's Out
            <br />
            <span className="font-medium">Through 8/26</span>
          </div>
          <div>Order Now</div>
        </div>
        <img src={photo1} alt="photo1" />
        <div className="absolute"></div>
      </div>

      <div className="relative">
        <div className="absolute bg-black/40 w-full h-full"></div>
        <p className="absolute pt-[10%] pl-[2%]">
          New Restaurants
          <br />
          <span className="font-medium">Added Daily</span>
        </p>
        <img src={photo2} alt="photo2" />
      </div>

      <div className="relative">
        <div className="absolute bg-black/40 w-full h-full"></div>
        <p className="absolute pt-[10%] pl-[2%]">
          We Deliver Desserts Too
          <br />
          <span className="font-medium">Tasty Treats</span>
        </p>
        <img src={photo3} alt="photo3" />
      </div>
    </div>
  );
};

export default HeadlineCards;
