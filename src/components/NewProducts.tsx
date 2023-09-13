'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";

import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import ProductCard from "./Card";

interface Props {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  full?: boolean;
}
const DealsofDayBox: React.FC<Props> = ({
  id,
  className,
  href,
  children,
  full
}) => {
  const [data, setData] = useState<Props[]>([]);
  const [productData, setProductData] = useState([]);


  async function fetchData() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      console.log(response);
      if (response.ok) {
        const jsonData = await response.json();
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
    <div className="image-slider-container container">
      <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Deals of the Day</div>
      <Slider {...settings}>
        {productData.map((item: any, index) => (
          
          <ProductCard
            link={'/login/adm'}
            key={index}
            img={item.photo}
            title={item.productName}
            description={item.description}
            // rating={item.rating}
            price={item.price}
            rating={0}
          />
        ))}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default DealsofDayBox;
