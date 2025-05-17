// Card.jsx
import React from "react";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

const Card = () => {
  return (
    <div className="w-64 group transform transition-all duration-500 hover:scale-105 hover:z-10">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        {/* Image with overlay */}
        <div className="relative">
          <img
            className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop"
            alt="Premium Whiskey"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Premium badge */}
          <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <StarIcon className="h-3 w-3 mr-1" />
            PREMIUM
          </div>
          
          {/* Favorite button */}
          <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-amber-600 transition-all">
            <HeartIcon className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="font-playfair text-2xl font-bold">Macallan 18</h3>
              <p className="text-amber-300 font-light">Speyside, Scotland</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-amber-100/80">Starting from</p>
              <p className="text-xl font-bold">₹12,999</p>
            </div>
          </div>
          
          {/* Tags */}
          <div className="mt-4 flex gap-2">
            <span className="bg-amber-900/50 text-amber-100 text-xs px-3 py-1 rounded-full border border-amber-800/50">
              Single Malt
            </span>
            <span className="bg-amber-900/50 text-amber-100 text-xs px-3 py-1 rounded-full border border-amber-800/50">
              Aged 18 Years
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;