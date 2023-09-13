

'use client'

import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@mui/material";
import Link from "next/link";
import IntroMember from '@/components/IntroMember'
import Menubar from "@/components/Patron/Menubar";



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

const Patron = () => {


  const [tab, setTab] = useState("favorites");
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

  const settings = {
    className: 'slider variable-width',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    arrows: true
  };


  return (
    <>
   
      <Menubar />
      <IntroMember />
      <div className="container space-x-1 pt-10 ">
        <div className="grid grid-cols-6 ps-1">
          <Button
          className={`font-bold text-[#218c20] text-lg rounded-t-lg
        ${tab === "favorites" ? "bg-[#F1F1F1]" : "bg-[#F6F6F6]"}`}
          onMouseEnter={() => setTab("favorites")}
          onClick={() => setTab("favorites")}
        >
          Favorites
        </Button>

        </div>
   
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productData.map((item:any, index) => (
                <Link key={index} href={`/patron/product/?id=${item["_id"]}`} prefetch={false}>
                  <ProductCard
                    key={index}
                    img={item.photo || ''}
                    title={item.productName}
                    description={item.description}
                    // rating={item.rating}
                    price={item.price}
                    rating={0}       
                   />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Patron