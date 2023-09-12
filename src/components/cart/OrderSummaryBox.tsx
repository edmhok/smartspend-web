'use client'

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ICartRootState } from "../../lib/types/cart";
import ProductPrice from "../UI/ProductPrice";

const OrderSummaryBox = () => {
  const totalAmount = useSelector(
    (state: ICartRootState) => state.cart.totalAmount
  );
  const totalQuantity = useSelector(
    (state: ICartRootState) => state.cart.totalQuantity
  );

  return (
    <>
      {totalQuantity > 0 ? (
        <div className="flex-grow sticky bottom-0 left-0 right-0 md:top-36 shadow-lg bg-palette-card border-2 rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8 mt-2 w-[100vw] md:w-auto  md:min-w-[300px] md:max-w-[400px]">
          <h3 className="text-md sm:text-lg md:text-xl">Order Summary</h3>
          <div className="flex flex-col my-1 sm:my-2">
            <div className="flex items-center justify-between px-0 xl:px-8 md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                Total Quantity
              </p>
              <p className="rtl:ml-1 ltr:mr-1 font-bold">
                {totalQuantity}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between flex-grow px-0 xl:px-8 md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                Total Amount
              </p>
              <ProductPrice price={totalAmount} />
            </div>
          </div>
          <Link href="/">
            <div className="block bg-palette-primary md:mt-8 py-3 rounded-lg text-palette-side text-center shadow-lg">
              Order
            </div>
          </Link>
        </div>
      ) : (
        <p className="text-palette-mute text-lg mx-auto mt-12">
          Cart is Empty
        </p>
      )}
    </>
  );
};

export default OrderSummaryBox;
