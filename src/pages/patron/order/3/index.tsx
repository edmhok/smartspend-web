'use client'

import Confirmation from '@/components/Checkout/Confirmation';
import Menubar from '@/components/Patron/Menubar';
import { NextPage } from 'next';
import Link from 'next/link';
import Swal from 'sweetalert2';


const CheckoutB: NextPage = () => {
    return (
        <>
            <Menubar />
            <Confirmation img={''} alt={''} width={0} height={0} />
            <div className="w-full flex justify-center mb-5"></div>

        </>
    )
}

export default CheckoutB