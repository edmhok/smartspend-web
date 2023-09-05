"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
interface FormData {
  entryDate: any;
}
type Data = {
  _id: string;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  category: string;
  variant: string;
  size: string;
  color: string;
  tags: string;
  price: string;
  qty: string;
  points: string;
  discount: string;
  originalPrice: string;
};

const AddProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [pageTitle, setPageTitle] = useState("Add New Product");
  const [isEdit, setIsEdit] = useState(false);
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [category, setCategory] = useState("");
  const [variant, setVariant] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [points, setPoints] = useState("");
  const [discount, setDiscount] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [formData, setFormData] = useState<FormData>({
    entryDate: new Date(),
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    }
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("isEdit"));

    if (urlParams.get("isEdit")) {
      const id = urlParams.get("_id");
      if (id) {
        setPageTitle("Edit Product#" + id);
        fetchData(parseInt(id));
      }
    }
  }, []);

  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setPhoto(imageFile);
    // Implement your upload logic here
    if (photo) {
      // Example: You can use FormData to send the image to your server
      const formData = new FormData();
      formData.append("image", photo);
      // Make an API call to upload the image
    }
  };

  const reloadPage = (): void => {
    window.location.reload();
  };

  const handleDateChange = (value: any) => {
    const tempFormData = formData;
    tempFormData.entryDate = Date.now();
    setFormData(tempFormData);
  };
  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const saveProduct = async () => {
    const token = localStorage.getItem("token");
    setIsLoading(true);

    const merchant = localStorage.getItem("userId");

    const tempFormData = { ...formData };
    const selectedDate = new Date(tempFormData.entryDate);
    tempFormData.entryDate = format(selectedDate, "yyyy-MM-dd").toString();
    var formdata = new FormData();
    formdata.append('productName', productName);
    formdata.append('brand', brand);
    formdata.append('description', description);
    formdata.append('sku', sku);
    formdata.append('category', category);
    formdata.append('variant', variant);
    formdata.append('size', size);
    formdata.append('color', color);
    formdata.append('tags', tags);
    formdata.append('price', price);
    formdata.append('qty', qty);
    formdata.append('points', points);
    formdata.append('discount', discount);
    formdata.append('originalPrice', originalPrice);
    formdata.append('entryDate', tempFormData.entryDate);
    formdata.append('photo', photo || '');

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("isEdit")) {
      const id = urlParams.get("_id");
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formdata
        });
        setIsLoading(false);
        window.location.href = "/merchant/product/view";
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    } else {
      try {
        
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/products/`,
          {
            method: "POST",
            body: formdata,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log({ response });

        const jsonData: Data[] = await response.json();
        window.location.href = "/merchant/product/view";
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    }
  };

  // const fetchProductData = async (_id: string) => {
  //     setIsLoading(true);

  //     try {
  //         if (_id) {
  //             const response = await fetch(
  //                 `${process.env.NEXT_PUBLIC_API_URL}/products/${+_id}`);

  //             if (response.ok) {
  //                 const data: Data[] = await response.json();
  //                 setIsEdit(true);
  //                 setProductName(data.productName);
  //                 setBrand(data.brand);
  //                 setDescription(data.description);
  //                 setSku(data.sku);
  //                 setPrice(data.price);
  //                 setQty(data.qty);
  //                 setPoints(data.points);
  //                 setDiscount(data.discount);
  //                 setOriginalPrice(data.originalPrice);
  //             } else {
  //                 throw new Error('Failed to fetch data');
  //             }
  //         }
  //     } catch (error) {
  //         console.error("Error:", error);
  //     }
  // };

  // useEffect(() => {
  //     fetchProductData();
  // }, []);

  return (
    <Card sx={{ p: 2 }}>
      <CardHeader title={pageTitle} titleTypographyProps={{ variant: "h6" }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={(e) => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={10} sm={6}>
              <TextField
                fullWidth
                color="secondary"
                label="Name"
                placeholder="Name of Product"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Entry Date"
                  slotProps={{ textField: { fullWidth: true } }}
                  value={formData.entryDate}
                  onChange={handleDateChange}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                fullWidth
                label="Brand"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                color="secondary"
                label="Description"
                placeholder="(maximum of 150 words)"
                multiline
                rows={3}
                maxRows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="form-layouts-separator-select-label">
                  Category
                </InputLabel>
                <Select
                  color="secondary"
                  label="Category"
                  value={category}
                  id="form-layouts-separator-select"
                  labelId="form-layouts-separator-select-label"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <MenuItem value="Garments">Garments</MenuItem>
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Furniture">Furniture</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                fullWidth
                label="Variant"
                placeholder="Variant"
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                2. Product Specification
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                color="secondary"
                fullWidth
                label="Size"
                placeholder="small"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <TextField
                color="secondary"
                fullWidth
                label="Color"
                placeholder="black"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                color="secondary"
                fullWidth
                label="Quantity"
                placeholder="quantity"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                fullWidth
                label="SKU"
                placeholder="SKU"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                fullWidth
                label="Tags"
                placeholder="Tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth sx={{ m: 0 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Price
                </InputLabel>
                <OutlinedInput
                  color="secondary"
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">₱</InputAdornment>
                  }
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="secondary"
                fullWidth
                label="Discount"
                placeholder="Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Grid>

            <Grid item xs={8} sm={4}>
              <TextField
                color="secondary"
                label="Points"
                placeholder="Points"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField
                color="secondary"
                label="Original Price"
                placeholder="Original Price"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                onChange={handleImageChange}
              />
              {photo && (
                <div style={{ marginTop: 10 }}>
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="Selected"
                    width={200}
                    height={100}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions className="flex justify-end">
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={reloadPage}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            size="large"
            type="submit"
            sx={{ mr: 2 }}
            variant="outlined"
            onClick={saveProduct}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};
export default AddProducts;

function fetchData(arg0: number) {
  throw new Error("Function not implemented.");
}
