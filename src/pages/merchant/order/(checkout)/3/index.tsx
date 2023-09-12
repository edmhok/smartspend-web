'use client'

import Confirmation from '@/components/Checkout/Confirmation';
import Menubar from '@/components/Merchant/Menubar';
import { NextPage } from 'next';
import Link from 'next/link';
import Swal from 'sweetalert2';


const CheckoutB: NextPage = () => {

    const handleClick = async () => {
        const shop = JSON.parse(localStorage.getItem("orders") || "[]");
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order`, {
            body: JSON.stringify({
                products_Id: shop[0],
                patron_Id: userId,
                merchant_Id: 5,
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
        } else {
            Swal.fire("Thank You for your payment.");
        }
        setTimeout(() => {
            window.location.href = "/patron/order/view";
        }, 2000);
    };

    return (
        <>
            <Menubar />
            <Confirmation img={''} alt={''} width={0} height={0} />
            <div className="w-full flex justify-center mb-5">
                <button
                    onClick={handleClick}
                    className="px-9 py-2 text-black text-lg font-semibold bg-[#218c20]"
                >
                    PAYMENT CHECKOUT
                </button>
            </div>

        </>
    )
}

export default CheckoutB