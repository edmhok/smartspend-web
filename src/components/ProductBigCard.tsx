"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
interface propsType {
  _id: string;
  productName: string;
  imageUrl: string;
  description: string;
  category: string;
  variant: string;
  size: string;
  color: string;
  tags: string;
  qty: number;
  price: number;
  points: number;
  discount: number;
  originalPrice: number;

}

type Data = {
  id: string;
  img: string;
  productName: string;
  brand: string;
  description: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
};

const ProductBigCard: React.FC<propsType> = ({
  _id,
  productName,
  imageUrl,
  description,
  category,
  variant,
  size,
  color,
  tags,
  originalPrice,
  qty,
  points,
  discount,
}) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") || "0";
  console.log({ productId });

  const images = "/jacket-1.jpg";
  console.log(productId);
  const [item, setItem] = useState<Data[]>([])


  const fetchProductData = async () => {
    try {
      if (_id) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/${_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setItem(data);
        } else {
          console.error("Failed to fetch resource data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddToCart = (_id: string) => {
    let shop = JSON.parse(localStorage.getItem("shop") || "[]");
    if (shop.length > 0) {
      console.log("1");
      shop.push(_id);
    } else {
      console.log("2");
      shop = [_id];
    }
    console.log({ shop });
    localStorage.setItem("shop", JSON.stringify(shop));
    window.location.href = '/patron/order/1';
  };
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row content-center container mt-[50px] mb-[200px]">
      <div className="bg-slate-200 w-[510px]">
        <Image
          className="w-full h-auto"
          src={imageUrl}
          width={713}
          height={750}
          alt={""}
        />
      </div>
      <div className="flex-1 flex flex-col ps-[57px]">
        <div className="text-[#ffad1e] font-semibold text-xl pt-[39px] ">
          {category}
        </div>
        <div className="text-black font-semibold text-2xl">
          {productName}
        </div>
        <div className="text-black font-thin text-xl pb-[30px]">{variant}</div>
        <p className="text-black font-thin text-xl pb-[49px]">
          {description}
        </p>
        <div className="text-black font-semibold text-5xl pb-[69px]">
          {originalPrice}
        </div>
        <div className="text-black font-thin text-lg pb-[69px]">
          {size}
        </div>
        <div className="text-black font-thin text-lg pb-[69px]">
          {color}
        </div>
        <div className="text-[#ffad1e] font-semibold text-xl pt-[39px] ">
          {points}
          <div className="text-black font-thin text-lg pb-[69px]">{tags}</div>

          <div className="text-black font-thin pb-[50px] flex self-center gap-3">
            <Link href={`/patron/order/1/?id=${_id}`} prefetch={false}>
              <button
                onClick={() => {
                  handleAddToCart(_id);
                }}
                className="bg-black p-4 rounded-lg text-white flex gap-3"
              >
                <ShoppingBasketOutlinedIcon />
                Add to Cart
              </button>
            </Link>
            <button className="bg-[#ffad1e] p-4 rounded-lg text-white flex gap-3">
              <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBigCard