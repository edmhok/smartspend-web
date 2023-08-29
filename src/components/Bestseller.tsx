'use client'

import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import Image from 'next/image';
interface Item {
  imgPath: string;
  title: string;
  status: string;
}

const items = [
  {
    imgPath: '/mug-cat.jpg',
    title: 'Apparel',
    status: '100 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Toys',
    status: '90 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'House',
    status: '50 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Adhesive',
    status: '5 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Skin Care',
    status: '3 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Phones',
    status: '1 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Apparel',
    status: '1 sold',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Shoes',
    status: '1 sold',
  },
];


const Bestseller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = 5;

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
    <div className='sm:block hidden'>
      <div className='align-start font-medium text-[#218c20] text-2xl pt-10 ps-20'>Best Seller</div>
      <div className="pt-6 relative flex justify-center">
        <div className='flex direction-row justify-around'>
          {items.slice(currentIndex, currentIndex + visibleItems).map(item => (
            <Item key={item.title} item={item} />
          ))}
        </div>
        <div className='absolute left-5 mt-20'>
          <Button onClick={handlePrev}>
            <ArrowBackIosIcon />
          </Button>
        </div>
        <div className='absolute right-5 mt-20'>
          <Button className='absolute right-0 mt-20' onClick={handleNext}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}

const Item = ({ item }: { item: Item }) => (
  <Container className='flex-col flex content-center'>
    <div className='text-center bg-white drop-shadow-md hover:drop-shadow-xl space-y-2 py-5 px-5 border border-gray-200 rounded-xl max-w-[200px] max-h-[230px] pt-5'>
      <Link href='/login/adm' className='link' prefetch={false}>

        <Image
          src={item.imgPath}
          alt={item.title}
          width={137}
          height={130}
        />
        <Typography>{item.title}</Typography>
        <Typography>{item.status}</Typography>

      </Link>
    </div>
  </Container>

);


export default Bestseller;