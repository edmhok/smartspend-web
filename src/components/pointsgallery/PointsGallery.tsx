// 'use client'

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const PointsGallery = () => {
//   return (
//     <div className="my-4 lg:my-3 flex flex-col">
//       <h2 className="mx-auto mt-4 py-8 text-2xl md:text-3xl">
//         Buy Points
//       </h2>

//       {/* 💻lg break point */}
//       <div className="flex flex-wrap lg:grid  gap-4 grid-rows-12 grid-cols-2 md:grid-cols-9 max-w-[1700px] mx-auto">
//         <div className="flex justify-center items-center md:row-span-6 md:col-span-3 rounded-md shadow-lg px-4 py-2 ">
//           <div>
//             <Image
//               src="/images/points/100.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-6 md:col-span-3 rounded-md shadow-lg px-4 py-2 ">
//           <div >
//             <Image
//               src="/images/points/300.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg px-4 py-2">
//           <div>
//             <Image
//               src="/images/points/500.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg px-4 py-2 ">
//           <div>
//             <Image
//               src="/images/points/1000.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-evenly items-center md:row-span-2 md:col-span-5 rounded-md shadow-lg px-4 py-2">
//           <div>
//             <Image
//               src="/images/points/100.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg px-4 py-2 ">
//           <div>
//             <Image
//               src="/images/points/300.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg px-4 py-2 ">
//           <div>
//             <Image
//               src="/images/points/500.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg px-4 py-2">
//           <div>
//             <Image
//               src="/images/points/500.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>
//         <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg px-4 py-2 ">
//           <div>
//             <Image
//               src="/images/points/1000.jpg"
//               alt="digital"
//               width={100}
//               height={100}
//               className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
//             />
//             <Link href="/merchant/order/points/checkout">
//               <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-2 px-2 rounded-lg mt-4 text-sm">
//                 Click to Buy
//               </div>
//             </Link>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default PointsGallery
