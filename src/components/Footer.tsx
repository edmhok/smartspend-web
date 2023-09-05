'use client'

import React from 'react'
import Image from 'next/image';
import FbIcon from '../../public/facebook.svg';
import Twitter from '../../public/twitter.svg';
import LinkeIn from '../../public/linkedin.svg';
import { useState, useEffect } from 'react';
import { Box, Fab, Grid, Paper, styled } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';

const Item = styled(({ ...props }) => (
  <div {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Footer = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 15,
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
    <Box sx={{ flexGrow: 1 }}>

      <div className="running-message-container w-full bg-black text-center text-white font-bold py-2 md:pb-2">
        <div className="running-message">Discover a new way to shop online with SmartSpend Ecommerce. We&apos;re bringing you a curated selection of the latest products, trends, and deals, all in one place.
          Whether you&apos;re looking for fashion, electronics, home essentials, or more, we&apos;ve got you covered.
        </div>
      </div>

      <div className='container'>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 2, sm: 8, md: 16 }}>
          <Grid item xs={2} sm={4} md={3} textAlign={'center'}>
            <div className='flex justify-center py-5'>
              SmartSpend<br />
              Philippines
            </div>
            <div className='flex flex-row justify-center space-x-2'>
              <Image src={FbIcon} width={32} height={32} alt="icon" />
              <Image src={Twitter} width={32} height={32} alt="icon" />
              <Image src={LinkeIn} width={32} height={32} alt="icon" />
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={3} textAlign={'center'}>
            <div className="flex flex-col justify-center pt-5">
              <h1 className='font-bold mb-[10px]'>Shop</h1>
              <ul>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Categories</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Best Seller</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[20px]'>Promo</li></Link>
              </ul>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={3} textAlign={'center'}>
            <div className="flex flex-col justify-center pt-5">
              <h1 className='font-bold mb-[10px]'>Dashboard</h1>
              <ul>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Teams</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Forum</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[20px]'>Leaderboard</li></Link>
              </ul>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={3} textAlign={'center'}>
            <div className="flex flex-col justify-center pt-5">
              <h1 className='font-bold mb-[10px]'>About</h1>
              <ul>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Company</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Careers</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Blogs</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[20px]'>News</li></Link>
              </ul>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={3} textAlign={'center'}>
            <div className="flex flex-col pt-5">
              <h1 className='font-bold mb-[10px]'>Help</h1>
              <ul>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>FAQ</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[10px]'>Privacy</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm mb-[20px]'>Trust and Safety</li></Link>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6} >
            <div className='flex flex-row justify-center pb-[20px] relative'>
              <ul className='flex flex-row space-x-20'>
                <Link href='/' className='link' prefetch={false}><li className='text-sm'>Terms of Use</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm'>License</li></Link>
                <Link href='/' className='link' prefetch={false}><li className='text-sm'>Policy</li></Link>
              </ul>
              <div className='absolute bottom-10 right-0'>
                {isVisible &&
                  <div
                    className="text-gray p-2 cursor-pointer"
                    onClick={scrollToTop}
                  >

                  </div>
                }
                <Fab
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  color="success"
                  size="small"
                  onClick={scrollToTop}
                  style={{ display: isVisible ? 'flex' : 'none' }}
                >
                  <KeyboardArrowUpIcon />
                </Fab>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    </Box>
  )
}

export default Footer