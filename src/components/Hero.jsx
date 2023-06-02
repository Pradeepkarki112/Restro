import React from "react";
import backgroundImage from "../assets/burger.jpg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4">
  <div className="relative">
    {/* Black-overlay and Text */}
    <div className="bg-black/40 w-full h-full absolute text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold flex flex-col justify-center text-gray-200">
      <h1 className="ml-5">
        The <span className="text-orange-400">Best</span>
      </h1>
      <h1 className="ml-5">
        <span className="text-orange-400">Foods </span>Delivered
      </h1>
    </div>

    {/* image for hero-section */}
    <img className="w-full h-full sm:h-[500px] object-cover" src={backgroundImage} alt="burgerphoto" />
  </div>
</div>

  );
};

export default Hero;
