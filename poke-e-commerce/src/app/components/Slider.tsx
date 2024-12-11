"use client";

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Pokemon cards 1",
    description: "Buy Cards now",
    img: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/NZ8AAOSwS0Ni7E1W/$_57.JPG?set_id=880000500F",
    url: "/",
    bg: "bg-gradient-to-r from-blue-500 to-blue-300",
  },
  {
    id: 2,
    title: "Pokemon cards 2",
    description: "Buy Cards now",
    img: "https://www.google.com/search?sca_esv=156d13285e30208f&sxsrf=ADLYWIIOSlyVhs1S6sK0zildelHZQp5TZg:1733953460690&q=Pokemon+cards+sale&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWxyMMuf0D-HOMEpzq2zertRy7G-dme1ONMLTCBvZzSlgmiQf8YbRP7Z1umaqoi5b723nbuL6nF0UTsk4tqtGEE1NVjS6NowhpV6B65hshF4WepZfXMC8L6zIGfQtogwLobgzuOoSadgmZQWE75hH2by0yh6DJz17uOz-tuJ6F6QheFBXa-4PuVopqjfld2tXnvtYc6g&sa=X&ved=2ahUKEwifl9OA2KCKAxVpnokEHVSJN-sQtKgLegQIEhAB&biw=1219&bih=594&dpr=1.56#vhid=Mu3EhOLYkWyE3M&vssid=mosaic",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-500 to-yellow-300",
  },
  {
    id: 3,
    title: "Pokemon cards 3",
    description: "Buy Cards now",
    img: "https://i.psacard.com/cardfacts/1999-pokemon-game-4-charizard-holo-1st-edition-gem-mt-10-91295.jpg?h=1000",
    url: "/",
    bg: "bg-gradient-to-r from-red-500 to-red-300",
  }
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
            {/* TEXT */}
            <div className="w-1/2">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}><button>SHOP NOW</button></Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="w-1/2 relative">
              <Image src={slide.img} alt="" fill sizes="100%" className="object-cover" />
            </div>
          </div>
        ))}
      </div>
      Slider Component
    </div>
  );
};

export default Slider;
