import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import ViewPoints from '@/components/Admin/ViewPoints'

const Points: NextPage = () => (
  <AdminLayout>
    <ViewPoints />

  </AdminLayout>
)


export default Points
