import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import ThreeTierMatrix from '@/components/Admin/ThreeTierMatrix'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <ThreeTierMatrix />

    </AdminLayout>
  )


export default Dashboard
