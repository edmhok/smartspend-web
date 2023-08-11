import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/adminlayout'
import OrderList from '@/components/Admin/OrderList'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <OrderList />

    </AdminLayout>
  )


export default Dashboard
