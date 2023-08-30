'use client'

import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { MuiTelInput } from 'mui-tel-input'
import Swal from 'sweetalert2'
import { format } from "date-fns";
import Link from "next/link";
interface FormData {
  birthdate: any;
  affiliate_id: number;
}

export default function MerRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [formData, setFormData] = useState<FormData>({
    birthdate: new Date(),
    affiliate_id: 0,
  });

  const handleDateChange = (value: any) => {
    const tempFormData = formData;
    tempFormData.birthdate = new Date(value);

    setFormData(tempFormData);
  }

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };


  const addAdmin = async () => {
    const tempFormData = { ...formData };
    const selectedDate = new Date(tempFormData.birthdate);
    tempFormData.birthdate = format(selectedDate, 'yyyy-MM-dd').toString();

    const response = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        first_name,
        middle_name,
        last_name,
        phone,
        address,
        city,
        state,
        country,
        zipcode,
        birthdate: selectedDate,
        // affiliate_id,
      }),
    });
    console.log(response);
    if (response.ok) {
      window.location.href = '/login/adm';

    } else {
      setError('Invalid Registration');
    }
  };




  return (
    <div className="w-full h-full flex justify-center py-[20px]">
      <div className=" bg-white shadow-2xl flex flex-col content-center p-[50px] space-y-5">
        <p className="text-2xl text-center pb-3">
          Create a User Account
        </p>
        <p className="text-sm text-center">Choose</p>
        <div className="flex flex-row space-x-10 py-2 justify-center">
          <Link href="/register/mer" className="no-underline" prefetch={false}>
            <div className="text-lg text-black font-semibold hover:text-amber-600">Mechant</div>
          </Link>
          <Link href="/register/pat" className="no-underline" prefetch={false}>
            <div className="text-lg text-black font-semibold hover:text-amber-600">Patron</div>
          </Link>
        </div>
        <div className="flex flex-col justify-center space-y-5">

          <TextField
            label="Email Address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex flex-row space-x-5">
            <TextField
              label="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Middle Name"
              value={middle_name}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            <TextField
              label="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-row content-center space-x-9 ">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Birth Date"
                className="w-[290px]"
                value={formData.birthdate}
                onChange={handleDateChange}
              />
            </LocalizationProvider>
            <MuiTelInput
              value={phone}
              label="Phone Number"
              onChange={(e) => setPhone(e)}
              className="w-[300px] mt-2"
            />
          </div>
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="flex flex-row justify-between">
            <TextField
              className="w-[300px]"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              className="w-[300px]"
              label="State/Province"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between">
            <TextField
              className="w-[300px]"
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <TextField
              label="Zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            type="confirm_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Referred by"
            type="affiliate_id"
            value={formData.affiliate_id}
            onChange={handleChange}
          />
          {error && <div className='flex self-center text-lg text-[#218c20]'>{error}</div>}

          <div className='flex justify-center mt-30 '>

            <Button variant="contained" size="large" onClick={addAdmin} className="px-10 py-4"
              disabled={isLoading}>{isLoading ? 'Loading...' : 'Register'}
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}


