import React from 'react'
import type { NextPage } from 'next'
import ViewProduct from '@/components/Merchant/ViewProduct'
import Menubar from '@/components/Merchant/Menubar'

const ProductView: NextPage = () => (
    <>
        <Menubar />
        <ViewProduct />

    </>
)


export default ProductView
