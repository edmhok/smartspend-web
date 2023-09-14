'use client'
import React, { useEffect, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from '@mui/icons-material';
import Image from 'next/image';

interface OrderItem {
    id: number;
    photo: string;
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
    // const images = "/jacket-1.jpg";

    async function fetchData() {
        const lcData = JSON.parse(localStorage.getItem("orders") || "[]");
        const ids = lcData.map((item: any) => item.id).join(",");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/batch?ids=${ids}`);

            if (response.ok) {
                const data = await response.json();
                const newData = data.map((item: any) => {
                    const qty = lcData.find((i: any) => i.id === item._id).qty
                    return {
                        ...item,
                        qty,
                        total: qty * item.price
                    };
                });

                setOrders(newData);
                //   console.log(response);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            // Make DELETE request to your API
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/` + id, {
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
        <div className=" w-full flex flex-col items-center">
            <div className="w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
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
                                    {orders.map((order, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Image
                                                    // src={`/api/images/${order.thumbnail}`}
                                                    src={order.photo}
                                                    alt={order.productName}
                                                    width={30}
                                                    height={30}
                                                />
                                            </TableCell>
                                            <TableCell>{order.productName}</TableCell>
                                            <TableCell>{order.description}</TableCell>

                                            <TableCell>
                                                {/* <button className="text-white bg-slate-300 w-3 h-5 rounded-l-xl" onClick={() => { handleQtyChange(order.id, order.qty - 1) }}>-</button> */}
                                                <strong className='px-2 '>{order.qty}</strong>
                                                {/* <button className="text-white bg-slate-300 w-3 h-5 rounded-r-xl" onClick={() => { handleQtyChange(order.id, order.qty + 1) }}>+</button> */}
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


        </div>
    )
}

export default CartInfo