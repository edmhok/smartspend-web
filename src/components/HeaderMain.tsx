"use client";

import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { BsSearch } from "react-icons/bs";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material';

const HeaderMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    const _isLogged = localStorage.getItem('token') ? true : false
    setIsLoggedIn(_isLogged)
  },[])

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    window.location.href = '/'
  }
  return (
    <div className="head_bg01">
      <div className="container flex justify-between items-center">
        <div className="menubar">
          <Link href="/login/usr" prefetch={false}>
            <MenuRoundedIcon className="text-gray-500 w-8 h-8" />
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <Link href={"/"} prefetch={false}>
            <Image
              className="logo_img1"
              src={"/logo.png"}
              width={56}
              height={67}
              alt="Picture of the author"
            />
          </Link>
          <div className="logo_txt">
            <strong className="logo_txt1">SMART</strong>
            <strong className="logo_txt2">SPEND</strong>
          </div>
        </div>

        <div className="search">
          <div className="logo_invisible">
            <strong className="logo_txt1">SMART</strong>
            <strong className="logo_txt2">SPEND</strong>
          </div>
          {/* <input
            className="input_search"
            type="text"
            placeholder="Enter any product name..."
          />
          <BsSearch className="search_icon" size={20} /> */}
        </div>
        <div className="cssright">
          {isLoggedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={() => {setAnchorEl(null);}}
              >
                <MenuItem onClick={handleLogout}>Log-out</MenuItem>
              </Menu>
            </div>
          )}
          {!isLoggedIn && (
            <Link href="/login/adm" prefetch={false}>
              <PersonOutlineOutlinedIcon className="w-8 h-8 " />
            </Link>
          )}
          

          {/* <Link href="/" prefetch={false}>
            <div className="relative">
              <ShoppingCartOutlinedIcon className="w-8 h-8 space-x-2" />
              <div className="shop_notification">0</div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
