import React from 'react'
import type { NextPage } from 'next'
import { MemberLayout } from '@/memberlayout'
import ProductDetails from '@/components/ProductDetails'

const ProductsMer: NextPage = () => (
    <MemberLayout>
      <ProductDetails />
      
    </MemberLayout>
  )


export default ProductsMer
