'use client'

import Delivery from '@/components/Checkout/Delivery';
import Footer from '@/components/Footer'
import HeaderSub from '@/components/HeaderSub'
import HeaderTop from '@/components/HeaderTop'

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Products() {
  const [items, setItems] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(false);

useEffect(() => {
  async function getItems() {
    // const response = await fetch('/api/items');
    // const data = await response.json();
    // setItems(data);
    setLoading(true);
    // ...
    setLoading(false); 
  }
  
  getItems();
}, []);

const [qty, setQty] = useState(1); 
const updateQty = (newQty: number) => {
  setQty(newQty);
};
const deleteItem = (itemId: number) => {
  const updatedItems = items.filter(item => item.id !== itemId);
  setItems(updatedItems);
};
  return (
    <>
    <HeaderTop />
    <HeaderSub />
    
    <Delivery  />
    
    <Footer />
    </>
  )
}