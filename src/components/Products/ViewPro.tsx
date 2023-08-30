"use client";

import React, { useState, useEffect } from "react";
// import style from "./../css/product.module.css";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";

interface Data {
    id: number;
    entryDate: string;
    productName: string;
    brand: string;
    description: string;
    sku: string;
    price: string;
    qty: number;
    points: number;
    originalPrice: number;
    discount: number;
}

export default function ViewProduct() {
    const [productData, setProductData] = useState<Data[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                console.log(response);
                if (response.ok) {
                    const jsonData: Data[] = await response.json();
                    setProductData(jsonData);
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

    return (
        <div className='productTable'>
            <div className='content'>
                <div className='titleAndBtn'>
                    <div> List of Products</div>
                    <Button className='exportBtn'>Export</Button>
                </div>
                <div className='table'>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 650, minHeight: 100 }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell className='headerText'>Name</TableCell>
                                    <TableCell className='headerText'>Brand</TableCell>
                                    <TableCell className='headerText'>
                                        Description
                                    </TableCell>
                                    <TableCell className='headerText'>SKU</TableCell>
                                    <TableCell className='headerText'>Price</TableCell>
                                    <TableCell className='headerText'>Quantity</TableCell>
                                    <TableCell className='headerText'>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productData.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.productName}
                                        </TableCell>
                                        <TableCell>{item.brand}</TableCell>
                                        <TableCell className='description'>
                                            {item.description}
                                        </TableCell>
                                        <TableCell>{item.sku}</TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell>{item.qty}</TableCell>
                                        <TableCell className='action'>
                                            <IconButton>
                                                <CreateIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton>
                                                <DeleteOutlineIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
