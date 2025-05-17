import React from "react";

const SearchBar = () => {
  return (
    <div className="flex w-full items-center bg-white/10 text-white rounded-md px-4 py-3 space-x-3 backdrop-blur-md shadow-inner">
      <input
        type="text"
        placeholder="Search by name, ingredient, country..."
        className="bg-transparent flex-grow outline-none placeholder-white/60 text-sm"
      />
      <select className="bg-transparent text-white/90 text-sm outline-none cursor-pointer">
        <option className="bg-black text-white">Region</option>
        <option className="bg-black text-white">Asia</option>
        <option className="bg-black text-white">Europe</option>
      </select>
      <select className="bg-transparent text-white/90 text-sm outline-none cursor-pointer">
        <option className="bg-black text-white">Alcohol Type</option>
        <option className="bg-black text-white">Whiskey</option>
        <option className="bg-black text-white">Vodka</option>
      </select>
    </div>
  );
};

export default SearchBar;