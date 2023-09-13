import Menubar from '@/components/Merchant/Menubar';
import CartPoints from '@/components/Points/CartPoints';
import { NextPage } from 'next';


const CheckoutPoints: NextPage = () => (

    <>
        <Menubar />
        <CartPoints />
    </>
);

export default CheckoutPoints