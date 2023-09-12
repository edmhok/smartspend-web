// // 'use client'

// // import Image from "next/image";
// // import Link from "next/link";
// // import React, { useEffect, useState } from "react";
// // import { HiMinusSm, HiOutlinePlusSm, HiOutlineTrash } from "react-icons/hi";
// // import { useSelector } from "react-redux";
// // import { useDispatch } from "react-redux";
// // import { useLanguage } from "../../hooks/useLanguage";
// // // import { urlFor } from "../../lib/client";
// // import { ICartRootState } from "../../lib/types/cart";
// // // import { IProduct } from "../../lib/types/products";
// // import { cartActions } from "../../store/cart-slice";
// // import ProductPrice from "../UI/ProductPrice";
// // import { useSearchParams } from "next/navigation";



// // type IProduct = {
// //   slug: any;
// //   _id: string;
// //   productName: string;
// //   brand: string;
// //   description: string;
// //   category: string;
// //   variant: string;
// //   size: string;
// //   color: string;
// //   tags: string;
// //   qty: number;
// //   price: number;
// //   points: number;
// //   discount: number;
// //   originalPrice: number;
// //   merchant: string;
// //   photo: string;
// // }

// // interface Props {
// //   product: IProduct;
// // }
// // const CartItem: React.FC<Props> = ({ product }) => {
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [counter, setCounter] = useState(1);
// //   const [quantity, setQuantity] = useState(1);
// //   const [detail, setDetail] = useState({
// //     _id: '',
// //     productName: '',
// //     imageUrl: '',
// //     brand: '',
// //     description: '',
// //     category: '',
// //     variant: '',
// //     size: '',
// //     color: '',
// //     tags: '',
// //     qty: 0,
// //     price: 0,
// //     points: 0,
// //     discount: 0,
// //     originalPrice: 0,
// //     merchant: '',
// //     photo: ''
// //   });
// //   const { t } = useLanguage();
// //   const searchParams = useSearchParams();

// //   const getProductDetail = async () => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const response = await fetch(
// //       `${process.env.NEXT_PUBLIC_API_URL}/products/${urlParams.get("id")}`
// //     );
// //     const data = await response.json();
// //     setDetail(data);
// //   };

// //   const handleClick = () => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const orders = JSON.parse(localStorage.getItem("orders") || "[]");
// //     const indexIfExist = orders.findIndex(
// //       (item: any) => item.id === parseInt(urlParams.get("id") || "")
// //     );
// //     if (indexIfExist !== -1) {
// //       orders[indexIfExist].qty += quantity;
// //     } else {
// //       orders.push({
// //         id: detail._id,
// //         qty: quantity,
// //         merchant: detail.merchant
// //       });
// //     }
// //     localStorage.setItem("orders", JSON.stringify(orders));
// //     setIsLoading(true);
// //     window.location.href = "/patron/order/1/";
// //   };
// //   const handleQtyChange = (value: number) => {
// //     setQuantity(value);
// //   };

// //   useEffect(() => {
// //     getProductDetail();
// //   }, []);

// //   function increment(product: IProduct) {
// //     setCounter((prev) => ++prev!);
// //     // dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
// //   }

// //   function decrement(slug: string) {
// //     setCounter((prev) => --prev!);
// //     // dispatch(cartActions.removeItemFromCart(slug));
// //   }

// //   function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
// //     if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
// //       setCounter(+e.currentTarget.value);
// //     }
// //   }
// //   return (
// //     <div className="flex items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2">
// //       <div className="lg:w-1/2 sm:min-w-[290px]">
// //         <Link
// //           href={`/${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.slug.current}`}
// //         >
// //           <div className="flex flex-wrap sm:flex-nowrap justify-center items-center flex-grow">
// //             <div className="sm:min-w-[100px] md:min-w-[130px]">
// //               <Image
// //                 // src={urlFor(product?.image[0]).url()}
// //                 src={product.photo}
// //                 width={200}
// //                 height={200}
// //                 alt={product.productName}
// //                 className="object-contain"
// //               />
// //             </div>
// //             <div
// //               className=" flex-grow text-sm font-normal mb-2 sm:mb-0 w-full rtl:ml-2 ltr:mr-2"
// //               style={{ direction: "ltr" }}
// //             >
// //               {product.productName}
// //             </div>
// //           </div>
// //         </Link>
// //       </div>
// //       <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
// //         <div className="flex-grow my-2 sm:my-0">
// //           <div className="flex items-center justify-start lg:justify-center cursor-pointer">
// //             <div className="p-2" onClick={() => increment(product)}>
// //               <HiOutlinePlusSm style={{ fontSize: "1rem" }} />
// //             </div>
// //             <input
// //               className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400"
// //               type="number"
// //               min={1}
// //               max={10}
// //               value={counter}
// //               onChange={onInputNumberChangeHandler}
// //             />
// //             {counter === 1 ? (
// //               <div
// //                 onClick={() => decrement(product.slug.current)}
// //                 className="p-1"
// //               >
// //                 <HiOutlineTrash style={{ fontSize: "1.3rem", color: "red" }} />
// //               </div>
// //             ) : (
// //               <div
// //                 onClick={() => decrement(product.slug.current)}
// //                 className="p-1"
// //               >
// //                 <HiMinusSm style={{ fontSize: "1rem" }} />
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //         <div className="flex flex-col flex-grow font-normal rtl:mr-1 lrt:ml-1">
// //           <p className="self-center lg:self-start">{t.totalAmount}</p>
// //           <ProductPrice
// //             price={product.price * counter!}
// //             discount={product.discount}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartItem;



// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HiMinusSm, HiOutlinePlusSm, HiOutlineTrash } from "react-icons/hi";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { ICartRootState } from "../../lib/types/cart";
// // import { IProduct } from "../../lib/types/products";
// import { cartActions } from "../../store/cart-slice";
// import ProductPrice from "../UI/ProductPrice";
// import { useSearchParams } from "next/navigation";

// type IProduct = {
//   slug: any;
//   _id: string;
//   productName: string;
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
//   merchant: string;
//   photo: string;
// }

// interface Props {
//   product: IProduct;
// }


// const CartItem: React.FC<Props> = ({ product }) => {
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
//     photo: ''
//   });




//   const productQuantity = useSelector(
//     (state: ICartRootState) =>
//       state.cart.items.find(
//         (item) => item.slug.current === product.slug.current
//       )?.quantity
//   );
//   const [counter, setCounter] = useState(productQuantity);
//   const dispatch = useDispatch();
//   const { t } = useLanguage();

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




//   function increment(product: IProduct) {
//     setCounter((prev) => ++prev!);
//     // dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
//   }

//   function decrement(slug: string) {
//     setCounter((prev) => --prev!);
//     // dispatch(cartActions.removeItemFromCart(slug));
//   }

//   function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
//     if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
//       setCounter(+e.currentTarget.value);
//     }
//   }
//   return (
//     <div className="flex items-center flex-wrap sm:my-4 sm:py-4 px-2 border-b-2">
//       <div className="lg:w-1/2 sm:min-w-[290px]">
//         <Link
//           href={`/${product.category[0]}/${product.category[1]}/${product.category[2]}/${product.slug.current}`}
//         >
//           <a className="flex flex-wrap sm:flex-nowrap justify-center items-center flex-grow">
//             <div className="sm:min-w-[100px] md:min-w-[130px]">
//               <Image
//                 // src={urlFor(product?.photo[0])}
//                 src={product.photo}
//                 width={200}
//                 height={200}
//                 alt={product.productName}
//                 className="object-contain"
//               />
//             </div>
//             <div
//               className=" flex-grow text-sm font-normal mb-2 sm:mb-0 w-full rtl:ml-2 ltr:mr-2"
//               style={{ direction: "ltr" }}
//             >
//               {product.productName}
//             </div>
//           </a>
//         </Link>
//       </div>
//       <div className="flex flex-wrap flex-grow md:items-center mb-4 sm:mb-0">
//         <div className="flex-grow my-2 sm:my-0">
//           <div className="flex items-center justify-start lg:justify-center cursor-pointer">
//             <div className="p-2" onClick={() => increment(product)}>
//               <HiOutlinePlusSm style={{ fontSize: "1rem" }} />
//             </div>
//             <input
//               className="inline-block w-[65px] rtl:pr-7 ltr:pl-7 py-2 mx-1 border-[1px] border-gray-400"
//               type="number"
//               min={1}
//               max={10}
//               value={counter}
//               onChange={onInputNumberChangeHandler}
//             />
//             {counter === 1 ? (
//               <div
//                 onClick={() => decrement(product.slug.current)}
//                 className="p-1"
//               >
//                 <HiOutlineTrash style={{ fontSize: "1.3rem", color: "red" }} />
//               </div>
//             ) : (
//               <div
//                 onClick={() => decrement(product.slug.current)}
//                 className="p-1"
//               >
//                 <HiMinusSm style={{ fontSize: "1rem" }} />
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex flex-col flex-grow font-normal rtl:mr-1 lrt:ml-1">
//           <p className="self-center lg:self-start">{t.totalAmount}</p>
//           <ProductPrice
//             price={product.price * counter!}
//             discount={product.discount}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

