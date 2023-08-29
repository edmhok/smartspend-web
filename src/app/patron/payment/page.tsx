'use client'

import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { Box, Fade, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Switch, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { PatronLayout } from '@/layout/patron';


const Payment = () => {
    const [deliveryMethod, setDeliveryMethod] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryMethod((event.target as HTMLInputElement).value);
    };

    return (
        <PatronLayout>

            <div className=" w-full flex flex-col items-center">
                <div className="bg-[#EFEFEF] w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleOutlineIcon />
                        Cart Information
                    </div>
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleIcon />
                        Delivery Method
                    </div>
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleOutlineIcon />
                        Confirmation
                    </div>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={8} divide-x>
                        <FormControl className='ps-[200px]'>
                            <div className='text-[#218c20] font-semibold text-xl pb-5'>Shipping Method</div>
                            <Box sx={{ width: '100%' }}>
                                <RadioGroup
                                    name="delivery"
                                    value={deliveryMethod}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel
                                        value="self"
                                        control={<Radio />}
                                        label="Self Pickup"
                                    />
                                    <FormControlLabel
                                        value="cod"
                                        control={<Radio />}
                                        label="Cash on Delivery"
                                    />
                                    {/* <FormControlLabel 
                    value="shipping"
                    control={<Radio />}
                    label="Worldwide Shipping"
                /> */}
                                </RadioGroup>

                                {deliveryMethod === 'self' &&
                                    <div className='pb-5 pt-5 '>
                                        You can Select our Different Office Branches Nationwide: <br />
                                        Main Office : Davao City <br />
                                        Office Hour : 9:00AM - 5:00PM
                                    </div>
                                }

                                {deliveryMethod === 'cod' &&
                                    <div className='px-5 my-5 py-5 w-[600px] bg-white'>
                                        <h1 className='ps-5 pb-3 text-lg font-semibold'>Billing Information</h1>
                                        <div className='space-y-3 pb-10'>
                                            <div className='flex flex-row space-x-7'>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <TextField id="input-with-sx" label="FirstName *" variant="standard" />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: 50 }}>
                                                    <TextField id="input-with-sx" label="MI" variant="standard" />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <TextField id="input-with-sx" label="LastName *" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='ps-8'>
                                                <Box sx={{ width: 530 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Address *" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='flex flex-row space-x-10 ps-8'>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="City" variant="standard" />
                                                </Box>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="State/Province" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='flex flex-row space-x-10 ps-8'>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Country" variant="standard" />
                                                </Box>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Zipcode" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='ps-8'>
                                                <Box sx={{ width: 530 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Phone Number *" variant="standard" />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {deliveryMethod === 'shipping' &&
                                    <div className='px-5 my-5 py-5 w-[600px] bg-white'>
                                        <h1 className='ps-5 pb-3 text-lg font-semibold'>Shipping Information</h1>
                                        <div className='space-y-3 pb-10'>
                                            <div className='flex flex-row space-x-7'>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                                    <TextField id="input-with-sx" label="FirstName *" variant="standard" />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: 50 }}>
                                                    <TextField id="input-with-sx" label="MI" variant="standard" />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                                    <TextField id="input-with-sx" label="LastName *" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='ps-8'>
                                                <Box sx={{ width: 530 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Address *" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='flex flex-row space-x-10 ps-8'>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="City *" variant="standard" />
                                                </Box>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="State/Province *" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='flex flex-row space-x-10 ps-8'>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Country *" variant="standard" />
                                                </Box>
                                                <Box sx={{ width: 270 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Zipcode" variant="standard" />
                                                </Box>
                                            </div>
                                            <div className='ps-8'>
                                                <Box sx={{ width: 530 }}>
                                                    <TextField fullWidth id="input-with-sx" label="Phone Number *" variant="standard" />
                                                </Box>
                                            </div>
                                        </div>


                                    </div>
                                }
                            </Box>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} >
                        <div className='w-[300px] flex flex-col ps-10 pt-10'>
                            <h1 className='text-2xl text-thin pb-5'>Order Summary</h1>
                            <ul className='flex flex-row'>
                                <li className='w-[460px] h-[70px] flex flex-row space-x-2'>
                                    <div className='w-[60px] h-[70px] bg-[#218c20] '></div>
                                    <div className='ps-1'>
                                        <h5 className=''>{'Notebook'}</h5>
                                        <div className='ps-20'>{'7.00 $ x 6pcs'}</div>
                                        <div className='ps-20 font-semibold'>{'42.00 $'}</div>
                                    </div>
                                </li>

                            </ul>


                        </div>
                    </Grid>
                </Grid>
                <div className='w-full mb-5 space-x-10 flex justify-end pe-[430px]'>
                    <Link href={'/checkout/1'} >
                        <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Back</button>
                    </Link>
                    <Link href={'/checkout/3'} >
                        <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Continue</button>
                    </Link>
                </div>
            </div>
        </PatronLayout>
    )
}

export default Payment