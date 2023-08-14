'use client'

import React from "react";
import ProductBigCard from './ProductBigCard'

const products = [
  {
    id:1,
    img: "/jacket-1.jpg",
    title: "Jacket",
    variant:"for Men and Women",
    desc: "MEN Yarn Flseece Full-Zip Jacket",
    rating: 4,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 45.00,
    category:"Semi-formal"
  },
  {
    id:2,
    img: "/skirt-1.jpg",
    title: "Skirt",
    variant:"for Women",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 55.00,
    category:"outfit"
  },
  {
    id:3,
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    variant:"for Men and Women",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 25.00,
    category:"outfit"
  },
  {
    id:4,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant:"for Men and Women",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 45.00,
    category:"outfit"
  },
  {
    id:5,
    img: "/sports-1.jpg",
    title: "Sports",
    variant:"for Men and Women",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 58.00,
    category:"outfit"

  },
  {
    id:6,
    img: "/watch-2.jpg",
    title: "Watches",
    variant:"for Men and Women",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 100.00,
    category:"outfit"
  },
  {
    id:7,
    img: "/watch-2.jpg",
    title: "Watches",
    variant:"for Men and Women",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 120.00,
    category:"outfit"
  },
  {
    id:8,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant:"for Men and Women",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    size:[8,9,10,11],
    color:['white','black','gray'],
    tags:"tiktok,newbie,casual",
    price: 45.00,
    category:"outfit"
  },
];
export default function Products() {

  return (
    <>
    { products.map((item, index) => (
    // <div key={index}>
    <ProductBigCard     
        // key={index}
        id={item.id}
        img={item.img}
        title={item.title}
        desc={item.desc}
        variant={item.variant}
        size={item.size}
        color={item.color}
        tags={item.tags}
        price={item.price}
        category={item.category}   
     />
    // </div>
     ))}
    </>
  )
}

