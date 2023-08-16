import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import AddProduct from '@/components/Admin/AddProduct'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <AddProduct />

    </AdminLayout>
  )


export default Dashboard
