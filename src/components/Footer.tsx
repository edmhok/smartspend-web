'use client'

import React from 'react'
import Image from 'next/image';
import  FbIcon  from '../../public/facebook.svg';
import Twitter from '../../public/twitter.svg';
import LinkeIn from '../../public/linkedin.svg';
import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
  <div className='w-full h-[150px] pt-10'> 
    

    <div className="w-full bg-black text-center text-white py-2 md:pb-2"> 
        <p>SmartSpend offers free-shipping.</p>
    </div>
    
    <div className='grid grid-flow-col gap-x-[150px] justify-center pt-[50px] relative'>
    <div className='absolute right-0 bottom-10'>
      {isVisible && 
        <div 
          className="text-gray p-2 cursor-pointer"
          onClick={scrollToTop}  
        >
          Scroll to Top
        </div>
      }
        <Fab 
         onMouseEnter={() => setHovered(true)} 
         onMouseLeave={() => setHovered(false)}
        color="secondary" 
        size="small"
        onClick={scrollToTop}
        style={{display: isVisible ? 'flex' : 'none'}}
        >
        <KeyboardArrowUpIcon />
        </Fab>
    </div>
      <div className='text-sm'>
          <div className="mb-[28px] text-base font-bold">SmartSpend</div>
            <div className="text-sm mb-[18px]">Davao City<br/> Philippines</div>
            <div className="mb-[70px] flex direction-row space-x-2">
                <Image src={FbIcon} width={32} height={32} alt="icon"/>
                <Image src={Twitter} width={32} height={32} alt="icon"/>
                <Image src={LinkeIn} width={32} height={32} alt="icon"/>
            </div>
          </div>
          
          <div><h1 className='font-bold mb-[28px]'>Shop</h1>
          
          <ul>
              <li className='text-sm mb-[18px]'>Categories</li>
              <li className='text-sm mb-[18px]'>Best Seller</li>
              <li className='text-sm mb-[18px]'>Promo</li>
              </ul>
          </div>

          <div><h1 className='font-bold mb-[28px]'>Dashboard</h1>
          <ul>
              <li className='text-sm mb-[18px]'>Teams</li>
              <li className='text-sm mb-[18px]'>Forum</li>
              <li className='text-sm mb-[18px]'>Leaderboard</li>
          </ul>
          </div>
          <div><h1 className='font-bold mb-[28px]'>About</h1>
              <ul>
              <li className='text-sm mb-[18px]'>Company</li>
              <li className='text-sm mb-[18px]'>Careers</li>
              <li className='text-sm mb-[18px]'>Blogs</li>
              <li className='text-sm mb-[18px]'>News</li>
              </ul>
          </div>
          <div><h1 className='font-bold mb-[28px]'>Help</h1>
          <ul>
              <li className='text-sm mb-[18px]'>FAQ</li>
              <li className='text-sm mb-[18px]'>Privacy</li>
              <li className='text-sm mb-[18px]'>Trust and Safety</li>
          </ul>
          </div>
      </div>
      <div className='pb-[50px] pl-[180px]'>
        <ul className='flex direction-row space-x-20'>
          <li className='text-sm'>© 2023 SmartSpend Company</li>
          <li className='text-sm'>Terms of Use</li>
          <li className='text-sm'>License</li>
          <li className='text-sm'>Policy</li>
        </ul>
     
      </div>
  </div>
  )
}

export default Footer