import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import ViewProduct from '@/components/Admin/ViewProduct'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <ViewProduct />

    </AdminLayout>
  )


export default Dashboard
