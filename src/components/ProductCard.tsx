'use client'

import Image from "next/image";
import React from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { Stack } from "@mui/material";


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
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div className="static">
        <div className="absolute top-10 right-0" >
          <IconButton aria-label="add to favorites">
            <FavoriteIcon className="align-end"/>
          </IconButton>
        </div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>
      
      <div className="space-y-2 py-2">
        <h2 className="text-purple-400 font-medium uppercase">{title}</h2>
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
