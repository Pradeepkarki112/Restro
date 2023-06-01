import React from "react";
import backgroundImage from "../assets/burger.jpg";

const Hero = () => {
  return (
    <div className="flex items-center max-w-[1640px] mx-auto p-4 relative">

      <div className="absolute text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold flex flex-col justify-center ml-5 text-gray-200">
        <h1>
          The <span className="text-orange-400">Best</span>
        </h1>
        <h1>
          <span className="text-orange-400">Foods </span>Delivered
        </h1>
      </div>

      <img
        className="w-[1640px] h-[600px] sm:h-[500px] sm:object-cover"
        src={backgroundImage}
        alt="burgerphoto"
      />

    </div>
  );
};

export default Hero;
