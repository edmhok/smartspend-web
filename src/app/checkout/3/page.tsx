'use client'

import Confirmation from '@/components/Checkout/Confirmation';
import Footer from '@/components/Footer'
import HeaderMain from '@/components/HeaderMain';
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function ScanQr() {
  const [items, setItems] = useState<{ id: number, name: string }[]>([]);
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

  // const [qty, setQty] = useState(1); 
  // const updateQty = (newQty: number) => {
  //   setQty(newQty);
  // };
  // const deleteItem = (itemId: number) => {
  //   const updatedItems = items.filter(item => item.id !== itemId);
  //   setItems(updatedItems);
  // };
  return (
    <>
      <HeaderMain />

      <Confirmation img={'/gcash.jpg'} alt={''} width={300} height={300} />

      <Footer />
    </>
  )
}