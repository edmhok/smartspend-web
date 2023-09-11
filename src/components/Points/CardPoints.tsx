'use client'

import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import Image from 'next/image';
import image from 'next/image';
import Slider from "react-slick";
// import { NextArrow, PrevArrow } from "./CarouselBoxArrows";

interface Item {
    points: number;

}
const items = [
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

const CardPoints = () => {
    // const settings = {
    //     className: ` px-4 ${full ? "bg-palette-fill" : "bg-[#37bccef9]"}`,
    //     infinite: true,
    //     speed: 600,
    //     centerPadding: "60px",
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     initialSlide: 0,
    //     swipeToSlide: true,
    //     rtl: true,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     responsive: [
    //       {
    //         breakpoint: 1324,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 4,
    //         },
    //       },
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //         },
    //       },
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //         },
    //       },
    //       {
    //         breakpoint: 640,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //         },
    //       },
    //     ],
    //   };
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleItems = 4;
    const handleNext = () => {
        setCurrentIndex(prevIndex =>
            (prevIndex + 1) % items.length
        );
    }

    const handlePrev = () => {
        setCurrentIndex(prevIndex =>
            (prevIndex - 1 + items.length) % items.length
        );
    }

    return (
        <div className='sm:block'>
            <div className='container align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Choose your Order</div>
            <div className="container pt-6 relative flex items-center">
                <div className='container flex direction-row justify-around'>
                    {items.slice(currentIndex, currentIndex + visibleItems).map(item => (
                        <Item key={item.points} item={item} />
                    ))}
                </div>
                <Button className='absolute left-0' onClick={handlePrev}>
                    <ArrowBackIosIcon color='success' />
                </Button>
                <Button className='absolute right-0' onClick={handleNext}>
                    <ArrowForwardIosIcon color='success' />
                </Button>
            </div>
        </div>
    );
}

const Item = ({ item }: { item: Item }) => {

    return (
        <>
            <div className='flex-col justify-center flex bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 px-2 py-5 border border-gray-200 rounded-xl max-w-[290px] max-h-[290px] text-center pt-5'>
                <Link href={'/merchant/order/points/checkout'} prefetch={false}>
                    {item.points}
                </Link>
            </div>
            <div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 rtl:mr-auto ltr:ml-auto xl:rtl:ml-2 px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
                <div className="flex flex-col w-full ">
                    <p className="text-lg">Price</p>

                </div>



            </div>
        </>
    )
}



export default CardPoints;