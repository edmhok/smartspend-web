'use client'

import { useRouter } from "next/navigation";
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login() {

return (
    <div className="w-full h-full flex justify-center py-[100px]">
      <div className="w-[845px] bg-white shadow-2xl flex flex-row content-center">
        <div className="w-[540px] py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-50">
            <p className="text-sm text-center pt-[50px] ">
            Login to your account
            </p>
            <div className="flex flex-col justify-center p-[50px] space-y-10">
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
            <div className="align-middle">
              
              <a href="/forgot-password">Forgot your password?</a> 
              <div className="flex flex-row content-center">
                <Checkbox {...label} /> 
                <p className="flex self-center pt-2">Remember Me</p>
              </div>
              
            </div>
            <div className='flex justify-center pe-10'>
              <Button className="text-fuchsia-500 rounded-lg hover:bg-fuchsia-100 bg-fuchsia-200 font-bold px-10 py-4">Sign-In</Button>
            </div>
            </div>
          </div>
        </div>
        
        <div className="w-[320px] pt-[100px] px-10 bg-fuchsia-500 text-white">
            <p className="text-2xl font-medium pb-5">
                New Here in
            </p>
            <p className="text-4xl font-medium text-center pb-5">
                Smartshop?
            </p>

            <p className="text-center pb-20">
            Sign up and discover a great amount of new opportunities!
            </p>
            <div className='flex justify-center'>
              <Link href="/register">
              <Button className="text-fuchsia-500 rounded-xl p-5 hover:bg-white bg-fuchsia-200 font-bold">Register</Button>
              </Link>
            </div>
        </div>

      </div>
    </div>
  );
}