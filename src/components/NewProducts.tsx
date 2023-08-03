'use client'

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@mui/material";


const productsData = {
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
  ]
};

const NewProducts = () => {
  const [tab, setTab] = useState("favorites");
  
return (
  <div className="container space-x-2 pt-8 ">
    <div className="grid grid-cols-6 gap-4">
      <Button 
        className={`text-lg font-bold text-fuchsia-600 ${tab === "favorites" ? "border border-fuchsia-600" : "border border-slate-300"}`}
        onMouseEnter={() => setTab("favorites")}
        onClick={() => setTab("favorites")}
      >
        Favorites
      </Button>

      <Button
        className={`text-lg font-bold text-fuchsia-600 ${tab === "new" ? "border border-fuchsia-600" : "border border-slate-300"}`}
        onMouseEnter={() => setTab("new")}
        onClick={() => setTab("new")}
      >
        New
      </Button>
    </div>
    {tab === "favorites" && (
        <div className="border border-slate-200 bg-[#F1F1F1]">
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
        </div>
      )}

      {tab === "new" && (
        <div className="border border-slate-200 bg-[#F1F1F1]">
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
        </div>  
      )}
    </div>
  );
}

export default NewProducts;
