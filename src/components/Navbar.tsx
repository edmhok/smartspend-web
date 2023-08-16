'use client'
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white lg:visibility sm:block hidden">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
          <Link className="navbar__link relative" href="#">
            GENEOLOGY
          </Link>
          <Link className="navbar__link relative" href="#">
            ANNOUNCEMENT
          </Link>
          <Link className="navbar__link relative" href="#">
            LEADERBOARD
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
