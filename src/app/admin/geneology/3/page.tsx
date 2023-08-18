import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/adminlayout'
import ThreeTierMatrix from '@/components/Admin/ThreeTierMatrix'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <ThreeTierMatrix />

    </AdminLayout>
  )


export default Dashboard
