"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://gamersrowmn.com/cdn/shop/files/3B64F8B9-BC51-43B7-B499-46995518A9C6.jpg?v=1731096199&width=823",
  },
  {
    id: 2,
    url: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/08/22/Pokemon-TCG-Surging-Sparks-New-cards-featured-Pokemon-more.jpg?width=768&quality=60&format=auto",
  },
  {
    id: 3,
    url: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/08/pikachu-with-the-diamonds-on-his-head.jpg?q=70&fit=crop&w=1140&h=&dpr=1",
  },
  {
    id: 4,
    url: "https://m.media-amazon.com/images/I/91hMFIPDA-L.jpg",
  },
//   {
//     id: 5,
//     url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/08/surging-sparks-etb.jpg?q=49&fit=crop&w=825&dpr=2",
//   },
//   {
//     id: 6,
//     url: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/08/surging-sparks-etb.jpg?q=49&fit=crop&w=825&dpr=2",
//   },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30v"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
