import React from 'react'
import type { NextPage } from 'next'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'
import MProducts from '@/components/Merchant/MProducts'
import Menubar from '@/components/Merchant/Menubar'

const Merchant: NextPage = () => (
    <>
        <Menubar />
        <IntroMember />
        <MProducts />

    </>
)


export default Merchant
