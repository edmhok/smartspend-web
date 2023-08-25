'use client'

import React from 'react'
import { IconButton } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: -5,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const HeaderMain = () => {
    return (
        <div className=" w-full bg-white py-3">
            <div className="container sm:flex justify-between items-center">
                <div className="pb-2 sm:pb-0 ">
                    <Link href={'/'} className='flex flex-row items-center space-x-4 sm:flex justify-center' prefetch={false}>
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
                    <Link href={'/login/adm'} prefetch={false}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color='success'>
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HeaderMain