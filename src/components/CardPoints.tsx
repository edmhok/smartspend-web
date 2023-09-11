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
        points: 1200
    },

];

const CardPoints = () => {
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
                <Button className='flex items-center' onClick={handlePrev}>
                    <ArrowBackIosIcon color='success' />
                </Button>
                <Button className='flex items-center' onClick={handleNext}>
                    <ArrowForwardIosIcon color='success' />
                </Button>
            </div>
        </div>
    );
}

const Item = ({ item }: { item: Item }) => {

    return (

        <div className='flex-col justify-center flex bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 px-2 py-5 border border-gray-200 rounded-xl max-w-[290px] max-h-[290px] text-center pt-5'>
            <Link href={item.points ? `/merchant/cart/${item.points}` : '/login/adm'} prefetch={false}>

                {item.points}
            </Link>
        </div>
    )
}



export default CardPoints;