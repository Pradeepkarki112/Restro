import React, { useState } from "react";
import { data } from "./Data";

const Food = () => {

  const[foods, setFoods] = useState(data);

  // Filter Category
  const filterType = (category)=>{
    setFoods(
      data.filter((item) =>{
        return (item.category === category);
      })
    );
  };

  // Filter Price
  const filterPrice = (price)=>{
    setFoods(
      data.filter((item) =>{
        return (item.price === price);
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4">
      <div className="my-2 font-bold text-2xl sm:text-3xl text-orange-500 flex flex-col items-center">
        Top Rated Menu Items
      </div>

      <div className="md:flex md:justify-between md:gap-3 lg:gap-5">
        <div>
          <div className="mb-2 font-bold">Filter Type</div>
          <div className="text-orange-500 flex justify-center sm:justify-between flex-wrap gap-4">
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => setFoods(data)}>
              All
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterType('burger')}>
              Burgers
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterType('pizza')}>
              Pizza
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterType('salad')}>
              Salad
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterType('chicken')}>
              Chicken
            </p>
          </div>
        </div>

        <div>
          <div className="mb-2 font-bold">Filter Price</div>
          <div className="text-orange-500 flex justify-center sm:justify-between flex-wrap gap-4">
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterPrice('$')}>
              $
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterPrice('$$')}>
              $$
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterPrice('$$$')}>
              $$$
            </p>
            <p className="border-2 border-orange-500 cursor-pointer hover:bg-orange-500 hover:text-white px-4 py-1 rounded-lg" onClick={() => filterPrice('$$$$')}>
              $$$$
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {foods.map((item) => (
          <div className="border shadow-lg rounded-t-lg hover:scale-105 duration-300 cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-3 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-orange-500 rounded-2xl p-1 text-white">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
