
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b bg-white hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
        <div className="hidden lg:flex gap-1">
        <div className="header_top__icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top__icon_wrapper">
              <BsLinkedin />
            </div>
          </div>


          <div className="text-gray-500 text-[12px] ">
            <b>WELCOME</b> TO Affiliate ID ******* PAGE
          </div>

          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="PHP ₱">PHP ₱</option>
              <option value="CHN">CHN ₩</option>
            </select>

            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Tagalog">Tagalog</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
