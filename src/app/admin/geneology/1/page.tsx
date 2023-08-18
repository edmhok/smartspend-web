import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import Unilevel from '@/components/Admin/Unilevel'


const Dashboard: NextPage = () => (
    <AdminLayout>
     <Unilevel />

    </AdminLayout>
  )


export default Dashboard
