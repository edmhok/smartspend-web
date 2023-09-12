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
// import Slider from "react-slick";
// import { NextArrow, PrevArrow } from "./CarouselBoxArrows";

// interface Item {
//     points: number;

// }
// const items = [
//     {
//         points: 100
//     },
//     {
//         points: 300
//     },
//     {
//         points: 600
//     },
//     {
//         points: 800
//     },
//     {
//         points: 1000
//     },


// ];

// const CardPoints = () => {
//     const settings = {
//         className: ` px-4 ${full ? "bg-palette-fill" : "bg-[#37bccef9]"}`,
//         infinite: true,
//         speed: 600,
//         centerPadding: "60px",
//         slidesToShow: 5,
//         slidesToScroll: 5,
//         initialSlide: 0,
//         swipeToSlide: true,
//         rtl: true,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1324,
//             settings: {
//               slidesToShow: 4,
//               slidesToScroll: 4,
//             },
//           },
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//             },
//           },
//           {
//             breakpoint: 640,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       };
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const visibleItems = 4;
//     const handleNext = () => {
//         setCurrentIndex(prevIndex =>
//             (prevIndex + 1) % items.length
//         );
//     }

//     const handlePrev = () => {
//         setCurrentIndex(prevIndex =>
//             (prevIndex - 1 + items.length) % items.length
//         );
//     }

//     return (
//         <div className='sm:block'>
//             <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Choose your Order</div>
//             <div className="container pt-6 relative flex items-center">
//                 <div className='container flex direction-row justify-around'>
//                     {items.slice(currentIndex, currentIndex + visibleItems).map(item => (
//                         <Item key={item.points} item={item} />
//                     ))}
//                 </div>
//                 <Button className='absolute left-0' onClick={handlePrev}>
//                     <ArrowBackIosIcon color='success' />
//                 </Button>
//                 <Button className='absolute right-0' onClick={handleNext}>
//                     <ArrowForwardIosIcon color='success' />
//                 </Button>
//             </div>
//         </div>
//     );
// }

// const Item = ({ item }: { item: Item }) => {

//     return (
//     <>
//         <div className='flex-col justify-center flex bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 px-2 py-5 border border-gray-200 rounded-xl max-w-[290px] max-h-[290px] text-center pt-5'>
//             <Link href={'/merchant/order/points/checkout'} prefetch={false}>
//                 {item.points}
//             </Link>
//         </div>

//     </>
//     )
// }



// export default CardPoints;

'use client'

import React from "react";
import Link from "next/link";
import { NextArrow, PrevArrow } from "./BoxArrows";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

type Items = [
    {
        points: 100
    },
    {
        points: 300
    },
    {
        points: 600
    },
    {
        points: 800
    },
    {
        points: 1000
    },


];



interface Props {
    title: string;
    className?: string;
    href: string;
    items: Items[];
}

const CarouselBox: React.FC<Props> = ({
    title,
    className,
    items,
    href,
    full,
}) => {

    const settings = {
        className: ` px-4 ${full ? "bg-palette-fill" : "bg-[#37bccef9]"}`,
        infinite: true,
        speed: 600,
        centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        swipeToSlide: true,
        rtl: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={`w-[100%] mx-auto my-8 flex rounded-md ${full ? "flex-col" : "bg-[#f1f1f1]"}`} >
            <div className={`flex flex-col items-center justify-around flex-grow text-sm sm:text-base  bg-cover bg-no-repeat bg-center rounded-md backdrop-blur-md ${className}`} >

                <div className="text-palette-primary/80 dark:text-rose-300 text-sm font-bold py-2 px-6 -mb-4 shadow-lg block rounded-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80">
                    Select Points
                </div>
            </div>
            <div
                className={`relative ${full ? "w-full mt-4" : "w-[55%] sm:w-[75%] md:w-[85%]"
                    }`}
            >
                <Slider {...settings}></Slider>
                <div>
                    <div className="absolute top-[45%] right-4 md:right-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
                        <HiOutlineChevronRight style={{ color: "gray" }} />
                    </div>
                    <div className="absolute top-[45%] left-4 md:-left-1 shadow-lg rounded-full bg-palette-card p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
                        <HiOutlineChevronLeft style={{ color: "gray" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselBox;
