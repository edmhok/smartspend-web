"use client";

import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";
import Link from "next/link";
import Card from "../Card";

interface Data {
    rating: number;
    id: number;
    img: string;
    entryDate: string;
    productName: string;
    // brand: string;
    description: string;
    // sku: string;
    price: number;
    // qty: number;
    // points: number;
    // originalPrice: number;
    // discount: number;
}

const ProductMenu = () => {
    const [productData, setProductData] = useState<Data[]>([]);

    async function fetchData() {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response);

            if (response.ok) {
                const jsonData: Data[] = await response.json();
                setProductData(jsonData);
                // console.log(response);
            } else {
                console.error("Failed to fetch data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="my-4 mx-auto lg:mb-8 lg:mt-16 flex flex-col max-w-[1650px]">
            <h2 className="my-4 mx-auto text-2xl md:text-3xl">Newest Goods</h2>
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 max-w-[1700px]">
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-10 xl:gap-y-10">
                    {productData.map((item: any, index) => (
                        <Card link="/patron/order/1" img={""} title={""} description={""} rating={0} price={0} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductMenu