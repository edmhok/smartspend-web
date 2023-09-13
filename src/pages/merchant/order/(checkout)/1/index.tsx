import CartInfo from '@/components/checkout/CartInfo';
import Menubar from '@/components/Merchant/Menubar';
import { NextPage } from 'next';
import Link from "next/link";


const CheckoutA: NextPage = () => {

    return (
        <>
            <Menubar />
            <CartInfo />
            <div className='m-7 flex justify-end w-full pe-[200px]'>
                <Link href={'/patron/order/2'} prefetch={false}>
                    <button className='px-4 py-2 text-white text-lg font-semibold bg-[#218c20]'>Proceed to CheckOut</button>
                </Link>
            </div>
        </>
    )
}

export default CheckoutA