import Link from "next/link";
import Image from "next/image";
import {
  GENGAR_VMAX_IMAGE_URL,
  PIKACHU_EX_IMAGE_URL,
  TWOPIKACHU_EX_IMAGE_URL,
  TWOGENGAR_VMAX_IMAGE_URL,
} from "../utils/constants";
import { wixCLientServer } from "../lib/wixClientServer";
// import { PIKACHU_EX_IMAGE_URL } from "../utils/constants";
// import { TWOGENGAR_VMAX_IMAGE_URL } from "../utils/constants";
import DOMpurify from "isomorphic-dompurify"

const PRODUCT_PER_PAGE = 20;

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

  console.log(res);

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href="/+product.slug"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md "
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price.price}</span>
          </div>

          {product.additionalInfoSections && (
            <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{__html:DOMpurify.sanitize(product.additionalInfoSections.find(
              (section: any) => section.title === "shortDesc"
            )?.description || "No description")}}> 
            </div>
          )}
          <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
      {/* <Link href="/test" className="relative w-full h-80">
      <Image
            src={PIKACHU_EX_IMAGE_URL}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={TWOPIKACHU_EX_IMAGE_URL}
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
      </Link> */}
    </div>
  );
};

export default ProductList;
// {/* <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
// <Link
//   href="/test"
//   className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
// >
//   <div className="relative w-full h-80">
//     <Image
//       src={GENGAR_VMAX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//     />
//     <Image
//       src={TWOGENGAR_VMAX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md "
//     />
//   </div>
//   <div className="flex justify-between">
//     <span className="font-medium">Product Name </span>
//     <span className="font-semibold">$800</span>
//   </div>
//   <div className="text-sm text-gray-500">My description</div>
//   <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
//     Add to Cart
//   </button>
// </Link>
// {/* <Link href="/test" className="relative w-full h-80">
// <Image
//       src={PIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//     />
//     <Image
//       src={TWOPIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md "
//     />
// </Link> */}
// {/* <Link
//   href="/test"
//   className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
// >
//   <div className="relative w-full h-80">
//     <Image
//       src={PIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//     />
//     <Image
//       src={TWOPIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md "
//     />
//   </div>
//   <div className="flex justify-between">
//     <span className="font-medium">Product Name </span>
//     <span className="font-semibold">$800</span>
//   </div>
//   <div className="text-sm text-gray-500">My description</div>
//   <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
//     Add to Cart
//   </button>
// </Link>
// <Link
//   href="/test"
//   className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
// >
//   <div className="relative w-full h-80">
//     <Image
//       src={PIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//     />
//     <Image
//       src={TWOPIKACHU_EX_IMAGE_URL}
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md "
//     />
//   </div>
//   <div className="flex justify-between">
//     <span className="font-medium">Product Name </span>
//     <span className="font-semibold">$800</span>
//   </div>
//   <div className="text-sm text-gray-500">My description</div>
//   <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
//     Add to Cart
//   </button>
// </Link>
// <Link
//   href="/test"
//   className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
// >
//   <div className="relative w-full h-80">
//     <Image
//       src="https://www.fallencollector.com/cdn/shop/products/246723.jpg?v=1632589299&width=713"
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
//     />
//     <Image
//       src="https://www.picclickimg.com/8HEAAOSwDpBnNeVL/PSA-9-Umbreon-VMAX-Alternate-Alt-Art-215-203.webp"
//       alt=""
//       fill
//       sizes="25vw"
//       className="absolute object-cover rounded-md "
//     />
//   </div>
//   <div className="flex justify-between">
//     <span className="font-medium">Product Name </span>
//     <span className="font-semibold">$800</span>
//   </div>
//   <div className="text-sm text-gray-500">My description</div>
//   <button className="rounded-2xl ring-1 ring-poke text-poke w-max py-2 px-4 text-xs hover:bg-poke hover:text-white">
//     Add to Cart
//   </button>
// </Link>
// </div>
// );
// }; */} */}
