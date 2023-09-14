"use client";

import React, { useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Rating, Stack, TableCell, TableRow, TextField } from "@mui/material";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
// import Benefits from "./Benefits/benefit";

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
  const [detail, setDetail] = useState({
    _id: '',
    productName: '',
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
    merchant: '',
    photo: '',
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

    <div className="flex flex-col max-w-[1300px] mx-auto">
      {/* <Breadcrumb /> */}

      <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
        {/* Image Section */}
        {/* <div className="flex items-start rounded-lg w-full md:w-auto"> */}
        <div className="flex flex-grow md:ltr:mr-3 md:rtl:ml-3">
          <Image
            src={detail.photo || ''}
            alt="product img"
            width={300}
            height={300}
            className="object-contain md:drop-shadow-xl dark:bg-palette-card"
          />
        </div>

        <div className="flex mt-4  md:p-4 w-full max-w-[350px] overflow-auto">

          <div className='flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px]'>
            {/* "border-2 border-slate-300/60 shadow-md bg-palette-card/60" */}

            <Image
              src={detail.photo || ''}
              width={70}
              height={70}
              alt="product img"
              className="object-contain"
            />
          </div>
          {/* </div> */}
        </div>

        {/* Detail Section */}
        <div className="bg-palette-card md:bg-transparent w-[100vw] md:w-auto px-5 flex-grow self-center lg:self-start mt-8 md:mt-0 !-mx-[1rem] lg:ltr:ml-4 lg:rtl:mr-4 py-5 md:py-0 rounded-tl-[4rem] rounded-tr-[3rem] flex flex-col z-10">
          <h2 className="text-palette-mute whitespace-normal text-center rtl:md:text-right ltr:md:text-left">
            {detail.productName}
          </h2>
          <hr className="mt-1 hidden md:block" />
          <div className="flex items-start flex-wrap relative">
            <div className="flex-grow mt-6">
              <div className="flex items-center self-center">
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={5} precision={0.5} />
                </Stack>
                <p className="text-sm text-palette-mute rtl:mr-2 ltr:ml-2">
                  Reviews
                </p>
              </div>
              <h3 className="text-lg mt-2">Product Details</h3>
              <div className="mt-4">
                <div className="flex flex-wrap items-center">
                  <h5 className="text-palette-mute text-sm py-1 my-1">
                    {detail.description}
                  </h5>

                  <div className="flex flex-wrap items-center">
                    <ul>
                      <li className='ext-palette-mute text-sm py-1 my-1'>Brand{detail.brand}</li>
                      <li className='ext-palette-mute text-sm py-1 my-1'>Size{detail.size}</li>
                      <li className='ext-palette-mute text-sm py-1 my-1'>Color{detail.color}</li>
                      <li className='ext-palette-mute text-sm py-1 my-1'>Tags{detail.tags}</li>
                      <li className='ext-palette-mute text-sm py-1 my-1'>Variant{detail.variant}</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 ltr:ml-auto px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
              <div className="flex flex-col w-full ">
                <p className="text-lg">Product Price</p>
                {/* <ProductPrice price={price} discount={discount} isLargeSize={true} /> */}
                ₱ {detail.price}
              </div>
              <div className="flex items-center justify-between mt-6 cursor-pointer">
                <div className="p-2" onClick={() => { handleQtyChange(quantity + 1) }}>
                  <HiMinusSm style={{ fontSize: "1.5rem" }} />
                </div>
                <input
                  className="inline-block w-[70px] rtl:pr-8 ltr:pl-7 py-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                />
                <div onClick={() => { handleQtyChange(quantity - 1) }} className="p-2">
                  <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
                </div>
              </div>
              <br />
              <button
                className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
                onClick={handleClick}
              >
                <BsCartPlus style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
                Click to Checkout
              </button>
            </div>






          </div>
        </div>

      </div>

      <div className="border-2 my-8">
        {/* <Benefits /> */}
      </div>
    </div>
  );
};
