'use client'

import Delivery from '@/components/checkout/Delivery';
import { MerchantLayout } from '@/layout';
import { NextPage } from 'next';
import Link from 'next/link';


const CheckoutB: NextPage = () => {

    return (
        <MerchantLayout>

            <Delivery />
            <div className='w-full mb-5 space-x-10 flex justify-end pe-[430px]'>
                <Link href={'/patron/order/1'} prefetch={false}>
                    <button className='px-4 py-2 text-white text-lg font-semibold bg-[#34c632]'>Back</button>
                </Link>
                <Link href={'/patron/order/3'} prefetch={false}>
                    <button className='px-4 py-2 text-white text-lg font-semibold bg-[#38c035]'>Continue</button>
                </Link>
            </div>

        </MerchantLayout>
    )
}

export default CheckoutB