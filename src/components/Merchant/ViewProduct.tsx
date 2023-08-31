"use client";

import React, { useState, useEffect } from "react";
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
import Link from "next/link";

interface Data {
  id: number;
  entryDate: string;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  price: number;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
}

export default function ViewProduct() {
  const [productData, setProductData] = useState<Data[]>([]);

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
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (itemId: number) => {
    try {
      // Make DELETE request to your API
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${itemId}`, {
        method: "DELETE",
      });
      // Update state to remove deleted item
      // setProductData(data.filter(item => item.id !== itemId));
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div >
      <div className="flex flex-row space-x-4 items-center p-5">
        <div className='font-bold text-xl'> List of Products</div>
        <Button variant="outlined">Export</Button>
      </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer >
          <Table sx={{ minWidth: 650, minHeight: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell> Description</TableCell>
                <TableCell>SKU</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
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
                  <TableCell >
                    {item.description}
                  </TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>
                    <IconButton>
                      <Link href={`/merchant/product/add/?id=${item.id}`} prefetch={false}>
                        <CreateIcon fontSize="small" />
                      </Link>
                    </IconButton>

                    <IconButton onClick={() => handleDelete(item.id)}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}







