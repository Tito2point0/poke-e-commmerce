import React from "react";
import Image from "next/image";

const ProductImages = () => {
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/08/surging-sparks-etb.jpg?q=49&fit=crop&w=825&dpr=2"
          alt=""
                  fill
                  sizes="50vw"
          className="object-cover"
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductImages;
