import React from 'react'
import type { NextPage } from 'next'
import AllProducts from '@/components/Admin/AllProducts'
import Menubar from '@/components/Admin/Menubar'

const ProductList: NextPage = () => (
    <>
        <Menubar />
        <AllProducts />

    </>
)


export default ProductList
