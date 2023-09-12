'use client'

import React from "react";
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
}) => {
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-md md:text-xl"
    : "text-[12px] md:text-md";

  return (
    <div>
      <div className='flex ltr:self-start text-left mt-2 justify-center'>
        {discount ? (
          <div className="flex items-end flex-wrap" >
            <span className="flex flex-col">
              <del
                className={`text-rose-600 dark:text-rose-300 md:text-sm ${textDiscountPriceSize}`}
              >
                <sup className="mr-1">"₱"</sup>
                <sub className="ml-1 text-[10px]">{discount}</sub>
              </del>
              <ins
                className={`font-bold self-end no-underline mt-1 ${textMainPriceSize}`}
              >
                <sup className="mr-1">{"₱"}</sup>
                <sub className="ml-1 text-[10px]">{discount}</sub>
                {discountPrice}
              </ins>
            </span>
            <span className="text-green-700 dark:text-green-300 ml-1 text-[12px] inline-block">
              - %{discount}</span>
          </div>
        ) : (
          <div>
            {isInSlider ? <div className="h-[1.4rem]"></div> : null}{" "}
            {/* ☝slider cards (.slick-slide=>Slider component) are float and because of that, they don't accept height so, for making cards the same height, I have to do this hack*/}
            <div
              className={`flex items-center ${textMainPriceSize} font-bold no-underline`}

            >
              <sup className="mr-1">{""}</sup>
              <span>
                {price}
              </span>
              <sub className="ml-1 text-[10px]">
                {discount}
              </sub>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;


