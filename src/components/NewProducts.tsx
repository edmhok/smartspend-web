"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@mui/material";
import Link from "next/link";

const productData = {
  // favorites: [
  //   {
  //     id: "0",
  //     img: "",
  //     title: "",
  //     desc: "",
  //     // rating: 4,
  //     price: "",
  //   },


  // ],
  new: [
    {
      id: 1,
      img: "",
      title: "",
      desc: "",
      rating: 4,
      price: "",
    },

  ],
};

interface Data {
  rating: number;
  id: number;
  img: string;
  entryDate: string;
  productName: string;
  // brand: string;
  description: string;
  // sku: string;
  price: number;
  // qty: number;
  // points: number;
  // originalPrice: number;
  // discount: number;
}

const NewProducts = () => {
  // const [favtab, setFavtab] = useState("favorites");
  const [newtab, setNewtab] = useState("new");
  const [productData, setProductData] = useState<Data[]>([]);

  async function fetchData() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
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
          className={`font-bold text-[#218c20] text-lg rounded-t-lg
        ${favtab === "favorites" ? "bg-white" : "bg-[#F1F1F1]"}`}
          onMouseEnter={() => setFavtab("favorites")}
          onClick={() => setFavtab("favorites")}
        >
          Favorites
        </Button> */}

        <Button
          className={`text-lg font-bold text-[#218c20] rounded-t-lg
         ${newtab === "new" ? "bg-[#F1F1F1]" : "bg-[#F1F1F1]"}`}
          onMouseEnter={() => setNewtab("new")}
          onClick={() => setNewtab("new")}
        >
          New
        </Button>
      </div>
      {/* {favtab === "favorites" && (
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productData.map((item, index) => (
                <Link href={`/product/${item.id}`} key={index}>
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
      )} */}

      {newtab === "new" && (
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productData.map((item:any, index) => (
                <Link key={index} href={item._id ? `/merchant/product/${item._id}` : '/login/adm'} prefetch={false}>
                  <ProductCard
                    // key={index}
                    img={item.img}
                    title={item.productName}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProducts
