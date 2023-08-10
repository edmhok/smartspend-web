import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import NewProducts from '@/components/NewProducts'

const Dashboard: NextPage = () => (
    <AdminLayout>
      <NewProducts />
      
    </AdminLayout>
  )


export default Dashboard
