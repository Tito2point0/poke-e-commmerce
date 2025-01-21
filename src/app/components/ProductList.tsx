import Link from "next/link";
import Image from "next/image";
import { products } from "@wix/stores";
import { wixCLientServer } from "../lib/wixClientServer";
import DOMpurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

type AdditionalInfoSection = {
  title?: string; // Adjusted type to allow undefined
  description?: string;
};

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixCLientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  console.log(res, categoryId);

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
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
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

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: DOMpurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: AdditionalInfoSection) =>
                      section.title === "shortDesc"
                  )?.description || "No description"
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
