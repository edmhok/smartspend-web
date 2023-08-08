'use client'

import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { Box, Fade, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Switch, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  

const Confirmation = (props: ImageProps) => {
    const [deliveryMethod, setDeliveryMethod] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDeliveryMethod((event.target as HTMLInputElement).value);
    };


  return (
    <div className=" w-full flex flex-col items-center">
        <div className="bg-[#EFEFEF] w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleOutlineIcon />
                Cart Information
            </div>
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleOutlineIcon />
                Delivery Method
            </div>
            <div className="text-sm text-fuchsia-500 ">
                <CheckCircleIcon />
                Confirmation
            </div>
        </div>
        <div className='flex flex-col'>
            <div className="bg-white drop-shadow-md w-[600px] h-auto mb-5 pb-5">
                <div className='text-2xl text-black ps-[150px] py-7'>Select your Payment Gateway</div>
                <div className='space-y-2 flex justify-center'>

                    <FormControl className='flex justify-center'>
                    <Box sx={{ width: '100%' }}>
                    <RadioGroup 
                        name="payment"
                        value={deliveryMethod}
                        onChange={handleChange}
                    >
                        <FormControlLabel 
                        value="gcash" 
                        control={<Radio />} 
                        label="GCash" 
                        />
                        <FormControlLabel
                        value="bank"
                        control={<Radio />}
                        label="BPI"
                        />
                    </RadioGroup>

                    {deliveryMethod === 'gcash' && 
                        <div className='pb-5 pt-[10px] '>
                        <div className='ps-[70px]'>PLEASE SCAN TO PAY</div>
                           <Image 
                            src={props.src}
                            alt={props.alt}
                            width={props.width} 
                            height={props.height}
                            />
                            <div className=''></div>
                        </div>
                    }

                    {deliveryMethod === 'bank' &&
                        <div className='pb-8 pt-[10px] '>
                        <Image 
                         src={props.src}
                         alt={props.alt}
                         width={props.width} 
                         height={props.height}
                         />
                     </div>                  
                    }
                    </Box>
                </FormControl> 
                      
                </div>
            </div>
         
            <div className='w-full flex justify-center mb-5'>
                <Link href={'/'}>
                <button className='px-9 py-2 text-black text-lg font-semibold bg-yellow-400'>PAYMENT VERIFICATION</button>
                </Link>
            </div>
        </div>
       
    </div>
  )
}

export default Confirmation