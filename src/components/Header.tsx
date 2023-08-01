'use client'

import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Container } from '@mui/material';

const Header = () => {
  return (
    <Container className="border-b border-gray-200 py-6">
        <div className="bg-white  sm:flex justify-between items-center">
            <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
            SmartSpend
            </div> 
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <div className="relative">
                <ShoppingCartOutlinedIcon />
                <div className="bg-fuchsia-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
                </div>
            </div>
            <PersonOutlineOutlinedIcon className="mt-3"/>
            <div className="relative">
                <MenuRoundedIcon />
            </div>
            </div>
        </div>
    </Container>
  )
}

export default Header