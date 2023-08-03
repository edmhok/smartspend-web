'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
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



interface RegisterProps {
  onLogin: (username: string, password: string) => void;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Register() {
    const [value, setValue] = useState('+63');
   
    const handleChange = (newValue: React.SetStateAction<string>) => {
        setValue(newValue);
      }

return (
    <div className="w-full h-full flex justify-center py-[100px]">
      <div className=" bg-white shadow-2xl flex flex-col content-center p-[50px] space-y-5">
        <p className="text-2xl text-center pb-3">
        Create an Account
        </p>
        <div className="flex flex-col justify-center space-y-5">
        <TextField 
        label="Email Address"
        // value={}
        // onChange={}
        />
        <div className="flex flex-row space-x-5">
            <TextField 
            label="First Name"
            // value={}
            // onChange={}
            />
            <TextField 
            label="Middle Name"
            // value={}
            // onChange={}
            />
            <TextField 
            label="Last Name"
            // value={}
            // onChange={}
            />
        </div>
        <div className="flex flex-row content-center space-x-9 ">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Birth Date" className="w-[290px]" />
                </DemoContainer>
            </LocalizationProvider>
            <MuiTelInput
            value={value}
            label="Phone Number"
            onChange={handleChange}
            className="w-[300px] mt-2"
            />
        </div>
        <FormControl className="flex flex-row space-x-10">
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
        </FormControl>
        <TextField 
        label="Address"
        // value={}
        // onChange={}
        />
        <div className="flex flex-row justify-between">
            <TextField 
            className="w-[300px]"
            label="City"
            // value={}
            // onChange={}
            />
            <TextField 
            className="w-[300px]"
            label="State/Province"
            // value={}
            // onChange={}
            />
        </div>
        <TextField 
        label="Country"
        // value={}
        // onChange={}
        />
        <TextField
              label="Password"
              type="password"
              // value={}
              // onChange={}  
        />
        <TextField
              label="Confirm Password"
              type="confirm_password"
              // value={}
              // onChange={}  
        />
        <TextField
              label="Referred by"
              type="affiliate_id"
              // value={}
              // onChange={}  
        />
        
        <div className='flex justify-center mt-30'>
            <Button className="text-white rounded-lg hover:bg-fuchsia-200 hover:text-fuchsia-500 bg-fuchsia-500 font-bold px-10 py-4">Register</Button>
        </div>
        </div>
      </div>
    </div>
  );
}