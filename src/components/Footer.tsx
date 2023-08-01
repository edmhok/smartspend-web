'use client'

import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  return (
    <div className='bottom-0 w-full'> 
        <div className="w-full bg-black text-center text-white py-1 md:pb-2"> 
        <p>SmartSpend offers free-shipping.</p>
        </div>
        <div className='grid grid-flow-col gap-2 justify-items-center mt-4'>
            <div className='ps-20'>
                <div className="py-2 text-base font-bold">SmartSpend</div>
                    <div className="py-1 text-sm">Davao City, Philippines</div>
                    <div className="py-1 space-x-2">
                    <FacebookOutlinedIcon/>
                    <GoogleIcon />
                    <WhatsAppIcon />
                    <div className='py-5 text-sm'>© 2023 SmartSpend Company</div>
                </div>
            </div>
            <div className='pe-3'>
                <div><h1>Shop</h1>
                <ul className='py-3'>
                    <li className='text-sm'>Categories</li>
                    <li className='text-sm'>Best Seller</li>
                    <li className='text-sm'>Promo</li>
                    </ul>
                </div>
            </div>
            <div className='pe-3'>
                <div><h1>Dashboard</h1>
                <ul className='py-3'>
                    <li className='text-sm'>Teams</li>
                    <li className='text-sm'>Forum</li>
                    <li className='text-sm'>Leaderboard</li>
                </ul>
                </div>
            </div>
            <div className='pe-10'>
                <div><h1>About</h1>
                <ul className='py-3'>
                    <li className='text-sm'>Company</li>
                    <li className='text-sm'>Policies</li>
                    <li className='text-sm'>Careers</li>
                    <li className='text-sm'>Blogs</li>
                </ul>
                </div>
            </div>
            <div className='pe-10'>
                <div><h1>Help</h1>
                <ul className='py-3'>
                    <li className='text-sm'>FAQ</li>
                    <li className='text-sm'>Privacy</li>
                    <li className='text-sm'>Trust and Safety</li>
                </ul>
                </div>
            </div>
     </div>
       
    </div>
  )
}

export default Footer