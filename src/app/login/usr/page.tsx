'use client'

import { useRouter } from "next/navigation";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button, Link, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login() {

return (

    <div className="w-full h-full flex justify-center py-[20px]">
      <div className="w-[845px] bg-white shadow-2xl flex flex-row content-center">
        <div className="w-[540px] py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-[50px] flex flex-col">
            <p className="text-2xl pb-5 text-center">Login</p>
             <p className="text-sm text-center">Choose your Account Login</p>
            <div className="flex flex-row space-x-10 pt-3 pb-3 justify-center">

            <Link href="/login/mer" className="no-underline">
              <div className="text-lg text-black font-semibold hover:text-amber-600">Mechant</div>
            </Link>
            <Link href="/login/pat" className="no-underline">
              <div className="text-lg text-black font-semibold hover:text-amber-600">Patron</div>
            </Link>

            </div>
            <div className="flex flex-col justify-center py-10 space-y-5">
            <TextField 
            label="Username"
            // value={}
            // onChange={}
            />
            
            <TextField
              label="Password"
              type="password"
              // value={}
              // onChange={}  
            />
              <Link href={'/'} className='text-black hover:text-fuchsia-500 link' >Forgot your password?</Link>
              
              <div className="flex flex-row content-center">
                <Checkbox {...label} /> 
                <p className="flex self-center pt-2">Remember Me</p>
              </div>
              
            <div className='flex justify-center pb-5'>
            <Link href="/dashboard/usr">
              <Button className="text-fuchsia-500 rounded-lg hover:bg-fuchsia-100 bg-fuchsia-200 font-bold px-10 py-4">Sign-In</Button>
            </Link>
            </div>
            </div>
          </div>
        </div>
        
        <div className="w-[320px] pt-[100px] px-10 bg-fuchsia-500 text-white flex flex-col text-center space-y-10">
            <p className="text-2xl font-medium">
                New Here in
            </p>
            <p className="text-4xl font-medium">
                Smartshop?
            </p>

            <p className="text-xl">
            Sign up and discover a great amount of new opportunities!
            </p>
            <div className='flex justify-center'>
              <Link href="/register/user">
              <Button className="text-fuchsia-500 rounded-xl p-5 hover:bg-white bg-fuchsia-200 font-bold">Register</Button>
              </Link>
            </div>
        </div>

      </div>
    </div>
  );
}