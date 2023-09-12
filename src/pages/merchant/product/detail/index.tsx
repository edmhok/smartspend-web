import React from 'react'
import type { NextPage } from 'next'
import AddProduct from '@/components/merchant/AddProduct'
import CardDetails from '@/components/CardDetails'
import Menubar from '@/components/merchant/Menubar'

const ProductDetails: NextPage = () => (
    <>
        <Menubar />
        <CardDetails product={{
            _id: '',
            productName: '',
            imageUrl: '',
            brand: '',
            description: '',
            category: '',
            variant: '',
            size: '',
            color: '',
            tags: '',
            qty: 0,
            price: 0,
            points: 0,
            discount: 0,
            originalPrice: 0,
            merchant: '',
            photo: null
        }} />

    </>
)
export default ProductDetails
