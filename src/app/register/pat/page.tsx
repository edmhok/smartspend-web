'use client'

import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { MuiTelInput } from 'mui-tel-input'
import Swal from 'sweetalert2'
import { format } from "date-fns";

interface FormData {
  birthdate: any;
  affiliate_id: number;
}

export default function MerRegister() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
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
  const [points, setPoints] = useState('');
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


  const addMerchant = async () => {
    const tempFormData = { ...formData };
    const selectedDate = new Date(tempFormData.birthdate);
    tempFormData.birthdate = format(selectedDate, 'yyyy-MM-dd').toString();

    const response = await fetch(`${process.env.API_URL}/patrons`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
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
        points,
        birthdate: selectedDate,
        // affiliate_id,
      }),
    });
    console.log(response);
    if (response.ok) {
      window.location.href = '/login/pat';
      Swal.fire({
        title: 'Registration',
        text: 'Successfully registered',
        icon: 'info'
      });
    } else {
      setError('Invalid Registration');
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
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              className="w-[300px]"
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
            label="Points Received"
            type="points"
            value={'1'}
            onChange={(e) => setPoints(e.target.value)}
          />
          <TextField
            label="Referred by"
            type="affiliate_id"
            value={'0'}
            onChange={handleChange}
          />
          {error && <div className='flex self-center text-lg text-fuchsia-500'>{error}</div>}

          <div className='flex justify-center mt-30 '>

            <Button variant="contained" size="medium" onClick={addMerchant} className="text-white rounded-lg hover:bg-[#8fe08d] bg-[#218c20] font-bold px-10 py-4">Register</Button>

          </div>
        </div>
      </div>
    </div>
  );
}


