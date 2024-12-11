"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Pokemon cards 1",
    description: "Buy Cards now",
    img: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/NZ8AAOSwS0Ni7E1W/$_57.JPG?set_id=880000500F",
    url: "/",
    bg: "bg-gradient-to-r from-blue-200 to-blue-300",
  },
  {
    id: 2,
    title: "Pokemon cards 2",
    description: "Buy Cards now",
    img: "https://levelupstore.co.za/cdn/shop/files/Untitled_design_2_400x.png?v=1725059551",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-300",
  },
  {
    id: 3,
    title: "Pokemon cards 3",
    description: "Buy Cards now",
    img: "https://i.psacard.com/cardfacts/1999-pokemon-game-4-charizard-holo-1st-edition-gem-mt-10-91295.jpg?h=1000",
    url: "/",
    bg: "bg-gradient-to-r from-red-100 to-red-300",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex  flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className=" h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      Slider Component
    </div>
  );
};

export default Slider;
