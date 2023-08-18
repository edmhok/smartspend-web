'use client'

import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Container } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';

const HeaderMain = () => {
  return (
    <div className=" w-full bg-white py-3">
        <div className="container sm:flex justify-between items-center">
            <div className="pb-2 sm:pb-0 ">
             <Link href={'/'} className='flex flex-row items-center space-x-4 sm:flex justify-center'>
                <Image 
                    className=''
                    src={logo}
                    width={56}
                    height={67}
                    alt="Picture of the author"
                    />
                <div className=''>
                    <strong className='text-2xl text-[#218c20]'>SMART</strong>
                    <strong className='text-2xl text-[#ffad1e]'>SPEND</strong>
                </div>
             </Link>
            </div> 
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
            <Link href="/login/adm">
            <div className="relative">
                <ShoppingCartOutlinedIcon className='w-8 h-8 space-x-2' />
                <div className="bg-[#ffad1e] rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                0
                </div>
            </div>
            </Link>

            {/* <Link href="/login/usr">
                <PersonOutlineOutlinedIcon className="w-8 h-8 space-x-2 mt-2"/>
            </Link>
            <div className="relative">
                <MenuRoundedIcon className='w-8 h-8 space-x-2 flex '/>
            </div> */}
             </div>
        </div>
    </div>
  )
}

export default HeaderMain