import React from "react";

const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4">
      <div className="my-2 font-bold text-3xl text-orange-500 flex flex-col items-center">
        Top Rated Menu Items
      </div>

      <div className="mb-2 font-bold">Filter Type</div>
      <div className="text-orange-500 flex justify-around">
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          All
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          Burgers
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          Pizza
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          Salad
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          Chicken
        </p>
      </div>

      <div className="my-2 font-bold">Filter Price</div>
      <div className="text-orange-500 flex justify-around">
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          $
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          $$
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          $$$
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          $$$$
        </p>
        <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg">
          $$$$$
        </p>
      </div>

      <div className="py-2">
        <div className="w-[400px] bg-red-500 h-96"></div>
      </div>

    </div>
  );
};

export default Category;
