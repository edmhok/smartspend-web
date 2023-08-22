"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

// interface ProductCardProps {
//   id: number;
//   // other product props
// }

const productsData = {
  favorites: [
    {
      id: 0,
      img: '',
      title: '',
      desc: '',
      rating: 0,
      price: '',
    },
  ],
  new: [
    {
      id: 0,
      img: '',
      title: '',
      desc: '',
      rating: 0,
      price: '',
    },

  ],
};

interface Data {
  img: string;
  id: number;
  entryDate: string;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
}

const NewProducts = () => {
  const [tab, setTab] = useState("favorites");
  // const router = useRouter();

  // const handleClick = () => {
  //   if(!isLoggedIn) {
  //     router.push('/login/adm');
  //   } else {
  //     router.push(`/product/${id}`);
  //   }
  // }
  // const isLoggedIn = false;

  const [productData, setProductData] = useState<Data[]>([]);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:4000/products");
      console.log(response);
      if (response.ok) {
        const jsonData: Data[] = await response.json();
        setProductData(jsonData);
        // console.log(response);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container space-x-1 pt-10 ">
      <div className="grid grid-cols-6 ps-1">
        {/* <Button
          className={`font-bold text-fuchsia-400 text-lg rounded-t-lg
        ${tab === "favorites" ? "bg-[#F1F1F1]" : "bg-[#F6F6F6]"}`}
          onMouseEnter={() => setTab("favorites")}
          onClick={() => setTab("favorites")}
        >
          Favorites
        </Button> */}

        <Button
          className={`text-lg font-bold text-[#218c20] rounded-t-lg
         ${tab === "new" ? "bg-[#fff]" : "bg-[#F1F1F1]"}`}
          onMouseEnter={() => setTab("new")}
          onClick={() => setTab("new")}
        >
          New
        </Button>
      </div>
      {/* {tab === "favorites" && (
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productsData.favorites.map((item, index) => (
                <Link href={`/product/${item.id}`} key={index}>
                  <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )} */}

      {/* {tab === "new" && ( */}
      <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
        <div className="container p-10">
          <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
            {productData.map((item, index) => (
              <Link href={`/patron/productdetails?id=${item.id}`} prefetch={false}>
                <ProductCard
                  key={index}
                  img={item.img}
                  title={item.productName}
                  description={item.description}
                  // rating={item.rating}
                  price={item.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default NewProducts;
