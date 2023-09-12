import CartPoints from '@/components/pointsgallery/CartPoints';
import Menubar from '@/components/Merchant/Menubar';
import { NextPage } from 'next';


const CheckoutPoints: NextPage = () => (

    <>
        <Menubar />
        <CartPoints />
    </>
);

export default CheckoutPoints