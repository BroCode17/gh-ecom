import React from "react";
import RoundedBtn from "./RoundedBtn";
import { CiStar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { cn } from "@/lib/utils";
export const Card = () => {
  return <div>Card</div>;
};
export const BigVerticalCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-[200px] h-[470px] bg-[#d9d9d9] rounded-xl relative",
        className
      )}
    >
      {/* Image */}
      <div className="absolute z-10 right-5 flex flex-col top-[45%] gap-1 ">
        <RoundedBtn />
        <RoundedBtn />
        <RoundedBtn />
      </div>
    </div>
  );
};
export const ItemCard = ({
  className,
  showDetails,
  showDots,
}: {
  className?: string;
  showDetails: true | false;
  showDots?: true | false;
}) => {
  return (
    <div className={cn("h-[230px]  bg-[#d9d9d9] rounded-xl relative", className)}>
      <div className="w-full h-3/5 relative">
        {showDetails && (
          <div className="absolute z-10 right-5 top-5 bg-white rounded-full p-1 flex justify-center items-center">
            <CiHeart />
          </div>
        )}
        {/* Image */}
      </div>
      {showDetails && (
        <div className="bg-black w-ful h-2/5 rounded-b-xl text-white p-4">
          <div>
            <h1>Lorem Ipum</h1>
            <div className="flex">
              <IoStar color="orange" />
              <IoStar color="orange" />
              <IoStar color="orange" />
              <IoStar />
              <IoStar />
            </div>
            <p>$200</p>
          </div>
        </div>
      )}

      {showDots && (
          <div className="absolute bottom-5 left-[47%] flex gap-1 ">
            <RoundedBtn />
            <RoundedBtn />
            <RoundedBtn />
          </div>
            
      )}
    </div>
  );
};
