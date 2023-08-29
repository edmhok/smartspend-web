'use client'

import React, { useEffect, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import Image from 'next/image';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { PatronLayout } from '@/layout/patron';

interface OrderItem {
    id: number;
    image: string;
    productName: string;
    description: string;
    qty: number;
    price: number;
    total: number;
    updateQty: (newQty: number) => void;
    deleteItem: (id: number) => void;
}

const CartInfo = () => {
    const [orders, setOrders] = useState<OrderItem[]>([]);
    const [updateQty, setUpdateQty] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const images = "/jacket-1.jpg";

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:4000/products");
            console.log(response);
            if (response.ok) {
                const jsonData: OrderItem[] = await response.json();
                setOrders(jsonData);
                //   console.log(response);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            // Make DELETE request to your API
            await fetch('http://localhost:4000/order/' + id, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setTimeout(function () {
                setIsLoading(false);
            }, 1000)

        } catch (error) {
            console.error('Error fetching data:', error);
            setTimeout(function () {
                setIsLoading(false);
            }, 1000)
        }
    };

    const grandTotal = orders.reduce((total, item) => {
        return total + item.qty * item.price;
    }, 0);

    const handleQtyChange = (itemId: number, newQty: number) => {

        const updatedItem = orders.find(item => item.id === itemId);
        if (updatedItem) {
            updatedItem.qty = newQty;
        }

        setOrders([...orders]);

        return {
            // Return updated item to re-render component
            ...updatedItem,
            qty: updateQty
        }
    }

    return (
        <PatronLayout>

            <div className=" w-full flex flex-col items-center">
                <div className="bg-[#EFEFEF] w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleIcon />
                        Cart Information
                    </div>
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleOutlineIcon />
                        Delivery Method
                    </div>
                    <div className="text-sm text-[#218c20] ">
                        <CheckCircleOutlineIcon />
                        Confirmation
                    </div>
                </div>
                <div>
                    <div className="container pb-5">
                        <div className='text-2xl text-black ps-10 py-5'>Order Summary</div>
                        <div className='flex-col flex space-y-2 ps-4'>

                            <TableContainer component={Paper}>
                                <Table aria-label="MuiTableSample">
                                    <TableHead>
                                        <TableRow sx={{ padding: '20px' }}>
                                            <TableCell>Thumbnail</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Quantity</TableCell>
                                            <TableCell>UnitPrice</TableCell>
                                            <TableCell>SubTotal</TableCell>
                                            <TableCell>Action</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        {orders.map(order => (
                                            <TableRow key={order.id}>
                                                <TableCell>
                                                    <Image
                                                        // src={`/api/images/${order.thumbnail}`}
                                                        src={order.image}
                                                        alt={order.productName}
                                                        className="w-[20px] h-[20px]"
                                                    />
                                                </TableCell>
                                                <TableCell>{order.productName}</TableCell>
                                                <TableCell>{order.description}</TableCell>

                                                <TableCell>
                                                    <Button size="small" onClick={() => { handleQtyChange(order.id, order.qty - 1) }}>-</Button>
                                                    {order.qty}
                                                    <Button size="small" onClick={() => { handleQtyChange(order.id, order.qty + 1) }}>+</Button>
                                                </TableCell>

                                                <TableCell>{order.price}</TableCell>
                                                <TableCell>{order.total}</TableCell>
                                                <TableCell>
                                                    <Tooltip title="Delete">
                                                        <IconButton onClick={() => handleDelete(order.id)}>
                                                            <DeleteIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className='flex justify-end pe-5 font-semibold'>
                        Grand Total : ₱{grandTotal}
                    </div>
                </div>

                <div className='m-7 flex justify-end w-full pe-[200px]'>
                    <Link href={'./confirmation/'} prefetch={false}>
                        <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Proceed to CheckOut</button>
                    </Link>
                </div>
            </div>
        </PatronLayout>
    )
}

export default CartInfo





