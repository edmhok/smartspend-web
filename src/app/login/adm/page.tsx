"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserLogin = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/login", {
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
        window.location.href = "/admin";
        Swal.fire("Good job!", "Login successful");
      } else {
        setError("Invalid Access");
      }
    } catch (error) {
      setError("Error logging in");
    }
  };

  // const handleChange = () => {
  //   return Swal.fire({
  //     title: 'Choose option',
  //     showDenyButton: true,
  //     showConfirmButton: true,
  //     confirmButtonText: 'Patron',
  //     denyButtonText: 'Merchant'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       window.location.href = '/register/pat';
  //       Swal.fire('You chose Patron');
  //     } else if (result.isDenied) {
  //       window.location.href = '/register/mer';
  //       Swal.fire('You chose Merchant');
  //     }
  //   });
  // }

  return (
    <div className="flex justify-center p-[10px]">
      <div className="bg-white shadow-2xl flex flex-row">
        <div className="py-3 space-y-3 border border-r-slate-300 flex flex-col">
          <div className="p-[30px] flex flex-col">
            <p className="text-2xl pb-5 text-center">Welcome to Admin Login</p>
            <p className="text-sm text-center">Choose your Account</p>
            <div className="flex flex-row space-x-10 pt-3 pb-3 justify-center">
              <Link prefetch={false} href="/login/mer" className="no-underline">
                <div className="text-lg text-black font-semibold hover:text-[#218c20]">
                  Mechant
                </div>
              </Link>
              <Link prefetch={false} href="/login/pat" className="no-underline">
                <div className="text-lg text-black font-semibold hover:text-[#218c20]">
                  Patron
                </div>
              </Link>
            </div>
            <div className="flex flex-col justify-center py-10 space-y-5">
              <TextField
                sx={{ m: 1, width: "40ch" }}
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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

              {error && (
                <div className="flex self-center text-lg text-[#218c20]">
                  {error}
                </div>
              )}

              <Link
                prefetch={false}
                href={"/"}
                className="text-black hover:text-[#218c20] link"
              >
                Forgot your password?
              </Link>

              <div className="px-10 pb-5">
                <Button
                  type="submit"
                  onClick={handleLogin}
                  className="text-[#218c20] rounded-lg hover:bg-[#60df5e] bg-[#85f084] font-bold  py-4"
                >
                  {" "}
                  SignIn
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
            <Link prefetch={false} href={"/register/adm"}>
              <Button className="text-[#218c20] rounded-xl p-5 hover:bg-white bg-[#85f084] font-bold">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
