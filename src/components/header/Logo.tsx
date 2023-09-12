'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" prefetch={false}>
      <div className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={120}
          height={25}
          objectFit="contain"
          className="cursor-pointer md:ltr:-mr-3"
        />
      </div>
    </Link>
  );
};

export default Logo;
