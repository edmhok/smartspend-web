'use client'

import React, { useEffect, useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
import { Button, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface CartItem {
    id: number;
    thumbnail: string;
    description: string;
    qty: number;
    price: number;
    total: number;
    updateQty: (newQty: number) => void;
    deleteItem: (id: number) => void;
}

const CartInfo = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [updateQty, setUpdateQty] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:4000/order");
            console.log(response);
            if (response.ok) {
                const jsonData: CartItem[] = await response.json();
                setCartItems(jsonData);
                // console.log(response);
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

    const handleDelete = async (itemId: number) => {
        try {
            // Make DELETE request to your API
            await fetch(`http://localhost:4000/order/${itemId}`, {
                method: "DELETE",
            });

            // Update state to remove deleted item
            // setProductData(data.filter(item => item.id !== itemId));
            fetchData();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleQtyChange = (itemId: number, newQty: number) => {

        const updatedItem = cartItems.find(item => item.id === itemId);
        if (updatedItem) {
            updatedItem.qty = newQty;
        }

        setCartItems([...cartItems]);

        return {
            // Return updated item to re-render component
            ...updatedItem,
            qty: updateQty
        }
    }

    return (
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
                <div className="bg-white drop-shadow-md w-[1040px] h-auto mb-5 pb-5">
                    <div className='text-2xl text-black ps-10 py-7'>Order Summary</div>
                    <div className='flex-col flex space-y-2 ps-4'>
                        <div className='bg-[#F6F6F6] p-[20px] w-[98%] pb-2'>
                            <ul className='flex flex-row text-thin justify-start gap-[110px] '>
                                <li>Thumbnail</li>
                                <li>Description</li>
                                <li>Quantity</li>
                                <li>Unit Price</li>
                                <li>SubTotal Price</li>
                            </ul>
                        </div>
                        <div className='bg-[#F6F6F6] p-[20px] w-[98%] pb-1 text-center'>
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id} className='flex flex-row text-thin justify-start gap-[120px]'>
                                        <li><img src={item.thumbnail} style={{ width: 50, height: 50 }} /></li>
                                        <li className='ps-6'>{item.description}</li>
                                        <li className='ps-3'>
                                            <div className=''>
                                                <Button size="small" onClick={() => { handleQtyChange(item.id, item.qty - 1) }}>-</Button>
                                                <span>{item.qty}</span>
                                                <Button size="small" onClick={() => { handleQtyChange(item.id, item.qty + 1) }}>+</Button>
                                            </div>
                                        </li>
                                        <li>{item.price}</li>
                                        <li>{cartItems.reduce((total, item) => {
                                            return total + item.qty * item.price
                                        }, 0)}
                                        </li>
                                        <li className='ps-5'>
                                            <Tooltip title="Delete">
                                                <IconButton onClick={() => handleDelete(item.id)}>
                                                    <DeleteIcon fontSize="small" />
                                                </IconButton>
                                            </Tooltip>
                                        </li>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='px-4 py-3 flex justify-end mr-[100px] font-semibold'>
                        Grand Total : ₱{' total'}
                    </div>

                </div>


                <div className='w-full flex justify-end mb-5 space-x-4'>
                    <Link href={'/checkout/2'} prefetch={false}>
                        <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Proceed to CheckOut</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartInfo





