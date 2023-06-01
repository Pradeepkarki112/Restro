import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-[1640px] mx-auto p-4">
      {/* left side */}
      <div className="flex gap-5 items-center">
        <AiOutlineMenu className="text-3xl" />
        <h1 className="text-2xl sm:text-3xl lg:4xl">
          Best<span className="font-bold pl-1">Eats</span>
        </h1>
        <div className="flex gap-2 p-1 rounded-full bg-gray-400">
          <p className="bg-black p-2 rounded-full text-white">Delivery</p>
          <p className="p-2">Pickup </p>
        </div>
      </div>

      {/* Search Input */}
      <div className=" border rounded-full p-2 flex gap-2 items-center w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch className="text-2xl" />
        <input type="text" placeholder="Search here..." className="focus:outline-none w-full" />
      </div>

      {/* Cart */}
      <div className=" p-1 px-3 rounded-2xl bg-black text-white flex items-center gap-1">
        <div><AiOutlineShoppingCart /></div>
        <p>Cart</p>
      </div>

      {/* Overlay */}
      <div className="w-full fixed top-0 left-0 bg-black/80 z-10 h-screen">
      </div>

      {/* Side drawer menu */}
      <div className="z-10 fixed bg-white text-black h-screen top-0 left-0 w-[300px]">
        <AiOutlineClose className="text-4xl absolute top-4 right-4 cursor-pointer" />
        <h2 className="p-4 text-2xl">
          Best<span className="pl-1 font-bold">Eats</span>
        </h2>

      </div>

    </div>
  );
}

export default Navbar;
