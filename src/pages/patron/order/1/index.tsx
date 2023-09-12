
import CartInfo from '@/components/checkout/CartInfo';
import Menubar from '@/components/patron/Menubar';
import { NextPage } from 'next';
import Link from "next/link";
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const CheckoutA: NextPage = () => {
    useEffect(async () => {
        const orders = JSON.parse(localStorage.getItem("orders") || "[]");
        if(orders.length <= 0) {
            const swalResponse = await Swal.fire(
                "There is currently no item on your basket. Redirecting you back to dashboard"
            );
            if(swalResponse.isConfirmed) {
                window.location.href = "/patron";
            }
        }
    }, [])
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
        else {
            localStorage.removeItem("orders")
            setTimeout(() => {
                window.location.href = `/patron/order/3?id=${data['_id']}`;
            }, 2000);
        }
    };
    return (
        <>
            <Menubar />
            <CartInfo />
            <div className='m-7 flex justify-end w-full pe-[200px]'>
                
                <button className='px-4 py-2 text-white text-lg font-semibold bg-[#38c035]' onClick={handleClick}>Proceed to CheckOut</button>
            </div>
        </>
    )
}

export default CheckoutA