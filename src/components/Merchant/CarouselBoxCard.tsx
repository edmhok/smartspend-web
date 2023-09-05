import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
  qty: number;
}

const CarouselBoxCard: React.FC<Props> = ({ id, imageUrl, productName, qty }) => {
  const [product, setProduct] = useState<Props[]>([]);

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
      if (response.ok) {
        const jsonData: Props[] = await response.json();
        setProduct(jsonData);
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
    <div className="w-full h-full px-2 my-2">
      <Link
        href={'/'}
      >
        <a className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md">
          <div className="text-center flex-grow">
            {/* {product?.image[0] && ( */}
            <Image
              src={'/sports-1.jpg'}
              alt="product image"
              width={200}
              height={185}
              className="object-contain hover:scale-105 transition-transform !p-2"
            />
            {/* )}
            {product.isOffer ? ( */}
            <span className="block absolute -top-2 -right-2">
              <Image
                src={"/discount.png"}
                width={40}
                height={40}
                alt="discount-icon"
              />
            </span>
            {/* ) : null} */}
          </div>
          <p className="truncate">{productName}</p>
          <div>
            {price}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CarouselBoxCard;
