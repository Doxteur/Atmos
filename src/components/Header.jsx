import React from "react";
// import image hamburger from asset folder then image
import hamburger from "../assets/Images/hamburger.png";

function Header() {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="flex flex-col text-left p-4">
          <h1 className=" font-russo-one font-bold text-xl">Stuttgart</h1>
          <h1 className="text-gray-400">12 september,Sunday</h1>
        </div>
        <div className="p-4 pt-6">
          <img src={hamburger} alt="hamburger" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
}

export default Header;
