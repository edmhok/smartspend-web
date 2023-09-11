// 'use client'

// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Button } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Link from 'next/link';
// import Image from 'next/image';
// import image from 'next/image';
// interface Item {
//   points: number;

// }
// const items = [
//     {
//     id:0,
//     title: 100,
//     },
//     {
//     id:1,
//     title: 100,
//     },
//     {
//     id:2,
//     title: 100,
//      },
//     //  {
//     //     title: 400,
//     //  },
//     //  {
//     //     title: 500,
//     //  },
    
//   ];

// const CardPoints = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [item, setItem] = useState<Item[]>([]);
//   const visibleItems = 4;
//   const handleNext = () => {
//     setCurrentIndex(prevIndex =>
//       (prevIndex + 1) % item.length
//     );
//   }

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex =>
//       (prevIndex - 1 + item.length) % item.length
//     );
//   }

//   async function fetchData() {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log(response);
//       if (response.ok) {
//         const jsonData: Item[] = await response.json();
//         setItem(jsonData);
//         // console.log(response);
//       } else {
//         console.error("Failed to fetch data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);



//   return (
//     <div className='sm:block'>
//       <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Deals of the Day</div>
//       <div className="container pt-6 relative flex">
//         <div className='container flex direction-row justify-around'>
//           {items.slice(currentIndex, currentIndex + visibleItems).map(item => (
//             <Item key={item.id} item={item} />
//           ))}
//         </div>
//         <Button className='absolute left-5 mt-20' onClick={handlePrev}>
//           <ArrowBackIosIcon color='success' />
//         </Button>
//         <Button className='absolute right-0 mt-20' onClick={handleNext}>
//           <ArrowForwardIosIcon color='success' />
//         </Button>
//       </div>
//     </div>
//   );
// }

// const Item = ({ data }: { data: Item }) => {
//   const [showFavIcon, setShowFavIcon] = React.useState(false);

//   return (

//     <div className='text-center bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 py-5 px-2 border border-gray-200 max-w-[500px] max-h-[530px] pt-5'>
//       <Link href={data.id ? `/merchant/product/${data.id}` : '/login/adm'} className='link' prefetch={false}>
//         <div className='icon_flash right-3 top-4 space-y-2 text-white hover:'>
         
//         </div>
//         <Typography>{data.productName}</Typography>
//       </Link>
//     </div>
//   )
// }



// export default CardPoints;