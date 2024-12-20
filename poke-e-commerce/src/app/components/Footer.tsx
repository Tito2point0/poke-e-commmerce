import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* top component */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* left  */}
        <div className="w-full md:w-1/2 lg:h-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide"> Pokemon Cards</div>
          </Link>
          <p>1475 Taylor Ave apt 18, Bronx, NY 10460, United States</p>
          <span className="font-semibold">jasonvasq@jgdproffessions.com</span>
          <span className="font-semibold flex"> +1 732 485 4513</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16}></Image>
            <Image src="/instagram.png" alt="" width={16} height={16}></Image>
            <Image src="/x.png" alt="" width={16} height={16}></Image>
            <Image src="/pinterest.png" alt="" width={16} height={16}></Image>
          </div>
        </div>
        {/* center  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between mr-16">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between mr-16">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Pokemon Packs</Link>
              <Link href="">Graded Cards</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Customer Service</Link>
              <Link href="">Legal & Privacy</Link>
            </div>
         </div>
        </div>
        {/*right */}
        <div className="w-full md:w-1/2 lg:h-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to hear about the latest news, trends, promotions, and
            much more!
          </p>
          <div className="flex ">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-poke text-white">JOIN</button>
          </div>
          <span className="font-semibold ">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={"20"} />
            <Image src="/skrill.png" alt="" width={40} height={"20"} />
            <Image src="/paypal.png" alt="" width={40} height={"20"} />
            <Image src="/mastercard.png" alt="" width={40} height={"20"} />
            <Image src="/visa.png" alt="" width={40} height={"20"} />
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 JGDProfessions</div>
        <div className="flex flex-col gap-8 /md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
