'use client'

import Delivery from '@/components/checkout/Delivery';
import Menubar from '@/components/patron/Menubar';
import { NextPage } from 'next';
import Link from 'next/link';
import Swal from 'sweetalert2';


const CheckoutB: NextPage = () => {
    const handleClick = async () => {
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
            body: JSON.stringify({
                products_id: orders[0].id,
                patron_id: userId,
                merchant_id: orders[0].merchant,
                qty: orders[0].qty
            }),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await result.json();
        if (data.status === "failed") {
            Swal.fire(
                "The merchant doesn't have enought points. Please pick another item."
            );
        }
        setTimeout(() => {
            window.location.href = "/patron/order/3";
        }, 2000);
    };
    return (
        <>
            <Menubar />
            <Delivery />
            <div className='w-full mb-5 space-x-10 flex justify-end pe-[430px]'>
                <Link href={'/patron/order/1'} prefetch={false}>
                    <button className='px-4 py-2 text-white text-lg font-semibold bg-[#34c632]'>Back</button>
                </Link>
                <button className='px-4 py-2 text-white text-lg font-semibold bg-[#38c035]' onClick={handleClick}>Continue</button>
            </div>

        </>
    )
}

export default CheckoutB