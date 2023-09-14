// "use client";

// import React, { useEffect, useState } from "react";
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Button, TableCell, TableRow, TextField } from "@mui/material";

// type Data = {
//   _id: string;
//   productName: string;
//   imageUrl: string;
//   brand: string;
//   description: string;
//   category: string;
//   variant: string;
//   size: string;
//   color: string;
//   tags: string;
//   qty: number;
//   price: number;
//   points: number;
//   discount: number;
//   originalPrice: number;
//   merchant: string
// };
// interface Detail {
//   _id: string;
//   qty: number;
//   updatedQty: number;
// }

// export default function Product() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [detail, setDetail] = useState({
//     _id: '',
//     productName: '',
//     imageUrl: '',
//     brand: '',
//     description: '',
//     category: '',
//     variant: '',
//     size: '',
//     color: '',
//     tags: '',
//     qty: 0,
//     price: 0,
//     points: 0,
//     discount: 0,
//     originalPrice: 0,
//     merchant: '',
//     photo: null
//   });
//   const searchParams = useSearchParams();

//   const getProductDetail = async () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/products/${urlParams.get("id")}`
//     );
//     const data = await response.json();
//     setDetail(data);
//   };

//   const handleClick = () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const orders = JSON.parse(localStorage.getItem("orders") || "[]");
//     const indexIfExist = orders.findIndex(
//       (item: any) => item.id === parseInt(urlParams.get("id") || "")
//     );
//     if (indexIfExist !== -1) {
//       orders[indexIfExist].qty += quantity;
//     } else {
//       orders.push({
//         id: detail._id,
//         qty: quantity,
//         merchant: detail.merchant
//       });
//     }
//     localStorage.setItem("orders", JSON.stringify(orders));
//     setIsLoading(true);
//     window.location.href = "/patron/order/1/";
//   };
//   const handleQtyChange = (value: number) => {
//     setQuantity(value);
//   };

//   useEffect(() => {
//     getProductDetail();
//   }, []);


//   return (
//     <div className=" bg-white drop-shadow-md w-[1020px] h-[522p] flex flex-row justify-around container mt-[20px] mb-[20px]">
//       <div className="bg-white w-[510px]">
//         <Image
//           className="w-full h-auto"
//           src={detail.photo || ''}
//           width={713}
//           height={750}
//           alt={""}
//         />
//       </div>
//       <div className="flex flex-col">
//         <div className="text-[#ffad1e] font-semibold text-xl pt-[10px] ">{detail.category}</div>
//         <div className="text-black font-semibold text-2xl">{detail.productName}</div>
//         <div className="text-black font-thin text-xl pb-[20px]">{detail.variant}</div>
//         <p className="text-black font-thin text-xl pb-[10px]">{detail.description}</p>
//         <div className="text-black font-semibold text-5xl pb-[10px]">₱{detail.originalPrice}.00</div>
//         <div className="text-black font-thin text-lg pb-[20px]">{detail.size}</div>
//         <div className="text-black font-thin text-lg pb-[20px]">{detail.color}</div>
//         <div className="text-[#ffad1e] font-semibold text-xl pt-[39px] ">Points:{detail.points}</div>
//         <div className="text-black font-thin text-lg pb-[20px]">{detail.tags}</div>

//         <div className='flex flex-row pb-10 items-center py-10 '>
//           <button className="text-white bg-black w-5 h-10 rounded-l-xl" type='button' onClick={() => { handleQtyChange(quantity - 1) }}>-</button>
//           <h5 className='py-5 px-5 border border-gray-400' >{quantity}</h5>
//           <button className="text-white bg-black w-5 h-10 rounded-r-xl" type='button' onClick={() => { handleQtyChange(quantity + 1) }}>+</button>
//           <div className="text-black text-lg ps-10">Stock:{detail.qty}</div>

//         </div>
//         <div className="text-black font-thin pb-[10px] flex self-center gap-5 ">
//           <button
//             onClick={handleClick}
//             className="bg-[#218c20] p-4 rounded-lg text-white font-bold flex gap-3"
//           >
//             <ShoppingBasketOutlinedIcon sx={{ color: "white" }} />
//             Add to Cart
//           </button>

//           <button className="bg-[#ffad1e] p-4 rounded-lg text-white flex gap-3">
//             <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useEffect, useState } from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Rating, Stack, TableCell, TableRow, TextField } from "@mui/material";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import Benefits from "@/components/Benefits/benefit";
// import Benefits from "./Benefits/benefit";

type Data = {
  _id: string;
  productName: string;
  imageUrl: string;
  brand: string;
  description: string;
  category: string;
  variant: string;
  size: string;
  color: string;
  tags: string;
  qty: number;
  price: number;
  points: number;
  discount: number;
  originalPrice: number;
  merchant: string
};
interface Detail {
  _id: string;
  qty: number;
  updatedQty: number;
}


