"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { format } from "date-fns";

interface FormData {
    entryDate: any;
}

export default function AddProducts() {
    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [sku, setSku] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [points, setPoints] = useState("");
    const [discount, setDiscount] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [formData, setFormData] = useState<FormData>({
        entryDate: new Date(),
    });

    const handleDateChange = (value: any) => {
        const tempFormData = formData;
        tempFormData.entryDate = new Date(value);
        setFormData(tempFormData);
    };

    const addProduct = async () => {
        const tempFormData = { ...formData };
        const selectedDate = new Date(tempFormData.entryDate);
        tempFormData.entryDate = format(selectedDate, "yyyy-MM-dd").toString();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productName,
                brand,
                description,
                sku,
                price,
                qty,
                points,
                discount,
                originalPrice,
                entryDate: selectedDate,
            }),
        });
        console.log(response);
        setProductName("");
        setBrand("");
        setDescription("");
        setSku("");
        setPrice("");
        setQty("");
        setPoints("");
        setDiscount("");
        setOriginalPrice("");
    };

    return (
        <div className='addProducts'>
            <div className='content'>
                <div className='title'>Add Products</div>
                <div className="w-full flex flex-row justify-between ">
                    <div className="w-[540px] space-y-5">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Entry Date"
                                slotProps={{ textField: { fullWidth: true } }}
                                className="w-[20px]"
                                value={formData}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                        <TextField
                            fullWidth
                            label="Name"
                            placeholder="Name of Product"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Brand"
                            placeholder="Brand of Product"
                            onChange={(e) => setBrand(e.target.value)}
                            value={brand}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            placeholder="(maximum of 150 words)"
                            value={description}
                            multiline
                            rows={3}
                            maxRows={6}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label="SKU"
                            placeholder="Enter Code"
                            onChange={(e) => setSku(e.target.value)}
                            value={sku}
                        />

                        <TextField
                            fullWidth
                            label="Price"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                    </div>
                    <div className="w-[540px] space-y-5">
                        <TextField
                            fullWidth
                            label="Quantity"
                            placeholder="Quantity"
                            onChange={(e) => setQty(e.target.value)}
                            value={qty}
                        />
                        <TextField
                            fullWidth
                            label="Points"
                            placeholder="Points"
                            onChange={(e) => setPoints(e.target.value)}
                            value={points}
                        />

                        <TextField
                            fullWidth
                            label="Discount"
                            placeholder="Amount"
                            onChange={(e) => setDiscount(e.target.value)}
                            value={discount}
                        />
                        <TextField
                            fullWidth
                            label="Original Price"
                            placeholder="Amount"
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            value={originalPrice}
                        />
                    </div>
                </div>
                <div className='computed'>
                    <div className='text'>Computed Price after Discount</div>
                    <div className='text'> 234.59</div>
                </div>
                <div className="mt-20 flex justify-center">
                    <div className="flex justify-center pb-5">
                        <Button
                            onClick={addProduct}
                            className="text-white hover:bg-fuchsia-100 bg-fuchsia-500 font-bold px-10 py-4"
                        >
                            Add Me
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
