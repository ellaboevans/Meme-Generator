import React from "react";
import logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="flex items-center ">
      <nav className="flex items-center justify-between bg-gradient-to-r from-bgOne to-bgTwo w-full py-5 md:py-10 px-4  md:px-32 shadow-lg">
        <div
          id="logo"
          className="flex items-center gap-2 md:gap-5 cursor-pointer text-textColors"
        >
          <img src={logo} alt={logo} className="w-10" />
          <h2 className="text-xs md:text-3xl font-bold text-white tracking-tighter">
            Meme Generator
          </h2>
        </div>
        <h3 className="text-textColors text-sm hidden md:inline-block md:text-lg font-medium capitalize font-Inter">
          react course - project 3
        </h3>
      </nav>
    </header>
  );
}
