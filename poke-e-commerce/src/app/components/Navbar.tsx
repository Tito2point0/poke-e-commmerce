import Link from "next/link";
import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="h-full flex items-center justify-between">
        {/* MOBILE*/}
        <Link href="/">
          <div className="text-2xl tracking-wide"> Pokemon Cards</div>
        </Link>
        <Menu />
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* left */}
          <div className="w-1/3">
            <Link href="/">
              {" "}
              
              <div className="text-2xl tracking-wide"> Pokemon Cards</div>
            </Link>
          </div>
          {/* right */}
          <div className="w-2/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
