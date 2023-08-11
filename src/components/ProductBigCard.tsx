'use client'

import Image from "next/image";
import React from "react";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import { Link, Stack } from "@mui/material";
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface propsType {
  // id: number;
  img: string; 
  title: string;
  variant: string;
  desc: string; 
  size: number[];
  color: string[];
  tags: string;
  price: number;
  category: string;
}

const ProductBigCard: React.FC<propsType> = ({ 
  // id,
  img,
  title,
  variant,
  desc,
  size,
  color,
  tags,
  price,
  category,
}) => {


  return (
    <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row content-center container mt-[50px] mb-[200px]">
        <div className="bg-slate-200 w-[510px]" >
        <Image
          className="w-full h-auto"
          src={img}
          width={713}
          height={750} 
          alt={""}  
        />
        </div>
        <div className='flex-1 flex flex-col ps-[57px]' >

        <div className="text-fuchsia-400 font-semibold text-xl pt-[39px] ">{category}</div>
        <div className="text-black font-semibold text-2xl">{title}</div>
        <div className="text-black font-thin text-xl pb-[30px]">{variant}</div>
        <p className="text-black font-thin text-xl pb-[49px]">{desc}</p>
        <div className="text-black font-semibold text-5xl pb-[69px]">{price}</div>
        <div className="text-black font-thin text-lg pb-[69px]">{size.join(', ')}</div>
        <div className="text-black font-thin text-lg pb-[69px]">{color.join(', ')}</div>
        <div className="text-black font-thin text-lg pb-[69px]">{tags}</div>

        <div className="text-black font-thin pb-[50px] flex self-center gap-3">
            <Link href={'/cart'} >
            <button className="bg-black p-4 rounded-lg text-white flex gap-3">
                <ShoppingBasketOutlinedIcon/>
                Add to Cart
            </button>
            </Link>
            <button className="bg-black p-4 rounded-lg text-white flex gap-3">
                <FavoriteBorderOutlinedIcon sx={{color: 'white'}} />
                
            </button>
        </div>

        

        
        </div>
    </div>
  );
};

export default ProductBigCard;
