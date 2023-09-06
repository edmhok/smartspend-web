"use client";

import Image from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
interface propsType {
  img: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  description,
  rating,
  price,
}) => {


  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-2 shadow-xl my-4 ltr:mr-2 rtl:ml-1 md:mx-6  bg-palette-card rounded-xl flex relative w-[233px] h-[388px]">

      <a className="flex md:items-center md:flex-col relative w-full">
        <div className="w-1/2 md:w-full relative bg-slate-400/30 px-1 md:px-6 py-2 rounded-bl-xl rounded-tl-xl md:rounded-tr-xl md:rounded-bl-none rtl:order-2 rtl:md:order-none flex flex-col justify-between items-center">
          <div className="flex items-center h-full">
            <Image
              src={img}
              width={280}
              height={190}
              alt={title}
              className=" drop-shadow-xl object-contain hover:scale-110 transition-transform duration-300 ease-in-out !py-2 "
            />
          </div>
          {/* {product?.discount ? (
              <span className="w-8 sm:w-auto block absolute -top-2 -right-2">
                <Image
                  src="/images/discount-icon/discount.png"
                  width={40}
                  height={40}
                  alt="discount-icon"
                />
              </span>
            ) : null} */}
        </div>
        <div className="flex flex-col justify-between  flex-grow  w-1/2 md:w-full  px-1 md:px-3 py-2 md:py-4">
          <div className="flex justify-center md:justify-start flex-col  flex-grow overflow-hidden">
            <div className="self-center">
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Stack>
            </div>
            <h4 className="text-sm sm:text-[12px] md:text-sm text-center text-palette-mute  ">
              {description}
            </h4>
          </div>
          {/* <ProductPrice price={product.price} discount={product.discount} /> */}
          <div className="font-bold flex justify-center space-x-2">
            ₱{price}
            <del className="text-gray-500 font-normal pb-4">
              ₱{(price) + 50}.00
            </del>
          </div>
        </div>
      </a>

      {/* <CardActions product={product} /> */}
    </div>
    // <div className="px-5 py-5 bg-white drop-shadow-md hover:drop-shadow-xl backdrop:px-5 w-[288px] h-[448px]">
    //   <div className="static">
    //     <div className="absolute top-3 right-2">
    //       <IconButton aria-label="add to favorites">
    //         <FavoriteIcon />
    //       </IconButton>
    //     </div>
    //     <Image
    //       className="w-full h-auto"
    //       src={img}
    //       width={230}
    //       height={100}
    //       alt={title}
    //     />
    //   </div>

    //   <div className="space-y-1 py-2 ps-4">
    //     <h2 className="text-[#218c20] font-medium uppercase text-center link">{title}</h2>
    //     <p className="truncate">{description}</p>
    //     <Stack spacing={1}>
    //       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    //     </Stack>
    //     <div className="font-bold flex gap-4 link">
    //       ₱{price}
    //       <del className="text-gray-500 font-normal pb-4">
    //         ₱{(price) + 50}.00
    //       </del>
    //     </div>

    //   </div>
    // </div>
  );
};

export default ProductCard;
