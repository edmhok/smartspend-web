"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Link, Stack } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
import { PatronLayout } from "@/layout/patron";

type Data = {
  id: number;
  productName: string;
  brand: string;
  imageUrl: string;
  description: string;
  category: string;
  variant: string;
  size: number[];
  color: string[];
  tags: string[];
  sku: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
};

const ProductBigCard: React.FC<Data> = ({
  id,
  productName,
  brand,
  imageUrl,
  description,
  category,
  variant,
  size,
  color,
  tags,
  sku,
  price,
  qty,
  points,
  originalPrice,
  discount,

}) => {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id") || "0";
  console.log({ productId });

  const image = "/jacket-1.jpg";
  const [productData, setProductData] = useState<Data>({
    id,
    productName,
    brand,
    imageUrl,
    description,
    category,
    variant,
    size,
    color,
    tags,
    sku,
    price,
    qty,
    points,
    originalPrice,
    discount,
  });

  const fetchProductData = async () => {
    try {
      if (productId) {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`
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
    window.location.href = `./cartinfo/?id=${productId}`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <PatronLayout>

      <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row content-center container mt-1 mb-[200px]">
        <div className="bg-white w-[510px]">
          <Image
            className="w-full h-auto"
            src={image}
            width={713}
            height={750}
            alt={""}
          />
        </div>
        <div className="flex flex-col ps-10">
          <div className="text-[#218c20] font-semibold text-md pt-2 ">
            {productData.category}
          </div>
          <div className="grid gap-x-4 justify-between">
            <div className="text-black font-semibold text-xl">
              {productData.productName}
            </div>
            <div className="text-[#ffad1e] font-semibold text-xl">
              Points:{productData.points}
            </div>
          </div>
          <div className="text-black font-thin text-xl pb-2">{productData.variant}</div>
          <p className="text-black font-thin text-xl pb-[49px]">
            {productData.description}
          </p>
          <div className="text-black font-semibold text-5xl pb-[69px]">
            ₱ {productData.price}
          </div>
          <div className="text-black font-thin text-lg pb-2">
            {productData.size}
          </div>
          <div className="text-black font-thin text-lg pb-2">
            {productData.color}
          </div>
          <div className="text-black font-thin text-lg pb-[30px]">{productData.tags}</div>
          <div className="text-black font-thin text-lg pb-[30px]">{productData.discount}</div>
          <div className="text-[#218c20] pb-[50px] flex self-center gap-3">
            <button
              onClick={() => {
                handleAddToCart(productId);
              }}
              className="bg-[#218c20] p-4 rounded-lg text-white flex gap-3"
            >
              <ShoppingBasketOutlinedIcon />
              Add to Cart
            </button>
            <button className="bg-[#218c20] p-4 rounded-lg text-white flex gap-3">
              <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
            </button>
          </div>
        </div>
      </div>
    </PatronLayout>
  );
};

export default ProductBigCard;
