import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillTag,
} from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center max-w-[1640px] mx-auto p-4">
      {/* left side */}
      <div className="flex gap-1 sm:gap-5 items-center">
        <AiOutlineMenu onClick={() => setNav(!nav)} className="text-xl sm:text-3xl cursor-pointer" />
        <h1 className="text-2xl sm:text-3xl lg:4xl cursor-pointer">
          Best<span className="font-bold pl-1">Eats</span>
        </h1>
        <div className="flex gap-1 sm:p-1 rounded-full bg-gray-400">
          <p className="bg-black p-2 rounded-full text-white cursor-pointer">Delivery</p>
          <p className="p-2 cursor-pointer">Pickup </p>
        </div>
      </div>

      {/* Search Input */}
      <div className=" border rounded-full p-2 flex gap-2 items-center w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch className="text-2xl cursor-pointer" />
        <input
          type="text"
          placeholder="Search here..."
          className="focus:outline-none w-full"
        />
      </div>

      {/* Cart */}
      <div className="hidden sm:flex p-1 px-3 rounded-2xl bg-black text-white items-center gap-1 cursor-pointer">
        <div>
          <AiOutlineShoppingCart />
        </div>
        <p>Cart</p>
      </div>

      {/* Overlay */}
      {nav ? (
        <div className="w-full fixed top-0 left-0 bg-black/80 z-10 h-screen"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "z-10 fixed bg-white h-screen top-0 left-0 w-[300px]"
            : "z-10 fixed bg-white h-screen top-0 left-[-100%] w-[300px]"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="text-4xl absolute top-4 right-4 cursor-pointer"
        />
        <h2 className="p-4 text-2xl">
          Best<span className="pl-1 font-bold">Eats</span>
        </h2>
        <div>
          <ul className=" p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery className="text-2xl mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite className="text-2xl mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet className="text-2xl mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp className="text-2xl mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag className="text-2xl mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill className="text-2xl mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends className="text-2xl mr-4" /> Invite Friends
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
