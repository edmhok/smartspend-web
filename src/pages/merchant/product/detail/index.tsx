import React from 'react'
import type { NextPage } from 'next'
import CardDetails from '@/components/CardDetails'
import Menubar from '@/components/Merchant/Menubar'

const ProductDetails: NextPage = () => (
    <>
        <Menubar />
        <CardDetails />

    </>
)
export default ProductDetails
