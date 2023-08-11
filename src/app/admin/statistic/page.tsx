import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/adminlayout'
import Statistic from '@/components/Admin/Statistic'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <Statistic />

    </AdminLayout>
  )


export default Dashboard
