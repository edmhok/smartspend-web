'use client'

import { useEffect, useState } from "react";
import CartInfo from '@/components/Checkout/CartInfo';
import { MerchantLayout } from '@/layout';
import { NextPage } from 'next';
import Link from "next/link";


const CheckoutA: NextPage = () => {
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

    const [qty, setQty] = useState(1);
    const updateQty = (newQty: number) => {
        setQty(newQty);
    };
    const deleteItem = (itemId: number) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        setItems(updatedItems);
    };
    return (
        <MerchantLayout>
            <CartInfo />
            <div className='m-7 flex justify-end w-full pe-[200px]'>
                <Link href={'/patron/order/2'} prefetch={false}>
                    <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Proceed to CheckOut</button>
                </Link>
            </div>
        </MerchantLayout>
    )
}

export default CheckoutA