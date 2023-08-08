'use client'

import Footer from '@/components/Footer'
import HeaderSub from '@/components/HeaderSub'
import HeaderTop from '@/components/HeaderTop'
import ProductDetails from '@/components/ProductDetails'
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  img: string; 
  title: string;
  variant: string;
  desc: string; 
  rating: number;
  price: string;
  category: string;
}

const products = [
  {
    id:1,
    img: "/jacket-1.jpg",
    title: "Jacket",
    variant:"for Men and Women",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
    category:"outfit"
  },
  {
    id:2,
    img: "/skirt-1.jpg",
    title: "Skirt",
    variant:"for Men and Women",
    desc: "Black Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
    category:"outfit"
  },
  {
    id:3,
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    variant:"for Men and Women",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
    category:"outfit"
  },
  {
    id:4,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant:"for Men and Women",

    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
    category:"outfit"
  },
  {
    id:5,
    img: "/sports-1.jpg",
    title: "Sports",
    variant:"for Men and Women",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
    category:"outfit"

  },
  {
    id:6,
    img: "/watch-2.jpg",
    title: "Watches",
    variant:"for Men and Women",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
    category:"outfit"
  },
  {
    id:7,
    img: "/watch-2.jpg",
    title: "Watches",
    variant:"for Men and Women",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
    category:"outfit"
  },
  {
    id:8,
    img: "/shirt-1.jpg",
    title: "Shirt",
    variant:"for Men and Women",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
    category:"outfit"
  },
];
export default function Products() {
  // const [product, setProduct] = useState<Product | null>(null);
//   const { id } = useParams();

//   const product = products.find(p => p.id === id);

// if (!product) {
//   return <p>Product not found</p>
// }
  //  // Mock async request
  //  useEffect(() => {
  //   const fetchProduct = () => {
  //     return new Promise(resolve => {
  //       setTimeout(() => resolve(product), 1000); // mock 1 second delay
  //     });
  //   };
    
  //   fetchProduct().then(product => setProduct());
  // }, [])

  // if(!product) {
  //   return <p>Loading...</p> 
  // }

  return (
    <>
    <HeaderTop />
    <HeaderSub />
   
    <ProductDetails id={''} img={''} title={''} desc={''} rating={0} price={0} category={''}        // id={product.id}
        // img={product.img}
        // title={product.title} 
        // variant={product.variant}
        // desc={product.desc}
        // rating={product.rating}
        // price={product.price}
        // category={product.category}  
      />
    <Footer />
    </>
  )
}