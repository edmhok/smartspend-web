"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
interface propsType {
  id: number;
  img: string;
  title: string;
  desc: string;
  price: number;
  // variant: string;
  // size: number[];
  // color: string[];
  // tags: string;

  // category: string;
}

type Data = {
  img: string;
  id: number;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
};

const ProductBigCard: React.FC<propsType> = ({
  id,
  img,
  title,
  desc,
  price,
  // variant,
  // size,
  // color,
  // tags,

  // category,
}) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") || "0";
  console.log({ productId });

  const images = "/jacket-1.jpg";
  console.log(productId);
  const [productData, setProductData] = useState<Data>({
    id: -1,
    img: "/jacket-1.jpg",
    productName: "",
    brand: "",
    description: "",
    sku: "",
    price: 0,
    qty: 0,
    points: 0,
    originalPrice: 0,
    discount: 0,
  });

  const fetchProductData = async () => {
    try {
      if (productId) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Failed to fetch resource data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddToCart = (productId: string) => {
    let shop = JSON.parse(localStorage.getItem("shop") || "[]");
    if (shop.length > 0) {
      console.log("1");
      shop.push(productId);
    } else {
      console.log("2");
      shop = [productId];
    }
    console.log({ shop });
    localStorage.setItem("shop", JSON.stringify(shop));
    window.location.href = `/checkout/a?id=${productId}`;
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row content-center container mt-[50px] mb-[200px]">
      <div className="bg-slate-200 w-[510px]">
        <Image
          className="w-full h-auto"
          src={images}
          width={713}
          height={750}
          alt={""}
        />
      </div>
      <div className="flex-1 flex flex-col ps-[57px]">
        <div className="text-fuchsia-400 font-semibold text-xl pt-[39px] ">
          {/* {category} */}
        </div>
        <div className="text-black font-semibold text-2xl">
          {productData.productName}
        </div>
        {/* <div className="text-black font-thin text-xl pb-[30px]">{variant}</div> */}
        <p className="text-black font-thin text-xl pb-[49px]">
          {productData.description}
        </p>
        <div className="text-black font-semibold text-5xl pb-[69px]">
          {productData.price}
        </div>
        {/* <div className="text-black font-thin text-lg pb-[69px]">
          {size.join(", ")}
        </div>
        <div className="text-black font-thin text-lg pb-[69px]">
          {color.join(", ")}
        </div>
        <div className="text-black font-thin text-lg pb-[69px]">{tags}</div> */}

        <div className="text-black font-thin pb-[50px] flex self-center gap-3">
          {/* <Link href={`/checkout/a?id=${productId}`}> */}
          <button
            onClick={() => {
              handleAddToCart(productId);
            }}
            className="bg-black p-4 rounded-lg text-white flex gap-3"
          >
            <ShoppingBasketOutlinedIcon />
            Add to Cart
          </button>
          {/* </Link> */}
          <button className="bg-black p-4 rounded-lg text-white flex gap-3">
            <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBigCard;