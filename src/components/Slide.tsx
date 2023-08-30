import { Slideshow } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Slide: React.FC<Slideshow> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative border-r-8">
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#efeeeea2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">


        <h3 className="text-[#218c20] text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
          {mainTitle}
        </h2>

        <h3 className="text-[24px] text-gray-600">
          starting at{" "}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
          .00
        </h3>
        <div className="bg-[#218c20] text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-[#ffad1e]">
          Shop Now
        </div>
      </div>

      <Link href='/login/adm' className='link' prefetch={false}>
        <Image
          className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
          src={img}
          alt="banner"
          width={800}
          height={400}
        />
      </Link>
    </div>
  );
};

export default Slide;
