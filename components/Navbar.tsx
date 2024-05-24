'use client'
import React from "react";
import CostomizeButton from "./CustomizeButton";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="flex flex-col-reverse sm:flex-row sm:justify-between items-center h-24 ">
      <div className="">
        <div className="flex relative sm:w-96 bg-[#d9d9d9] h-12 justify-center items-center rounded-3xl">
            <Input  className="bg-[#d9d9d9] rounded-3xl  w-full border-none outline-none pl-5 pr-[7rem]" placeholder="what are you looking for?"/>
            <div className="absolute  right-1 flex items-center">
                <CostomizeButton title="Search" 
                className="bg-white text-black rounded-3xl px-6 py-3 text-md"/>
            </div>
        </div>
      </div>
      <div className="flex justify-end ">
        <div className="flex items-center gap-2 ">
            <CostomizeButton title="Sign in"  className="bg-transparent text-black font-bold rounded-3xl p-6 "  />
            <CostomizeButton  title="Sign up" 
            className="bg-[#d9d9d9] text-black font-bold rounded-3xl p-6 "/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
