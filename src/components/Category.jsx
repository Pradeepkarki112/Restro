import React from "react";
import { categories } from "./Data";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="my-2 font-bold flex flex-col items-center">
        <p className="text-2xl sm:text-3xl text-orange-500">
          Top Rated Menu List
        </p>

        <div className="py-4 gap-6 grid px-2 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((item) => (
            <div className="bg-gray-300 rounded-lg flex flex-row justify-between px-9 items-center cursor-pointer hover:scale-105 duration-300">
              <div>{item.name}</div>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
