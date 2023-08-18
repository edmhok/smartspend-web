import React from 'react'
import type { NextPage } from 'next'
import AddProduct from '@/components/Admin/AddProduct'
import { MerchantLayout } from '@/layout/merchant'

const Dashboard: NextPage = () => (
    <MerchantLayout>
        <AddProduct />

    </MerchantLayout>
)


export default Dashboard
