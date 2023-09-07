"use client";

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from '@mui/icons-material/Check';

interface OrderData {
    _id: string;
    products: any;
    qty: number;
    isPaid: boolean;
    points: number;
    status: string;
}

export default function ViewOrder() {
    const [order, setOrder] = useState<OrderData[]>([]);
    async function fetchData() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);

            if (response.ok) {
                const jsonData: OrderData[] = await response.json();
                setOrder(jsonData);
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

    const confirmOrder = async (_id: string) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    isPaid: 'true'
                })
            });

            if (!response.ok) {
                throw new Error('Failed to confirm order');
            }
            // Refetch merchants after delete
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }
    const deleteOrder = async (_id: string) => {
        try {
            const token = localStorage.getItem("token");
            // Make DELETE request to your API
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${_id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete merchant');
            }
            // Refetch merchants after delete
            fetchData();

        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };


    return (
        <div className='p-10'>
            <div className="flex flex-row space-x-4 items-center p-5">
                <div className='font-bold text-xl'> List of Order</div>
                <Button variant="outlined">Export</Button>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer>
                    <Table sx={{ minWidth: 650, minHeight: 100 }} aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Qty</TableCell>
                                <TableCell>isPaid</TableCell>
                                <TableCell>Points</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.map((item, index) => {
                                return (
                                    <>
                                        <TableRow
                                            key={index}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{item._id}</TableCell>
                                            <TableCell component="th" scope="row">{ }</TableCell>
                                            <TableCell component="th" scope="row"> { }</TableCell>
                                            <TableCell component="th" scope="row"> {(item.isPaid) ? 'yes' : 'no'}</TableCell>
                                            <TableCell component="th" scope="row"> {item.products.points}</TableCell>
                                            <TableCell component="th" scope="row"> {item.status}</TableCell>

                                            <TableCell>
                                                {
                                                    (!item.isPaid &&
                                                        <IconButton
                                                            onClick={() => confirmOrder(item._id)}>
                                                            <CheckIcon fontSize="small" />
                                                        </IconButton>
                                                    )
                                                }
                                            </TableCell>
                                            <TableCell>
                                                <IconButton
                                                    onClick={() => deleteOrder(item._id)}>
                                                    <DeleteOutlineIcon fontSize="small" />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                        {item.products.map((prod: any, ind: number) => {
                                            return (
                                                <TableRow
                                                    key={ind}
                                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">{ }</TableCell>
                                                    <TableCell component="th" scope="row">{prod.product.productName}</TableCell>
                                                    <TableCell component="th" scope="row"> {prod.qty}</TableCell>
                                                    <TableCell component="th" scope="row"> { }</TableCell>
                                                    <TableCell component="th" scope="row"> {prod.product.points}</TableCell>
                                                    <TableCell component="th" scope="row"> { }</TableCell>

                                                    <TableCell>&nbsp;</TableCell>
                                                    <TableCell>&nbsp;</TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    );
}



function fetchData() {
    throw new Error("Function not implemented.");
}

