// 'use client'

// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { MuiTelInput } from 'mui-tel-input';
// import { useEffect, useState } from 'react';
// import Image from "next/image";
// import { BsCreditCard2Back } from 'react-icons/bs';
// import Link from 'next/link';
// import { Button } from '@mui/material';
// import Swal from 'sweetalert2';

// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: number;
//     value: number;
// }

// function CustomTabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <div>{children}</div>
//                 </Box>
//             )}
//         </div>
//     );
// }

// function a11yProps(index: number) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// export default function CartPoints() {
//     const [value, setValue] = React.useState(0);
//     const [phone, setPhone] = useState("");
//     const [points, setPoints] = useState(0)

//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     const handleCreateRequest = async () => {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId');

//         const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orderpoints`, {
//             method: 'POST',
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 points: points,
//                 merchant_Id: userId,
//                 status: 'pending'
//             })
//         });
//         const swalRes = await Swal.fire("Thank You for your purchase request. We will soon review your order.");
//         if (swalRes.isConfirmed) {
//             window.location.href = '/merchant'
//         }
//     }

//     useEffect(() => {
//         const queryString = window.location.search;
//         const urlParams = new URLSearchParams(queryString);
//         const _points = urlParams.get('points')
//         setPoints(parseInt(_points || '0'))
//     }, [])

//     return (
//         <>

//             <Box sx={{ width: '100%' }}>
//                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                         <Tab label="GCash" {...a11yProps(0)} />
//                         <Tab label="Credit Card" {...a11yProps(1)} />
//                         <Tab label="Debit Card" {...a11yProps(2)} />
//                     </Tabs>
//                 </Box>
//                 <CustomTabPanel value={value} index={0}>
//                     <div className='p-6 w-[500px] h-[300px] flex flex-col justify-center'>
//                         <div className='flex flex-row space-x-5 justify-center'>
//                             <div className="w-[400px]">
//                                 <p>You are about to purchase : <strong>₱{points} for {points} Points</strong></p>
//                                 <br />
//                                 <h3>Please send to the following Gcash detail: </h3>

//                                 <h4>Number : <strong>09XXXXXXXXX</strong></h4>
//                                 <h4>Name : <strong>J** D**</strong></h4>
//                             </div>
//                             <div className="w-[200px] flex justify-center">
//                                 or
//                             </div>

//                             <div className="w-[400px] text-center">
//                                 <h3>SCAN for PAYMENT</h3>
//                                 <Image
//                                     src={'/gcash.jpg'}
//                                     width={400}
//                                     height={400}
//                                     alt="product img"
//                                     className="object-contain"
//                                 />
//                             </div>
//                             <div className="w-[200px] flex justify-center">
//                                 then
//                             </div>
//                             <div className="w-[400px] text-center">
//                                 <h3>HIT THIS BUTTON</h3>
//                                 <Button
//                                     variant="outlined"
//                                     color="success"
//                                     onClick={() => handleCreateRequest()}
//                                 >
//                                     Send Purchase Request
//                                 </Button>
//                             </div>
//                         </div>

//                     </div>
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={1}>
//                     <div className='flex flex-row items-center space-x-5'>
//                         <div className="w-[300px]">
//                             <h3>Please send to the following Gcash detail: </h3>
//                             <h4><strong>Number</strong> : 09XXXXXXXXX</h4>
//                             <h4><strong>Name</strong> : J** D** </h4>
//                         </div>
//                         <Typography>or</Typography>
//                         <Typography>SCAN for PAYMENT</Typography>
//                         <Image
//                             src={'/gcash.jpg'}
//                             width={70}
//                             height={70}
//                             alt="product img"
//                             className="object-contain"
//                         />
//                         <Link href={'/'} prefetch={false}>
//                             <button
//                                 className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
//                             >
//                                 <BsCreditCard2Back style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
//                                 Click to Pay
//                             </button>
//                         </Link>
//                     </div>
//                 </CustomTabPanel>
//                 <CustomTabPanel value={value} index={2}>
//                     <div className='flex flex-row items-center space-x-5'>
//                         <div className="w-[300px]">
//                             <h3>Please send to the following Gcash detail: </h3>
//                             <h4><strong>Number</strong> : 09XXXXXXXXX</h4>
//                             <h4><strong>Name</strong> : J** D** </h4>
//                         </div>
//                         <Typography>or</Typography>
//                         <Typography>SCAN for PAYMENT</Typography>
//                         <Image
//                             src={'/gcash.jpg'}
//                             width={70}
//                             height={70}
//                             alt="product img"
//                             className="object-contain"
//                         />
//                     </div>
//                 </CustomTabPanel>
//             </Box>
//         </>
//     );
// }