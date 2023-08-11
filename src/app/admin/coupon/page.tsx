import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/adminlayout'
import Coupon from '@/components/Admin/Coupon'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <Coupon />

    </AdminLayout>
  )


export default Dashboard
