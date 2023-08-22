import React from 'react'
import type { NextPage } from 'next'
import { MerchantLayout } from '@/layout/merchant'
import AddProduct from '@/components/Admin/AddProduct'

const Dashboard: NextPage = () => (
    <MerchantLayout>
        <AddProduct />

    </MerchantLayout>
)


export default Dashboard
