'use client'

import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';
interface Item {
  imgPath: string;
  title: string;
}

const items = [
  {
    imgPath: '/mug-cat.jpg',
    title: 'Apparel',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Toys',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'House',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Adhesive',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Skin Care',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Phones',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Apparel',
  },
  {
    imgPath: '/mug-cat.jpg',
    title: 'Shoes',
  },
];


const Category = () => {
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
      <div className="container align-start font-medium text-[#218c20] text-2xl pt-10">Category</div>
      <div className="container pt-3 relative flex">
        <div className='container flex direction-row justify-around'>
          {items.slice(currentIndex, currentIndex + visibleItems).map(item => (
            <Item key={item.title} item={item} />
          ))}
        </div>
        <div className='absolute left-0 mt-20'>
          <Button onClick={handlePrev}>
            <ArrowBackIosIcon color='secondary' />
          </Button>
        </div>
        <div className='absolute right-0 mt-20'>
          <Button onClick={handleNext}>
            <ArrowForwardIosIcon color='secondary' />
          </Button>
        </div>
      </div>
    </div>
  );
}

const Item = ({ item }: { item: Item }) => (
  <div className='flex-col justify-center flex bg-white drop-shadow-md hover:drop-shadow-xl space-y-[61px] px-5 py-5 border border-gray-200 rounded-xl max-w-[290px] max-h-[290px] text-center pt-5'>
    <Image
      src={item.imgPath}
      alt={item.title}
      width={137}
      height={130}
    />
    <Typography>{item.title}</Typography>
  </div>
);


export default Category;