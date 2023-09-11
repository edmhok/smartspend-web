import React from 'react'
import type { NextPage } from 'next'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'
import { MerchantLayout } from '@/layout'
import MProducts from '@/components/merchant/MProducts'

const Merchant: NextPage = () => (
    <MerchantLayout>
        <IntroMember />
        {/* <MProducts /> */}

    </MerchantLayout>
)


export default Merchant
