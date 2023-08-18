import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout/merchant'
import ViewPoints from '@/components/Merchant/ViewPoints'

const Merchant: NextPage = () => (
    <MerchantLayout>
        <ViewPoints />

    </MerchantLayout>
)


export default Merchant
