import React from "react";

const AddList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium"> Choose a Quantity </h4>
      <div className=""></div>
      <button className="w-36 text-sm rounded-3xl ring-1 ring-poke text-poke py-2px4 hover:bg-poke hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-none ">
        Add to Cart
      </button>
    </div>
  );
};

export default AddList;
