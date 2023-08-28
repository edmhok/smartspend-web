"use client";

import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Data {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    address: string;
    points: number;

}

export default function ViewPoints() {
    const [patronData, setPatronData] = useState<Data[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedPatron, setSelectedPatron] = useState<Data | null>(null);

    const modalStyle = {
        backdrop: {
            opacity: 0.5,
            color: 'white'
        }
    };


    useEffect(() => {
        async function fetchData() {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(`${process.env.API_URL}/patrons`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(response);

                if (response.ok) {
                    const jsonData: Data[] = await response.json();

                    setPatronData(jsonData);
                    // console.log(response);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData();
    }, []);

    const handleOpen = (merchant: Data) => {
        setOpen(true);
        setSelectedPatron(merchant);
    }

    const handleClose = async () => {
        setOpen(false);
        setSelectedPatron(null);
    }

    const handleSave = async () => {
        if (!selectedPatron) {
            return;
        }

        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${process.env.API_URL}/patron/${selectedPatron.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`

                },
                body: JSON.stringify({
                    points: selectedPatron.points
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update merchant');
            }
            // Close modal
            handleClose();
            // Refetch merchant
            fetchData();

        } catch (error) {
            console.error(error);
        }

    }
    function fetchData() {
        throw new Error("Function not implemented.");
    }

    // Add a deleteMerchant function
    const deleteMerchant = async (id: number) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch(`${process.env.API_URL}/merchants/${id}`, {
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
            <h1 className="text-xl pb-3 text-[#218c20]"> View My Points</h1>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650, minHeight: 100 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Points</TableCell>
                            {/* <TableCell></TableCell> */}
                            {/* <TableCell></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patronData.map(patron => (
                            <TableRow
                                key={patron.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{patron.id}</TableCell>
                                <TableCell component="th" scope="row"> {patron.username}</TableCell>
                                <TableCell>{patron.last_name}, {patron.first_name}</TableCell>
                                <TableCell>{patron.address}</TableCell>
                                <TableCell>{patron.points}</TableCell>
                                {/* <TableCell>
                                    <Button onClick={() => handleOpen(patron)} color='secondary' className="bg-[#ffad1e] p-2 text-black">SEND Points</Button>
                                    <Dialog open={open} onClose={handleClose} sx={modalStyle}>
                                        <DialogTitle>Manage Points for {selectedPatron?.first_name}</DialogTitle>
                                        <DialogContent>
                                            <TextField
                                                label="Points"
                                                value={selectedPatron?.points || ''}
                                                onChange={(e) => setSelectedPatron({ ...selectedPatron!, points: parseInt(e.target.value) })}
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose} color='secondary'>Cancel</Button>
                                            <Button onClick={handleSave} color="secondary">Save</Button>
                                        </DialogActions>
                                    </Dialog>

                                </TableCell> */}
                                {/* <TableCell>
                                    <IconButton
                                        onClick={() => deleteMerchant(patron.id)}>
                                        <DeleteOutlineIcon fontSize="small" />
                                    </IconButton>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}



