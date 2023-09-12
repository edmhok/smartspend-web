import React from 'react'
import type { NextPage } from 'next'
import AddProduct from '@/components/merchant/AddProduct'
import Menubar from '@/components/merchant/Menubar'

const ProductAdd: NextPage = () => (
    <>
        <Menubar />
        <AddProduct />

    </>
)
export default ProductAdd
