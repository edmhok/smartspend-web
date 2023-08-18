import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout/admin'
import Leaderboard from '@/components/Admin/Leaderboard'

const Dashboard: NextPage = () => (
    <AdminLayout>
     <Leaderboard />

    </AdminLayout>
  )


export default Dashboard
