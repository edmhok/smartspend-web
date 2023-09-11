import React from 'react'
import type { NextPage } from 'next'
import ViewProduct from '@/components/merchant/ViewProduct'
import { MerchantLayout } from '@/layout'

const ProductView: NextPage = () => (
    <MerchantLayout>
        <ViewProduct />

    </MerchantLayout>
)


export default ProductView
