"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";
import style from "./addProducts.module.css";

function AddProducts() {
  const [entryDate, setEntryDate] = useState("");
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [points, setPoints] = useState("");
  const [discount, setDiscount] = useState("");
  const [originalPrize, setOriginalPrice] = useState("");

  const addProduct = async () => {
    const urlencoded = new URLSearchParams();
    // urlencoded.append("entryDate", entryDate);
    urlencoded.append("productName", productName);
    urlencoded.append("brand", brand);
    urlencoded.append("description", description);
    urlencoded.append("sku", sku);
    urlencoded.append("price", price);
    urlencoded.append("qty", qty);
    urlencoded.append("points", points);
    urlencoded.append("discount", discount);
    urlencoded.append("originalPrice", originalPrize);

    const response = await fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
    });
    console.log(response);
  };

  return (
    <div className={style.addProducts}>
      <div className={style.content}>
        <div className={style.title}>Add Products</div>
        <div className="w-full flex flex-row justify-between ">
          <div className="w-[540px] space-y-5">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Entry Date"
                slotProps={{ textField: { fullWidth: true } }}
                className="w-[20px]"
                // value={entryDate}
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
              value={originalPrize}
            />
          </div>
        </div>
        <div className={style.computed}>
          <div className={style.text}>Computed Price after Discount</div>
          <div className={style.text}> 234.59</div>
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

export default AddProducts;
