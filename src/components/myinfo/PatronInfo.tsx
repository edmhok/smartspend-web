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
    Typography,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

interface PatronData {
    _id: string;
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    photo: string;
}

const MyInfo = () => {
    const [info, setInfo] = useState<PatronData[]>([]);
    const [photos, setPhotos] = useState(null);
    const [formData, setFormData] = useState({
        _id: '',
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        photo: '',
    });

    async function fetchData() {
        try {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/patron/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            if (response.ok) {
                const data = await response.json();
                setInfo(data);

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

    const handleChange = (event: any) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleImageChange = (e: any) => {
        const imageFile = e.target.files[0];
        setPhotos(imageFile);
    };
    return (
        <Card sx={{ p: 2 }}>
            <CardHeader title='Personal Information' TypographyProps={{ variant: "h6" }} />
            <Divider sx={{ margin: 0 }} />
            <form onSubmit={(e) => e.preventDefault()}>
                <CardContent>
                    <Grid container spacing={2}>
                        {info.map((item, index) => (
                            <div key={index} >
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="ID Code"
                                        value={item._id}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="First Name"
                                        value={item.first_name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="Last Name"
                                        value={item.last_name}
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        color="secondary"
                                        fullWidth
                                        label="Phone"
                                        value={item.phone}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="Address"
                                        value={item.address}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="City"
                                        value={item.city}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="State"
                                        value={item.state}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        color="secondary"
                                        label="Country"
                                        value={item.country}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider sx={{ marginBottom: 0 }} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        2. Billing Info
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        color="secondary"
                                        fullWidth
                                        label="Gcash Account"
                                        placeholder="small"
                                        value={'number'}
                                    // onChange={}
                                    />
                                </Grid>

                                <Grid item xs={8} sm={4}>
                                    <input
                                        accept="image/*"
                                        id="image-upload"
                                        type="file"
                                        onChange={handleImageChange}
                                    />
                                    {photos && (
                                        <div style={{ marginTop: 10 }}>
                                            <img
                                                src={URL.createObjectURL(photos)}
                                                alt="Selected"
                                                width={200}
                                                height={100}
                                            />
                                        </div>
                                    )}
                                </Grid>
                            </div>
                        ))}
                    </Grid>
                </CardContent>
                <Divider sx={{ margin: 0 }} />
                <CardActions className="flex justify-end">
                    {/* <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={reloadPage}
          >
            Cancel
          </Button> */}
                    <div className="flex justify-center mt-30 ">
                        <Button
                            variant="contained"
                            size="medium"
                            // onClick={addMerchant}
                            className="text-white rounded-lg hover:bg-[#8fe08d] bg-[#218c20] font-bold px-10 py-4"
                        >
                            Register
                        </Button>
                    </div>
                </CardActions>
            </form>
        </Card>
    );
};
export default MyInfo;


