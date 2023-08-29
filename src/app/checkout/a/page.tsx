'use client'

import CartInfo from '@/components/Checkout/CartInfo';
import Footer from '@/components/Footer'
import HeaderSub from '@/components/HeaderSub'
import HeaderTop from '@/components/HeaderTop'
import { NextPage } from 'next';

import { useEffect, useState } from "react";


const CheckoutA: NextPage = () => {
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
    
    <CartInfo thumbnail={'image'} desc={'Lorem'} qty={qty} updateQty={updateQty} price={0} total={0} itemId={0} onDelete={deleteItem}   />
    
    <Footer />
    </>
  )
}

export default CheckoutA