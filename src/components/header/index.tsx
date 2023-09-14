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
    <header className="md:fixed left-0 right-0 top-0 pt-4 z-[1000] relative">
      <div className="flex flex-col md:px-4">
        <div className="flex items-center justify-between space-x-10 md:order-2 md:mt-2">
          <div className="block md:hidden">
            <Menu />
          </div>
          <Logo />
          {/* <Settings />  */}
          <div className="block">
            <UserBox />
          </div>
          <div className="hidden md:flex md:items-center md:justify-between">
            {/* <Theme /> */}
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex  items-center md:order-1">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="flex-grow">
            {/* <SearchBar /> */}
          </div>
          <div className="ltr:ml-2 rtl:mr-2 sm:ltr:ml-4  flex items-center justify-between min-w-[4rem]">
            {/* <CartIcon /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
