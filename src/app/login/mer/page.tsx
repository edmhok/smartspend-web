'use client'

import { Button, Checkbox, TextField } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Swal from 'sweetalert2';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const MerchantLogin = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = async () => {
    const response = await fetch('http://localhost:4000/auth/merchant/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });

    if (response.ok) {
      window.location.href = '/dashboard';
      Swal.fire(
        'Good job!',
        'Login successful',
      )
    } else {
      setError('Invalid access token');
    }
   
  }
//   window.addEventListener('load', () => {
//     // Initialize Google & Facebook SDKs
//     const googleButton = document.getElementById('google-login');
//     const facebookButton = document.getElementById('facebook-login');
  
//     googleButton.addEventListener('click', googleSignIn);
//     facebookButton.addEventListener('click', facebookSignIn);
//   });
  
//   // Google sign in handler
// function googleSignIn() {
//   // Call Google Auth API
//   googleAuth.signIn()
//     .then(googleUser => {
//       // Get ID token
//       const token = googleUser.getAuthResponse().id_token;
//       // Send token to server
//       authenticate(token); 
//     });
// }

// // Facebook sign in handler 
// function facebookSignIn() {
//   // Call FB login API
//   FB.login(response => {
//     // Handle response
//     if(response.authResponse) {
//       const token = response.authResponse.accessToken;
//       // Send token to server
//       authenticate(token);
//     }
//   });

// }

// // Authenticate with server  
// function authenticate(access_token) {
//   // Send token to server
//   fetch('/auth', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({token})
//   })
//   .then(response => {
//     // Handle response
//     // Redirect to home page on success
//     window.location.href = '/home';

//   }).catch(error => {
//     // Handle error
//   });

// }

  return (
    <div className="w-full h-full flex justify-center py-[20px]">
      <div className="w-[845px] bg-white shadow-2xl flex flex-row content-center">
        <div className="w-[540px] py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-[50px] flex flex-col">
            <p className="text-2xl pb-5 text-center"> Login to your Merchant Account</p>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            />
            
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <div className='flex self-center text-lg text-fuchsia-500'>{error}</div>}

              <Link href={'/'} className='text-black hover:text-fuchsia-500 link' >Forgot your password?</Link>
              
              <div className="flex flex-row content-center">
                <Checkbox {...label} /> 
                <p className="flex self-center pt-2">Remember Me</p>
              </div>
              
            <div className='flex justify-center pb-5'>
              <Button type="submit" onClick={handleLogin} className="text-fuchsia-500 rounded-lg hover:bg-fuchsia-100 bg-fuchsia-200 font-bold px-10 py-4">Sign-In</Button>
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
              <Link href={'/register/mer'}>
              <Button type="submit" className="text-fuchsia-500 rounded-xl p-5 hover:bg-white bg-fuchsia-200 font-bold">Register</Button>
              </Link>
            </div>
        </div>

      </div>
    </div>

  );
};

export default MerchantLogin;