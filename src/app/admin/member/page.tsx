import React from 'react'
import type { NextPage } from 'next'
import { AdminLayout } from '@/layout'
import ViewPoints from '@/components/Admin/ViewPoints'
import MemberList from '@/components/Admin/MemberList'

const Points: NextPage = () => (
    <AdminLayout>
        <MemberList />

    </AdminLayout>
)


export default Points
