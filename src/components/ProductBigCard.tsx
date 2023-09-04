"use client";

import React, { useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, TableCell, TableRow, TextField } from "@mui/material";
// import { renderImage } from "./../../utils/utils";

// interface propsType {
//   _id: string;
//   productName: string;
//   imageUrl: string;
//   brand: string;
//   description: string;
//   category: string;
//   variant: string;
//   size: string;
//   color: string;
//   tags: string;
//   qty: number;
//   price: number;
//   points: number;
//   discount: number;
//   originalPrice: number;

// }

type Data = {
  _id: string;
  productName: string;
  imageUrl: string;
  brand: string;
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
  merchant: string
};
interface Detail {
  _id: string;
  qty: number;
  updatedQty: number;
}

export default function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [detail, setDetail] = useState<Data>({
    _id: '',
    productName: '',
    imageUrl: '',
    brand: '',
    description: '',
    category: '',
    variant: '',
    size: '',
    color: '',
    tags: '',
    qty: 0,
    price: 0,
    points: 0,
    discount: 0,
    originalPrice: 0,
    merchant: ''
  });
  const searchParams = useSearchParams();

  const getProductDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${urlParams.get("id")}`
    );
    const data = await response.json();
    setDetail(data);
  };

  const handleClick = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const indexIfExist = orders.findIndex(
      (item: any) => item.id === parseInt(urlParams.get("id") || "")
    );
    if (indexIfExist !== -1) {
      orders[indexIfExist].qty += quantity;
    } else {
      orders.push({
        id: detail._id,
        qty: quantity,
        merchant: detail.merchant
      });
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    setIsLoading(true);
    window.location.href = "/patron/order/1/";
  };
  const handleQtyChange = (value: number) => {
    setQuantity(value);
  };

  useEffect(() => {
    getProductDetail();
  }, []);


  return (
    <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row justify-around container mt-[20px] mb-[20px]">
      <div className="bg-white w-[510px]">
        <Image
          className="w-full h-auto"
          src={'/jacket-1.jpg'}
          // src={renderImage(detail?.photo ? detail.photo : imagePlaceholder)}
          width={713}
          height={750}
          alt={""}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[#ffad1e] font-semibold text-xl pt-[10px] ">{detail.category}</div>
        <div className="text-black font-semibold text-2xl">{detail.productName}</div>
        <div className="text-black font-thin text-xl pb-[20px]">{detail.variant}</div>
        <p className="text-black font-thin text-xl pb-[10px]">{detail.description}</p>
        <div className="text-black font-semibold text-5xl pb-[10px]">₱{detail.originalPrice}.00</div>
        <div className="text-black font-thin text-lg pb-[20px]">{detail.size}</div>
        <div className="text-black font-thin text-lg pb-[20px]">{detail.color}</div>
        <div className="text-[#ffad1e] font-semibold text-xl pt-[39px] ">Points:{detail.points}</div>
        <div className="text-black font-thin text-lg pb-[20px]">{detail.tags}</div>

        <div className='flex flex-row pb-10 items-center py-10 '>
          <button className="text-white bg-black w-5 h-10 rounded-l-xl" type='button' onClick={() => { handleQtyChange(quantity - 1) }}>-</button>
          <h5 className='py-5 px-5 border border-gray-400' >{quantity}</h5>
          <button className="text-white bg-black w-5 h-10 rounded-r-xl" type='button' onClick={() => { handleQtyChange(quantity + 1) }}>+</button>
          <div className="text-black text-lg ps-10">Stock:{detail.qty}</div>

        </div>
        <div className="text-black font-thin pb-[10px] flex self-center gap-5 ">
          <button
            onClick={handleClick}
            className="bg-[#218c20] p-4 rounded-lg text-white font-bold flex gap-3"
          >
            <ShoppingBasketOutlinedIcon sx={{ color: "white" }} />
            Add to Cart
          </button>

          <button className="bg-[#ffad1e] p-4 rounded-lg text-white flex gap-3">
            <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

