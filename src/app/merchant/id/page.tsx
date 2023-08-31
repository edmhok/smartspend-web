import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout'
import ProductBigCard from '@/components/Merchant/ProductBigCard'

const Merchant: NextPage = () => (
    <MerchantLayout>
        <ProductBigCard
            id={0}
            img={''}
            title={''}
            desc={''}
            price={0} />


    </MerchantLayout>
)


export default Merchant
