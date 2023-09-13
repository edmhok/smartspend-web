'use client'

import React from "react";
import dynamic from "next/dynamic";
import Logo from "./Logo";
import Menu from "./Menu";
import Image from "next/image";

const UserBox = dynamic(() => import("./User"), {
  ssr: false,
});
// const Theme = dynamic(() => import("./theme/Theme"), {
//   ssr: false,
// });

const Header = () => {
  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000] relative">
      <div className="flex flex-col md:px-4">
        <div className="flex items-center justify-between md:order-2 md:mt-2">
          <Menu />
         
          {/* <Settings />  */}
          <div className="hidden md:flex md:items-center md:justify-between">
            {/* <Theme /> */}
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex  items-center md:order-1">
        <div className=" md:block">
            <Logo />
          </div>
          <div className="flex-grow">
            {/* <SearchBar /> */}
          </div>
          <div className="ltr:ml-2 rtl:mr-2 sm:ltr:ml-4 sm:rtl:mr-4 flex items-center justify-between min-w-[4rem]">
            <UserBox />
            {/* <CartIcon /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
