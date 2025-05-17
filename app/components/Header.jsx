import React from "react";
import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-5 w-full absolute top-0 z-30">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 group">
        {/* Uncomment if using logo image */}
        <img 
          src="/logo.png" 
          alt="Premium Spirits" 
          className="h-[100px] w-auto transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      {/* Navigation Controls */}
      <nav className="flex items-center space-x-8">
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a 
            href="#shop" 
            className="text-amber-50/90 hover:text-amber-300 transition-colors duration-300 tracking-wider uppercase text-sm relative group"
          >
            Shop
            <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <div className="h-5 w-px bg-white/30"></div>
          <a 
            href="#account" 
            className="flex items-center space-x-2 text-amber-50/90 hover:text-amber-300 transition-colors duration-300"
          >
            <UserCircleIcon className="h-6 w-6 stroke-[1.5]" />
            <span className="tracking-wider uppercase text-sm">Account</span>
          </a>
        </div>

        {/* Cart Section */}
        <button className="flex items-center space-x-2 relative group cursor-pointer">
          <div className="relative p-2 rounded-full hover:bg-white/5 transition-all duration-300">
            <ShoppingBagIcon className="h-6 w-6 text-amber-300 stroke-[1.5]" />
            <div className="absolute -top-1 -right-1 bg-amber-500 text-xs text-white w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              3
            </div>
          </div>
          <span className="hidden lg:inline-block text-amber-50/90 group-hover:text-amber-300 transition-colors duration-300 tracking-wider uppercase text-sm">
            Cart
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;