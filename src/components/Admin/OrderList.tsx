"use client";

import React from "react";
// import style from "./../css/product.module.css";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  buyerID: number,
  items: string,
  description: string,
  sku: string,
  country: string,
  quantity: number,
  shipping: string,
  price: number
) {
  return {
    buyerID,
    items,
    description,
    sku,
    country,
    // style,
    quantity,
    shipping,
    price,
  };
}

const orderList = [
  createData(
    2847592,
    "Shoes",
    " Lorem ipsum ...",
    "AE2928573ed",
    "Philippine",
    120,
    "Free",
    349.54
  ),
  createData(
    2847592,
    "Shoes",
    " Lorem ipsum ...",
    "AE2928573ed",
    "Philippine",
    120,
    "Free",
    349.54
  ),
  createData(
    2847592,
    "Shoes",
    " Lorem ipsum ...",
    "AE2928573ed",
    "Philippine",
    120,
    "Free",
    349.54
  ),
];

export default function OrderList() {
  return (
    <div className='productTable'>
      <div className='content'>
        <div className='titleAndBtn'>
          <div> List of Orders</div>
          <Button className='exportBtn'>Export</Button>
        </div>
        <div className='table'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='headerText'>Buyer ID</TableCell>
                  <TableCell className='headerText'>Items</TableCell>
                  <TableCell className='headerText'>
                    Description
                  </TableCell>
                  <TableCell className='headerText'>SKU</TableCell>
                  <TableCell className='headerText'>Country</TableCell>
                  <TableCell className='headerText'>Quantity</TableCell>

                  <TableCell className='headerText'>shipping</TableCell>
                  <TableCell className='headerText'>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderList.map((row) => (
                  <TableRow
                    key={row.buyerID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.buyerID}
                    </TableCell>
                    <TableCell>{row.items}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.sku}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.quantity}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.shipping}</TableCell>
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
