import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout'
import AddProduct from '@/components/Merchant/AddProduct'

const ProductAdd: NextPage = () => (
    <MerchantLayout>
        <AddProduct />
    </MerchantLayout>
)
export default ProductAdd
