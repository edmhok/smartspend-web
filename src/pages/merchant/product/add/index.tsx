import React from 'react'
import type { NextPage } from 'next'
import AddProduct from '@/components/Merchant/AddProduct'
import Menubar from '@/components/Merchant/Menubar'

const ProductAdd: NextPage = () => (
    <>
        <Menubar />
        <AddProduct />

    </>
)
export default ProductAdd
