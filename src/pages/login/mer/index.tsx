"use client";

import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const MerchantLogin = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/merchant/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const jsonData = await response.json();
      const token = jsonData.access_token;

      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", jsonData.role);
      localStorage.setItem("userId", jsonData.userId);

      window.location.href = "/merchant";
      Swal.fire("Good job!", "Login successful");
    } else {
      setError("Invalid access token");
    }
  };

  useEffect(() => {
    setUsername('');
  }, []);

  return (
    <div className="flex justify-center p-[10px]">
      
      <div className="bg-white shadow-2xl flex flex-row">
        <div className="py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-[30px] flex flex-col">
            <p className="text-2xl pb-5 text-center">
              Login to your Merchant Account
            </p>
            <p className="text-sm text-center text-slate-400">Hi there! <br />Temporary login using <br />Username:merchant@test.com <br /> Password:qwertyuiop1201 </p>
             {/* <div className="flex flex-row space-x-10 pt-3 pb-3 justify-center">
              <Link prefetch={false} href="https://www.google.com">
                <GoogleIcon />
              </Link>
              <Link prefetch={false} href="https://www.facebook.com">
                <FacebookIcon />
              </Link>
            </div>  */}
            <div className="flex flex-col py-10 space-y-3">
              
              <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-username">
                  Username
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-username"
                  type="text"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {error && <div className='flex self-center text-lg text-[#218c20]'>{error}</div>}
              <Link href={'/'} className='text-black hover:text-[#218c20] link' prefetch={false} >Forgot your password?</Link>

              <div className="flex justify-center pb-5">
                <Button
                  variant="contained"
                  size="medium"
                  color='success'
                  type="submit"
                  onClick={handleLogin}
                  className="signin_btn"
                >
                  Sign-In
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[320px] pt-[100px] px-10 bg-[#218c20] text-white flex flex-col text-center space-y-10">
          <p className="text-2xl font-medium">New Here in</p>
          <p className="text-4xl font-medium">Smartshop?</p>

          <p className="text-xl">
            Sign up and discover a great amount of new opportunities!
          </p>
          <div className="flex justify-center">
            <Link href={"/register/mer"}>
              <div className="regis_btn">
                Register
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantLogin;
