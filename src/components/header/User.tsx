"use client";

import React, { useEffect, useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Image from "next/image";
import Link from "next/link";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle, ExpandLess, ExpandMore } from '@mui/icons-material';
import { HiOutlineLogin } from "react-icons/hi";

const User = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    useEffect(() => {
        const _isLogged = localStorage.getItem('token') ? true : false
        setIsLoggedIn(_isLogged)
    }, [])

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        window.location.href = '/'
    }
    return (
        <>
            <div className="w-full">
                <div className="container flex justify-between items-center">


                    <div className="cssright">
                        {isLoggedIn && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="success"
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
                                    onClose={() => { setAnchorEl(null); }}
                                >
                                    {/* <MenuItem onClick={handleLogout}>Dashboard</MenuItem> */}
                                    <MenuItem onClick={handleLogout}>Log-out</MenuItem>
                                </Menu>
                            </div>
                        )}
                        {!isLoggedIn && (
                            <Link href="/login/adm" prefetch={false}>
                                <div className="items-center rounded-lg  py-1 px-2 ltr:mr-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
                                    <p className="ltr:ml-2 rtl:mr-2 text-xs">
                                        <HiOutlineLogin style={{ fontSize: "1.6rem" }} />  Login | SignUp
                                    </p>
                                </div>
                                {/* <div className="block md:hidden items-center rounded-lg  py-1 px-2 ltr:mr-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
                                    <HiOutlineLogin style={{ fontSize: "1.6rem" }} />
                                </div> */}
                            </Link>
                        )}

                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
