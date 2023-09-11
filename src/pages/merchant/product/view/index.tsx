import React from 'react'
import type { NextPage } from 'next'
import ViewProduct from '@/components/merchant/ViewProduct'
import Menubar from '@/components/merchant/Menubar'

const ProductView: NextPage = () => (
    <>
        <Menubar />
        <ViewProduct />

    </>
)


export default ProductView
