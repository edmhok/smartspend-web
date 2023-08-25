import React from 'react'
import type { NextPage } from 'next'
import ViewProduct from '@/components/Merchant/ViewProduct'
import { MerchantLayout } from '@/layout/merchant'

const Dashboard: NextPage = () => (
    <MerchantLayout>
        <ViewProduct />

    </MerchantLayout>
)


export default Dashboard
