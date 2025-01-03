import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a specification</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-10 h-0.5 bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a style</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-poke text-poke rounded-md py-1 px4 text-sm cursor-pointer ">
          Elite Trainer Box
        </li>
        <li className="ring-1  ring-pink-200 text-white bg-pink-200 rounded-md py-1 px4 text-sm cursor-not-allowed ">
          PokeCenter
        </li>
      </ul>
    </div>
    
  );
};
export default CustomizeProducts
  ;
