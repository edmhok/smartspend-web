"use client";

import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderAdmin = () => {
  return (
    <div className=" w-full h-[92px] bg-white">
      <Container className="sm:flex justify-between items-center">
        <div className="sm:pb-0 sm:justify-self-center">
          <Image
            src={logo}
            width={188}
            height={86}
            alt="Picture of the author"
          />
        </div>
        <div className="hidden lg:flex gap-2  items-center">
          <div className="relative">
            <AccountCircleIcon className="w-8 h-8 " />
          </div>
          <div className="font-normal text-black text-[14px]">John Doe</div>
          <div className="relative">
            <ArrowDropDownIcon className="w-8 h-8" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderAdmin;
