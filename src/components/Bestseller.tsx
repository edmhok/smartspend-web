'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ProductCard from "./Card";
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
const DealsofDayBox = () => {
  const [productData, setProductData] = useState<Data[]>([]);


  async function fetchData() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      console.log(response);
      if (response.ok) {
        const jsonData = await response.json();
        setProductData(jsonData);

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
    <div className="flex justify-center flex-wrap lg:grid  gap-4 grid-rows-12 grid-cols-2 md:grid-cols-9 max-w-[1700px] mx-auto">
      <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Deals of the Day</div>
      {productData
        .map((item: any, index) => (
          <Link href={'/login/adm'} prefetch={false}>
            <ProductCard
              key={index}
              img={item.photo}
              productName={item.productName}
              rating={item.rating}
              price={item.price}
            />
          </Link>
        ))}
    </div>
  );
};

export default DealsofDayBox;
