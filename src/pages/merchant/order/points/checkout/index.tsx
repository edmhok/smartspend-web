import CartInfo from '@/components/checkout/CartInfo';
import CartPoints from '@/components/Points/CartPoints';
import Menubar from '@/components/merchant/Menubar';
import { NextPage } from 'next';
import Link from "next/link";


const CheckoutPoints: NextPage = () => {

    return (
        <>
            <Menubar />
            <CartPoints />
        </>
    )
}

export default CheckoutPoints