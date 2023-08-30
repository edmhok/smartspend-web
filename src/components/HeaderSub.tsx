"use client";

import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Container } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";
import logo from "./../../public/logo.png";
import Link from "next/link";

const HeaderSub = () => {
  return (
    <div className=" w-full bg-white pb-6 sm:pb-0">
      <Container className="sm:flex justify-between items-center">
        <div className="pb-6 sm:pb-0 sm:flex justify-self-center">
          <Link href={"/"} prefetch={false}>
            <img
              src={'/logo.png'}
              width={168}
              height={66}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <div className="relative">
            <ShoppingCartOutlinedIcon className="w-8 h-8 space-x-2" />
            <div className="bg-fuchsia-500 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <Link href="/login" prefetch={false}>
            <PersonOutlineOutlinedIcon className="w-8 h-8 space-x-2 mt-2" />
          </Link>
        </div>
        <div>
          <MenuRoundedIcon className="w-8 h-8 space-x-2 flex " />
        </div>
      </Container>
    </div>
  );
};

export default HeaderSub;
