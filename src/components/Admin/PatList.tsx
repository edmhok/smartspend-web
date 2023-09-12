"use client";

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Data {
    _id: string;
    username: string;
    first_name: string;
    last_name: string;
    address: string;
    points: number;

}

export default function PatList() {
    const [data, setData] = useState<Data[]>([]);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patrons`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.ok) {
                const jsonData: Data[] = await response.json();
                setData(jsonData);
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


    const deleteMember = async (_id: string) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patrons/${_id}`, {
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
            <h1 className="text-xl pb-3 text-[#218c20]">List of Patron Member</h1>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650, minHeight: 100 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Patron ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Points</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(item => (
                            <TableRow
                                key={item._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item._id}</TableCell>
                                <TableCell component="th" scope="row"> {item.username}</TableCell>
                                <TableCell>{item.last_name}, {item.first_name}</TableCell>
                                <TableCell>{item.address}</TableCell>
                                <TableCell>{item.points}</TableCell>

                                <TableCell>
                                    <IconButton
                                        onClick={() => deleteMember(item._id)}>
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




