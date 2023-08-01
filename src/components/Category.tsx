'use client'

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

interface Item {
  imgPath: string;
  title: string;
}

const items: Item[] = [
  {
    imgPath: '/cats.jpg',
    title: 'Apparel',   
  },
  {
    imgPath: '/cats.jpg', 
    title: 'Shoes',
  },
  {
    imgPath: '/cats.jpg',
    title: 'Health Vita',
  },
  {
    imgPath: '/cats.jpg',
    title: 'Rentals',
  },
  {
    imgPath: '/cats.jpg',
    title: 'Technology',
  },
];

const Category: React.FC = () => {
  return (
    <div className="relative px-10 py-10 w-full">
        <div className='flex direction-row space-x-1'>
            {items.map(item => (
                <Item key={item.title} item={item} />
            ))}
            
        </div>
  </div>
 );
}

const Item = ({ item }: { item: Item }) => {
   const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent(current => (current + 1) % items.length);
      };

    const handlePrev = () => {
    setCurrent(current => (current - 1 + items.length) % items.length);
    };
return (
  <Container className='align-center flex direction-row px-5 py-5 border border-gray-200 rounded-xl max-w-[200px] max-h-[200px] text-center mt-10'>
    <img src={item.imgPath} alt={item.title} className='border border-gray-200 w-25 h-25 item-center' />
    <Typography variant="h6">{item.title}</Typography>    
    <div className="button">
        <button className="prev" onClick={handlePrev}>Prev</button> 
        <button className="next" onClick={handleNext}>Next</button>
    </div>
  </Container>
 );
}

export default Category;