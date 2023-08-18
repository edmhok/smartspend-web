"use client";

import React, { useEffect, useState } from "react";
import ProductBigCard from "./ProductBigCard";
import { useSearchParams } from "next/navigation";

const products = [
  {
    id: 1,
    img: "/jacket-1.jpg",
    title: "Jacket",
    variant: "for Men and Women",
    desc: "MEN Yarn Flseece Fsssull-Zip Jacket",
    rating: 4,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 45.0,
    category: "Semi-formal",
  },
  {
    id: 2,
    img: "/skirt-1.jpg",
    title: "Skirt",
    variant: "for Women",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 55.0,
    category: "outfit",
  },
  {
    id: 3,
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    variant: "for Men and Women",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 25.0,
    category: "outfit",
  },
  {
    id: 4,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant: "for Men and Women",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 45.0,
    category: "outfit",
  },
  {
    id: 5,
    img: "/sports-1.jpg",
    title: "Sports",
    variant: "for Men and Women",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 58.0,
    category: "outfit",
  },
  {
    id: 6,
    img: "/watch-2.jpg",
    title: "Watches",
    variant: "for Men and Women",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 100.0,
    category: "outfit",
  },
  {
    id: 7,
    img: "/watch-2.jpg",
    title: "Watches",
    variant: "for Men and Women",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 120.0,
    category: "outfit",
  },
  {
    id: 8,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant: "for Men and Women",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    size: [8, 9, 10, 11],
    color: ["white", "black", "gray"],
    tags: "tiktok,newbie,casual",
    price: 45.0,
    category: "outfit",
  },
];

type Data = {
  img: string;
  id: number;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
};

export default function Products() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  console.log({ productId });
  const images = "/jacket-1.jpg";
  console.log(productId);
  const [productData, setProductData] = useState<Data>({
    id: -1,
    img: "/jacket-1.jpg",
    productName: "",
    brand: "",
    description: "",
    sku: "",
    price: 0,
    qty: 0,
    points: 0,
    originalPrice: 0,
    discount: 0,
  });

  const fetchProductData = async () => {
    try {
      if (productId) {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Failed to fetch resource data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      {/* {products.map((item, index) => (
        // <div key={index}> */}
      <ProductBigCard
        // key={index}
        id={productData.id}
        img={images}
        title={productData.productName}
        desc={productData.description}
        price={productData.price}
        // variant={productData.variant}
        // size={productData.size}
        // color={item.color}
        // tags={item.tags}

        // category={productData.category}
      />
      {/* // </div>
      ))} */}
    </>
  );
}
