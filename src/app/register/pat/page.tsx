'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, InputLabel, Link, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MuiTelInput } from 'mui-tel-input'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface FormData {
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  birthdate: Date | null;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  password: string;
  confirmPassword: string;
  // affiliateId: string;
}

export default function MerchantRegister() {
  const [value, setValue] = useState('+63');
  const theme = useTheme();
  const token = localStorage.getItem('acess_token');
    if (!token) { 
      window.location.href = '/';
      return false;
    } 
  const [isEdit, setIsEdit] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState('Add new Merchant User');
  const [formData, setFormData] = useState<FormData>({
    email: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    birthdate: null,
    phone: "",
    address: "", 
    city: "",
    state: "",
    country: "",
    password: "",
    confirmPassword: "",
    // affiliateId: ""
    
  });
  const urlParams = new URLSearchParams(window.location.search);
      
  const handleChange = (event:any) => {
    console.log('called')
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log({formData})
  };
  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      birthdate: date
    });
  };
  const addMerchant = async () => {
    setIsLoading(true);

    if(urlParams.get('isEdit')) {
      const id = urlParams.get('id');
      try {
        await fetch(`http://localhost:4000/merchant/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        setIsLoading(false);
        window.location.href="/patron";

      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
    else {
      try {
        const response = await fetch('http://localhost:4000/merchant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const jsonData = await response.json();
        window.location.href="/merchant";

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
  };

  const fetchData = async (id:number) => {
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/merchant/'+id);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setFormData({
        email: jsonData.email,
        first_name: jsonData.first_name,
        middle_name: jsonData.middle_name,
        last_name: jsonData.last_name,
        birthdate: jsonData.birthdate,
        phone: jsonData.phone,
        address: jsonData.address,
        city: jsonData.city,
        state: jsonData.state,
        country: jsonData.country,
        password: jsonData.password,
        confirmPassword: jsonData.confirmPassword,
        // affiliate_id: jsonData.affiliate.length > 0 ? jsonData.affiliate[0].id : 0
      });
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };


return (
    <div className="w-full h-full flex justify-center py-[100px]">
      <div className=" bg-white shadow-2xl flex flex-col content-center p-[50px] space-y-5">
        <p className="text-2xl text-center pb-3">
        Create a Patron Account
        </p>
        <div className="flex flex-col justify-center space-y-5">
            <TextField
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange} 
          />

        <div className="flex flex-row space-x-5">
            <TextField
            name="firstName"
            label="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />

          <TextField
            name="middleName" 
            label="Middle Name"
            value={formData.middle_name}
            onChange={handleChange}
          />

          <TextField
            name="lastName"
            label="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-row content-center space-x-9 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker 
                    label="Birth Date" 
                    value={formData.birthdate}
                    onChange={handleDateChange}
                    className="w-[290px]"
                     />
                </DemoContainer>
            </LocalizationProvider>
            <MuiTelInput
            value={formData.phone}
            label="Phone Number"
            onChange={handleChange}
            className="w-[300px] mt-2"
            />
        </div>
        {/* <FormControl className="flex flex-row space-x-10">
        <FormLabel className="mt-2 pl-2" >Gender</FormLabel>
        <RadioGroup
            aria-labelledby="gender"
            defaultValue="female"
            name="radio-buttons-group"
            className="flex flex-row"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
        </FormControl> */}
        <TextField 
        label="Address"
        value={formData.address}
        onChange={handleChange}
        />
        <div className="flex flex-row justify-between">
            <TextField 
            className="w-[300px]"
            label="City"
            value={formData.city}
            onChange={handleChange}
            />
            <TextField 
            className="w-[300px]"
            label="State/Province"
            value={formData.state}
            onChange={handleChange}
            />
        </div>
        <TextField 
        label="Country"
        value={formData.country}
        onChange={handleChange}
        />
        <TextField
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}  
        />
        <TextField
              label="Confirm Password"
              type="confirm_password"
              value={formData.confirmPassword}
              onChange={handleChange}  
        />
        <TextField
              label="Referred by"
              type="affiliate_id"
              // value={formData.affiliate_id}
              // onChange={handleChange}  
        />
        
        <div className='flex justify-center mt-30'>
          <Link href={'/dashboard/mer'}>
            <Button className="text-white rounded-lg hover:bg-fuchsia-200 hover:text-fuchsia-500 bg-fuchsia-500 font-bold px-10 py-4">Register</Button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}