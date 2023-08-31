"use client";

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from '@mui/icons-material/Check';

interface OrderData {
    orderId: number;
    productId: number;
    qty: number;
    isPaid: boolean;
    points: number;
    status: string;
}

export default function ViewOrder() {
    const [order, setOrder] = useState<OrderData[]>([]);

    const fetchData = async () => {
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

    const saveOrder = async (id: number) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete merchant');
            }
            // Refetch merchants after delete
            fetchData();

        } catch (error) {
            console.error(error);
        }
    }
    const deleteOrder = async (id: number) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete merchant');
            }
            // Refetch merchants after delete
            fetchData();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='p-10'>
            <h1 className="text-xl pb-3 text-[#218c20]">Order History</h1>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650, minHeight: 100 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Product ID</TableCell>
                            <TableCell>Qty</TableCell>
                            <TableCell>isPaid</TableCell>
                            <TableCell>Points</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.orderId}</TableCell>
                                <TableCell component="th" scope="row">{item.productId}</TableCell>
                                <TableCell component="th" scope="row"> {item.qty}</TableCell>
                                <TableCell component="th" scope="row"> {item.isPaid}</TableCell>
                                <TableCell component="th" scope="row"> {item.points}</TableCell>
                                <TableCell component="th" scope="row"> {item.status}</TableCell>

                                <TableCell>
                                    <IconButton
                                        onClick={() => saveOrder(item.orderId)}>
                                        <CheckIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => deleteOrder(item.orderId)}>
                                        <DeleteOutlineIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}



