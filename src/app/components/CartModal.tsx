"use client";

import Image from "next/image";
import React from "react";
import { GENGAR_VMAX_IMAGE_URL } from "../utils/constants";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          {/* // LIST  */}
          <div className="flex flex-col gap-8">
            {/* item */}

            <div className="flex gap-4">
              <Image
                src={GENGAR_VMAX_IMAGE_URL}
                alt=""
                width={72}
                  height={96}
                  priority
                  unoptimized
                  className=" object-cover rounded-md"
                  
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Gengar VMAX</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$800</div>
                  </div>
                  {/* desc */}
                  <div className="text-sm text-grey-500">
                    (Alternate Art Secret) Fusion Strike (SWSH08)
                  </div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Image
                src="https://www.fallencollector.com/cdn/shop/products/246723.jpg?v=1632589299&width=713"
                alt=""
                width={72}
                height={96}
                  className=" object-cover rounded-md"
                  priority
                  unoptimized
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Umbreon VMAX</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$800</div>
                  </div>
                  {/* desc */}
                  <div className="text-sm text-grey-500">
                    (Alternate Art Secret) Fusion Strike (SWSH08)
                  </div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* // BOTTOM  */}
          <div className="">
            
            <div className="flex items-center justify-between font-semibold/">
              <span className="">Subtotal</span>
              <span className="">Amount: $1600</span>
              </div>
              <p className=" text-gray-500 text-sm mt-2 mb-4 ">
                Shipping, taxes, and discounts calculated at checkout.
              </p>
              <div className="flex justify-between mt-4">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 ring-1 bg-black text-white">Checkout</button>
              </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
