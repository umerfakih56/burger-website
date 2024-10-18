import React from 'react';
import { FaHamburger, FaSearch, FaBolt, FaCartArrowDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <FaHamburger className="w-8 h-8 text-yellow-400 mr-2" />
          <span className="text-xl font-bold">Burger Heaven</span>
        </div>

        {/* Search Bar */}
        <div className="relative hidden lg:block md:block">
          <input
            className="rounded-full py-2 px-4 outline-none text-sm w-64 bg-gray-800 text-white placeholder-gray-400"
            placeholder="Search for your favorite burger from the menu"
          />
          <FaSearch className="w-5 h-5 text-lime-300 absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Order Info */}
        <div className="hidden lg:flex items-center gap-2">
          <FaBolt className="w-5 h-5 text-amber-400" />
          <p className="text-sm">Order now and get it with</p>
          <span className="text-amber-400 font-semibold">15 minutes</span>
        </div>

        {/* Cart and User Avatar */}
        <div className="flex items-center gap-3">
          <FaCartArrowDown className="w-8 h-8 text-cyan-400 hover:text-amber-400 transition duration-200" />
          <img
            className="w-8 h-8 rounded-full ring-2 ring-sky-400 hover:scale-105 transition-transform duration-200"
            src="https://i.pinimg.com/736x/99/1a/91/991a91234d2cb72a9289d77fb8be9d58.jpg"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>
  );
}
