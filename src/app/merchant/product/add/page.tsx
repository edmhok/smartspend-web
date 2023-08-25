import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout/merchant'
import AddMerProduct from '@/components/Merchant/AddProduct'

const Dashboard: NextPage = () => (
    <MerchantLayout>
        <AddMerProduct />

    </MerchantLayout>
)


export default Dashboard
