"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, Grid, InputAdornment, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { MerchantLayout } from "@/layout/merchant";
interface FormData {
    entryDate: any;
}
type Data = {
    id: number;
    productName: string;
    brand: string;
    description: string;
    sku: string;
    imageUrl: string;
    category: string;
    variant: string;
    size: string;
    color: string;
    tags: string;
    price: number;
    qty: number;
    points: number;
    originalPrice: number;
    discount: number;
};
//   tags sample
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const tagname = [
    'clothing',
    'food',
    'garment',
    'men',
    'bestseller',
];


const AddProduct = () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");
    const [isLoading, setIsLoading] = useState(false);

    const [productData, setProductData] = useState<Data>({
        id: 0,
        productName: "",
        brand: "",
        description: "",
        sku: "",
        imageUrl: "",
        category: "",
        variant: "",
        size: "",
        color: "",
        tags: "",
        price: 0,
        qty: 0,
        points: 0,
        originalPrice: 0,
        discount: 0,
    });
    const [isEdit, setIsEdit] = useState(false);
    const [pageTitle, setPageTitle] = useState('Add New Product');
    const [productName, setProductName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [sku, setSku] = useState("");
    const [category, setCategory] = useState("");
    const [variant, setVariant] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [tags, setTags] = React.useState<string[]>([]);
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [points, setPoints] = useState("");
    const [discount, setDiscount] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [formData, setFormData] = useState<FormData>({
        entryDate: new Date(),
    });

    const handleTagChange = (event: SelectChangeEvent<typeof tags>) => {
        const {
            target: { value },
        } = event;
        setTags(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const reloadPage = (): void => {
        window.location.reload();
    }

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
                    setCategory(data.category);
                    setVariant(data.variant);
                    setSize(data.size);
                    setColor(data.color);
                    setTags(data.tags);
                    setPrice(data.price);
                    setQty(data.qty);
                    setPoints(data.points);
                    setDiscount(data.discount);
                    setOriginalPrice(data.originalPrice);
                    setImageUrl(data.imageUrl);
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
                            category,
                            variant,
                            size,
                            color,
                            tags,
                            price,
                            qty,
                            points,
                            discount,
                            originalPrice,
                            imageUrl,
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
                        category,
                        variant,
                        size,
                        color,
                        tags,
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
        setProductName("");
        setBrand("");
        setDescription("");
        setSku("");
        setCategory("");
        setVariant("");
        setSize('');
        setColor('');
        setTags(['']);
        setPrice("");
        setQty("");
        setPoints("");
        setDiscount("");
        setOriginalPrice("");
    };

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files![0];

        let imgFile: File;

        if (file) {
            imgFile = file;
        }
        // Upload image
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('http://localhost:4000/products', {
            method: 'POST',
            body: formData
        });

        const imgUrl = response.url;

        // Update state
        setImageUrl(imgUrl);

        // Make API call to update database
        const productResponse = await fetch(`http://localhost:4000/products/${productId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageUrl: imgUrl
            })
        });

    }
    return (
        <MerchantLayout>



            <Card color='secondary' sx={{ p: 2 }}>
                <CardHeader title={pageTitle} titleTypographyProps={{ variant: 'h6' }} />
                <Divider sx={{ margin: 0 }} />
                <form onSubmit={e => e.preventDefault()}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    fullWidth
                                    label='Name'
                                    placeholder='Name of Product'
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
                                <TextField fullWidth label='Brand' placeholder='Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id='form-layouts-separator-select-label'>Category</InputLabel>
                                    <Select
                                        label='Category'
                                        value={category}
                                        id='form-layouts-separator-select'
                                        labelId='form-layouts-separator-select-label'
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <MenuItem value='Garments'>Garments</MenuItem>
                                        <MenuItem value='Technology'>Technology</MenuItem>
                                        <MenuItem value='Food'>Food</MenuItem>
                                        <MenuItem value='Furniture'>Furniture</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='Variant' placeholder='Variant' value={variant} onChange={(e) => setVariant(e.target.value)} />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ marginBottom: 0 }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                                    2. Product Specification
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label='Size' placeholder='small' value={size} onChange={(e) => setSize(e.target.value)} />
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <TextField fullWidth label='Color' placeholder='black' value={color} onChange={(e) => setColor(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField fullWidth label='Quantity' placeholder='quantity' value={qty} onChange={(e) => setQty(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='SKU' placeholder='SKU' value={sku} onChange={(e) => setSku(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{ m: 0, width: 650 }}>
                                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                                    <Select
                                        labelId="demo-multiple-checkbox-label"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={tags}
                                        onChange={handleTagChange}
                                        input={<OutlinedInput label="Tag" />}
                                        renderValue={(selected) => selected.join(', ')}
                                        MenuProps={MenuProps}
                                    >
                                        {tagname.map((name) => (
                                            <MenuItem key={name} value={tags}>
                                                <Checkbox checked={tags.indexOf(name) > -1} />
                                                <ListItemText primary={tagname} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth sx={{ m: 0 }}>
                                    <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                                        label="Price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label='Discount' placeholder='Discount' value={discount} onChange={(e) => setDiscount(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label='Points' placeholder='Points' value={points} onChange={(e) => setPoints(e.target.value)} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input
                                    accept="image/*"
                                    id="image-upload"
                                    type="file"
                                    onChange={handleImageChange}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider sx={{ margin: 0 }} />
                    <CardActions className="flex justify-end">
                        <Button size='large' color='primary' variant='outlined' onClick={reloadPage}>
                            Cancel
                        </Button>
                        <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained' onClick={saveProduct} disabled={isLoading}>
                            {isLoading ? 'Loading...' : 'Save'}
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </MerchantLayout>
    );
}
export default AddProduct


