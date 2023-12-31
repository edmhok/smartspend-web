"use client";

import Image from "next/image";
import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import { truncateString } from "@/utils/utils";
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
    <div className="px-5 py-5 bg-white drop-shadow-md hover:drop-shadow-xl backdrop:px-5 max-w-[212px] max-h-[318px]">
      <div className="static">
        <div className="absolute top-3 right-2">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
        <Image
          className="w-full h-auto"
          src={img}
          width={150}
          height={200}
          alt={title}
        />
      </div>

      <div className="space-y-1 py-2 ps-4">
        <h2 className="text-[#218c20] font-medium uppercase text-center link">{truncateString(title)}</h2>
        <p className="text-gray-500 max-w-[150px] text-sm">{description}</p>
        {/* <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack> */}
        <div className="font-bold flex gap-4 link">
        ₱ {price}
          <del className="text-gray-500 font-normal pb-4">
          ₱{(price) + 50}.00
          </del>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;