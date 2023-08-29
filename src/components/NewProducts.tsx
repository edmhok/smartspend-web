"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@mui/material";
// import { useRouter } from "next/router";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const productsData = {
  favorites: [
    {
      id: 0,
      imageUrl: '',
      productName: '',
      description: '',
      rating: 0,
      price: '',
    },
  ],
  new: [
    {
      id: 0,
      imageUrl: '',
      productName: '',
      description: '',
      rating: 0,
      price: '',
    },

  ],
};

interface Data {
  id: number;
  imageUrl: string;
  productName: string;
  description: string;
  rating: number;
  price: number;
}

const NewProducts = () => {
  const [favtab, setFavtab] = useState("favorites");
  const [newtab, setNewtab] = useState("new");
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  // const router = useRouter();
  // const isLoggedIn = false;


  // const handleClick = (id: number) => {
  //   if (!isLoggedIn) {
  //     router.push('/login/adm');
  //   } else {
  //     router.push(`/product/${id}`);
  //   }
  // }

  const images = "/jacket-1.jpg";
  const [productData, setProductData] = useState<Data>({
    id: 0,
    imageUrl: "",
    productName: "",
    description: "",
    rating: 0,
    price: 0,
  });

  const fetchProductData = async () => {
    try {
      if (productId) {
        const response = await fetch(`http://localhost:4000/products/${productId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProductData(data);
        } else {
          console.error("Failed to fetch resource data");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="container space-x-1 pt-10 ">
      <div className="grid grid-cols-6 ps-1">
        <Button
          className={`font-bold text-[#218c20] text-lg rounded-t-lg
        ${favtab === "favorites" ? "bg-[#F1F1F1]" : "bg-[#F6F6F6]"}`}
          onMouseEnter={() => setFavtab("favorites")}
          onClick={() => setFavtab("favorites")}
          color='secondary'
        >
          Favorites
        </Button>

        <Button
          className={`text-lg font-bold text-[#218c20] rounded-t-lg
         ${newtab === "new" ? "bg-[#fff]" : "bg-[#F1F1F1]"}`}
          onMouseEnter={() => setNewtab("new")}
          onClick={() => setNewtab("new")}
          color='secondary'
        >
          New
        </Button>
      </div>
      {favtab === "favorites" && (
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productsData.favorites.map((item, index) => (
                <Link href={item.id ? `patron/product/${item.id}` : '/login/adm'} key={index} prefetch={false}>
                  <ProductCard
                    imageUrl={images}
                    productName={item.productName}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {newtab === "new" && (
        <div className="border border-x-[#F1F1F1] border-y-[#F1F1F1] bg-[#F1F1F1]">
          <div className="container p-10">
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
              {productsData.new.map((item, index) => (
                <Link href={item.id ? `patron/product/${item.id}` : '/login/adm'} key={index} prefetch={false}>
                  <ProductCard
                    imageUrl={images}
                    productName={item.productName}
                    description={item.description}
                    rating={item.rating}
                    price={item.price}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default NewProducts
