"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./admin.module.css";

interface FormData {
  entryDate: any;
}
type Data = {
  id: number;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  price: string;
  qty: number;
  points: number;
  originalPrice: number;
  discount: number;
};

export default function AddProducts() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  console.log({ productId });

  const [productData, setProductData] = useState<Data>({
    id: -1,
    productName: "",
    brand: "",
    description: "",
    sku: "",
    price: "0",
    qty: 0,
    points: 0,
    originalPrice: 0,
    discount: 0,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [points, setPoints] = useState("");
  const [discount, setDiscount] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState<FormData>({
    entryDate: new Date(),
  });

  const handleDateChange = (value: any) => {
    const tempFormData = formData;
    tempFormData.entryDate = new Date(value);
    setFormData(tempFormData);
  };

  const fetchProductData = async () => {
    try {
      if (productId) {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
          setIsEdit(true);
          setProductName(data.productName);
          setBrand(data.brand);
          setDescription(data.description);
          setSku(data.sku);
          setPrice(data.price);
          setQty(data.qty);
          setPoints(data.points);
          setDiscount(data.discount);
          setOriginalPrice(data.originalPrice);
        } else {
          console.error("Failed to fetch resource data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const saveProduct = async () => {
    const tempFormData = { ...formData };
    const selectedDate = new Date(tempFormData.entryDate);
    tempFormData.entryDate = format(selectedDate, "yyyy-MM-dd").toString();
    try {
      if (isEdit === true) {
        const response = await fetch(
          `http://localhost:4000/products/${productId}`,
          {
            method: "PATCH",
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
          }
        );
      } else {
        const response = await fetch("http://localhost:4000/products", {
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
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // console.log(response);
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

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };
  const handleUpload = () => {
    // Implement your upload logic here
    if (selectedImage) {
      // Example: You can use FormData to send the image to your server
      const formData = new FormData();
      formData.append("image", selectedImage);
      // Make an API call to upload the image
    }
  };
  return (
    <div className="addProducts">
      <div className="content">
        <div className="title">Add Products</div>
        <div className="w-full flex flex-row justify-between ">
          <>
            <div className="w-[540px] space-y-5">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Entry Date"
                  slotProps={{ textField: { fullWidth: true } }}
                  className="w-[540px]"
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
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <div className={styles.productImage}>
                <div>
                  <div>Product Image</div>
                  <input
                    accept="image/*"
                    id="image-upload"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
                {selectedImage && (
                  <div>
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                    />
                  </div>
                )}
              </div>
              <TextField
                fullWidth
                label="Description"
                placeholder="(maximum of 150 words)"
                multiline
                rows={3}
                maxRows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-[540px] space-y-5">
              <TextField
                fullWidth
                label="SKU"
                placeholder="Enter Code"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
              <TextField
                fullWidth
                label="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <TextField
                fullWidth
                label="Quantity"
                placeholder="Quantity"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <TextField
                fullWidth
                label="Points"
                placeholder="Points"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />

              <TextField
                fullWidth
                label="Discount"
                placeholder="Amount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
              <TextField
                fullWidth
                label="Original Price"
                placeholder="Amount"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
              />
            </div>
          </>
        </div>
        <div className="computed">
          <div className="text">Computed Price after Discount</div>
          <div className="text"> 234.59</div>
        </div>
        <div className="mt-20 flex justify-center">
          <div className="flex justify-center pb-5">
            <Link href={"/admin/product/view/"}>
              <Button
                onClick={saveProduct}
                className="text-white hover:bg-fuchsia-100 bg-fuchsia-500 font-bold px-10 py-4"
              >
                Add Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
