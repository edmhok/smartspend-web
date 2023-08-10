import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import ProductDetails from '@/components/ProductDetails'

const ProductPat: NextPage = () => (
    <AdminLayout>
      <ProductDetails />
      
    </AdminLayout>
  )


export default ProductPat