export default function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [detail, setDetail] = useState({
    _id: '',
    productName: '',
    imageUrl: '',
    brand: '',
    description: '',
    category: '',
    variant: '',
    size: '',
    color: '',
    tags: '',
    qty: 0,
    price: 0,
    points: 0,
    discount: 0,
    originalPrice: 0,
    merchant: '',
    photo: null
  });
  const searchParams = useSearchParams();

  const getProductDetail = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${urlParams.get("id")}`
    );
    const data = await response.json();
    setDetail(data);
  };

  const handleClick = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    const indexIfExist = orders.findIndex(
      (item: any) => item.id === parseInt(urlParams.get("id") || "")
    );
    if (indexIfExist !== -1) {
      orders[indexIfExist].qty += quantity;
    } else {
      orders.push({
        id: detail._id,
        qty: quantity,
        merchant: detail.merchant
      });
    }
    localStorage.setItem("orders", JSON.stringify(orders));
    setIsLoading(true);
    window.location.href = "/patron/order/1/";
  };
  const handleQtyChange = (value: number) => {
    setQuantity(value);
  };

  useEffect(() => {
    getProductDetail();
  }, []);


  return (
    <>
      <div className="flex justify-center flex-col max-w-[1500px] mx-auto">
        {/* <Breadcrumb /> */}

        <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          {/* Image Section */}
          <div className="flex items-start rounded-lg w-full md:w-auto">
            <div className="flex flex-col items-center w-full md:w-auto">
              <div className="flex flex-grow md:ltr:mr-3">
                <Image
                  src={detail.photo || ''}
                  alt="product img"
                  width={450}
                  height={330}
                  className="object-contain md:drop-shadow-xl dark:bg-palette-card"
                />
              </div>

              <div className="flex mt-4  md:p-4 w-full max-w-[350px] overflow-auto">
                <div className='flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px]'>
                  <Image
                    src={detail.photo || ''}
                    width={70}
                    height={70}
                    alt="product img"
                    className="object-contain"
                  />
                </div>
              </div>
              {/* <div className="flex mt-4  md:p-4 w-full max-w-[350px] overflow-auto">
                {imgArray.map((imgItem: TImage, index: number) => {
                  return (
                    <div
                      key={imgItem._key}
                      className={`flex items-center justify-center p-2 md:p-4 rounded-lg  border-none transition-all duration-300 ease-in-out min-w-[80px] ${
                        index === selectedImg
                          ? "border-2 border-slate-300/60 shadow-md bg-palette-card/60"
                          : ""
                      }`}
                      onClick={() => onClickHandler(index)}
                    >
                      <Image
                        src={detail.photo || ''}
                        width={70}
                        height={70}
                        alt="product img"
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>

          {/* Detail Section */}
          <div className="bg-palette-card md:bg-transparent w-[100vw] md:w-auto px-5 flex-grow self-center lg:self-start mt-8 md:mt-0 !-mx-[1rem] lg:ltr:ml-4 py-5 md:py-0 rounded-tl-[4rem] rounded-tr-[3rem] flex flex-col z-10">
            <h2 className="text-palette-mute whitespace-normal text-center ltr:md:text-left">
              {detail.productName}
            </h2>
            <hr className="mt-1 hidden md:block" />
            <div className="flex items-start flex-wrap relative">
              <div className="flex-grow mt-6">
                <div className="flex items-center self-center">
                  <Stack spacing={1}>
                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
                  </Stack>
                  <p className="text-sm text-palette-mute ltr:ml-2">
                    Reviews
                  </p>
                </div>
                <h3 className="text-lg mt-2">Product Details</h3>
                <div className="mt-4">
                  <div className="flex flex-wrap items-center">
                    <h5 className="text-palette-mute text-sm py-1 my-1">
                      {detail.description}
                    </h5>

                    <ul className="ltr:ml-1">
                      <li className='text-palette-mute text-sm py-1 my-1'>Brand: {detail.brand}</li>
                      <li className='text-palette-mute text-sm py-1 my-1'>Size: {detail.size}</li>
                      <li className='text-palette-mute text-sm py-1 my-1'>Color: {detail.color}</li>
                      <li className='text-palette-mute text-sm py-1 my-1'>Tags: {detail.tags}</li>
                      <li className='text-palette-mute text-sm py-1 my-1'>Variant: {detail.variant}</li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 ltr:ml-auto px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
                <div className="flex flex-col w-full ">
                  <p className="text-lg text-center">Product Price</p>
                  {/* <ProductPrice price={price} discount={discount} isLargeSize={true} /> */}
                  ₱ {detail.price}
                </div>
                <div className="flex items-center justify-between mt-6 cursor-pointer">
                  <div className="p-2" onClick={() => { handleQtyChange(quantity + 1) }}>
                    <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
                  </div>
                  <input
                    className="text-center inline-block w-[70px] rtl:pr-8 ltr:pl-7 py-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                  />
                  <div onClick={() => { handleQtyChange(quantity - 1) }} className="p-2">
                    <HiMinusSm style={{ fontSize: "1.5rem" }} />
                  </div>
                </div>
                <br />
                <button
                  className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
                  onClick={handleClick}
                >
                  <BsCartPlus style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
                  Click to Checkout
                </button>
              </div>

            </div>
          </div>
        </div>

        <div className="border-2 my-8">
          <Benefits />
        </div>
        {/* <SimilarProducts products={similarProductsList} /> */}
      </div >
    </>
  );
};

