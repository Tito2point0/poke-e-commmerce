// page.tsx or page.js
import React from "react";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";

export const dynamic = "force-dynamic";

const ListPage = () => {
  const categoryId = process.env.FEATURED_PRODUCTS_CATEGORY_ID;

  // Handle the case where the categoryId is missing
  if (!categoryId) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No category ID available. Please check your environment configuration.</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab Deals up to 50% off on Selected Products
          </h1>
          <button className="rounded-3xl bg-poke text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
      </div>
      <Filter />
      <h1 className="mt-12 text-xl font-semibold">Cards For You!</h1>
      <ProductList categoryId={categoryId!} />
    </div>
  );
};

export default ListPage;
