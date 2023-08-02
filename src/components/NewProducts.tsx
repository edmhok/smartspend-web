'use client'

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@mui/material";

const productsData = {
   new : [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/skirt-1.jpg",
    title: "Skirt",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  ],
  favorites : [
    {
      img: "/jacket-1.jpg",
      title: "Jacket",
      desc: "MEN Yarn Fleece Full-Zip Jacket",
      rating: 4,
      price: "45.00",
    },
    {
      img: "/skirt-1.jpg",
      title: "Skirt",
      desc: "Black Floral Wrap Midi Skirt",
      rating: 5,
      price: "55.00",
    },
    {
      img: "/party-wear-1.jpg",
      title: "Party Wear",
      desc: "Women's Party Wear Shoes",
      rating: 3,
      price: "25.00",
    },
  ]
};

const NewProducts = () => {
  const [tab, setTab] = useState("new");
  
  return (
    <div className="container space-x-2 pt-8">
      <div className="grid grid-cols-6 gap-4">
        <Button className='text-lg font-bold text-fuchsia-600 border-slate-300' onClick={() => setTab("new")}>New</Button>
        <Button className='text-lg font-bold text-fuchsia-600 border-slate-300' onClick={() => setTab("favorites")}>Favorites</Button>
      </div>
      
      {tab === "new" && (
      <div className="container p-10">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.new.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    )}

    {tab === "favorites" && (
    <div className="container p-10">
    <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
      {productsData.favorites.map((item, index) => (
        <ProductCard
          key={index}
          img={item.img}
          title={item.title}
          desc={item.desc}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  </div>
  )}
  </div>
  );
}

export default NewProducts;
