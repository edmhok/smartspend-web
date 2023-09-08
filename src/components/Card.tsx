"use client";

import Image from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import {
  RiHeartFill,
  RiHeartAddLine,
  RiShareLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import Link from "next/link";
interface propsType {
  img: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}

const Card: React.FC<propsType> = ({
  img,
  title,
  description,
  rating,
  price,
}) => {

  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative">
      <div className="flex md:items-center md:flex-col relative w-full">
        <Link href={'/merchant/product/detail'} prefetch={false}>

          <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
            <div className="flex items-center h-full ">
              <Image
                src={img}
                width={280}
                height={300}
                alt={title}
                className="drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out py-2 "
              />
            </div>
          </div>
          {/* Discount  */}
          <span className="w-8 sm:w-auto block absolute -top-2 -right-2">
            <Image
              src="/images/discount-icon/discount.png"
              width={40}
              height={40}
              alt="discount-icon"
            />
          </span>

          <div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
            <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
              <div className="self-center">
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} value={rating} precision={0.5} />
                </Stack>
              </div>
              <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
                {description}
              </h4>
            </div>
            {/* <ProductPrice price={product.price} discount={product.discount} /> */}
            <div className="font-bold flex flex-col text-md justify-center space-x-5">
              ₱{price}
              <del className="text-gray-500 font-normal text-xs pb-4">
                ₱{(price) + 50}.00
              </del>
            </div>
          </div>

          {/* Call to Action */}
          <div className="w-1/2 md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-2 md:-top-2 md:bottom-auto left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20  ">
            <div
              className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
            // onClick={toggleFavoriteHandler}
            >
              <FavoriteIcon
                style={{
                  fontSize: "1.2rem",
                  // fill: "#ee384e",
                }}
              />
            </div>
            <div className="hover:text-rose-600 transition-colors sm:px-3 md:px-0">
              <RiShareLine style={{ fontSize: "1.2rem" }} />
            </div>
            <div
              className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
            // onClick={addToCartHandler}
            >
              <RiShoppingCart2Line
                style={{
                  fontSize: "1.2rem",
                }}
              />
            </div>
          </div>


        </Link>
      </div>
    </div>
  );
};

export default Card;
