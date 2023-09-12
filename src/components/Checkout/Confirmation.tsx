"use client";

import React, { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import {
  Box,
  Fade,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import Image from "next/image";
import Swal from "sweetalert2";
import { init } from "next/dist/compiled/@vercel/og/satori";

interface PaymentProps {
  img: string;
  alt: string;
  width: number;
  height: number;
}

const Confirmation = (props: PaymentProps) => {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [info, setInfo] = useState<any>()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryMethod((event.target as HTMLInputElement).value);
  };

  const handleClick = async () => {
    const shop = JSON.parse(localStorage.getItem("orders") || "[]");
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
      body: JSON.stringify({
        products_Id: shop[0],
        patron_Id: userId,
        merchant_Id: 5,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await result.json();
    if (data.status === "failed") {
      Swal.fire(
        "The merchant doesn't have enought points. Please pick another item."
      );
    } else {
      Swal.fire("Thank You for your payment.");
    }
    setTimeout(() => {
      window.location.href = "/patron";
    }, 2000);
  };

  const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = localStorage.getItem("token");
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${urlParams.get("id")}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    console.log(response);

    if (response.ok) {
      const jsonData = await response.json();
      setInfo(jsonData);
    }

  }

  useEffect(() => {
    init();
  }, [])

  return (
    <div className=" w-full flex flex-col items-center">
      <div className="w-full justify-center flex flex-row gap-x-[150px] p-[20px] mb-10">
        <div className="text-sm text-[#218c20] ">
          <CheckCircleOutlineIcon />
          Cart Information
        </div>
        <div className="text-sm text-[#218c20] ">
          <CheckCircleOutlineIcon />
          Delivery Method
        </div>
        <div className="text-sm text-[#218c20] ">
          <CheckCircleIcon />
          Confirmation
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-white drop-shadow-md w-[600px] h-auto mb-5 pb-5">
          <div className="text-2xl text-black ps-[50px] py-7">
            Please pay on the following merchant&apos;s gateway:
          </div>
          <div className="space-y-2 flex justify-center">

            <TableContainer component={Paper}>
              <Table aria-label="MuiTableSample">
                  <TableHead>
                      <TableRow sx={{ padding: '20px' }}>
                          <TableCell>Bank Type</TableCell>
                          <TableCell>Account Name</TableCell>
                          <TableCell>Account Number</TableCell>
                          <TableCell>Image (when available)</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody >
                      {info && info.merchant && info.merchant.banks.map((bank:any, index:number) => (
                          <TableRow key={index}>
                              <TableCell>bank.type</TableCell>
                              <TableCell>bank.name</TableCell>
                              <TableCell>bank.number</TableCell>
                              <TableCell>
                                  <Image
                                      alt={bank.name}
                                      src={bank.photo}
                                      width={250}
                                      height={250}
                                  />
                              </TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
