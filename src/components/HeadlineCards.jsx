import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 py-8 text-white text-xs font-bold sm:text-sm md:text-md lg:text-lg">
      {/* Card */}
      <div className="relative">
        <div className="absolute bg-black/40 w-full h-full text-xl">
          <div className="absolute top-[15%] ml-3">
            <p>Sun's Out, BOGO's Out</p>
            <p>Through 8/26</p>
          </div>
          <button className="ml-3 absolute bottom-[15%] text-black bg-white px-2 py-1 rounded-lg">
            Order Now
          </button>
        </div>
        <img src={photo1} alt="photo1" />
        <div className="absolute"></div>
      </div>

      <div className="relative">
        <div className="absolute bg-black/40 w-full h-full text-xl">
          <div className="absolute top-[15%] ml-3">
            <p>New Restaurants</p>
            <p>Added Daily</p>
          </div>
          <button className="ml-3 absolute bottom-[15%] text-black bg-white px-2 py-1 rounded-lg">
            Order Now
          </button>
        </div>
        <img src={photo2} alt="photo2" />
        <div className="absolute"></div>
      </div>

      <div className="relative">
        <div className="absolute bg-black/40 w-full h-full text-xl">
          <div className="absolute top-[15%] ml-3">
            <p>We Deliver Desserts Too</p>
            <p>Tasty Treats</p>
          </div>
          <button className="ml-3 absolute bottom-[15%] text-black bg-white px-2 py-1 rounded-lg">
            Order Now
          </button>
        </div>
        <img src={photo3} alt="photo3" />
        <div className="absolute"></div>
      </div>
    </div>
  );
};

export default HeadlineCards;
