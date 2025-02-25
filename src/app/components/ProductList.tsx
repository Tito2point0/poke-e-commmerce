// ProductList.tsx
import Link from "next/link";
import Image from "next/image";
import { products } from "@wix/stores";
import { wixCLientServer } from "../lib/wixClientServer";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

type AdditionalInfoSection = {
  title?: string;
  description?: string;
};

const ProductList = async ({ categoryId, limit = PRODUCT_PER_PAGE }: { categoryId: string; limit?: number }) => {
  let res: { items: products.Product[] } | null = null;

  try {
    // Initialize the Wix Client
    const wixClient = await wixCLientServer();

    if (!wixClient) {
      console.error("Failed to initialize Wix Client.");
      return <p>Error initializing Wix Client. Please try again later.</p>;
    }

    // Fetch products from the Wix API
    res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit)
      .find();

    console.log("Fetched Products:", res, "Category ID:", categoryId);

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching products:", error.message);
    } else {
      console.error("Error fetching products:", error);
    }
    return <p>Failed to load products. Please try again later.</p>;
  }

  // Handle empty or undefined product list
  if (!res?.items?.length) {
    return <p>No products available for this category.</p>;
  }

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={`/${product.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt={product.name || "Product Image"}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {product.media?.items?.[1]?.image?.url && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt={product.name || "Alternate Product Image"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              ${product.price?.price || "N/A"}
            </span>
          </div>

          {product.additionalInfoSections && product.additionalInfoSections.length > 0 && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: AdditionalInfoSection) =>
                      section.title === "shortDesc"
                  )?.description || "No description available."
                ),
              }}
            />
          )}

          <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;