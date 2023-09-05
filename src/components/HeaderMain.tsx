'use client'

import React from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BsSearch } from "react-icons/bs";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';
import Link from 'next/link';

const HeaderMain = () => {
    return (
        <div className="head_bg01">
            <div className="container flex justify-between items-center">
                <div className='menubar'>
                    <Link href="/login/usr" prefetch={false}>
                        <MenuRoundedIcon className="text-gray-500 w-8 h-8" />
                    </Link>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <Link href={'/'} prefetch={false}>
                        <Image
                            className='logo_img1'
                            src={'/logo.png'}
                            width={56}
                            height={67}
                            alt="Picture of the author"
                        />
                    </Link>
                    <div className='logo_txt'>
                        <strong className='logo_txt1'>SMART</strong>
                        <strong className='logo_txt2'>SPEND</strong>
                    </div>
                </div>


                <div className="search">
                    <div className='logo_invisible'>
                        <strong className='logo_txt1'>SMART</strong>
                        <strong className='logo_txt2'>SPEND</strong>
                    </div>
                    <input
                        className="input_search"
                        type="text"
                        placeholder="Enter any product name..."
                    />
                    <BsSearch
                        className="search_icon"
                        size={20}
                    />
                </div>
                <div className="cssright">
                    <Link href="/login/usr" prefetch={false}>
                        <PersonOutlineOutlinedIcon className="w-8 h-8 " />
                    </Link>

                    <Link href="/" prefetch={false}>
                        <div className="relative">
                            <ShoppingCartOutlinedIcon className='w-8 h-8 space-x-2' />
                            <div className="shop_notification">
                                0
                            </div>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default HeaderMain