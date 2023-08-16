import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import Statistic from '@/components/Admin/Statistic'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <Statistic />

    </AdminLayout>
  )


export default Dashboard
