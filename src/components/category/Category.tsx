'use client'

import React from "react";
import CategorySmBox from "./CategorySmBox";
import Image from "next/image";
import Link from "next/link";
import { categorySmContent } from "../../mock/category-sm";

const Category = () => {
    return (
        <div className="my-4 lg:my-10 flex flex-col">
            <h2 className="mx-auto mt-4 py-8 text-2xl md:text-3xl">
                {'Category'}
            </h2>

            {/* 📱 sm and md break point */}
            <div className="block sm:hidden ">

                <div className="flex flex-wrap justify-around items-center ">
                    {categorySmContent.map((categoryItem) => {
                        return (
                            <CategorySmBox
                                bgc={categoryItem.bgc}
                                imgSrc={categoryItem.imgSrc}
                                categoryTitle={categoryItem.categoryTitle}
                                href={categoryItem.href}
                                key={categoryItem.categoryTitle}
                            />
                        );
                    })}
                </div>
            </div>

            {/* 💻lg break point */}
            <div className="block md:hiddden">
                <div className="lg:grid gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 max-w-[1700px] mx-auto">
                    <div className="flex justify-around items-center md:row-span-6 md:col-span-3 bg-palette-healthCategory py-8 px-4 rounded-md shadow-lg overflow-hidden">
                        <div>
                            <h3 className="text-2xl font-[500]">{'Health and Wellness'}</h3>
                            <p className="mt-4">{"We offer the best products at the most affordable prices"}</p>
                            <Link href="/health">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>

                        <Image
                            src="/category-img/health-category.png"
                            alt="health"
                            width={190}
                            height={240}
                            className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-around items-center md:row-span-6 md:col-span-3 bg-palette-digitalCategory py-8 px-4 rounded-md shadow-lg overflow-hidden">
                        <div>
                            <h3 className="text-2xl font-[500]">{'Digital Products'}</h3>
                            <p className="mt-4">{"We offer the newest products at the most competitive prices"}</p>
                            <Link href="/digital">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>

                        <Image
                            src="/category-img/digital-category.png"
                            alt="digital"
                            width={190}
                            height={240}
                            className="drop-shadow-lg hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-around items-center md:row-span-6 md:col-span-3 bg-palette-fashionCategory  rounded-md shadow-lg px-4 ">
                        <div>
                            <h3 className="text-xl font-[500]">{"Fashion and Clothes"}</h3>
                            <p className="text-[12px] mt-4">{"The most popular brands with the most reasonable prices"}</p>
                            <Link href="/fashion">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>

                        <Image
                            src="/category-img/fashion-category.png"
                            alt="fashion"
                            width={240}
                            height={250}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg bg-palette-beautyCategory px-4 py-2">
                        <div>
                            <h3 className="text-lg font-[500]">{"Cosmetic Products"}</h3>
                            <p className="text-[12px] mt-4">{"Anti-allergy products suitable for all skin types from reputable brands"}</p>
                            <Link href="/beauty">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>

                        <Image
                            src="/category-img/beauty-category.png"
                            alt="beauty"
                            width={170}
                            height={150}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg bg-palette-sportCategory">
                        <Image
                            src="/category-img/sport-category.png"
                            alt="sport"
                            width={130}
                            height={150}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                        <div>
                            <h3 className="text-lg font-[500]">{"Sport and Trip"}</h3>
                            <p className="text-[12px] mt-4">{"High-quality and durable products"}</p>
                            <Link href="/sport">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-around items-center md:row-span-3 md:col-span-3 rounded-md shadow-lg bg-palette-travelCategory">
                        <Image
                            src="/category-img/travel-category.png"
                            alt="sport"
                            width={130}
                            height={150}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                        <div>
                            <h3 className="text-lg font-[500]">{"Travel and Tour"}</h3>
                            <p className="text-[12px] mt-4">{"Book and find a great adventure"}</p>
                            <Link href="/travel">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center md:row-span-2 md:col-span-5 rounded-md shadow-lg bg-palette-houseCategory px-4">
                        <div className="">
                            <h3 className="text-2xl font-[500]">{"Furniture and kitchen"}</h3>
                            <p className="text-md mt-4">{"In accordance with the designs of the day"}</p>
                            <Link href="/house">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>
                        <Image
                            src="/category-img/house-category.png"
                            alt="house"
                            width={320}
                            height={240}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg bg-palette-toyCategory">
                        <div className="text-center">
                            <h3 className="text-lg font-[500]">{"Toys and Baby"}</h3>
                            <p className="text-[12px] mt-3">{"A combination of entertainment and creativity"}</p>
                            <Link href="/toy">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>
                        <Image
                            src="/category-img/toy-category.png"
                            alt="toy"
                            width={130}
                            height={110}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex justify-around items-center md:row-span-2 md:col-span-2 rounded-md shadow-lg px-3 bg-palette-stationeryCategory">
                        <div className="">
                            <h3 className="text-lg font-[500]">{"Books, Stationery and Art"}</h3>
                            <p className="text-[12px] mt-3">
                                {"Variety in choice"}
                            </p>
                            <Link href="/stationery">
                                <div className="inline-block shadow-lg border-none bg-palette-primary/80 hover:bg-palette-primary/100 hover:shadow-md transition-all duration-300 text-palette-side py-3 px-4 rounded-lg mt-4 text-sm">
                                    {'See All Products'}
                                </div>
                            </Link>
                        </div>
                        <Image
                            src="/category-img/stationery-category.png"
                            alt="stationery"
                            width={130}
                            height={250}
                            className="drop-shadow-lg self-start  hover:scale-95 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
