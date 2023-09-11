'use client'

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';
import Image from "next/image";
import { BsCreditCard2Back } from 'react-icons/bs';
import Link from 'next/link';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [phone, setPhone] = useState("");

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="GCash" {...a11yProps(0)} />
                        <Tab label="Credit Card" {...a11yProps(1)} />
                        <Tab label="Debit Card" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {/* <div className='p-6 w-[500px] h-[300px] flex flex-col justify-center'> */}
                    <div className='flex flex-col space-x-5 justify-center'>
                        <div className="w-[300px]">
                            <Typography>Enter Gcash Number</Typography>
                            <MuiTelInput
                                value={phone}
                                label="Phone Number"
                                defaultCountry={"PH"}
                                onChange={(e) => setPhone(e)}
                                className="w-[300px] mt-2"
                            />
                        </div>

                        <div className="w-[300px]">
                            <Typography>or</Typography>
                            <Typography>SCAN for PAYMENT</Typography>
                            <Image
                                src={'/gcash.jpg'}
                                width={400}
                                height={400}
                                alt="product img"
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* </div> */}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className='flex flex-row items-center space-x-5'>
                        <Typography>Enter Gcash Number</Typography>
                        <MuiTelInput
                            value={phone}
                            label="Phone Number"
                            defaultCountry={"PH"}
                            onChange={(e) => setPhone(e)}
                            className="w-[100px] mt-2"
                        />
                        <Typography>or</Typography>
                        <Typography>SCAN for PAYMENT</Typography>
                        <Image
                            src={'/gcash.jpg'}
                            width={70}
                            height={70}
                            alt="product img"
                            className="object-contain"
                        />
                        <Link href={'/'} prefetch={false}>
                            <button
                                className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
                            >
                                <BsCreditCard2Back style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
                                Click to Pay
                            </button>
                        </Link>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className='flex flex-row items-center space-x-5'>
                        <Typography>Enter Gcash Number</Typography>
                        <MuiTelInput
                            value={phone}
                            label="Phone Number"
                            defaultCountry={"PH"}
                            onChange={(e) => setPhone(e)}
                            className="w-[100px] mt-2"
                        />
                        <Typography>or</Typography>
                        <Typography>SCAN for PAYMENT</Typography>
                        <Image
                            src={'/gcash.jpg'}
                            width={70}
                            height={70}
                            alt="product img"
                            className="object-contain"
                        />
                    </div>
                </CustomTabPanel>
            </Box>
        </>
    );
}