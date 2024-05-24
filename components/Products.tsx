import React from "react";
import { BigVerticalCard, ItemCard } from "./Card";

const Products = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div>
        <h1 className="mb-5 font-semibold">Popular Products</h1>
        <div className="grid grid-cols-4 grid-row-2 gap-3  justify-center items-center">
          <div className="row-span-2 col-span-1">
            <BigVerticalCard/>
          </div>

          <ItemCard showDetails = {true} />
          <ItemCard showDetails = {true}/>
          <ItemCard showDetails = {true}/>
          <div className=" h-full col-span-2 ">
            <ItemCard showDetails={false} showDots={true}/>
          </div>
          <ItemCard showDetails = {false}/>
        </div>
      </div>
    </div>
  );
};

export default Products;
