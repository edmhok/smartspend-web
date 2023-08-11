'use client'

import Image from "next/image";
import React from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { Link, Stack } from "@mui/material";


interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  

  return (
    <div className=" bg-white drop-shadow-md hover:drop-shadow-xl backdrop:px-5 max-w-[312px] max-h-[418px]">
      <div className="static">
        <div className="absolute top-3 right-2" >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </div>
        <Link href="/login/usr">
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={250}
          alt={title}
        />
        </Link>
      </div>
      
      <div className="space-y-2 py-2 ps-4">
        <h2 className="text-purple-400 font-medium uppercase text-center">{title}</h2>
        <p className="text-gray-500 max-w-[150px]">{desc}</p>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </Stack>
        <div className="font-bold flex gap-4">
          ${price}
          <del className="text-gray-500 font-normal">
            ${parseInt(price) + 50}.00
          </del>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;
