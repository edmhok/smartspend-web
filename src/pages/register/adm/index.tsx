"use client";

import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { MuiTelInput } from "mui-tel-input";
import Swal from "sweetalert2";
import { format } from "date-fns";
import Link from "next/link";
import ImageUploader from "@/components/ImageUploader";
interface FormData {
  birthdate: any;
}

export default function AdminRegister() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [middle_name, setMiddleName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [photos, setPhotos] = useState(null);
  const [formData, setFormData] = useState<FormData>({
    birthdate: new Date(),
  });

  const handleDateChange = (value: any) => {
    const tempFormData = formData;
    tempFormData.birthdate = new Date(value);

    setFormData(tempFormData);
  };
  const isValidEmail = (username: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(username);
  };
  const addAdmin = async () => {
    if (
      !username ||
      !first_name ||
      !middle_name ||
      !last_name ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !zipcode ||
      !password ||
      !confirmpassword ||
      !photos
    ) {
      setError("All fields are required.");
    } else if (!isValidEmail(username)) {
      setError("Invalid email format.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters.");
    } else if (password !== confirmpassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      try {
        const tempFormData = { ...formData };
        const selectedDate = new Date(tempFormData.birthdate);
        tempFormData.birthdate = format(selectedDate, "yyyy-MM-dd").toString();

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
              confirmpassword,
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
              photos: [photos],
              // affiliate_id,
            }),
          }
        );
        console.log(response);
        if (response.ok) {
          window.location.href = "/login/adm";
          Swal.fire({
            title: "Registration",
            text: "Successfully registered",
            icon: "info",
          });
        } else {
          setError("Invalid Registration");
        }
      } catch (error) {
        // Handle fetch error (e.g., network issues)
      }
    }
  };
  const handleImageChange = (e: any) => {
    const imageFile = e.target.files[0];
    setPhotos(imageFile);
  };
  return (
    <div className="w-full h-full flex justify-center py-[10px]">
      <div className=" bg-white shadow-2xl flex flex-col content-center p-[50px] space-y-5">
        <p className="text-2xl text-center pb-3">Create Admin Account</p>

        <p className="text-sm text-center">or choose</p>
        <div className="flex flex-row space-x-10 py-2 justify-center">
          <Link href="/register/mer" className="no-underline" prefetch={false}>
            <div className="text-lg text-black font-semibold hover:text-amber-600">
              Mechant
            </div>
          </Link>
          <Link href="/register/pat" className="no-underline" prefetch={false}>
            <div className="text-lg text-black font-semibold hover:text-amber-600">
              Patron
            </div>
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
              defaultCountry={"PH"}
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
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex flex-col justify-start">
            <div className="text-md pb-5">Upload your ID here</div>
            <input
              accept="image/*"
              id="image-upload"
              type="file"
              onChange={handleImageChange}
            />
            {photos && (
              <div style={{ marginTop: 10 }}>
                <img
                  src={URL.createObjectURL(photos)}
                  alt="Selected"
                  width={200}
                  height={100}
                />
              </div>
            )}
          </div>
          {error && (
            <div className="flex self-center text-lg text-[#218c20]">
              {error}
            </div>
          )}

          <div className="flex justify-center mt-30 ">
            <Button
              variant="contained"
              size="medium"
              onClick={addAdmin}
              className="text-white rounded-lg hover:bg-[#8fe08d] bg-[#218c20] font-bold px-10 py-4"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
