"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { format } from 'date-fns';
interface FormData {
    entryDate: any;
}
type Data = {
    id: number;
    productName: string;
    brand: string;
    description: string;
    sku: string;
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
const names = [
    'clothing',
    'food',
    'garment',
    'men',
    'bestseller',
];

const AddMerProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [pageTitle, setPageTitle] = useState('Add New Product');
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

    const urlParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        console.log(urlParams.get('isEdit'))

        if (urlParams.get('isEdit')) {
            const id = urlParams.get('id');
            if (id) {
                setPageTitle("Edit Product#" + id);
                fetchData(parseInt(id))
            }
        }
    }, [])

    const [personName, setPersonName] = React.useState<string[]>([]);

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
        setIsLoading(true);

        const tempFormData = { ...formData };
        const selectedDate = new Date(tempFormData.entryDate);
        tempFormData.entryDate = format(selectedDate, 'yyyy-MM-dd').toString();

        if (urlParams.get('isEdit')) {
            const id = urlParams.get('id');
            try {
                await fetch(`http://localhost:4000/products/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
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
                setIsLoading(false);
                window.location.href = "/merchant/product/view";
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }
        else {
            try {
                const response = await fetch('http://localhost:4000/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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
                const jsonData = await response.json();
                window.location.href = "/merchant/product/view";
                setIsLoading(false);

            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        }
    };


    const handleImageChange = (e: any) => {
        const imageFile = e.target.files[0];
        setSelectedImage(imageFile);
    };
    // const handleUpload = () => {
    //     // Implement your upload logic here
    //     if (selectedImage) {
    //         // Example: You can use FormData to send the image to your server
    //         const formData = new FormData();
    //         formData.append("image", selectedImage);
    //         // Make an API call to upload the image
    //     }
    // };
    const handleTagChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const reloadPage = (): void => {
        window.location.reload();
    }
    return (

        <Card color='secondary' sx={{ p: 2 }}>
            <CardHeader title={(pageTitle)} titleTypographyProps={{ variant: 'h6' }} />
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
                                    value={personName}
                                    onChange={handleTagChange}
                                    input={<OutlinedInput label="Tag" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    MenuProps={MenuProps}
                                >
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                            <ListItemText primary={name} />
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
    );
}
export default AddMerProducts;

function setSelectedImage(imageFile: any) {
    throw new Error("Function not implemented.");
}
function fetchData(arg0: number) {
    throw new Error("Function not implemented.");
}

