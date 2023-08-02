'use client'

import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Container } from '@mui/material';
import Image from 'next/image';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className=" w-full h-[92px] bg-white">
        <Container className="sm:flex justify-between items-center">
            <div className="sm:pb-0 sm:justify-self-center">
             <Image
                src={logo}
                width={188}
                height={86}
                alt="Picture of the author"
                />
            </div> 
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <div className="relative">
                <ShoppingCartOutlinedIcon className='w-8 h-8 space-x-2' />
                <div className="bg-fuchsia-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
                </div>
            </div>
            <PersonOutlineOutlinedIcon className="w-8 h-8 space-x-2 mt-2"/>
            <div className="relative">
                <MenuRoundedIcon className='w-8 h-8 space-x-2'/>
            </div>
            </div>
        </Container>
    </div>
  )
}

export default Header