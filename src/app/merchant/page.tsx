import React from 'react'
import type { NextPage } from 'next'
import NewProducts from '@/components/NewProducts'
import IntroMember from '@/components/IntroMember'
import { MerchantLayout } from '@/layout'

const Merchant: NextPage = () => (
    <MerchantLayout>
        <IntroMember />
        <NewProducts
        />

    </MerchantLayout>
)


export default Merchant
