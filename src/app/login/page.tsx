'use client'

import { useRouter } from "next/navigation";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Login() {

return (
    <div className="w-full h-full flex justify-center py-[100px]">
      <div className="w-[845px] bg-white shadow-2xl flex flex-row content-center">
        <div className="w-[540px] py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-[50px] flex flex-col">
            <p className="text-2xl pb-5 text-center"> Login to your account</p>
            <p className="text-sm text-center">Login using your social</p>
            <div className="flex flex-row space-x-10 pt-3 pb-3 justify-center">
            <Link href="https://www.google.com">
              <GoogleIcon/> 
            </Link>
            <Link href="https://www.facebook.com">
              <FacebookIcon />
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
              <Button className="text-fuchsia-500 rounded-lg hover:bg-fuchsia-100 bg-fuchsia-200 font-bold px-10 py-4">Sign-In</Button>
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
              <Link href="/register">
              <Button className="text-fuchsia-500 rounded-xl p-5 hover:bg-white bg-fuchsia-200 font-bold">Register</Button>
              </Link>
            </div>
        </div>

      </div>
    </div>
  );
}