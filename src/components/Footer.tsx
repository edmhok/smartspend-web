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
        <div className='grid grid-flow-col gap-2 justify-items-center'>
            <div>
                <div className="py-2">SmartSpend</div>
                    <div className="py-2">Davao City, Philippines</div>
                    <div className="py-1 space-x-2">
                    <FacebookOutlinedIcon/>
                    <GoogleIcon />
                    <WhatsAppIcon />
                </div>
            </div>
            <div><h1>Shop</h1>
            <ul>
                    <li>Categories</li>
                    <li>Best Seller</li>
                    <li>Promo</li>
                </ul>
            </div>
            <div><h1>Dashboard</h1>
            <ul>
                    <li>Teams</li>
                    <li>Forum</li>
                    <li>Leaderboard</li>
            </ul>
            </div>
            <div><h1>About</h1>
            <ul>
                    <li>Company</li>
                    <li>Policies</li>
                    <li>Careers</li>
                    <li>Blogs</li>
            </ul>
            </div>
            <div><h1>Help</h1>
            <ul>
                    <li>FAQ</li>
                    <li>Privacy</li>
                    <li>Trust and Safety</li>
            </ul>
            
            </div>
     </div>
        <div className='grid grid-flow-col gap-2 space-x-3'>
            <div className='px-20 py-2'>© 2023 SmartSpend Company</div>
            <div></div>

        </div>
    </div>
  )
}

export default Footer