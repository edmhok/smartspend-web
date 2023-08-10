import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import ProductDetails from '@/components/ProductDetails'

const Products: NextPage = () => (
    <AdminLayout>
      <ProductDetails />
      
    </AdminLayout>
  )


export default Products
